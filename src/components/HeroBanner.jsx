import HeroImage from '../assets/images/heroImage.jpg'
import styles from '../style';

const HeroBanner = () => {
  return (
    <div className={`${styles.boxWidth} lg:flex lg:justify-around `}>

        <div className='lg:mt-[150px] xxl:ml-[200px]'>
          <h1 className='text-[30px] font-bold text-red'>
            Fitness Center
          </h1>
          <p className='text-[50px] font-bold leading-[55px] pb-[10px]'>
            Sweat, Smile <br/> and Repeat
          </p>
          <p className='text-[18px] pb-[10px]'>
            Check out the most effective exercises.
          </p>

          <button className='bg-red text-white rounded-lg font-bold py-[10px] px-[30px] mb-[20px] lg:mb-[100px]'>
            <a href='#exercises'>Explore Exerises</a>    
          </button>
          <p className='hidden lg:block text-[200px] pb-[10px] font-bold opacity-10 text-red'>
            EXERCISES
          </p>

          </div>

        <div className=''>
          <img src={HeroImage} alt="Hero Image" className='lg:absolute top-40  right-40 2xl:right-80 lg:w-[450px]'/>
        </div>

    </div>
  )
}

export default HeroBanner