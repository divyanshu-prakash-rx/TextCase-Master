import React from 'react'
export default function About(props) {
    let mystyle =
    {
        color: props.mode === "light" ? "black" : "white",
        backgroundColor: props.mode === "dark" ? "black" : "white",
        border: "1px solid"
    }


    return (
        <div className="container my-3">
            {console.log(props.mode)}
            <h1 style={{ color: mystyle.color }}>Welcome to about Section!!</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={mystyle}>

                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                          <strong>Text Converter</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Welcome to our Text Converter webpage, a versatile tool empowering you to effortlessly transform text with various functionalities. Seamlessly shift between upper and lower cases, capitalize sentences, and invert the case of letters with ease. Additionally, our user-friendly interface aids in word counting, enabling you to quickly analyze the composition of your text. Whether you're looking to alter letter cases or evaluate word frequency, our tool simplifies the process, ensuring efficiency and convenience in managing your textual content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                        <strong> Calculator</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                       Calculator webpage is a user-friendly online tool designed to perform simple arithmetic operations such as addition, subtraction, multiplication, and division. It typically features a clean and intuitive interface with buttons or a keypad to input numbers and mathematical symbols. Users can perform calculations conveniently within their web browser without the need for a separate physical calculator. These web-based calculators often include a display area to show both the input and the result, providing a quick and efficient way to solve everyday mathematical equations or tasks on any device with internet access.
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}
