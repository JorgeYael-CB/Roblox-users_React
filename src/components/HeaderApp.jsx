
export const HeaderApp = ( {namePage = 'DevComplete Studios'} ) => {
    return (
        <header
            className="p-4 mb-48"
        >

            <div className="flex md:flex-row flex-col md:justify-around items-center gap-8">
                <nav className="flex md:flex-row flex-col gap-3">
                    <a target="_blank" className="text-xl hover:underline text-center" href="https://discord.gg/BcuYpU2f"> <img className="w-9 h-9" src="/dissvg.svg" alt="Discord logo" /> </a>
                    <a target="_blank" className="text-xl hover:underline text-center" href="https://www.youtube.com/channel/UCaorjdhDs4JMW1QvwmKJv-g"> <img className="w-9 h-9" src="/ytsvg.svg" alt="Youtube Logo" /> </a>
                </nav>
            </div>

            <h1 className="md:text-6xl text-5xl font-semibold text-center mt-32">{namePage}</h1>
        </header>
    )
}
