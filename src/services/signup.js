
import axios from 'axios';

export default function signup({ rut, email, nombre, apellido, telefono, password1 }) {
    const user = {
        rut: rut,
        email: email,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        password: password1
    }
    return axios.post(`https://api.zarapito.xyz/registrar/`, user)
        .then(res => {
            return "ok"
        })
        .catch(err => {
            return err.response.data.error
        })
}