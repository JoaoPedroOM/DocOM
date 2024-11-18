import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/global/Header";
import { v4 as uuidv4 } from "uuid";
import docs from "../assets/Docs.png";
import ButtonStart from "../components/ui/ButtonStart";
import { FaRegTrashAlt } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    const id = uuidv4();
    navigate(`/document/${id}`);
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

        <div className="flex justify-between w-full mt-5 rounded-md p-4 bg-[#e0e0e0]">
          <div className="flex gap-3 items-center">
            <img
              className="p-2 bg-[#ccc] rounded-md backdrop-blur-sm"
              src={docs}
            />
            <div>
              <h3 className="font-main font-bold lg:text-base text-[13px]">
                Titulo do documento
              </h3>
              <p className="font-second text-[12px]">
                Data de criação do documento
              </p>
            </div>
          </div>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        
      </section>
    </div>
  );
};

export default Home;
