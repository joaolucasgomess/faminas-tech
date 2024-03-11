import { goToHomePage } from '../routes/Coordinator';
import { users } from '../db/db';

export const login = (body, navigate) => {
    const { email, password } = body;

    try {
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
