import deleteTodo from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,

    // onSuccess: (deleteTodo) => {
    //   queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
    //     if (!prevTodos) return [];
    //     return prevTodos.filter((prevTodo) => prevTodo.id !== deleteTodo.id);
    //   });
    // },

    onSuccess: (deleteTodo) => {
      queryClient.removeQueries({
        queryKey: QUERY_KEYS.todo.detail(deleteTodo.id),
      });
      queryClient.setQueryData<string[]>(
        QUERY_KEYS.todo.list,
        (prevTodoIds) => {
          if (!prevTodoIds) return [];
          return prevTodoIds.filter((id) => id! == deleteTodo.id);
        },
      );
    },
  });
}
