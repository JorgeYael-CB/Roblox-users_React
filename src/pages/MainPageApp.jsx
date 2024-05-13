import { useLocation } from "react-router-dom";
import { GetKeyApp } from "../components/GetKeyApp";
import { AlertApp } from "../components/AlertApp";
import { GetScript } from "../components/GetScript";
import { HeaderApp } from "../components/HeaderApp";



export const MainPageApp = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);


    //* Obtenemos los parametros
    const userId = params.get('I');
    const userName = params.get('N');
    const userRebirths = Number(params.get('R'));

    const user = {
        userName,
        userId,
        userRebirths,
    }

    return (
        <>
            <HeaderApp/>
            {/* Verificamos que esten los parametros, si estan mostramos un menu para obtener la llave, si no estan mostramos un mensaje de advertencia */}
            {(userId && userName && userRebirths
                ?
                    <GetKeyApp objUser={user}/>
                :
                    <AlertApp error={true} message={'Para obtener una llave debes sacar una URL desde el script.'}/>
            )}

            {/* Mostramos un menú para darle el script al usuario */}
            <GetScript/>
        </>
    )
}
