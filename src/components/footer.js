import { useContext } from 'react';
import { Context } from '../utils/store';

function Footer() {
    
    // get state from store context 
    // text-cust-red-one text-cust-orange-three text-cust-cyan-three
    
    const {state} = useContext(Context);

    return(
        <div ariaRole="footer" className={`text-xs ${state.toggle !== 'one' ? state.theme.textTwo : state.theme.textOne} mt-4 sm:mt-0 mx-auto w-max`}>
            Challenge by <a className={`text${state.theme.keybutThree.split(' ')[0].substring(2,)}`} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" >Frontend Mentor</a>.
            Coded by <a className={`text${state.theme.keybutThree.split(' ')[0].substring(2,)}`} href="https://www.github.com/Billbern" target="_blank" rel="noreferrer">Billbern</a>.
        </div>
    );
}

export default Footer;