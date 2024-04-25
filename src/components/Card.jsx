import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
Modal

const Card = ({ todo }) => {
    //Modal açık mı state i
    const [isOpen, setIsOpen] = useState(false);


    // dispatch kurulum
    const dispatch = useDispatch();


    // sil buttonuna tıklanınca reducer a haber verir

    const handleDelete = () => {
        if (confirm('Silmek istediğinizen eminmisiniz?')) {
            dispatch({
                type: 'DELETE',
                payload: todo.id,
            });
        }
    };
    //tamamla butonuna tıklanınca is_done değerini  değiştir
    const handleStatus = () => {
        //1) is_done değeri mevcut is_done değerinin tersi olan yeni nesne oluştur
        const updated = { ...todo, is_done: !todo.is_done };
        //2) reducere bir todonun güncelleneceğini haber verme
        dispatch({
            type: 'UPDATE',
            payload: updated,
        });

    };



    return (
        <div className="border shadow-lg p-4 my-5 rounded">
            <h5>{todo.text}</h5>
            <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>
            <p>{todo.created_at}</p>

            <button onClick={() =>setIsOpen(true)} className="bg-primary">Düzenle</button>
            <button onClick={handleStatus} className="bg-success mx-5">{todo.is_done ? 'Geri Al' : 'Tamamla'}</button>
            <button onClick={handleDelete} className="bg-danger">Sil</button>

        {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
            

        </div>
    )
}

export default Card
