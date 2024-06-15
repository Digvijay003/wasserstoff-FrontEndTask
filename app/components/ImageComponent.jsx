import React from 'react'


export default function ImageComponent({url}) {
  return (
    <div className='w-14 h-4'>
        <img
        src={url}
       
       
        alt="Picture of the author"
        />

    </div>
  )
}
