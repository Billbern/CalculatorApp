import { Component } from 'react';
import Header from './header';
import CalcScreen from './calcscreen';
import KeyPad from './keypad';
import Footer from './footer';
import { Context } from '../utils/store';


export default class CalcDisplay extends Component {

    // bind context to component
    static contextType = Context;

    constructor() {
        super();
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        this.handleUpdate();
    }

    handleUpdate(){
        const oldtheme = localStorage.getItem('theme');
        const oldtoggle = localStorage.getItem('toggle');
        if(oldtheme && oldtoggle){
            this.context.dispatch({type: 'SET_THEME', payload: { toggle: oldtoggle, theme: JSON.parse(oldtheme) }})
        }
    }

    render(){

        // call state from context
        const {state} = this.context;

        return(
            <div className={`w-screen h-auto sm:h-screen ${state.theme.mainbg}`}>
                <main className="container py-3 sm:py-16 w-full font-bold font-spartan">
                    <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/6 px-5 sm:px-0 h-full mx-auto">
                        <Header />

                        <CalcScreen />

                        <KeyPad />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}