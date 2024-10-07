'use client';
import { Input } from '../ui/input';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

function NavSearch() {
    const searchParams = useSearchParams();
    // console.log(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter();
    const [search, setSearch] = useState(
        searchParams.get('search')?.toString() || ''
    );
    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    useEffect(() => {
        if (!searchParams.get('search')) {
            setSearch('');
        }
    }, [searchParams.get('search')]);
    return (
        <Input
            type='search'
            placeholder='find a property...'
            className='w-auto my-20 p-4 mx-auto border-b-2 bg-white'
            onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
            }}
            value={search}
        />
    );
}
export default NavSearch;