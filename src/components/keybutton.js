import { useContext } from 'react';
import { Context } from '../utils/store';

function KeyButton(props) {

    const {state, dispatch} = useContext(Context);

    
    function handleClick(val){
        if((val !== 'DEL') && (val !== 'RESET') && (val !== '=')){
            const value = val === 'X' ? '*' : val;
            dispatch({ type : 'SET_EXPRESSION', payload: value})
        }else if(val === 'DEL'){
            dispatch({ type : 'DELETE_LAST'});
        }else if(val === 'RESET'){
            dispatch({type: 'RESET_EXPRESSION'})
        }else if(val === '='){
            try {
                const newvalue = Function(`"use strict"; return (${state.expression})`)()   
                dispatch({type: 'RESET_EXPRESSION'})
                dispatch({type: 'SET_EXPRESSION', payload: newvalue})
            } catch (err) {
                console.error(err);
                dispatch({type: 'RESET_EXPRESSION'})
                dispatch({type: 'SET_EXPRESSION', payload: 'ERROR'})
            }
            
        }
    }

    return (
        <button onClick={ () => handleClick(props.value) } className={`h-16 ${props.color} ${props.bgColor} ${props.shadow} rounded-xl ${props.fontSize} font-bold ${props.span}`} data-value={props.value} >{props.value}</button>
    );
}

export default KeyButton;