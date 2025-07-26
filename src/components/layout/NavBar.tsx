import Logo from '@/assets/logo';
import {NavLink} from 'react-router';
import {ModeToggle} from '../mode-toggle';

export default function NavBar() {
    return (
        <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5'>
            <div className='flex items-center'>
                <Logo /> <span className='font-bold ml-2'>Task</span>Manager
            </div>
            <NavLink to='/tasks'>Tasks</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <div>
                <ModeToggle />
            </div>
        </nav>
    );
}
