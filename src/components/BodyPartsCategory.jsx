import React from 'react'
import BodyPart from './BodyPart';


const BodyPartsCategory = ({data, bodyPart, setBodyPart}) => {
  return (
    <div className='flex'>
       {data.map((item) => 
         <div className=''
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
         >
            <BodyPart item={item} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}/>
         </div>
       )}
    </div>
  )
}

export default BodyPartsCategory