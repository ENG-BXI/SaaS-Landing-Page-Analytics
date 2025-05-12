import {Button} from '@/components/ui/button';
import {featureData} from '@/Constant';
import {ArrowRight} from 'lucide-react';

const Features = () => {
  return (
    <section className='mt-20'>
      <div className='text-center md:w-120 mx-auto'>
        <h3 className='text-background uppercase  '>{featureData.sectionSubtitle}</h3>
        <h2 className='font-bold  text-3xl my-3'>{featureData.sectionTitle}</h2>
        <p className='text-gray-400'>{featureData.sectionText}</p>
      </div>
      <div className='mt-10 md:mx-35 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-3 justify-center items-start '>
        {featureData.features.map(({title, desc, icon, iconBoxColor, imgSrc}) => (
          <div className={`bg-[#111014] duration-300  p-5 rounded-3xl hover:bg-[#16141a] ${imgSrc ? 'col-span-1 md:col-span-2 lg:col-span-3' : 'col-span-1 lg:col-span-2 h-65'}`}>
            <div className={`${iconBoxColor} w-min p-2 rounded-full `}>{icon}</div>
            <h3 className='my-4 font-bold'>{title}</h3>
            <p className='text-gray-400 text-sm'>{desc}</p>
            <Button variant='link' className='text-background p-0!'>
              Learn More <ArrowRight />
            </Button>
            {imgSrc && <img src={imgSrc} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
