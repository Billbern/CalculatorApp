import Store from "./utils/store";
import CalcDisplay from "./components/calcdisplay";


function App() {

    return (
        // component that holds global state
        <Store>
            {/* component that holds app ui and logic */}
           <CalcDisplay />
        </Store>
    );
}

export default App;
