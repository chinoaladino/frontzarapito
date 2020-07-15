import axios from 'axios';

export default function addproduct({codigo, nombre, precio, stock, foto }){
    
    const data = new FormData() 
    data.set('codigo', codigo);
    data.set('nombre', nombre);
    data.set('precio', precio);
    data.set('stock', stock);
    data.append('foto', foto)
    const token = window.sessionStorage.getItem('tokenadmin')
    console.log(token)
   
    return  axios.post(`http://localhost:3000/productos/agregar/` , data, {
        headers: { Authorization: "Bearer " + token }
    })
        .then(res => {
            return "ok"
        })
        .catch(err => {
            console.log(err.response)
            return err.response.data.error
        })
}