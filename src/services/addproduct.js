import axios from 'axios';

export default function addproduct({nombre, codigo, stock, foto}){
    
    const data = new FormData() 
    data.set('nombre', nombre);
    data.set('codigo', codigo);
    data.set('stock', stock);
    data.append('foto', foto)

    return  axios.post(`http://localhost:8000/productos/agregar/` , data)
        .then(res => {
            return "ok"
        })
        .catch(err => {
            return err.response.data.error
        })
}