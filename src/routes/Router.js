import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StartPage } from '../pages/StartPage'
import { SingUp } from '../pages/SingUp'
import { LoginPage } from '../pages/LoginPage'
import { Home } from '../pages/Home'
import { FeedBack } from '../pages/Feedback'
import { About } from '../pages/About'
import { SignUpFormEmpresa }from '../pages/SignUpFormEmpresa'
import { Page404 } from '../pages/Page404'
import { HomeTest } from '../pages/HomeTest'

 const Router = () => (
    <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/singup" element={<SingUp/>}/>
        {/* <Route path="/singup/aluno" element={<SignUpFormAluno/>}/> */}
        <Route path="/singup/empresa" element={<SignUpFormEmpresa/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/feedback" element={<FeedBack/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Page404/>}/>
        <Route path="/homeTest" element={<HomeTest/>}/>
    </Routes>
 )

export default Router

