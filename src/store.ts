import { Todo } from "./types/todo";
import { makeAutoObservable } from "mobx";

// mobX implementation

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    status: 1,
  },
];

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const toggleStatus = (
  todos: Todo[],
  id: number,
  moveForward: boolean
): Todo[] => {
  console.log(id, moveForward);
  const index = todos.findIndex((todo) => todo.id === id);
  if (moveForward) {
    todos[index].status += 1;
  } else {
    todos[index].status -= 1;
  }
  return todos;
};

const changeText = (text: string, e: string): string => (text = e);

class TodoStore {
  todos: Todo[] = [];
  text = "";

  constructor() {
    makeAutoObservable(
      this /*, {
      addTodo: action,
      removeTodo: action,
      toggleStatus: action,
    }*/
    );
  }

  changeTodo(e: string) {
    this.text = changeText(this.text, e);
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.text);
    this.text = "";
  }

  removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);
  }

  toggleStatus(id: number, moveForward: boolean) {
    this.todos = toggleStatus(this.todos, id, moveForward);
  }
}

const store = new TodoStore();
export default store;
