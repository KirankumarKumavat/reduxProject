import { ADDITION,SUBSCRIPTION } from "./actionType";

export const addition = () => ({
    type:ADDITION
})

export const subscription = () => ({ 
    type:SUBSCRIPTION
})  

// import { INCREASE_BURGER,DECREASE_BURGER } from "./actionType";

// export const increaseBurgeraction = (parameter) => {
//     return{
//         type:INCREASE_BURGER,
//         payload:parameter
//     }
// }

// export const DecreaseBurgeraction = () => { 
//     return{
//         type:DECREASE_BURGER
//     }
// }