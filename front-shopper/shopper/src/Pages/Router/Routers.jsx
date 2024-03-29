import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Feed />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}