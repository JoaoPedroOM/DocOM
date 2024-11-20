import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import Header from "../components/global/Header";
import { v4 as uuidv4 } from "uuid";
import docs from "../assets/Docs.png";
import ButtonStart from "../components/ui/ButtonStart";
import { FaRegTrashAlt } from "react-icons/fa";
import { useUser } from '@clerk/clerk-react';
import { useQuery } from "convex/react";
import CreatedAtMessage from "../utils/CreatedAtMessage"

const Home = () => {
  const { user } = useUser();
  const documents = useQuery(api.queries.getUserDocuments, { 
    userId: user.id 
  });
  const deleteDocument = useMutation(api.mutations.deleteDocument);
  const navigate = useNavigate();
  const [deletingDocumentId, setDeletingDocumentId] = useState(null);

  function handleClick() {
    const id = uuidv4();
    navigate(`/document/${id}`);
  }

  function handleOpenDocument(documentId) {
    navigate(`/document/${documentId}`);
  }

  function handleDelete(event, documentId) {
    event.stopPropagation();
    setDeletingDocumentId(documentId);
    
    deleteDocument({ documentId });
  }

  return (
    <div>
      <Header />
      <section className="flex flex-col items-center m-auto lg:w-1/2 w-full px-2 lg:px-0">
        <div className="flex lg:flex-row flex-col my-3 items-center justify-between w-full lg:mb-8">
          <h2 className="font-main font-bold lg:text-2xl text-[18px]">
            Todos documentos
          </h2>
          <ButtonStart onClick={handleClick}>Iniciar um documento</ButtonStart>
        </div>

        {documents && documents.length > 0 ? (
          documents
            .filter(doc => doc._id !== deletingDocumentId)
            .map((doc) => (
              <div
                key={doc._id}
                onClick={() => handleOpenDocument(doc._id)}
                className="flex justify-between w-full mt-5 rounded-md p-4 bg-[#e0e0e0] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:cursor-pointer"
              >
                <div className="flex gap-3 items-center">
                  <img
                    className="p-2 bg-[#ccc] rounded-md backdrop-blur-sm"
                    src={docs}
                  />
                  <div>
                    <h3 className="font-main font-bold lg:text-base text-[13px]">
                      {doc.title}
                    </h3>
                    <div className="font-second text-[12px]">
                      <CreatedAtMessage createdAt={doc.createdAt}/>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={(event) => handleDelete(event, doc._id)}
                  className="hover:text-red-500 transition-colors"
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            ))
        ) : (
          <p className="font-main text-[13px] mt-10">Crie um documento</p>
        )}
      </section>
    </div>
  );
};

export default Home;