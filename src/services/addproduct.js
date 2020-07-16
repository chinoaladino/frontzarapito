import axios from 'axios';

export default function addproduct({ codigo, cat, nombre, precio, stock, foto }) {

    const data = new FormData()
    data.set('codigo', codigo)
    data.set('categoria', cat)
    data.set('nombre', nombre)
    data.set('precio', precio)
    data.set('stock', stock)
    for (let i = 0; i < foto.length; i++) {
        data.append('foto', foto[i])
    }

    const token = window.sessionStorage.getItem('tokenadmin')

    return axios.post(`http://localhost:3000/productos/agregar/`, data, {
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