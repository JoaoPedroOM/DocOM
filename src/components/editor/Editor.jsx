import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "convex/react";
import { useParams } from "react-router-dom";
import ButtonSave from "../ui/ButtonSave";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaCheck } from "react-icons/fa";
import { Toaster, toast } from "sonner";

const Editor = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { id } = useParams();
  const user_email = user.emailAddresses[0].emailAddress;
  const userId = user.id;
  const saveDocument = useMutation(api.mutations.saveDocument);

  const document = useQuery(api.queries.getDocumentById, { documentId: id });

  const [title, setTitle] = useState(document?.title || "Sem título");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const handleSave = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      toast.warning("Por favor, defina um título para o documento.");
      return;
    }

    if (quillRef.current) {
      const content = quillRef.current.root.innerHTML.trim();
      const documentId = document?._id;

      if (content === "<p><br></p>" || content === "") {
        toast.warning("Documento vazio, não será salvo.");
        return;
      }

      saveDocument({
        userId,
        user_email,
        content,
        title: trimmedTitle,
        documentId: documentId || undefined,
      }).then(() => {
        navigate("/createDocument");
      });
    }
  };

  useEffect(() => {
    setTitle(document?.title || "Sem título");
  }, [document]);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
          ],
        },
      });
      quillRef.current = quill;
    }

    if (quillRef.current) {
      if (document?.content) {
        console.log("Configurando o conteúdo do documento:", document.content);
        const delta = quillRef.current.clipboard.convert(document.content);
        quillRef.current.setContents(delta);
      } else {
        console.log("Conteúdo não encotrado");
        quillRef.current.root.innerHTML = "";
      }
    }
  }, [document, id]);

  return (
    <div className="container mx-auto max-w-5xl px-6 py-8">
      <Toaster richColors />
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="px-[20px] pt-6 pb-4 bg-gradient-to-r from-blue-50 to-white border-b border-gray-200">
          {isEditingTitle ? (
            <div className="flex items-center">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-3xl font-second font-semibold text-gray-800 w-full bg-transparent border-b-2 border-blue-300 focus:border-blue-500 transition-colors duration-300 outline-none py-2"
                placeholder="Nome do documento"
              />
              <button
                onClick={() => setIsEditingTitle(false)}
                className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaCheck size={24} />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex w-full justify-between items-center space-x-3">
                <h1 className="text-3xl font-semibold text-gray-800 font-second">
                  {title}
                </h1>
                <button
                  onClick={() => setIsEditingTitle(true)}
                  className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <FaEdit size={24} />
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          ref={editorRef}
          className="min-h-[600px] px-[5px] py-6 bg-white focus:outline-none"
        />

        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end">
          <ButtonSave
            onClick={handleSave}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span>Salvar documento</span>
          </ButtonSave>
        </div>
      </div>
    </div>
  );
};

export default Editor;
