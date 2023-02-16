import BackupTableIcon from "@mui/icons-material/BackupTable";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useRef, useState } from "react";
import TodoModal from "../components/TodoModal";

const Home = () => {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([
    { id: 1, text: "할일1", isComplete: false, isEditing: true },
    { id: 2, text: "할일2", isComplete: false, isEditing: false },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState({});
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (id) => {
    setIsOpen(true);
    setCurrentTodoId(id);
  };

  const onAddTodo = () => {
    const prevTodo = todos.map(({ isEditing, ...rest }) => ({
      ...rest,
      isEditing: false,
    }));

    const newTodo = {
      id: todos.length + 1,
      text: "할일" + (todos.length + 1),
      isComplete: false,
      isEditing: true,
    };
    setTodos([...prevTodo, newTodo]);
  };
  const onRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onChangeTodo = (e, id) => {
    const { value } = e.target;
    setTodos(
      todos.map((todo) => {
        const isCurrentTodo = todo.id === id;
        if (isCurrentTodo) {
          return {
            ...todo,
            text: value,
          };
        }
        return todo;
      })
    );
  };

  const onChangeCompleteState = (id) => {
    setTodos(
      todos.map((todo) => {
        const isCurrentTodo = todo.id === id;
        if (isCurrentTodo) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      })
    );
  };
  const onChangeEditState = (id) => {
    setTodos(
      todos.map((todo) => {
        const isEditing = todo.id === id;
        return {
          ...todo,
          isEditing,
        };
      })
    );
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    // MARK : 새로운 TODO 생성 시 input에 포커스
    const hasTodo = todos.length > 0;
    if (hasTodo) {
      const editingTodo = todos.find((todo) => todo.isEditing);
      if (editingTodo) {
        inputRef.current.focus();
      }
    }
  }, [todos]);

  return (
    <div className="w-screen h-screen  bg-black flex p-40">
      <div className="text-white  flex-1 p-20">
        <h2 className="font-bold text-32">Feed</h2>
        <button
          className="bg-neutral-800 flex justify-center items-center mt-20 rounded-md border py-6 px-10 border-neutral-800 mb-12"
          onClick={onAddTodo}
        >
          <BackupTableIcon sx={{ fontSize: 12 }} />
          <span className="text-14 font-bold mx-4">일반</span>
          <AddIcon sx={{ fontSize: 12 }} />
        </button>
        <ul className="">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="pb-12 mb-6 flex border-b-1 border-neutral-900"
            >
              {todo.isComplete ? (
                <CheckBoxIcon
                  sx={{ padding: "0px", cursor: "pointer" }}
                  onClick={() => onChangeCompleteState(todo.id)}
                />
              ) : (
                <CheckBoxOutlineBlankIcon
                  sx={{ padding: "0px", cursor: "pointer" }}
                  onClick={() => onChangeCompleteState(todo.id)}
                />
              )}

              {todo.isEditing ? (
                <button className="grow text-left ml-6">
                  <input
                    ref={inputRef}
                    className="font-semibold w-full bg-neutral-900 border-none outline-none"
                    onChange={(e) => onChangeTodo(e, todo.id)}
                    onBlur={() => {
                      setTodos(
                        todos.map((todo) => ({ ...todo, isEditing: false }))
                      );
                    }}
                    onKeyPress={handleOnKeyPress}
                    value={todo.text}
                  ></input>
                </button>
              ) : (
                <button className="grow text-left ml-6 ">
                  <span className="font-semibold">{todo.text}</span>
                </button>
              )}

              <MoreHorizIcon
                sx={{
                  color: "rgb(63 63 70 / var(--tw-bg-opacity))",
                  padding: "2px",
                  cursor: "pointer",
                }}
                onClick={() => openModal(todo.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <TodoModal
        isOpen={isOpen}
        closeModal={closeModal}
        onChangeEditState={onChangeEditState}
        currentTodoId={currentTodoId}
        onRemoveTodo={onRemoveTodo}
      />
    </div>
  );
};
export default Home;
