import {overviewBanner} from '@/assets';
import {overviewData} from '@/Constant';
import {motion, type Variants} from 'framer-motion';
import {Play} from 'lucide-react';

const Overview = () => {
  const OverViewVariant: Variants = {
    start: {
      opacity: 0,
      y: '5%'
    },
    end: {
      opacity: 1,
      y: '0%',
      transition: {duration: 2, }
    }
  };
  return (
    <motion.section variants={OverViewVariant} initial='start' whileInView='end' viewport={{once: true}} className='text-center mt-20'>
      <div className='md:w-115 mx-auto '>
        <h3 className='uppercase text-background'>{overviewData.sectionSubtitle}</h3>
        <h2 className='my-5 text-3xl'>{overviewData.sectionTitle}</h2>
        <p className='text-gray-400'>{overviewData.sectionText}</p>
      </div>
      <div className='relative my-10'>
        <img className='mx-auto' src={overviewBanner} alt='overviewBanner' />
        <div className='absolute top-1/2 left-1/2 bg-gray-800 hover:bg-gray-700 cursor-pointer p-2 rounded-sm '>
          <Play fill='white' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-x-5 gap-y-10  justify-center'>
        <h2 className='text-start font-bold text-4xl md:w-120'>{overviewData.listTitle}</h2>
        <div className='grid grid-cols-3 md:grid-cols-2 gap-2  justify-center  '>
          {overviewData.list.map(({text, title}, index) => (
            <div className={`${index === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
              <h4 className='text-2xl font-bold'>{title}</h4>
              <p className='text-gray-400 '>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Overview;
