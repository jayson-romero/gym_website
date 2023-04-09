import React, {useEffect, useState} from 'react';

import { exercisesOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({setExercises, bodyPart, exercises}) => {

  return (
    <div id='exercises' className='mt-[50px]'>

      <h1 className='text-[30px] font-bold mb-[46px]'>
        Showing Results
      </h1>

      <div className='flex flex-row flex-wrap justify-center'>
        {
          exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          ))
        }
      </div>

    </div>
  )
}

export default Exercises