import { useNavigate } from "react-router-dom"
import { goToLogin } from "../Router/Coordinator"

export const UseProtectedPage = () => {
    const navigate = useNavigate()

    const token = window.localStorage.getItem( 'token' )
    if ( !token ) {
        goToLogin(navigate)
    }
}