import axios from 'axios';

export default function updateproduct({nombre, codigo, stock, foto}){
    
    const data = new FormData() 
    data.set('nombre', nombre);
    data.set('stock', stock);
    if (foto !== '') {
        data.append('foto', foto)
    }

    return  axios.put(`http://localhost:3000/productos/id:`+codigo,data)
        .then(res => {
            return "ok"
        })
        .catch(err => {
            return err.response.data.error
        })
}