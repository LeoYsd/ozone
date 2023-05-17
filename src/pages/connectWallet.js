import { AuthLayout } from "../component/layout";
import { WalletType } from "../utils/constants/listings";

const ConnectWallet = () => (
    <AuthLayout>
        <div className="bg-dark text-center py-20 text-white flex flex-col items-center justify-center">
            <h1 className="font-gilroyBold lg:text-[2.4rem] md:text-[2rem] sm:text-[1.6rem] lg:leading-[54px] xl:w-full md:w-[80%] sm:w-[90%]">You need a crypto wallet to use <span className="text-purple">PropertyMe</span></h1>
            <p className="mt-2 lg:tex-[1.2rem] sm:text-[.8rem]">If you don’t have a wallet, you can select a provider to create one now.</p>

            <div className="border border-purple rounded-lg lg:w-5/12 md:w-[60%] sm:w-[90%] p-4 mx-auto mt-8">
                {WalletType.map((wallet, index) => (
                    <a href={wallet.url} key={wallet.name} className="cursor-pointer">
                        <div className="flex items-center py-2 md:gap-2 sm:gap-6">
                            <div className="w-[15%] grid place-items-center">{wallet.icon}</div>
                            <p className="lg:text-[25px] md:text-[18px]">{wallet.name}</p>
                        </div>
                        {index !== WalletType.length - 1 && (
                            <div className="my-4 border-[0.8px] border-purple" />
                        )}
                    </a>
                ))}
            </div>
        </div>
    </AuthLayout>
);

export default ConnectWallet;