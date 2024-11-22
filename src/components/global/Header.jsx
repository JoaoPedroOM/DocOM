import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

const Header = () => {

  return (
    <header className="flex justify-between items-center px-[10%] py-6 shadow-lg lg:mb-7">
      <Link to="/createDocument">
        <span>
          <h3 className="gradient-text-blue text-2xl font-bold font-main">
            DocOM
          </h3>
        </span>
      </Link>
      
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