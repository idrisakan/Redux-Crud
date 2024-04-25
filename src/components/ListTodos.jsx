import { useSelector } from "react-redux"
import Card from "./Card";


const ListTodos = () => {

    //storedaki virleri abone olma. useSelektör e bir fonksiyon veririz
    const todoState = useSelector((store) => store.todoReducer);
    return (
        <div>
            {todoState.todos.map((todo) => (
                <Card key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default ListTodos;
