import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useCreateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    // 시작되었을떄
    onMutate: () => {},
    // 끝났을 떄
    onSettled: () => {},
    // 성공했을때
    onSuccess: (newTodo) => {
      // todos 캐시 데이터 무효화
      // queryClient.invalidateQueries({
      //   queryKey: QUERY_KEYS.todo.list,
      // });
      // queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
      //   if (!prevTodos) return [newTodo];
      //   return [...prevTodos, newTodo];
      // });
      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(newTodo.id),
        newTodo,
      );
      queryClient.setQueryData<string[]>(
        QUERY_KEYS.todo.list,
        (prevTodoIds) => {
          if (!prevTodoIds) return [newTodo.id];
          return [...prevTodoIds, newTodo.id];
        },
      );
    },
    // 에러시
    onError: (error) => {
      window.alert(error.message);
    },
  });
}

export default useCreateTodoMutation;
