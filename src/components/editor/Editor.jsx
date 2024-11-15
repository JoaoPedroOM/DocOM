import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useMyPresence, useOthers } from "@liveblocks/react";

const Font = Quill.import('formats/font');
Font.whitelist = ['sans-serif', 'serif', 'monospace', 'arial', 'arvo'];
Quill.register(Font, true);

const COLORS = ["red", "blue", "green", "purple", "orange"];

const Editor = () => {
  const editorRef = useRef(null);
  const [myPresence, updateMyPresence] = useMyPresence();
  const others = useOthers();
  const userCount = others.length;

  useEffect(() => {
    if (editorRef.current && !editorRef.current.__quill) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            ['link', 'blockquote', 'code-block'],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'size': ['small', 'medium', 'large', 'huge'] }],
          ],
        },
      });

      quill.root.style.fontFamily = 'Sans-serif';
      editorRef.current.__quill = quill;

      quill.on('selection-change', (range) => {
        if (range) {
          updateMyPresence({ cursorPosition: range.index });
        }
      });
    }
  }, [updateMyPresence]);

  useEffect(() => {
    const quill = editorRef.current.__quill;
    if (!quill) return;

    quill.getModule('cursors')?.clearCursors();

    others.forEach((user) => {
      const { cursorPosition } = user.presence || {};
      const color = COLORS[user.connectionId % COLORS.length];

      if (cursorPosition !== undefined) {
        const range = quill.getBounds(cursorPosition);
        const cursorMarker = document.createElement("div");
        cursorMarker.className = "cursor-marker";
        cursorMarker.style.position = "absolute";
        cursorMarker.style.backgroundColor = color;
        cursorMarker.style.height = "2px";
        cursorMarker.style.width = "2px";
        cursorMarker.style.left = `${range.left}px`;
        cursorMarker.style.top = `${range.top}px`;

        quill.container.appendChild(cursorMarker);
      }
    });
  }, [others]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>{userCount} outros usuário(s) online</p>
      <div ref={editorRef} className="lg:w-1/2 w-[90%] h-96 bg-blue-100/60 rounded-sm" />
    </div>
  );
};

export default Editor;
