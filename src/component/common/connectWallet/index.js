import { ProfileIcon } from "../../../assets/svgs";
import { WalletIcon } from "../../../assets/svgs";
import { CONNECT_WALLET_URL } from "../../../utils/constants/pages";

const ConnectWallet = () => (
    <a href={CONNECT_WALLET_URL}>
        <div className="flex text-white bg-hack rounded-lg py-[.4rem] px-3 font-robotoMd items-center w-fit justify-between cursor-pointer trans hover:text-lailac">
            <div>{WalletIcon}</div>
            <p className="whitespace-nowrap px-3">Connect Wallet</p>
            <div className="w-px bg-white h-5 mx-3" />
            <div>{ProfileIcon}</div>
        </div>
    </a>
);

export default ConnectWallet;