const initialStateAccount={
    balance:0,
    loan:0,
    loanPerpose:'',
}
//acount reducer
export default function accountReducer(state = initialStateAccount, action){
    switch(action.type){
     case 'account/deposit':
         return {
             ...state,
             balance:state.balance + action.payload
         }
     case 'account/withdraw':
         return{
             ...state,
             balance:state.balance - action.payload,
         }
     case 'account/requestLoan':
         if(state.loan > 0) return;
 
         return {
           ...state,
           loan:action.payload.amount,
           balance:state.balance + action.payload.amount,
           loanPerpose:action.payload.perpose,
         }
     case 'account/payLoan':
        
         return{
             ...state,
             loanPerpose:'',
             loan:0,
             balance:state.balance - state.loan,
         }
     default:
         return state;
    }
 }
 
 //fuction
export  function deposit(amount){
    return {
        type:"account/deposit",
        payload:amount,
    }
}

 export function withdraw(amount){
  return{
    type:'account/withdraw',
    payload:amount,
  }
}

export function requestLoan(amount,perpose){
    return{
        type:'account/requestLoan',
        payload:{amount,perpose}
    }
}

export function payLoan(){
    return{
        type:'account/payLoan'
    }
} 