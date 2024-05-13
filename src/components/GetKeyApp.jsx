import { useState } from "react";
import { check } from "../helpers/checkSessionUser";
import { getUrl } from "../helpers/getLink";
import { AlertApp } from "./AlertApp";



export const GetKeyApp = ( {objUser = {}} ) => {
    const [Unlock, setUnlock] = useState(check.isVerify());
    const [copy, setCopy] = useState(false);
    const [copyError, setCopyError] = useState(false);

    const [loadingJWT, setLoadingJWT] = useState(true)
    const [jwt, setjwt] = useState('');


    const getKeyHttp = async() => {
        //* Hacemos la peticion HTTP
        const resp = await fetch( `${import.meta.env.VITE_API_BACKEND}/create-ticket`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objUser),
        })
            .then( resp => resp.json() );

        setLoadingJWT(false);
        setjwt(resp.data.jwt);
    };


    (async()=>{
        if( Unlock ){
            await getKeyHttp();
        }
    })();


    const changeCopy = () => {
        setCopy(true);
        check.deleteAuth();
        setUnlock(false);
    }


    const unlockKey = async() => {
        check.verifyUser();
        const url = getUrl(818959, `${window.location.href}`);

        window.location.href = url;
    };


    const copyKey = () => {
        navigator.clipboard.writeText(jwt)
            .then( () => changeCopy())
            .catch( error => {
                console.log(error);
                setCopyError(true)
            })
    };


    return (
        <div className="max-w-2xl shadow-lg m-auto p-2">
            <h2 className="text-center font-semibold text-3xl mb-8">Get Key</h2>

            {
                Unlock
                ?
                    (loadingJWT)
                        ?
                            <AlertApp error={true} message={'Loading....'}/>
                        :
                        <>
                            <input
                                onCopy={changeCopy}
                                type="text"
                                value={jwt}
                                className="w-full p-1 text-center border rounded-md border-gray-600 font-medium mb-3"
                                readOnly
                            />

                            <button
                                onClick={copyKey}
                                className="py-2 bg-blue-500 rounded-md w-full text-white text-center"
                            >
                                Copy Key
                            </button>
                        </>
                :
                <button
                    onClick={ unlockKey }
                    className="flex flex-row justify-center gap-2 items-center w-full p-2 bg-blue-600 text-white font-medium rounded-md"
                    >
                        Unlock Key
                        <img
                            className="w-8 h-8"
                            src="/candado.png"
                            alt="Candado Image"
                        />
                </button>
            }

            {copy && <AlertApp error={false} message={'Key copied to clipboard!'}/>}
            { copyError && <AlertApp error={true} message={'Error copying to clipboard'}/> }
        </div>
    )
}
