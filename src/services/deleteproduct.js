import axios from 'axios';

export default function deleteproduct({ codigo }){
    
    const product = {
        codigo: codigo,  
    }    
    
    const token = window.sessionStorage.getItem('tokenadmin')
   
    return axios.delete('https://api.zarapito.xyz/productos/'+codigo, {
        headers: { Authorization: "Bearer " + token }
       
      })
        .then(res => {
            return "ok"
        })
        .catch(err => {
            console.log(err.response)
            console.log(err.response.data.error)
            return err.response.data.error
        })
}