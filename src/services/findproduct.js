import axios from 'axios';

export default function findproducto({ codigo }){
    
    const product = {
        codigo: codigo,  
    }    
       
    return axios.get('http://localhost:3000/productos/'+codigo, {
      })
        .then(res => {
            console.log()
            return res.data.stock
        })
        .catch(err => {
           
            return false
        })
}