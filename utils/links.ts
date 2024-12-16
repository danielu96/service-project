type NavLink = {
    href: string;
    label: string;
};

export const links: NavLink[] = [
    { href: '/', label: 'home' },
    { href: '/profile ', label: 'profile' },
    { href: '/bookings ', label: 'bookings' },
    { href: '/admin', label: 'admin' },
    { href: '/admin/create', label: 'create property' },
];