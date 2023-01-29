import axios from "axios"

const logIn = async (email: string, password: string) => {
    const data = {
        "email": email,
        "password": password
      }
    
    const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', data)
    localStorage.setItem('accessToken', response.data.access_token)
    
    console.log('Se ha guardado el token:', response.data.access_token )
}

export default logIn