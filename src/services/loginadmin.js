import axios from 'axios';

 
export default function loginAdmin({ email, password }) {
    const user = {
        email: email,
        password: password
    }
    return  axios.post(`https://api.zarapito.xyz/admin/login/`, user)
        .then(res => {
            const { token } = res.data
            return token
        })
        .catch(err => {
            console.log(err.response.data.error)
            return null
        })

}