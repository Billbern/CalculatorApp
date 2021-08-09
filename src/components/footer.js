import { useContext } from 'react';
import { Context } from '../utils/store';

function Footer() {
    
    // get state from store context 
    
    const {state} = useContext(Context);

    return(
        <footer className={`text-xs ${state.toggle !== 'one' ? state.theme.textTwo : state.theme.textOne} mt-8 mx-auto w-max`}>
            {/* text-cust-red-one text-cust-orange-three text-cust-cyan-three text-cust-blue-four text-cust-cyan-one text-cust-voilet-three mix-blend-multiply mix-blend-darken mix-blend-lighten mix-blend-saturation  */}
            Challenge by <a className={`text${state.theme.keybutThree.split(' ')[0].substring(2,)} `} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" >Frontend Mentor</a>.
            Coded by <a className={`text${state.theme.keybutThree.split(' ')[0].substring(2,)} `} href="https://www.github.com/Billbern" target="_blank" rel="noreferrer">Billbern</a>.
        </footer>
    );
}

export default Footer;