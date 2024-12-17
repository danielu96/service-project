type NavLink = {
    href: string;
    label: string;
};

export const links: NavLink[] = [
    { href: '/', label: 'home' },
    { href: '/favorites ', label: 'favorites' },
    { href: '/profile ', label: 'profile' },
    { href: '/admin', label: 'admin' },
    { href: '/admin/create', label: 'create property' },
];