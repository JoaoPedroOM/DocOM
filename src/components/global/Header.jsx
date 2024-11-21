import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

const Header = ({ document, identicador }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(document?.title || 'Sem título');
  const updateDocumentTitle = useMutation(api.mutations.updateDocumentTitle);

  useEffect(() => {
    setTitle(document?.title || 'Sem título');
  }, [document]);

  const handleTitleChange = () => {
    if (document?._id) {
      updateDocumentTitle({
        documentId: document._id,
        title: title || 'Sem título'  
      });
    }
    setIsEditing(false);
  };

  return (
    <header className="flex justify-between items-center px-[10%] py-6 shadow-lg lg:mb-7">
      <Link to="/createDocument">
        <span>
          <h3 className="gradient-text-blue text-2xl font-bold font-main">
            DocOM
          </h3>
        </span>
      </Link>

    {identicador && (
      <div className="font-second flex items-center gap-3">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <button onClick={handleTitleChange}>
            <FaCheck />
          </button>
        </>
      ) : (
        <>
          <p>{title}</p>
          <button onClick={() => setIsEditing(true)}>
            <FaEdit size={18}/>
          </button>
        </>
      )}
    </div>
    )}
      
      <SignedOut>
        <SignInButton>
          <button className="h-10 px-3 w-full font-main rounded-md bg-neutral-900 text-white">
            Entrar
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;