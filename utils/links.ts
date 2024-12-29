type NavLink = {
    href: string;
    label: string;
};

export const links: NavLink[] = [
    { href: '/', label: 'home' },
    { href: '/favorites ', label: 'favorites' },
    { href: '/profile ', label: 'profile' },
    { href: '/bookings ', label: 'bookings' },
    { href: '/reviews ', label: 'reviews' },
    { href: '/admin', label: 'admin' },
    { href: '/admin/create', label: 'create property' },
];