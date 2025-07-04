import {overviewBanner} from '@/assets';
import {Button} from '@/components/ui/button';
import {heroData} from '@/Constant';
import {PlayCircle} from 'lucide-react';
import {motion, type Variants} from '@/../node_modules/framer-motion';
import {ContainerScroll} from '@/components/ui/container-scroll-animation';
import {ContainerTextFlip} from '@/components/ui/container-text-flip';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const Hero = () => {
  const headerVariant: Variants = {
    start: {opacity: 0, y: '-30%'},
    end: {opacity: 1, transition: {duration: 1}, y: '0'}
  };
  return (
    <section className='text-center'>
      <div className='md:w-160 mx-auto'>
        <BackgroundGradient  className='bg-transparent text-white bg-gray-900 uppercase text-nowrap rounded-2xl px-2 '>
          {heroData.sectionSubtitle}
        </BackgroundGradient>
        <motion.h1 variants={headerVariant} initial='start' animate='end' className='text-3xl md:text-6xl mx-auto'>
          {heroData.sectionTitle} <ContainerTextFlip className='bg-gray-900 text-white shadow-[0px_0px_10px_3px_rgba(255,255,255,0.1)_inset] rounded-3xl  text-3xl md:text-6xl leading-8 md:leading-10 md:pb-3 px-2 inline-block' words={[heroData.decoTitle, 'Insights', 'Precision', 'Actionable']} />
        </motion.h1>
        <motion.p variants={{...headerVariant, end: {opacity: 1, transition: {duration: 1, delay: 0.3}, y: '0'}}} initial='start' animate='end' className='my-5 text-gray-400'>
          {heroData.sectionText}
        </motion.p>
        <motion.div variants={{...headerVariant, end: {opacity: 1, transition: {duration: 1.2, delay: 1}, y: '0'}}} initial='start' animate='end' className='flex gap-3 justify-center items-center '>
          <Button className='bg-background'>Start Free Trial</Button>
          <Button variant='ghost'>
            <PlayCircle /> Watch Video
          </Button>
        </motion.div>
      </div>
      <motion.div variants={{...headerVariant, end: {opacity: 1, transition: {duration: 1.2, delay: 1}, y: '0'}}} initial='start' animate='end' className='overflow-hidden mx-auto drop-shadow-[0_0_100px] drop-shadow-background'>
        <ContainerScroll titleComponent=''>
          <img className='object-fit-cover mx-auto' src={overviewBanner} alt='Hero_Image' />
        </ContainerScroll>
      </motion.div>
    </section>
  );
};

export default Hero;
