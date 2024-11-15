import React from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[10%] pt-3">
      <Link>
        <span>
          <h3 className="gradient-text-blue text-2xl font-bold font-main">
            DocOM
          </h3>
        </span>
      </Link>

      <div className="font-main">
        <p>Isso é um documento teste apenas</p>
      </div>

      <div className="top-4 right-4 z-20">
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
      </div>
    </header>
  );
};

export default Header;
