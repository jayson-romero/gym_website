import React from 'react'

import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exersice/${exercise.id}`} className="exercise-card md:mr-[20px]">
        <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy"/>
        <div className='flex gap-[10px]'>
            <buton className="text-[#fff] bg-red text-[14px] rounded-lg capitalize px-[21px] py-[5px]">{exercise.bodyPart}</buton>

            <buton className="text-[#fff] bg-red text-[14px] rounded-lg capitalize px-[21px] py-[5px]">{exercise.target}</buton>
        </div>
        <p className='bold text-[21px] mt-[11px] mb-[10px] capitalize'>{exercise.name}</p>
    </Link>
  )
}

export default ExerciseCard