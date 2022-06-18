import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
   <Navbar title="TextUtils" aboutText="About TextUtils" />
   <div className="container my-3">
   <Form heading="Enter the Text to analyze"/>
   </div>
  
    </>
  );
}

export default App;

