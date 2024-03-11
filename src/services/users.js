import { goToHomePage } from '../routes/Coordinator'
import { users } from '../db/db'

export const login = (body, navigate) => {
    const { email, password } = body

    try{
        if(!email || !password) {
            throw new Error('Campos inválios')
        }
    
        for(const user of users){
            if(email === user.email && password === user.password){
                localStorage.setItem('token', `${user.role}`)
                goToHomePage(navigate)
            }
        }

        //throw new Error('Email ou senha inválidos')
    }catch(err){
        alert(err.message)
    }
}