import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUpdateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    // onMutate: async (updateTodo) => {
    //   await queryClient.cancelQueries({
    //     queryKey: QUERY_KEYS.todo.list,
    //   });

    //   const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list);
    //   queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
    //     if (!prevTodos) return [];
    //     return prevTodos.map((prevTodo) =>
    //       prevTodo.id === updateTodo.id
    //         ? { ...prevTodo, ...updateTodo }
    //         : prevTodo,
    //     );
    //   });

    //   return { prevTodos };
    // },
    onMutate: async (updateTodo) => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todo.detail(updateTodo.id),
      });
      const prevTOdo = queryClient.getQueryData<Todo>(
        QUERY_KEYS.todo.detail(updateTodo.id),
      );
      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(updateTodo.id),
        (prevTodo) => {
          if (!prevTodo) return;
          return {
            ...prevTodo,
            ...updateTodo,
          };
        },
      );
      return {
        prevTOdo,
      };
    },
    onError: (error, variable, context) => {
      if (context && context.prevTOdo) {
        queryClient.setQueryData<Todo>(QUERY_KEYS.todo.list, context.prevTOdo);
      }
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: QUERY_KEYS.todo.list,
    //   });
    // },
  });
}
