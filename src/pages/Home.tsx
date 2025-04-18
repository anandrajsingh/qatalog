export const Home = () => {

    const knowledgePlatforms = [
        { name: "Snowflake AI", image: "/snowflake.png" },
        { name: "Google Ads", image: "/google-ads.png" },
        { name: "Teams", image: "/microsoft-teams.png" },
        { name: "Asana", image: "/asana.png" },
        { name: "Github", image: "/github.png" },
        { name: "Slack", image: "/slack.png" },
    ]

    const dataSources = [
        { logo: "/snowflake.png", url: "snowflake.com", description: "Snowflake is a cloud data platform enabling secure, scalable, and fast data analytics." },
        { logo: "/tableau.png", url: "tableau.com", description: "Tableau helps people visualize, analyze, share data through interactive dashboards." },
        { logo: "/google-cloud.png", url: "cloud.google.com", description: "BigQuery is Google's serverless data warehouse for fast, scalable, secure analytics." },
        { logo: "/dropbox.png", url: "dropbox.com", description: "Dropbox is a cloud storage service for file shareing and collaboration across devices." },
        { logo: "/github.png", url: "github.com", description: "Github is a platform for version control collaborative software developement." },
        { logo: "/microsoft-teams.png", url: "teams.microsoft.com", description: "Microsoft Teams enables communication, meetings, collaborations across organizations." },
    ]

    const plans = [
        { logo: "/pro.png", price: "15", user: "per", name: "Pro", description: "For scaling teams that need instant access to accurate and up-to-date information.", buttonText: "Start Your Trial 14 Days", includes: "", includeItems: ["Unlimited keyword search", "Unlimited AI-powered queries", "20+ app connections", "Unlimited team members", "Rolling monthly contract", "Upgrade or cancel anytime"] },
        { logo: "/pro-plus.png", price: "25", user: "per", name: "Pro-plus", description: "For enterprises needing advanced features, customization, and full control.", buttonText: "Book a Demo", includes: " Pro, plus", includeItems: ["Audit logs, query controls", "Analytics & feedback data", "Priority support", "Dedicated success manager", "Personalized onboarding", "Service level agreement", "Prioritized integration requests"] },
        { logo: "/Enterprise.png", price: "35", user: "2", name: "Enterprise", description: "For established organizations in need of extra flexibity and control", buttonText: "Book a Demo", includes: "enterprise", includeItems: ["Audit logs, query controls", "Analytics & feedback data", "Priority support", "Dedicated success manager", "Personalized onboarding", "Service level agreement", "Prioritized integration requests"] },
    ]

    return (
        <div className="min-h-screen w-full font-sans items-center flex flex-col bg-black">
            <div className="flex flex-col w-7/10">
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
                <main className="flex flex-col items-center w-full">
                    <section className="flex flex-col items-center justify-center w-full my-30">
                        <div className="text-center text-7xl font-semibold my-10">AI Powered Solutions Designed Specifically for Your Data</div>
                        <div className="text-center text-xl md:w-xl">Effortlessly Connect Your Apps, Documents, and Databases to Streamline Processes and Unlock Greater Efficiency</div>
                        <div className="flex gap-4 my-10">
                            <button className="flex  bg-white text-black rounded-4xl py-3 px-4 items-center">
                                Book a Demo
                            </button>
                            <button className="flex bg-zinc-800 text-white rounded-4xl py-2 px-5 items-center text-base border border-gray-700">
                                Started For Free
                            </button>
                        </div>
                        <img src={"/image.png"} alt="image" className="mt-20 w-full" />
                    </section>

                    <section className="flex flex-col items-center justify-center w-full">
                        <div className="flex justify-between items-center w-full">
                            <div className="text-5xl font-semibold w-xs">Connect Your Knowledge</div>
                            <div className="text-xl w-md">Qatalog connects your data ecosystem, integrating emails, files, apps in one place</div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full my-20">
                            {knowledgePlatforms.map((knowledge, index) => (
                                <div key={index} className="bg-gradient-to-b from-[#1f1f1f] to-[#0d0d0d] rounded-2xl p-6 text-center border-t border-l border-gray-700 hover:shadow-lg transition">
                                    <div className="flex items-center justify-center mb-15">
                                        <div className="border border-gray-700 p-2 rounded-full">
                                            <div className="border border-gray-700 p-2 rounded-full">
                                                <div className="border border-gray-700 p-2 rounded-full">
                                                    <img src={knowledge.image} alt="" className="w-8 h-8" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg text-white">{knowledge.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center w-full mt-30">
                            <div className="text-5xl font-semibold w-lg">Connect &amp; Manage Your Key Data Sources</div>
                            <div className="text-md w-md">Qatalog connects to data sources, translating requests into queries with secure, permission-based access to information</div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full my-20">
                            {dataSources.map((dataSource, index) => (
                                <div key={index} className="bg-gradient-to-b from-[#1f1f1f] to-[#0d0d0d] rounded-2xl p-6 text-center border-t border-l border-gray-700 hover:shadow-lg transition">
                                    <div className="flex justify-between items-center">
                                        <div className="bg-gradient-to-br from-gray-500 to-black border-gray-500 p-3 border-t border-l rounded-full">
                                            <img src={dataSource.logo} alt="" className="w-8 h-8" />
                                        </div>
                                        <a className="bg-stone-800 border border-gray-700 p-3 rounded-full">
                                            <img src="/share.png" alt="" className="w-6 h-6 filter invert" />
                                        </a>
                                    </div>

                                    <p className="text-xl text-white w-full text-start mt-15">{dataSource.url}</p>
                                    <p className="text-sm text-white w-full mt-5">{dataSource.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col items-center justify-center w-full my-20">
                        <div className="flex justify-between items-center w-full">
                            <div className="text-5xl font-semibold w-2xl">Flexible Pricing Plans for Every Team and Business Size</div>
                            <div className="text-xl w-lg">Choose the plan that fits your needs, from startups enterprises, with scalable, affordable options.</div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full my-20">
                            {plans.map((plan, index) => (
                                <div key={index} className="bg-gradient-to-b from-[#1f1f1f] to-[#0d0d0d] rounded-2xl p-6 text-center border border-gray-800 hover:shadow-lg transition">
                                    <div className="flex justify-between items-center">
                                        <div className="bg-gradient-to-br from-gray-500 to-black border-gray-500 p-3 border-t border-l rounded-full">
                                            <img src={plan.logo} alt="" className="w-8 h-8" />
                                        </div>
                                        <div className="text-2xl font-semibold">
                                            ${plan.price}/<span className="text-sm font-normal">mo {plan.user} user</span>
                                        </div>
                                    </div>
                                    <div className="w-full text-start text-2xl font-semibold mt-10">{plan.name}</div>
                                    <div className="w-full text-start mt-6">{plan.description}</div>
                                    <div className="w-full text-center mt-6 bg-white text-black py-3 rounded-full text-lg font-medium">{plan.buttonText}</div>
                                    <div className="w-full text-start mt-6 font-medium">Includes{plan.includes}:</div>
                                    <div className="w-full text-start mt-6 flex flex-col gap-4">{plan.includeItems.map((items, index) => (
                                        <div key={index} className="flex gap-2 text-sm">
                                            <img src="/correct.png" alt="" className="filter invert w-4 h-4" />
                                            {items}
                                        </div>
                                    ))}</div>
                                </div>
                            ))}
                        </div>
                        <div className="px-6 py-20 bg-gradient-to-r from-[#0d0d0d] via-[#1f1f1f] to-[#0d0d0d] border border-gray-700 rounded-xl w-full mx-auto text-center">
                            <h4 className="text-5xl font-medium mb-4">Start Seamless Collaboration</h4>
                            <p className="text-white/80 mb-6">Choose a pricing plan that fits your needs. Scalable options for businesses of all sizes with flexible features.</p>
                            <div className="flex gap-4 justify-center">
                                <button className="px-6 py-2 bg-white text-black rounded-full font-medium">Started For Free</button>
                                <button className="px-6 py-2 bg-zinc-700 text-white rounded-full font-medium">Book a Demo</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}