import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/global/Header";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    const id = uuidv4();
    navigate(`/document/${id}`); 
  }

  return (
    <div>
      <Header />
      <button
        className="p-3 text-white bg-gray-500 rounded-sm hover:scale-105"
        onClick={handleClick}
      >
        Click para criar um documento
      </button>
    </div>
  );
};

export default Home;
