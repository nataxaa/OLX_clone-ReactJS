

const inicialState = {
    email: ''
}

export default (state = inicialState, action: any) => {

    if(action.type == 'SET_EMAIL'){
        return{...state, email:action.payload.email};
    }
    return state
}