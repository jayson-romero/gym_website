import React from 'react'
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart}) => {


 
  return (


    <div className={`${item === bodyPart ? "border-b-4 border-indigo-500" : "border-0"} flex items-center justify-center flex-col w-[270px] h-[290px] cursor-pointer gap-[47px] mb-[10px]`}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth' })
    }}
    >

      <img src={Icon} alt="dumbbrell" className='w-[40px] h-[40px]'/>

      <p className='text-[24px] font-bold capitalize'>
         {item}
      </p>

     
    </div>
 
  )
}

export default BodyPart