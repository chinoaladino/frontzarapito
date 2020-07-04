const ENDPOINT = 'http://localhost:8000'

export default function login({email, password}){
    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}
            )
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    }).then(res => {
        const { token } = res
        return token
    })
}