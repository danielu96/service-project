import { categories } from '@/utils/categories';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import Link from 'next/link';

function CategoriesList({
    category,
    search,
}: {
    category?: string;
    search?: string;
}) {
    const searchTerm = search ? `&search=${search}` : '';
    return (
        <section>
            <ScrollArea className='py-1'>
                <div className='container flex flex-row text-2xl sm:gap-6'>
                    <div className='md:ml-8 mt-2 px-2  cursor-pointer duration-300 hover:text-slate-500 rounded-lg'><Link href='/'>All</Link></div>

                    {categories.map((item) => {
                        const isActive = item.label === category;
                        return (

                            <Link
                                key={item.label}
                                href={`/?category=${item.label}${searchTerm}`}
                            >
                                <article
                                    className={` py-1 flex flex-col items-center cursor-pointer duration-300 hover:text-slate-500  ${isActive ? ' font-bold underline' : ''}`}>
                                    {/* <item.icon className='w-8 h-8' /> */}
                                    <p className='px-1 capitalize mt-1  rounded-e-xl border-solid border-spacing-1 border-indigo-600'>{item.label}</p>
                                </article>
                            </Link>
                        );
                    })}
                </div>
                <ScrollBar orientation='horizontal' />
            </ScrollArea>
        </section>
    );
}
export default CategoriesList;