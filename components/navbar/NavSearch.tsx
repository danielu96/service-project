"use client"
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect, Suspense } from 'react';

function NavSearch() {
    const searchParams = useSearchParams();
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
        replace(`/?${params.toString()}`);
    }, 300);
    useEffect(() => {
        if (!searchParams.get('search')) {
            setSearch('');
        }
    }, [searchParams.get('search')]);
    return (
        // <Suspense fallback={<div>Loading...</div>}>
        <Input
            type='search'
            placeholder='find a property...'
            className='max-w-xs dark:bg-muted '
            onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
            }}
            value={search}
        />
        // </Suspense>
    );
}

export default function NavSearchWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NavSearch />
        </Suspense>
    );
}

// export default NavSearch;