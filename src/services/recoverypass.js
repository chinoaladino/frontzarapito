import axios from 'axios';

export default function recoverypass({email}){
    
    const user = {
        email: email
    }

    return  axios.post(`https://api.zarapito.xyz/login/reset/` , user)
        .then(res => {
            return "ok"
        })
        .catch(err => {

            return err.response.data.error
        })
}