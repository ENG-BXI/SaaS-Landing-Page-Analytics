import {brands} from '@/assets';
import {motion, type Variants} from '@/../node_modules/framer-motion';

const brandsVariant: Variants = {
  start: {
    opacity: 0,
    y: '-50%'
  },
  end: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 2,
      staggerChildren: 0.3
    }
  }
};

const child: Variants = {
  start: {opacity: 0, y: '0%'},
  end: {opacity: 1, y: '0%'}
};
const Brands = () => {
  return (
    <section className='text-center -mt-30'>
      <motion.h3 variants={brandsVariant} initial='start' whileInView='end' viewport={{once: true}}>
        Powering data insights For today's startup and tomorrow's leader
      </motion.h3>
      <motion.div variants={brandsVariant} initial='start' whileInView='end' viewport={{once: true}} className='flex flex-wrap gap-5 justify-center mt-5'>
        {brands.map((img, index) => (
          <motion.img variants={child} className='opacity-50 h-10' key={index} src={img} alt='img' />
        ))}
      </motion.div>
    </section>
  );
};

export default Brands;
