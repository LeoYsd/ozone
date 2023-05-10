import House1 from "../../assets/images/house-1.svg";
import House2 from "../../assets/images/house-2.svg";
import House3 from "../../assets/images/house-3.svg";
import House4 from "../../assets/images/house-4.svg";
import House5 from "../../assets/images/house-5.svg";
import House6 from "../../assets/images/house-6.svg";
import person1 from '../../assets/images/annette.png';
import person2 from '../../assets/images/cody.png';
import person3 from '../../assets/images/arlene.png';
import person4 from '../../assets/images/wade.png';
import person5 from '../../assets/images/esther.png';
import person6 from '../../assets/images/jane.png';
import { BitkeepIcon, LunoIcon, MetamaskIcon, Phantom } from "../../assets/svgs";
import { OWNED_PROPERTIES } from "./pages";

export const Listings = [
    {
        id: 1,
        image: House1,
        title: '3- Semi Detached Duo Family Building,',
        address: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
        price: '850,000.00 USDC',
        parkSpace: '4',
        bathub: '4',
        meter: '2,096.00 ft',
        owner_img: person1,
        owner_name: 'Annette Black'
    },
    {
        id: 2,
        image: House2,
        title: '3- Semi Detached Duo Family Building,',
        address: '8502 Preston Rd. Inglewood, Maine 98380',
        price: '550,000.00 USDC',
        parkSpace: '2',
        bathub: '4',
        meter: '2,096.00 ft',
        owner_img: person2,
        owner_name: 'Cody Fisher'
    },
    {
        id: 3,
        image: House3,
        title: '3- Semi Detached Duo Family Building,',
        address: '4517 Washington Ave. Manchester, Kentucky',
        price: '850,000.00 USDC',
        parkSpace: '4',
        bathub: '4',
        meter: '2,096.00 ft',
        owner_img: person3,
        owner_name: 'Arlene McCoy'
    },
    {
        id: 4,
        image: House4,
        title: '3- Semi Detached Duo Family Building,',
        address: '82715 Ash Dr. San Jose, South Dakota 83475',
        price: '930,000.00 USDC',
        parkSpace: '2',
        bathub: '4',
        meter: '2,096.00 ft',
        owner_img: person4,
        owner_name: 'Wade Warren'
    },
    {
        id: 5,
        image: House5,
        title: '3- Semi Detached Duo Family Building,',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        price: '850,000.00 USDC',
        parkSpace: '4',
        bathub: '4',
        meter: '2,096.00 ft',
        owner_img: person5,
        owner_name: 'Esther Howard'
    },
    {
        id: 6,
        image: House6,
        title: '3- Semi Detached Duo Family Building,',
        address: '2464 Royal Ln. Mesa, New Jersey 45463',
        price: '800,000.00 USDC',
        parkSpace: '4',
        bathub: '2',
        meter: '2,096.00 ft',
        owner_img: person6,
        owner_name: 'Jane Cooper'
    },
];

export const WalletType = [
    {
        name: 'Phantom',
        url: OWNED_PROPERTIES,
        icon: Phantom
    },
    {
        name: 'Luno Wallet',
        url: OWNED_PROPERTIES,
        icon: LunoIcon
    },
    {
        name: 'BitKeep Wallet',
        url: OWNED_PROPERTIES,
        icon: BitkeepIcon
    },
    {
        name: 'MetaMask',
        url: OWNED_PROPERTIES,
        icon: MetamaskIcon
    },
];

export const properties = [
    // {
    //     id: 1,
    //     name: 'Stack Park Penthouse',
    //     location: '4140 Parker Rd. Allentown, New Mexico 31134',
    //     price: '88,560 USDC',
    //     valuation: '100,560 USDC',
    //     status: 'Fully Owned',
    //     image: 'https://res.cloudinary.com/dboqyj4bp/image/upload/v1683704421/Rectangle_29_wv90h9.svg'
    // },
    // {
    //     id: 1,
    //     name: 'Stack Park Penthouse',
    //     location: '4140 Parker Rd. Allentown, New Mexico 31134',
    //     price: '88,560 USDC',
    //     valuation: '100,560 USDC',
    //     status: 'Fully Owned',
    //     image: 'https://res.cloudinary.com/dboqyj4bp/image/upload/v1683704421/Rectangle_29_wv90h9.svg'
    // },
    // {
    //     id: 1,
    //     name: 'Stack Park Penthouse',
    //     location: '4140 Parker Rd. Allentown, New Mexico 31134',
    //     price: '88,560 USDC',
    //     valuation: '100,560 USDC',
    //     status: 'Fully Owned',
    //     image: 'https://res.cloudinary.com/dboqyj4bp/image/upload/v1683704421/Rectangle_29_wv90h9.svg'
    // },
]