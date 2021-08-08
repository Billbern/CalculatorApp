
const Reducer = (state, action) => {
    switch(action.type){
        case 'SET_EXPRESSION':
            return {
                ...state,
                expression: state.expression.concat(action.payload)
            }
        case 'DELETE_LAST':
            return {
                ...state,
                expression: state.expression.substring(0, state.expression.length-1)
            }
        case 'RESET_EXPRESSION':
            return {
                ...state,
                expression: ''
            }
        case 'SET_THEME':
            return{
                ...state,
                toggle: action.payload.toggle,
                theme: action.payload.theme
            }
        default:
            return state
    }
}

export default Reducer;
