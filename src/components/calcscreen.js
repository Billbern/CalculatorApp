import { useContext } from 'react';
import { Context } from '../utils/store';

function CalcScreen(){

    // get state from context
    const {state} = useContext(Context);

    // handle input changes
    function handleChange(e){
    }

    return(
        <>
            <input type="text" id="screen" className={`text-right h-28 w-full ${state.theme.screen} ${state.toggle !== 'one'? state.theme.textTwo : state.theme.textOne } text-5xl font-bold px-7 rounded-xl focus:outline-none`}  onChange={ handleChange } value={state.expression} />
        </>
    );
}


export default CalcScreen;