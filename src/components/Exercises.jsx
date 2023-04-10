import React, {useEffect, useState} from 'react';
import { Pagination } from '@mui/material'
import { exercisesOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import styles from '../style';

const Exercises = ({setExercises, bodyPart, exercises}) => {

  const [ currentPage, setCurrentPage ] = useState(1);
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value ) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  return (
    <div id='exercises' className={` ${styles.boxWidth} mt-[50px] `}>

      <h1 className='text-[30px] font-bold mb-[46px]'>
        Showing Results
      </h1>

      <div className='flex flex-row flex-wrap justify-center'>
        {
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          ))
        }
      </div>

      <div className='flex justify-center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          > 
          </Pagination>
        )}
          
      </div> 
    </div>
  )
}

export default Exercises