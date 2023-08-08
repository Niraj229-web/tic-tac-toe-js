import React from 'react'

const Box = ({value,onClik}) => {
  return (

      <button 
      className= "m-2 font-bold text-4xl text-center bg-slate-50 hover:bg-slate-500  w-16 h-16 border-4 border-black shadow-xl rounded-xl " onClick={onClik}>
      
      {value}
      
      </button>
  )
}

export default Box
