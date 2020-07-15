import axios from 'axios';

 
export default function loginAdmin({ email, password }) {
    const user = {
        email: email,
        password: password
    }
    return  axios.post(`http://localhost:3000/admin/login/`, user)
        .then(res => {
            const { token } = res.data
            console.log(token)
            return token
        })
        .catch(err => {
            console.log(err.response.data.error)
            return null
        })

}