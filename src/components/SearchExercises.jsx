import React, {useEffect, useState , useRef  } from 'react'

import {exercisesOptions, fetchData} from '../utils/fetchData';
import BodyPartsCategory from './BodyPartsCategory';

import toright from '../assets/icons/right-arrow.png'
import toleft from '../assets/icons/left-arrow.png'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [ search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
          const fetchExerciseData = async () => {
          const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

          setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExerciseData();
    },[])

    //search Function
    const handleSearch =  async () => {
      //if input as value
      if(search) {
        //calling fetchdata function from utils that accept 2 parameters
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);

        const searchExercises = exercisesData.filter(
          (exercise) => exercise.name.toLocaleLowerCase().includes(search) 
          || exercise.target.toLocaleLowerCase().includes(search)
          || exercise.equipment.toLocaleLowerCase().includes(search)
          || exercise.bodyPart.toLocaleLowerCase().includes(search)
        )

        setSearch('');
        setExercises(searchExercises)
      }
    }

    const containerRef = useRef(null);
  
    const handleNextClick = () => {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 270,
        behavior: 'smooth'
      });
    };

    const handlebackClick = () => {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 270,
        behavior: 'smooth'
      });
    };
 
  return (
    <div className='mt-[20px] md:mt-[40px] flex flex-col justify-center items-center'>

          <h1 className='text-[20px] leading-[30px] md:text-[30px] lg:text-[44px] font-semibold text-center lg:leading-[50px] mb-[20px] lg:mb-[70px] '>
            Awesome Exercises You <br/> Sould Know
          </h1>

         <div className='relative'>
            <input type="text" 
            placeholder='Search Exercises' 
            className='border pl-[10px] lg:pl-[20px] lg:text-[20px] w-[350px] md:w-[500px] lg:w-[800px] xl:w-[950px] h-[50px] lg:h-[76px] ' 
            value={search} 
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}/>

            <button 
            className='searc-btn absolute right-0 px-[20px] py-[11px] lg:px-[50px] lg:py-[21px] lg:text-[20px]'
            onClick={handleSearch}
            >
                Search
            </button>
        </div> 

        <div className='overflow-hidden max-w-[270px] md:max-w-[650px] lg:max-w-[1200px] ' ref={containerRef}>
          <BodyPartsCategory 
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          />
        </div>

        <div className='flex flex-row-reverse gap-[10px] '>
          <button onClick={handleNextClick} className="border border-slate-950 hover:border hover:border-red p-[5px]">
            <img src={toright} alt="right arrow" />
          </button>
          <button onClick={handlebackClick} className="border border-slate-950 hover:border hover:border-red p-[5px]">
            <img src={toleft} alt="left arrow"  />
          </button>
        </div>
    </div>
  )
}

export default SearchExercises