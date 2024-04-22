import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StartPage } from '../pages/StartPage'
import { SignUp } from '../pages/SignUp'
import { LoginPage } from '../pages/LoginPage'
import { Home } from '../pages/Home'
import { FeedBack } from '../pages/Feedback'
import { About } from '../pages/About'
import { SignUpFormEmpresa }from '../pages/SignUpFormEmpresa'
import { SignUpFormEstudante} from '../pages/SignUpFormEstudante'
import { Page404 } from '../pages/Page404' 

 const Router = () => (
    <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Signup/aluno" element={<SignUpFormEstudante/>}/>
        <Route path="/SignUp/empresa" element={<SignUpFormEmpresa/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/feedback" element={<FeedBack/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Page404/>}/>
    </Routes>
 )

export default Router

