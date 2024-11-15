import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const Font = Quill.import('formats/font');
Font.whitelist = ['sans-serif', 'serif', 'monospace', 'arial', 'arvo'];
Quill.register(Font, true);

const Editor = () => {
  const editorRef = useRef(null);

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
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            ['emoji'],
            [{ 'size': ['small', 'medium', 'large', 'huge'] }],
          ],
        },
      });

      quill.root.style.fontFamily = 'Sans-serif';
      editorRef.current.__quill = quill;
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div ref={editorRef} className="lg:w-1/2 w-[90%] h-96 bg-blue-100/60 rounded-sm" />
    </div>
  );
};

export default Editor;
