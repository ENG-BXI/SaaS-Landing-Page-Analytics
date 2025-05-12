import {overviewBanner} from '@/assets';
import {Button} from '@/components/ui/button';
import {heroData} from '@/Constant';
import {PlayCircle} from 'lucide-react';

const Hero = () => {
  return (
    <section className='text-center'>
      <div className='md:w-160 mx-auto mb-10'>
        <h3 className='bg-gray-900 uppercase w-min my-10 text-nowrap rounded-2xl px-2 mx-auto'>{heroData.sectionSubtitle}</h3>
        <h1 className='text-3xl md:text-6xl mx-auto'>
          {heroData.sectionTitle} <span className='bg-gray-900 shadow-[0px_0px_10px_3px_rgba(255,255,255,0.1)_inset] rounded-3xl text-3xl md:text-6xl leading-8 md:leading-10 md:pb-3 px-2 inline-block'>{heroData.decoTitle}</span>
        </h1>
        <p className='my-5 text-gray-400'>{heroData.sectionText}</p>
        <div className='flex gap-3 justify-center items-center '>
          <Button className='bg-background'>Start Free Trial</Button>

          <Button variant='ghost'>
            <PlayCircle /> Watch Video
          </Button>
        </div>
      </div>
      <div className='overflow-hidden mx-auto drop-shadow-[0_0_100px] drop-shadow-background '>
        <img className='object-fit-cover mx-auto' src={overviewBanner} alt='Hero_Image' />
      </div>
    </section>
  );
};

export default Hero;
