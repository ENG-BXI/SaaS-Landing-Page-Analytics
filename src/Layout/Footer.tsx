import {logo} from '@/assets';
import {footerData} from '@/Constant';

const Footer = () => {
  return (
    <footer className='mt-20 container mx-auto grid grid-cols-2 gap-10 p-5 md:grid-cols-6'>
      <img className='col-span-2' src={logo} alt='logo' />
      {footerData.links.map(({items, title}) => (
        <div>
          <h5 className='mb-5 font-bold'>{title}</h5>
          <div className='flex flex-col gap-y-1 text-gray-400 '>
            {items.map(({href, label}) => (
              <a className='hover:text-background cursor-pointer' href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
