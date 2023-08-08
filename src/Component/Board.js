
import Box from './Box'

const Board = ({board,onClik}) => {
    

  return (

    <div className=' grid grid-rows-3 grid-flow-col gap-3 place-items-center justify-center'>
        {board.map((value,index) => { 
            return <Box 
                    onClik={()=> value === null && onClik(index)} 
                    value={value} key={index}/>
                    })}
    </div>
  )
}

export default Board