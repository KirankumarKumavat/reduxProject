import { ADDITION,SUBSCRIPTION } from "./actionType";

const initialistate = {
    counter: 0
}


export const mainReducer = (state = initialistate,action) => {

    switch (action.type) {
        case ADDITION:
            return{...state,counter:state.counter + 1};
        
            case SUBSCRIPTION:
                return{...state,counter:state.counter - 1};
        default:
            return state;
    }
}  


// import { INCREASE_BURGER,DECREASE_BURGER } from "./actionType";

// const initialistate = {
//     numberOfBurger: 30
// }

// export const burgerReducer = (state = initialistate,action) => {

//     switch (action.type) {
//         case INCREASE_BURGER:
//             return{...state,numberOfBurger:state.numberOfBurger + action.payload};
        
//             case DECREASE_BURGER:
//                 return{...state,numberOfBurger:state.numberOfBurger - 1};
//         default:
//             return state;
//     }
// }  