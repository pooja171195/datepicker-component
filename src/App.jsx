
import './App.css';
import image from "./Images/1.jpg"; 
import {DateRangePicker} from "rsuite"

import "rsuite/dist/rsuite.min.css" 

function App() {

   return (
     <>
     <div className='name'><h1>DATE - PICKER</h1>
     <hr/>
     </div>
     <div className='pooj_d'>
    <div className="dates" >
      
      <DateRangePicker/>
      </div>
    </div>
    </>
  );
}

export default App;
