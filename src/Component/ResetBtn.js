import React from 'react'

const ResetBtn = ({resetBoard}) => {
  return (
    <div>
      <button onClick={resetBoard} className='border-black border-2 bg-sky-400 rounded-lg w-40 h-10 my-[3rem] mx-auto block font-bold shadow-sky-400 hover:bg-sky-300'>Reset</button>
    </div>
  )
}

export default ResetBtn
