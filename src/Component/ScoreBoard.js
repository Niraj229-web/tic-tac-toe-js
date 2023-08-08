import React from 'react'

const ScoreBoard = ({scores,xplay}) => {

    const{ xScores, oScores } = scores;

  return (
    <div className='flex flex-row items-center justify-evenly bg-slate-400 w-[20rem] my-[3rem] mx-auto h-10 rounded-lg font-extrabold shadow-2xl border-black border-2'>
      <span className={` score x-score ${!xplay && "inactive"} text-red-600 text-xl border-b-4 border-red-600`}> X - {xScores}</span>
      <span className={` score o-score ${xplay && "inactive"} text-green-600 text-xl
      border-b-4 border-green-600`}> O - {oScores}</span>
    </div>
  )
}

export default ScoreBoard
