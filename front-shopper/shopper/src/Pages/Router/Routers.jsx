import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Feed from "../Feed/Feed";
import Login from "../Login/Login";
import ProductDetails from "../ProductDetails/ProductDetails";
import Signup from "../Signup/Signup";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<Feed />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="/details" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    )
}