import React, { useState } from 'react'


export default function TextForm(props) {


    const [text, setText] = useState("");

    function funOnChange(event) {
        setText(event.target.value);
    }

    function changeItToUpper() {
        setText(text.toUpperCase());
        props.showAlert("changed to uppercase","success");
    }

    function changeItToLower() {
        setText(text.toLowerCase());
        props.showAlert("changed to lowercase","success");
    }

    function clearText() {
        setText("");
        props.showAlert("cleared the text","success");
    }

    function copyText(){
        let textarea=document.getElementById("myBox");
        navigator.clipboard.writeText(textarea.value);
        props.showAlert("copied the text to the clipboard","success");
    }

    function removeExtraSpaces(){
        setText(text.replace(/\s{2,}/g, ' ').trim());
        props.showAlert("removed the extra whitespaces","success");
    }

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control my-4" value={text} id="myBox" rows="8" onChange={funOnChange} style={props.mode==='dark'?{backgroundColor:'#8d8787',}:{backgroundColor:'white',}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={changeItToUpper} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={changeItToLower}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear the text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove extra spaces</button>
            </div>

            <h2 className='my-4'>Your text summary</h2>
            <p>
                Word Count = {text.split(' ').filter((element)=>{return element.length!==0;}).length}
                <br />
                Total characters = {text.length}
                <br />
                Time takes to read = {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}
            </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </>
    )
}
