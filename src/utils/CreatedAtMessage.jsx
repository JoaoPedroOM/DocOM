import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

const CreatedAtMessage = ({ createdAt }) => {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { 
    addSuffix: true, 
    locale: ptBR 
  });

  return (
    <p className="font-second text-[12px]">
      Criado {timeAgo}
    </p>
  );
};

export default CreatedAtMessage