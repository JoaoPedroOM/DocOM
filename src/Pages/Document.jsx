import Editor from "../components/editor/Editor";
import { useParams } from "react-router-dom";
import Header from "../components/global/Header";
import {
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react/suspense";

const Document = () => {
  const { id } = useParams();

  const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;

  return (
    <LiveblocksProvider publicApiKey={PUBLIC_API_KEY}>
      <RoomProvider id={`room-${id}`}>
        <Header />
        <Editor />
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Document;
