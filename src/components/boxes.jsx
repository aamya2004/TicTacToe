import React, { useState } from 'react'

const Boxes = () => {

  //const divs = [1,2,3,4,5,6,7,8,9]
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState(true);

  const handleOnClick = (index) =>{
    console.log(index)
    if(squares[index] || checkWinner(squares)){
      checkWinner(squares);
    }
    const newSquares = squares.slice();
    newSquares[index] = nextTurn ? "X" : "O";
    setSquares(newSquares);
    setNextTurn(!nextTurn);
        
  }

  const checkWinner = (squares) =>{
    const conditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i = 0 ; i<conditions.length ; i++){
        const [a,b,c] = conditions[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          console.log("winner is here ");
          console.log(conditions[i]);
          return squares[a];
        }
    }
    return null;

  }

  const winner = checkWinner(squares);

  return (
    <>
    {
        squares.map((value,index)=>(
            <div onClick={() => handleOnClick(index)} className="border-2 border-rose-400 cursor-pointer text-white text-8xl" >{value}</div>
        ))
        
    }
      <div>
        <h1>The Winner is</h1>
        <h2>{winner}</h2>
      </div>
    </>
  )
}

export default Boxes