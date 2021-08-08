import { useState, useContext } from 'react';
import { Context } from '../utils/store';


function Header(){
    
    // get state and dispatch from store Context
    const {state, dispatch} = useContext(Context);
    // create state for theme
    const [theme] = useState({
        one: {mainbg: 'bg-cust-blue-one', textOne: 'text-cust-white', textTwo: 'text-cust-blue-six', screen: 'bg-cust-blue-three', keypad: 'bg-cust-blue-two', keybutOne: 'bg-cust-orange-one shadow-onetertiary', keybutTwo: 'bg-cust-blue-four shadow-oneprimary', keybutThree: 'bg-cust-red-one shadow-onesecondary'},
        two: {mainbg: 'bg-cust-gray-one', textOne: 'text-cust-white', textTwo: 'text-cust-gray-six', screen: 'bg-cust-gray-three', keypad: 'bg-cust-gray-two', keybutOne: 'bg-cust-gray-four shadow-twotertiary', keybutTwo: 'bg-cust-cyan-one shadow-twoprimary', keybutThree: 'bg-cust-orange-three shadow-twosecondary'},
        three: {mainbg: 'bg-cust-voilet-one', textOne: 'text-cust-white', textTwo: 'text-cust-yellow', screen: 'bg-cust-voilet-two', keypad: 'bg-cust-voilet-two', keybutOne: 'bg-cust-voilet-five shadow-threetertiary', keybutTwo: 'bg-cust-voilet-three shadow-threeprimary', keybutThree: 'bg-cust-cyan-three text-cust-blue-seven shadow-threesecondary'}
    });

    // handle theme toggle when its changes
    function handleChange(e){
        localStorage.setItem('toggle', e.target.value);
        localStorage.setItem('theme', JSON.stringify(theme[e.target.value]));
        dispatch({type: 'SET_THEME', payload: {toggle: e.target.value, theme: theme[e.target.value]}});
    }

    return (
        <div className="mb-5 sm:mb-6">
            <div className={`h-full flex items-end justify-between text-xs ${state.toggle !== 'one'? state.theme.textTwo : state.theme.textOne }`}>
                <h1 className="text-4xl">calc</h1>    
                <div className="flex items-end">
                    <span>THEME</span>
                    <div className="h-full flex flex-col items-end justify-end">
                        <div className="flex justify-end pr-1.5 mb-1">
                            {
                                [1, 2, 3].map((item, key)=>{
                                    return <span className="ml-3.5" key={key}>{item}</span>
                                })
                            }
                        </div>
                        <div className={`flex items-center ${state.theme.keypad} ml-3 p-0.5 rounded-full`}>
                            {
                                ['one', 'two', 'three'].map((item, key)=>{
                                    return <div key={key} className={`relative flex ${item !== 'one' ? 'ml-1': ''}`}>
                                                <label htmlFor={`theme${item}`} className={`inline-block w-4 h-4 ${state.toggle === item ? state.theme.keybutThree.split(' ')[0] : ''} rounded-full`}></label>
                                                <input className="absolute w-full h-full z-3 opacity-0"  type="radio" name={`theme${item}`} value={item} checked={item === state.toggle} onChange={handleChange} />
                                            </div>
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;