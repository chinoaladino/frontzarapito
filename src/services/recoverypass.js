import axios from 'axios';

export default function recoverypass({email}){
    
    const user = {
        email: email
    }

    return  axios.post(`http://localhost:8000/login/reset/` , user)
        .then(res => {
            return "ok"
        })
        .catch(err => {

            return err.response.data.error
        })
}