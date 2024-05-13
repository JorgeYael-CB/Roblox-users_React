const nameSession = 'isSessionUser';



export const check = {
    isVerify: () => {
        //* Retornamos si el usuario ya saco el enlace o no
        return (localStorage.getItem(nameSession)) ? true: false;
    },

    verifyUser: () => {
        //* Guardamos la session del usuario para verificar si ya saco la key
        localStorage.setItem(nameSession, true);
    },

    deleteAuth: () => {
        localStorage.removeItem(nameSession);
    }
}