import {ctaBanner} from '@/assets';
import {Button} from '@/components/ui/button';
import {ctaData} from '@/Constant';
import {motion, type Variants} from 'framer-motion';

const Tracking = () => {
  const TrackingRightVariant: Variants = {
    start: {
      opacity: 0,
      x: '10%'
    },
    end: {
      opacity: 1,
      x: '0',
      transition: {duration: 1.5, staggerChildren: 0.3}
    }
  };
  const TrackingLeftVariant: Variants = {
    start: {
      opacity: 0,
      x: '-10%'
    },
    end: {
      opacity: 1,
      x: '0',
      transition: {duration: 1.5, staggerChildren: 0.3}
    }
  };
  return (
    <section>
      <div className='bg-background rounded-2xl mx-auto pt-20 pb-5 md:w-160 lg:w-250 md:py-5 pl-10  flex flex-col gap-10 md:flex-row lg:justify-between items-center mt-20'>
        <motion.img variants={TrackingRightVariant} initial='start' whileInView='end' viewport={{once: true}} className=' md:w-80 lg:w-100 self-end  md:order-2' src={ctaBanner} alt='ctaBanner' />
        <motion.div variants={TrackingLeftVariant} initial='start' whileInView='end' viewport={{once: true}} className='md:w-80 lg:150'>
          <h2 className='text-4xl font-bold mb-5'>{ctaData.text}</h2>
          <div className='flex gap-x-2'>
            <Button>Free Trial</Button>
            <Button variant='outline'>Pricing & Plans</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tracking;
