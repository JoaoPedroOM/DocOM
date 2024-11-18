import { FaGithub } from 'react-icons/fa';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import { Boxes } from '../components/ui/background-boxes';
import { Account } from '../components/ui/Account';
import { useClerk } from '@clerk/clerk-react';

const Usuario = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="relative w-full justify-center items-center flex z-10">
        <Account firstTab={<Tab1 />} secondTab={<Tab2 />} defaultTab={0} />
      </div>
      <Boxes className="absolute top-0 left-0 w-full h-full z-0" />
    </div>
  );
};

const Tab1 = () => {
  const { openSignIn } = useClerk();

  const handleGoogleLogin = () => {
    openSignIn({ 
      strategy: 'oauth_google', 
      redirectUrl: window.location.origin + '/createDocument'
    });
    
  };

  const handleGitHubLogin = () => {
    openSignIn({ strategy: 'oauth_github',
      redirectUrl: window.location.origin + '/createDocument'
     });
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl p-3 pb-4 bg-black border-neutral-700">
      <div className="text-center w-full">
        <h1 className="font-font text-lg font-main text-center">Acessar sua conta</h1>
      </div>

      <div className="relative mt-6 w-full">
        <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-neutral-400 dark:bg-black dark:text-neutral-500">
          Ou
        </div>
        <div className="border-b border-neutral-300 dark:border-neutral-800"></div>
      </div>

      <div className="mt-6 flex w-full flex-col gap-4 font-main">
        <button
          onClick={handleGoogleLogin}
          className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950"
        >
          <IconBrandGoogleFilled /> <div>Continue com o Google</div>
        </button>

        <button
          onClick={handleGitHubLogin}
          className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950"
        >
          <FaGithub size={23} /> <div>Continue com o GitHub</div>
        </button>
      </div>
    </div>
  );
};

const Tab2 = () => {
  const { openSignUp } = useClerk();

  const handleGoogleSignup = () => {
    openSignUp({ strategy: 'oauth_google',
      redirectUrl: window.location.origin + '/createDocument'
     });
  };

  const handleGitHubSignup = () => {
    openSignUp({ strategy: 'oauth_github',
      redirectUrl: window.location.origin + '/createDocument'
     });
  };

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl p-3 pb-4 bg-black border-neutral-700">
      <div className="text-center w-full">
        <h1 className="font-font text-lg font-main">Criar uma conta</h1>
      </div>

      <div className="relative mt-6 w-full">
        <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-neutral-400 dark:bg-black dark:text-neutral-500">
          Ou
        </div>
        <div className="border-b border-neutral-300 dark:border-neutral-800"></div>
      </div>

      <div className="mt-6 flex w-full flex-col gap-4 font-main">
        <button
          onClick={handleGoogleSignup}
          className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950"
        >
          <IconBrandGoogleFilled /> <div>Continue com o Google</div>
        </button>

        <button
          onClick={handleGitHubSignup}
          className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950"
        >
          <FaGithub size={23} /> <div>Continue com o GitHub</div>
        </button>
      </div>
    </div>
  );
};

export default Usuario;
