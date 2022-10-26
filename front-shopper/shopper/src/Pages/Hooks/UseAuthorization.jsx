

export const UseAuthorization = () => {
    const token = window.localStorage.getItem( 'token' )

    const headers = {
        headers: {Authorization: token}
    }

    return headers
}