
import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "../Pages/Cadastro/Cadastro";
import Feed from "../Pages/Feed/Feed";
import LoginPage from "../Pages/Login/LoginPage";
import Post from "../Pages/Post/Post"




export default function Router (){
    return(
     
      <BrowserRouter>
      
        <Routes>

            <Route index element={<LoginPage/>} />

            <Route path="/cadastro" element={<Cadastro/>} />

            <Route path="/Feed" element={<Feed/>} />

            <Route path="/post/:id" element={<Post/>} />

            


        </Routes>
        
      </BrowserRouter>
    
    )
}