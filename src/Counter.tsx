import { func } from 'prop-types';
import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DESCREASE'}; // 타입 정의

// 리듀서 구현
function reducer(state: number, action: Action): number {
  switch(action.type){
    case 'INCREASE':
      return state + 1;
    case 'DESCREASE':
      return state - 1;
    default:
      throw new Error('unhandled action type')
  }
}

function Counter() {
  // const [count, setCount] = useState<number>(0); 
  // const [count, setCount] = useState(0); // 제너릭하고 똑같음
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' })
  const onDecrease = () => dispatch({ type: 'DESCREASE' })
  return(
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter;