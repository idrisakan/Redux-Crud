import { toast } from "react-toastify";

const initialState = {
    todos:[
        {
            "id": "7a59fedb-5580-49bc-ab18-475bb624e1ce",
            "text": "javascript nedir",
            "is_done": true,
            "created_at": "24.04.2024"
        },
        {
            "id": "65c7c1aa-c4e2-4680-8f5d-e81173f83c87",
            "text": "react nedir",
            "is_done": false,
            "created_at": "24.04.2024"
        },
        {
            "id": "8acce8d9-ca6e-4355-a3be-ee42158adf3c",
            "text": "typescript nedir",
            "is_done": false,
            "created_at": "24.04.2024"
        },
    ],
};

const todoReducer = (state = initialState, action) => {
switch(action.type) {
    case 'ADD':
        toast.success('Görev başarıyla eklendi');
    return { todos: state.todos.concat(action.payload) };

    case 'DELETE':
 // payload ile gelen id deki elemanın diziden kaldır
   const filtred = state.todos.filter((i) => i.id !== action.payload);
   toast.error('Görev listeden kaldırıldı')
    return {todos:filtred};

    case 'UPDATE':
        const updated = state.todos.map((item) => 
        item.id === action.payload.id ? action.payload : item
        );
        toast.info('Görev başaryla güncellendi');
        return { todos: updated }

    default:
    return state;
}
};
export default todoReducer;