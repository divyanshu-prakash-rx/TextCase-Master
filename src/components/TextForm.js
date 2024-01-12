<<<<<<< HEAD
import React, { useState } from "react";

export default function TextForm(props) {
    const [text, SetText] = useState("");
    const [copyBtn, SetcopyBtn] = useState("Copy to Clipboard");

    const handleUpClick = () => {
        let NewText = text.toUpperCase();
        SetText(NewText);
        props.Alertt("Converted to Uppercase", "success")
    };

    const handleLoClick = () => {
        let NewText = text.toLowerCase();
        SetText(NewText);
        props.Alertt("Converted to Lowercase", "success")
    };
    const handleClearClick = () => {
        let NewText = "";
        SetText(NewText);
        props.Alertt("Text Cleared", "success")
    };
    const handleExSpClick = () => {
        let NewText = text.replace(/\s+/g, ' ').trim();
        SetText(NewText);
        props.Alertt("Extra Spaces Removed", "success")
    };

    const handleCapClick = () => {
        let NewText = "",
            prev = ".";
        for (let i = 0; i < text.length; i++) {
            if (i === 0 || prev === ".") {
                NewText += text[i].toUpperCase();
            } else {
                NewText += text[i].toLowerCase();
            }
            if (text[i] !== " ") prev = text[i];
        }
        SetText(NewText);
        props.Alertt("Text Capitalized", "success")
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        SetcopyBtn("Copied to Clipboard!!");
    }

    const handleOnChange = (event) => {

        SetText(event.target.value);


    };
    return (
        <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <div className="mb-3" >
                <label className="form-label" >ENTer your Text HERE</label>
                <textarea
                    className="form-control"
                    id="textbox"
                    rows="8"
                    placeholder="Start writing....."
                    value={text}
                    onChange={handleOnChange}
                    style={{ backgroundColor: props.mode === "light" ? "white" : "#c5ccd4" }}

                ></textarea>
                <div className="row">
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleUpClick}
                    >
                        UPPERCASE
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleLoClick}
                    >
                        lowercase
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleCapClick}
                    >
                        Capitalized
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleExSpClick}
                    >
                        Remove Extra Spaces
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleClearClick}
                    >
                        Clear Text
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleCopy}
                    >
                        {copyBtn}
                    </button>
                </div>
            </div>
            <div className="container my-3 text-center">
                <h1 className="mb-2" style={{
                    textDecoration: "underline",
                }}>
                    Text Summary
                </h1>
                <p>Number of characters={text.length}</p>
                <p>Number of words={text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
                <h2 className="text-start">Preview</h2>
                <hr></hr>
                <div className="text-start card" style={{
                    color: props.mode === "light" ? "black" : "white",backgroundColor:props.mode==="light"?"white":"black"
                }}>{text.length > 0 ? text : <strong>"Nothing to show!!"</strong>}</div>
            </div>
        </div>
    );
}
=======
import React, { useState } from "react";

export default function TextForm(props) {
    const [text, SetText] = useState("");
    const [copyBtn, SetcopyBtn] = useState("Copy to Clipboard");

    const handleUpClick = () => {
        let NewText = text.toUpperCase();
        SetText(NewText);
        props.Alertt("Converted to Uppercase", "success")
    };

    const handleLoClick = () => {
        let NewText = text.toLowerCase();
        SetText(NewText);
        props.Alertt("Converted to Lowercase", "success")
    };
    const handleClearClick = () => {
        let NewText = "";
        SetText(NewText);
        props.Alertt("Text Cleared", "success")
    };
    const handleExSpClick = () => {
        let NewText = text.replace(/\s+/g, ' ').trim();
        SetText(NewText);
        props.Alertt("Extra Spaces Removed", "success")
    };

    const handleCapClick = () => {
        let NewText = "",
            prev = ".";
        for (let i = 0; i < text.length; i++) {
            if (i === 0 || prev === ".") {
                NewText += text[i].toUpperCase();
            } else {
                NewText += text[i].toLowerCase();
            }
            if (text[i] !== " ") prev = text[i];
        }
        SetText(NewText);
        props.Alertt("Text Capitalized", "success")
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        SetcopyBtn("Copied to Clipboard!!");
    }

    const handleOnChange = (event) => {

        SetText(event.target.value);


    };
    return (
        <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <div className="mb-3" >
                <label className="form-label" >ENTer your Text HERE</label>
                <textarea
                    className="form-control"
                    id="textbox"
                    rows="8"
                    placeholder="Start writing....."
                    value={text}
                    onChange={handleOnChange}
                    style={{ backgroundColor: props.mode === "light" ? "white" : "#c5ccd4" }}

                ></textarea>
                <div className="row">
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleUpClick}
                    >
                        UPPERCASE
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleLoClick}
                    >
                        lowercase
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleCapClick}
                    >
                        Capitalized
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleExSpClick}
                    >
                        Remove Extra Spaces
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleClearClick}
                    >
                        Clear Text
                    </button>
                    <button
                        className={`btn btn-primary my-2 mx-1 col col-md-auto ${text.length === 0 ? "disabled" : ""}`}
                        onClick={handleCopy}
                    >
                        {copyBtn}
                    </button>
                </div>
            </div>
            <div className="container my-3 text-center">
                <h1 className="mb-2" style={{
                    textDecoration: "underline",
                }}>
                    Text Summary
                </h1>
                <p>Number of characters={text.length}</p>
                <p>Number of words={text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
                <h2 className="text-start">Preview</h2>
                <hr></hr>
                <div className="text-start card" style={{
                    color: props.mode === "light" ? "black" : "white",backgroundColor:props.mode==="light"?"white":"black"
                }}>{text.length > 0 ? text : <strong>"Nothing to show!!"</strong>}</div>
            </div>
        </div>
    );
}
>>>>>>> 0717220 (My message)
