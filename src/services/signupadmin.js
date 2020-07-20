
import axios from 'axios';

export default function signupadmin({ email, nombre, apellido, password1 }) {
    console.log(email, nombre, apellido, password1)
    const user = {
        email: email,
        nombre: nombre,
        apellido: apellido,
        password: password1
    }
    return axios.post(`https://api.zarapito.xyz/admin/add/`, user)
        .then(res => {
            return "ok"
        })
        .catch(err => {
            return err.response.data.error
        })
}