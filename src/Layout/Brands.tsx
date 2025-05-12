import {brands} from '@/assets';

const Brands = () => {
  return (
    <section className='text-center mt-10'>
      <h3>Powering data insights For today's startup and tomorrow's leader</h3>
      <div className='flex flex-wrap gap-5 justify-center mt-5'>
        {brands.map((img, index) => (
          <img className='opacity-50 h-10' key={index} src={img} alt='img' />
        ))}
      </div>
    </section>
  );
};

export default Brands;
