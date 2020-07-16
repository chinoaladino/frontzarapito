import axios from 'axios';

export default function addcategory({ categoria }){
    
    const category = {
        categoria: categoria,  
    }    
    
    const token = window.sessionStorage.getItem('tokenadmin')
   
    return  axios.post(`http://localhost:3000/categorias/agregar/` , category, {
        headers: { Authorization: "Bearer " + token }

    })
        .then(res => {
            return "ok"
        })
        .catch(err => {
            return err.response.data.error
        })
}