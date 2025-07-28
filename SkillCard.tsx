import Image from 'next/image';
import React from 'react'

type Props = {
  skill:{
    id:string;
    title:string;
    image:string;
    percent:string;
  }
}
const SkillCard = ({skill}:Props) => {
  const {image,title,percent} = skill;
  return (
    <div className='p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900'>
      <Image src={image} alt={title} height={80} width={80} className='object-cover mx-auto'/>
      <h1 className='text-[18px] mt-4 font-semibold text-white'>{title}</h1>
      <div className='bg-black p-2 mt-4 rounded-lg text-white opacity-40'>{percent}</div>
    </div>
  )
}

export default SkillCard
