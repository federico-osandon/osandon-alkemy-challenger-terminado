export const setItemStorage = (token) => {
    
    localStorage.setItem('token', token)
}

export const getItemStorage = () => {
    localStorage.getItem('token')
}

export const removeItemStorage = () => {
    localStorage.removeItem('token')
}