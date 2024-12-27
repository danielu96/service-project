import { IconType } from 'react-icons';
import { BsHeartPulseFill, BsBank2, BsThermometerSun } from "react-icons/bs";


type Category = {
    label: CategoryLabel;
    icon: IconType;
};

export type CategoryLabel =
    | 'activ'
    | 'luxury'
    | 'exotic';


export const categories: Category[] = [
    {
        label: 'activ',
        icon: BsHeartPulseFill,
    },
    {
        label: 'luxury',
        icon: BsBank2,
    },
    {
        label: 'exotic',
        icon: BsThermometerSun,
    },
];