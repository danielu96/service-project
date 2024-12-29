import { IconType } from 'react-icons';
export type Amenity = {
    name: string;
    icon: IconType;
    selected: boolean;
};
import {
    FiBox,
    FiDroplet,

} from 'react-icons/fi';

export const amenities: Amenity[] = [
    {
        name: 'air conditioning',
        icon: FiBox,
        selected: false,
    },

    { name: 'towels', icon: FiDroplet, selected: false },

];

export const conservativeAmenities: Amenity[] = [
    { name: 'air conditioning', icon: FiBox, selected: false },
    { name: 'towels', icon: FiDroplet, selected: false }
];