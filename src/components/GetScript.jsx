

export const GetScript = () => {




    return (
        <div className="mt-28">
            <h2 className="text-center text-3xl font-semibold">Script DragonBlox Ultimate</h2>

            <div className="md:flex flex-row mt-32 gap-36 justify-center">
                <div className="p-4 bg-gray-100 mb-8">
                    <h3 className="text-lg font-bold">What does the Script contain?</h3>

                    <ul className="list-disc pl-4 mt-2">
                        <li>Players table.</li>
                        <li>Attack players.</li>
                        <li>Read player stats.</li>
                        <li>An advanced and modern menu.</li>
                        <li>A way to attack multiple players at the same time.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h4 className="text-center mb-10 text-2xl">What are you waiting for to use the best script?</h4>

                    <div className="mx-auto max-w-lg">
                        <p className="mb-5">Download it below 👇</p>
                        <a
                            href="/DevComplete_Studios-Script-DBU.txt"
                            download
                            className="border border-gray-400 rounded-lg p-2 hover:cursor-pointer font-medium uppercase"
                        >
                            Get Script
                        </a>

                        <p className="my-5">Copy it from here below 👇</p>
                    </div>

                    <input
                            type="text"
                            value={'loadstring(game:HttpGet("https://raw.githubusercontent.com/JorgeYael-CB/RobloxScript-AttackPlayers-DBU/main/RobloxScript-AttackPlayers.lua"))()'}
                            className="w-full p-2 text-center border rounded-md border-gray-600 font-medium mb-4"
                            readOnly
                        />
                </div>
            </div>
        </div>
    )
};