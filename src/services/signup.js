
import axios from 'axios';

export default function signup({ rut, email, nombre, apellido, telefono, password }) {
    const user = {
        rut: rut,
        email: email,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        password: password
    }
    return axios.post(`http://localhost:8000/registrar/`, user)
        .then(res => {
            return "ok"
        })
        .catch(err => {
            return err.response.data.error
        })
}