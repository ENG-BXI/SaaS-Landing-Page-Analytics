import {ctaBanner} from '@/assets';
import {Button} from '@/components/ui/button';
import {ctaData} from '@/Constant';

const Tracking = () => {
  return (
    <section>
      <div className='bg-background rounded-2xl mx-auto pt-20 pb-5 md:w-160 lg:w-250 md:py-5 pl-10  flex flex-col gap-10 md:flex-row lg:justify-between items-center mt-20'>
        <img className=' md:w-80 lg:w-100 self-end  md:order-2' src={ctaBanner} alt='ctaBanner' />
        <div className='md:w-80 lg:150'>
          <h2 className='text-4xl font-bold mb-5'>{ctaData.text}</h2>
          <div className='flex gap-x-2'>
            <Button>Free Trial</Button>
            <Button variant='outline'>Pricing & Plans</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
