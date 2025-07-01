import {reviewData} from '@/Constant';
import {motion, type Variants} from 'framer-motion';

const Review = () => {
  const ReviewVariant: Variants = {
    start: {
      opacity: 0,
      y: '5%'
    },
    end: {
      opacity: 1,
      y: '0%',
      transition: {duration: 2, staggerChildren: 0.3}
    }
  };
  const child: Variants = {
    start: {opacity: 0, y: '10%'},
    end: {opacity: 1, y: '0%'}
  };
  return (
    <section className='mt-20'>
      <motion.h3 variants={ReviewVariant} initial='start' whileInView='end' viewport={{once: true}} className='text-center text-background uppercase'>
        {reviewData.sectionSubtitle}
      </motion.h3>
      <motion.h2 variants={ReviewVariant} initial='start' whileInView='end' viewport={{once: true}} className='text-center text-3xl font-bold mt-5 mb-15'>
        {reviewData.sectionTitle}
      </motion.h2>
      <motion.div variants={ReviewVariant} initial='start' whileInView='end' viewport={{once: true}} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:mx-25'>
        {reviewData.reviewCard.map(({date, reviewAuthor, text, title}, index) => (
          <motion.div variants={child} key={index} className='bg-[#111014] hover:bg-[#16141a] duration-300 p-5 rounded-lg'>
            <h4 className='font-bold text-lg'>{title}</h4>
            <p className='text-gray-400  my-5 text-sm'>{text}</p>

            <div className='text-gray-400 text-sm '>
              <h5>{reviewAuthor}</h5>
              <h5>{date}</h5>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
