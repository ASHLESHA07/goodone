import React, { useState } from 'react'
export default function Textform(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handloUpClick = () => {
        // console.log("UpperCase was Clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClear = () => {
        // console.log("UpperCase was Clicked"+text);
        let newText = '';
        setText(newText)
    }
    const handleCopy = () => {
        var text = document.getElementById("mycode")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handlextraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" style={{ color:  props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor:  props.mode === 'dark' ? 'grey' : 'white', color:  props.mode === 'dark' ? 'white' : 'black' }} id="mycode" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handloUpClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handlextraspace}>Remove extra spaces</button>

            </div>
            <div className="container my-3" style={{ color:  props.mode === 'dark' ? 'white' : 'black' }}>
                <h1> Your Text Summary</h1>
                <p>{text.split(" ").length}  words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    )
}
