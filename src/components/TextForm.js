import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    // document.title = props.title;

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        if (text.length > 0) {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to upercase!", "success");
        } else {
            props.showAlert("Enter text first!", "danger");
        }
    }

    const handleLoClick = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase!", "success");
        } else {
            props.showAlert("Enter text first!", "danger");
        }

    }

    const handleClearClick = () => {
        if (text.length > 0) {
            setText("");
            props.showAlert("Text Cleared!", "success");
        } else {
            props.showAlert("Enter text first!", "danger");
        }

    }

    const handleCopyClick = () => {
        if (text.length > 0) {
            var newText = document.getElementById("myBox");
            newText.select();
            navigator.clipboard.writeText(newText.value);
            document.getSelection().removeAllRanges();
            props.showAlert("Copy to Clipboard!", "success");
        } else {
            props.showAlert("Enter text first!", "danger");
        }

    }

    const handleExtraSpaces = () => {
        if (text.length > 0) {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed!", "success");
        } else {
            props.showAlert("Enter text first!", "danger");
        }

    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charcters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </>
    )
}

TextForm.prototype = {
    heading: PropTypes.string,
}