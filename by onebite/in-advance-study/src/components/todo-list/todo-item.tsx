import useDeleteTodoMutation from "@/hooks/mutations/use-delete-todo";
import useUpdateTodoMutation from "@/hooks/mutations/use-update-todo";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { Link } from "react-router";
import { Button } from "../ui/button";

export default function TodoItem({ id }: { id: string }) {
  const { data: todo } = useTodoDataById(id, "LIST");
  if (!todo) throw new Error("todo data by id failed");
  const { content, isDone } = todo;

  const { mutate: updateTodo } = useUpdateTodoMutation();
  const { mutate: deleteTodo, isPending: isDeletTodoPending } =
    useDeleteTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleCheckbocClick = () => {
    updateTodo({ id, isDone: !isDone });
  };
  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          disabled={isDeletTodoPending}
          type="checkbox"
          checked={isDone}
          onClick={handleCheckbocClick}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        disabled={isDeletTodoPending}
        onClick={handleDeleteClick}
        variant={"destructive"}
      >
        삭제
      </Button>
    </div>
  );
}
