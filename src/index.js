import ReactDOM from 'react-dom'
import Box from "./Box.js"
import Data from "./Data"

const App =() => 
{
    return (
    <div>
        <Box />
        <Data/>
    </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"))