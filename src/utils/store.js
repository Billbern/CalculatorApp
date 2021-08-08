import { createContext, useReducer } from "react";
import Reducer from './reducer';


// set initial Global State
const initialState = {
    keydata: [
        { fontSize: "text-cust", span: 'col-span-1', value: '7' },
        { fontSize: "text-cust", span: 'col-span-1', value: '8' },
        { fontSize: "text-cust", span: 'col-span-1', value: '9' },
        { fontSize: "text-xl", span: 'col-span-1', value: 'DEL' },
        { fontSize: "text-cust", span: 'col-span-1', value: '4' },
        { fontSize: "text-cust", span: 'col-span-1', value: '5' },
        { fontSize: "text-cust", span: 'col-span-1', value: '6' },
        { fontSize: "text-xl", span: 'col-span-1', value: '+' },
        { fontSize: "text-cust", span: 'col-span-1', value: '1' },
        { fontSize: "text-cust", span: 'col-span-1', value: '2' },
        { fontSize: "text-cust", span: 'col-span-1', value: '3' },
        { fontSize: "text-xl", span: 'col-span-1', value: '-' },
        { fontSize: "text-xl", span: 'col-span-1', value: '.' },
        { fontSize: "text-cust", span: 'col-span-1', value: '0' },
        { fontSize: "text-xl", span: 'col-span-1', value: '/' },
        { fontSize: "text-xl", span: 'col-span-1', value: 'X' },
        { fontSize: "text-xl", span: 'col-span-2', value: 'RESET' },
        { fontSize: "text-xl", span: 'col-span-2', value: '=' }
    ],
    theme: { mainbg: 'bg-cust-blue-one', textOne: 'text-cust-white', textTwo: 'text-cust-blue-six', screen: 'bg-cust-blue-three', keypad: 'bg-cust-blue-two', keybutOne: 'bg-cust-orange-one shadow-onetertiary', keybutTwo: 'bg-cust-blue-four shadow-oneprimary', keybutThree: 'bg-cust-red-one shadow-onesecondary' },
    expression: '',
    toggle: 'one'
}


// Component with initial Store
const Store = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        // set Context with global state and reducer methods
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}


export const Context = createContext(initialState);
export default Store;