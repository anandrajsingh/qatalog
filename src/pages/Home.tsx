export const Home = () => {
    return (
        <div className="min-h-screen w-full font-sans items-center flex flex-col bg-black">
            <div className="w-7/10">
                <header className="flex h-20 items-center justify-between relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent">
                    <h1 className="text-2xl font-semibold">Qatalog</h1>
                    <nav className="space-x-6 text-base font-semibold">
                        <a href="#" className="hover:text-gray-400">Product</a>
                        <a href="#" className="hover:text-gray-400">Resources</a>
                        <a href="#" className="hover:text-gray-400">Pricing</a>
                        <a href="#" className="hover:text-gray-400">About</a>
                    </nav>
                    <div className="flex gap-4">
                        <button className="flex items-center text-sm font-semibold">
                            LOGIN
                        </button>
                        <button className="flex bg-white text-black rounded-4xl py-3 px-3 items-center text-sm font-semibold">
                            Get started
                        </button>
                    </div>
                </header>
            </div>
        </div>
    )
}