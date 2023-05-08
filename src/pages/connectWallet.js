import { AuthLayout } from "../component/layout";
import { WalletType } from "../utils/constants/listings";

const ConnectWallet = () => (
    <AuthLayout>
        <div className="bg-dark text-center py-20 text-white h-screen">
            <h1 className="font-gilroyBold text-xll">You need a crypto wallet to use <span className="text-purple">PropertyMe</span></h1>
            <p className="mt-2">If you don’t have a wallet, you can select a provider to create one now.</p>

            <div className="border border-purple rounded-lg w-5/12 mt-4 p-4 mx-auto mt-8">
                {WalletType.map((wallet, index) => (
                    <div key={wallet.name} className="cursor-pointer">
                        <div className="flex items-center py-2">
                            <div>{wallet.icon}</div>
                            <p className="text-[25px] ml-4">{wallet.name}</p>
                        </div>
                        {index !== WalletType.length - 1 && (
                            <div className="my-4 border-[0.8px] border-purple" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    </AuthLayout>
);

export default ConnectWallet;