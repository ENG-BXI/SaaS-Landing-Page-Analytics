import {processBanner} from '@/assets';
import {processData} from '@/Constant';
const Process = () => {
  return (
    <section className='mt-20'>
      <div className='text-center mx-auto md:w-110 mb-10'>
        <h3 className='uppercase text-background'>{processData.sectionSubtitle}</h3>
        <h2 className='text-3xl my-2'>{processData.sectionTitle}</h2>
        <p className='text-gray-400'>{processData.sectionText}</p>
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-5 justify-center items-center'>
        <div className='flex flex-col gap-y-4'>
          {processData.list.map(({icon, text, title}) => (
            <div className='flex items-start gap-x-4 h-25 md:w-110 '>
              <div className='border border-gray-800 rounded-full p-2 w-min h-min'>{icon}</div>
              <div className='flex flex-col gap-y-1'>
                <h3 className='font-bold'>{title}</h3>
                <p className='text-gray-400 text-sm'>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='bg-background md:w-100 p-10 pb-0 rounded-3xl'>
          <img className='' src={processBanner} alt='processBanner' />
        </div>
      </div>
    </section>
  );
};

export default Process;
