
export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToSignup = (navigate) => {
    navigate('/signup')
}

export const goToFeed = (navigate) => {
    navigate('/')
}

export const goToCart = (navigate) => {
    navigate('/cart')
}

export const goToDetails = (navigate) => {
    navigate('/details')
}

export const goToCartWithNoLS = ( navigate ) => {
    navigate( '/cart' )
    window.localStorage.removeItem( 'pedido' )
}