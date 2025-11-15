import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { useParams } from "react-router";

export default function TodoDetailPage() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, error } = useTodoDataById(String(id), "DETAIL");
  if (error) return <div>오류 발생</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>TodoDetailPage</h1>
      {data?.content}
    </div>
  );
}
