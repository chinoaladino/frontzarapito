import axios from 'axios';

export default function findproducto({ codigo }){
       
    return axios.get('https://api.zarapito.xyz/productos/'+codigo, {
      })
        .then(res => {
            console.log()
            return res.data.stock
        })
        .catch(err => {
           
            return false
        })
}