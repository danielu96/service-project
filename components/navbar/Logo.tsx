export default Logo
import Link from 'next/link';
import { LuTent } from 'react-icons/lu';
import { Button } from '../ui/button';
import { Gi3dHammer } from "react-icons/gi";
function Logo() {
    return (
        <Button size='icon' asChild>
            <Link href='/'>
                <Gi3dHammer className='w-20 h-6 px-0.8' />
                <span>Pick</span>
            </Link>

        </Button>
    );
}