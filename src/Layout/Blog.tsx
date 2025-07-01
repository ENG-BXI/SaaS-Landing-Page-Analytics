import {blogData} from '@/Constant';
import {motion, type Variants} from 'framer-motion';

const Blog = () => {
  const BlogVariant: Variants = {
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
    <motion.section variants={BlogVariant} initial='start' whileInView='end' viewport={{once: true}} className='mt-20'>
      <div className='text-center mx-auto md:w-120 mb-10'>
        <h3 className='text-background uppercase'>{blogData.sectionSubtitle}</h3>
        <h2 className='font-bold text-3xl my-2'>{blogData.sectionTitle}</h2>
        <p className='text-gray-400'>{blogData.sectionText}</p>
      </div>
      <motion.div variants={BlogVariant} initial='start' whileInView='end' viewport={{once: true}} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:mx-35'>
        {blogData.blogs.map(({author, badge, imgSrc, title}) => (
          <motion.div variants={child} viewport={{once: true}} className='bg-[#111014] col-span-1 p-5 rounded-lg group '>
            <div className='rounded-md overflow-hidden'>
              <img className='object-fit-contain group-hover:scale-104 duration-300' src={imgSrc} alt={title} />
            </div>
            <h5 className='bg-background w-min text-sm px-2 rounded my-3'>{badge}</h5>
            <h4 className='font-bold mb-3 group-hover:text-background duration-300'>{title}</h4>
            <div className='flex gap-x-2 items-center'>
              <img className='rounded-full w-10 h-10' src={author.avatarSrc} alt={author.authorName} />
              <div className='text-sm'>
                <h5>{author.authorName}</h5>
                <p className='text-gray-400 '>
                  <span>{author.publishDate}</span>
                  <span>{author.readingTime}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Blog;
