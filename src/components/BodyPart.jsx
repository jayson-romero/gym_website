import React from 'react'
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart}) => {
  return (
    <div className={`${item === bodyPart ? "border" : "border-0"} w-[270px] h-[280px] cursor-pointer gap-[47px]`}>
      <img src={Icon} alt="dumbbrell"/>
      <p>
         {item}
      </p>
    </div>
    
  )
}

export default BodyPart