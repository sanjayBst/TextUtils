import React, {useState} from 'react'

export default function Form(props) {
    const handleUpClick = () =>{
        console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const  handleOnChange = (event) =>{
        console.log('OnChange was clicked');
        setText(event.target.value)
        console.log("I am updated test", text);
        
        
    }

    const OnhandleUpClick = () =>{
        console.log('Uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const [text, setText] = useState('');
  return (
      <div>
      <h1>{props.heading}</h1>
             <div className="mb-3">
    <textarea className="form-control"  placeholder="Enter text here" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary m-4" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary m-4" onClick={OnhandleUpClick} >Convert to Lowercase </button>
      </div>
 
  )
}   
