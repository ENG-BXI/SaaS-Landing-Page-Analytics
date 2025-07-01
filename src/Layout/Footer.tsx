import {logo} from '@/assets';
import {footerData} from '@/Constant';
import {motion, type Variants} from 'framer-motion';

const Footer = () => {
  const FooterVariant: Variants = {
    start: {
      opacity: 0,
      y: '10%'
    },
    end: {
      opacity: 1,
      y: '0',
      transition: {duration: 1.5, staggerChildren: 0.3}
    }
  };
  return (
    <motion.footer variants={FooterVariant} initial='start' whileInView='end' viewport={{once: true}} className='mt-20 container mx-auto grid grid-cols-2 gap-10 p-5 md:grid-cols-6'>
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
    </motion.footer>
  );
};

export default Footer;
