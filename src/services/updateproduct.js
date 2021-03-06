import axios from 'axios';

export default function updateproduct({ codigo, cat, nombre, precio, stock, foto }) {

    const products = {
        stock: stock
    }
    const token = window.sessionStorage.getItem('tokenadmin')

    return axios.put('https://api.zarapito.xyz/productos/' + codigo, products, {
        headers: { Authorization: "Bearer " + token }

    })
        .then(res => {
            return "ok"
        })
        .catch(err => {
            console.log(err)
            return err.response.data.error
        })
}