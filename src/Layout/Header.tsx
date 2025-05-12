import {favicon, logo} from '@/assets';
import {Button} from '@/components/ui/button';
import {navMenu} from '@/Constant';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className='container px-5 mx-auto my-5 flex justify-between items-center'>
      <img className='hidden md:block w-45 h-7' src={logo} alt='logo' />
      <img className=' h-7 md:hidden' src={favicon} alt='logo' />
      {/* Links */}
      <ul className='hidden lg:flex gap-x-5'>
        {navMenu.map(({href, label}) => (
          <a href={href}>{label}</a>
        ))}
      </ul>
      {/* Buttons  */}
      <div className='hidden lg:flex gap-x-2'>
        <Button className='bg-transparent'>Sign in</Button>
        <Button variant='default' className='bg-background'>
          Free Trial
        </Button>
      </div>
      <Menu className='lg:hidden' />
    </header>
  );
};

export default Header;
