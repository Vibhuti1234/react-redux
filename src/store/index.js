import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState={counter:0,showCounter:true};

// second approach
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) =>{state.counter += 1},

    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload
    },
    toggle:(state)=>{
      state.showCounter=!state.showCounter
    }

  },
})

const initialAuthState={ 
  isAuthenticated:false
}

const authSlice = createSlice({
  name: 'auth',
  initialState:initialAuthState,
  reducers: {
    login: (state) =>{state.isAuthenticated=true},

    logout: (state) => {
      state.isAuthenticated=false
    }
  }
})

export const { increment, decrement, incrementByAmount,toggle } = counterSlice.actions
export const {login,logout}= authSlice.actions;
const store = configureStore({
  reducer:{ counterReducer:counterSlice.reducer,authReducer:authSlice.reducer}
})


// first approach
// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { counter: state.counter + 1,
//         showCounter:state.showCounter }
//     case 'counter/decremented':
//       return { counter: state.counter - 1,
//         showCounter:state.showCounter }
//     case 'counter/increase':
//       return { counter: state.counter + action.amount ,
//       showCounter:state.showCounter}
//     case 'counter/toggle':
//         return { counter:state.counter,
//         showCounter:!state.showCounter}
//     default:
//       return state
//   }
// }

//const store = createStore(counterReducer);

export default store;