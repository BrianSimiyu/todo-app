import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Todo } from "../model";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <div>
      <form>
        <span>{todo.todo}</span>
        <div>
          <span>
            <AiFillEdit />
          </span>
          <span>
            <AiFillDelete />
          </span>
          <span>
            <MdDone />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
