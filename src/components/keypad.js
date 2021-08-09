import { Component } from 'react';
import KeyButton from './keybutton';
import { Context } from '../utils/store';


export default class KeyPad extends Component {

    // bind context to component
    static contextType = Context;

    // bind methods and set local state
    constructor(props){
        super(props);
        this.updateView = this.updateView.bind(this);
        this.state = { keydata: [] };
    }

    componentDidMount() {
          this.updateView();
    }

    // handle local state update
    updateView(){
        this.setState({ keydata: this.context.state.keydata })
    }

    render() {

        // get state from App context
        const {state} = this.context;

        return(
            <div className={`${state.theme.keypad} ${ state.theme.textOne } rounded-xl grid grid-cols-4 w-full gap-3.25 md:gap-6  py-6 px-4 md:py-8 md:px-7.5 mt-6 `}>
                {
                    this.state.keydata.map((item, key)=>{
                        const checkIt = item.value === '=' ? state.theme.keybutThree : item.value === 'RESET' || item.value === 'DEL' ? state.theme.keybutTwo : `${state.theme.keybutOne} ${state.theme.textTwo}` ;
                        return <KeyButton key={key} color={checkIt} span={item.span} fontSize={item.fontSize} value={item.value} />
                    })
                }
            </div>
        );
    }

}