import { Input } from '../ui/input';

function NavSearch() {
    return (
        <Input
            type='search'
            placeholder='find a property...'
            className='w-auto my-20 p-4 mx-auto border-b-2 bg-white'
        />
    );
}
export default NavSearch;