import React, {useEffect, useState } from 'react'

import {exercisesOptions, fetchData} from '../utils/fetchData';
import BodyPartsCategory from './BodyPartsCategory';

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

        <div className='overflow-x-scroll max-w-[900px] '>
          <BodyPartsCategory 
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          />
        </div>

    </div>
  )
}

export default SearchExercises