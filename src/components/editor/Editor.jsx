import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useUser } from '@clerk/clerk-react';
import { useQuery } from 'convex/react';
import { useParams } from 'react-router-dom';
import ButtonSave from "../ui/ButtonSave"
import { useNavigate } from 'react-router-dom';

const Editor = () => {
  const { user } = useUser();
  const navigate = useNavigate()
  const { id } = useParams();
  const user_email = user.emailAddresses[0].emailAddress;
  const userId = user.id;
  const saveDocument = useMutation(api.mutations.saveDocument);

  const document = useQuery(api.queries.getDocumentById, { documentId: id });
  
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const handleSave = () => {
    if (quillRef.current) {
      const content = quillRef.current.root.innerHTML.trim();
      const documentId = document?._id;

      if (content === '<p><br></p>' || content === '') {
        console.log('Documento vazio, não será salvo.');
        return;
      }

      saveDocument({
        userId,
        user_email,
        content,
        title: document?.title || 'Sem título',
        documentId: documentId || undefined,
      }).then(() => {
        navigate('/createDocument');
      });
    }
  };

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Comece seu documento...',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image']
          ]
        }
      });
      quillRef.current = quill;
    }

    if (document?.content) {
      quillRef.current.root.innerHTML = document.content;
    } else {
      quillRef.current.root.innerHTML = "";
    }

  }, [document, id]);

  return (
    <div className="container mx-auto p-4">
      <div ref={editorRef} className="border rounded-lg min-h-[400px]" />
      <ButtonSave onClick={handleSave}>
        Salvar documento
      </ButtonSave>
    </div>
  );
};

export default Editor;
