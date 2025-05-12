import {reviewData} from '@/Constant';

const Review = () => {
  return (
    <section className='mt-20'>
      <h3 className='text-center text-background uppercase'>{reviewData.sectionSubtitle}</h3>
      <h2 className='text-center text-3xl font-bold mt-5 mb-15'>{reviewData.sectionTitle}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:mx-25'>
        {reviewData.reviewCard.map(({date, reviewAuthor, text, title}, index) => (
          <div key={index} className='bg-[#111014] hover:bg-[#16141a] duration-300 p-5 rounded-lg'>
            <h4 className='font-bold text-lg'>{title}</h4>
            <p className='text-gray-400  my-5 text-sm'>{text}</p>

            <div className='text-gray-400 text-sm '>
              <h5>{reviewAuthor}</h5>
              <h5>{date}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
