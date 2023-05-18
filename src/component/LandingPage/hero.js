const HeroLayout = () => (
    <main className="w-full h-[75vh] grid place-items-center">
        <div className="flex flex-col items-center justify-center lg:w-[58%] md:w-[70%] sm:w-[90%] gap-6">
            <div className="lg:w-[85%] sm:w-[90%]">
                <h1 className="font-robotoMd text-center lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] lg:leading-[85.4px] font-bold text-white justify-center"><span className="text-purple">Buy & Sell</span> Real Estate with Web 3...</h1>
            </div>
            <div>
                <p className="text-white text-center font-robotoLight md:text-[1.3rem] w-full">A seamless way to invest in real property without any hassle, everything is seamless, legal documents and all provided. You are 100% safe.</p>
            </div>
        </div>
    </main>
);

export default HeroLayout;