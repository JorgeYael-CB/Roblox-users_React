
export const AlertApp = ({ message, error }) => {
    return (
        <div>
            <h2 className={`text-white font-semibold text-center py-2 text-lg mt-8 ${error? 'bg-red-600': 'bg-green-600'}`} >{message}</h2>
        </div>
    )
}
