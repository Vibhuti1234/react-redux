import classes from './Counter.module.css';
import {increment,decrement,toggle,incrementByAmount} from '../store/index'
import { useDispatch,useSelector} from 'react-redux';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  const showCounter=useSelector((state)=>state.counterReducer.showCounter)
  const toggleCounterHandler = () => {
    dispatch(toggle())
  };
 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>IncreasedBy10</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
