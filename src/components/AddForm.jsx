import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';

const AddForm = () => {
    //dispatch methodunun kurulumu
    const dispatch = useDispatch();

    //form gönderilince
    const handleSubmit = (e) => {
        e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

      // yazı boş mu kontrol et boşsa fonksiyonu durdur bildirim gönder
      if (!text) return toast.warn('Lütfen görev içeriğini belirleyin');
        // store kayedilecek olan veriyi hazırla
        const newTodo ={
            id: v4(),  //id oluşturan metod
            text,
            is_done: false,
            created_at: new Date().toLocaleDateString(),
        };

   // yeni bir todonun ekleneceğini reducer a haber ver
   dispatch({
    type: 'ADD',
    payload: newTodo,
   });
   //formu sıfırla
   e.target.reset();

    };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
        <input placeholder="örn:type script projesi" className="form-control" type="text" />
        <button className="btn btn-warning">Gönder</button>
    </form>
  )
}

export default AddForm
