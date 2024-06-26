const initialStateCustomer={
    fullName:'',
    nationalID:'',
    createAt:'',
}

//reducer function
export default function customerReducer(state = initialStateCustomer,action){
    switch(action.type){
     case 'customer/createCustomer':
         return{
             ...state,
             fullName:action.payload.fullName,
             nationalID:action.payload.nationalID,
             createAt:action.payload.createAt,
         }
     case 'customer/customerUpdate':
         return{
             ...state,
             fullName:action.payload.fullName,
         }
     default:
         return state
    }
 }
 

 //functions
export  function createCustomer(fullName,nationalID){
    return{
        type:'customer/createCustomer',
        payload:{fullName,nationalID,createAt:new Date().toISOString()}
    }
}

export function customerUpdate(fullName){
    return{
      type:'customer/customerUpdate',
      payload:fullName,
    }
}