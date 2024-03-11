import { goToHomePage } from '../routes/Coordinator';
import { goToLoginPage } from '../routes/Coordinator';
import { users } from '../db/db';

export const login = (body, navigate) => {
    try {
        const { email, password } = body;

        if (!email || !password) {
            throw new Error('Campos inválidos');
        }
    
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            localStorage.setItem('token', `${user.role}`);
            goToHomePage(navigate);
        } else {
            throw new Error('Email ou senha inválidos');
        }
    } catch (err) {
        alert(err.message);
    }
};

export const singupCompany = (body, navigate) =>{
    try{
        const { 
            email,
            name,
            company,
            position,
            password
         } = body

         if(!email || !name || !company || !position){
            throw new Error('Campos inválidos.')
         }

         const user = users.find(user => user.email === email)

         if(user){
            throw new Error('Usuario ja existe')
         }
         users.push({
            email: email,
            name: name,
            company: company,
            position: position,
            password: password,
            role: "empresa"

         })
         localStorage.setItem('token', `empresa`)
         goToLoginPage(navigate)

    }catch(err){
        alert(err.message)
    }

}
