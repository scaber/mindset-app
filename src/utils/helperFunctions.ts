 
export const setUser = (val:any) => {
    localStorage.setItem('user', val);
}
export const getUser = () => {
    return localStorage.getItem('user');
}
 