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
        this.handleHeightCalc = this.handleHeightCalc.bind(this);
        this.state = {
            heightClass: ''
        }
    }

    componentDidMount() {
        this.handleUpdate();
        this.handleHeightCalc();
    }

    handleHeightCalc(){
        if(window.innerWidth > 712){
            this.setState({ heightClass: 'h-screen' })
        }else{
            this.setState({ heightClass: 'h-auto' })
        }
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
            <div className={`${state.theme.mainbg} font-spartan font-bold w-screen ${this.state.heightClass} px-6 py-24 xs:py-7 sm:px-0 md:px-26 lg:px-33 xl:px-78 2xl:px-85`}>
                <main className="grid grid-cols-12 gap-4 sm:gap-1.75 xs:w-full xs:flex">
                    <div className="col-start-4 col-span-6 px-4 sm:px-1.75 h-full xs:w-full xs:px-0">
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