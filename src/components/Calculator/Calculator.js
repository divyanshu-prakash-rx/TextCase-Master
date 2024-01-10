import React, { useState } from 'react'
import Calbutton from './Calbutton'


function Calculator(props) {
  const [result, setResult] = useState("")

  const handleClick = (text) => {
    if (text === "=") {
      calculate();
    }

    else if (text === "C") {
      reset();
    }

    else if (text === "CE") {
      backspace();
    }

    else {
      let newRes = result + text;
      setResult(newRes)
    }
  };

  const calculate = () => {
    var checkResult = ''
    if (result.includes('--')) {
      checkResult = result.replace('--', '+')
    } else {
      checkResult = result;
    }

    try {
      setResult((Function("return " + checkResult)() || "") + "")
    }
    catch (e) {
      setResult("error")
    }
  };

  const reset = () => {
    setResult("")
  };

  const backspace = () => {
    setResult(result.slice(0, -1))
  };

  return (
    <>
      <div className=' d-flex justify-content-center align-items-center m-1' style={{ height: "80vh" }}>
        <div className="card" style={{ width: "28rem", boxShadow: "5px 6px #0dcaf0", backgroundColor: props.mode === "light" ? "white" : "black" ,border: "1px solid", borderColor:props.mode==="dark"?"white":"black" }}>
          <div className="card-body">
            <h5 style={{ color: props.mode === "dark" ? "white" : "black",fontWeight:"200" }}>My Calculator</h5>


            <div className="mb-3" style={{ height: result.length<=25?"92px":"auto", border: "1px solid white", backgroundColor: "white", borderRadius: "10px", fontSize: "30px",border: "1px solid ", borderColor:props.mode==="dark"?"white":"black"   }}>{result.length < 1 ? "   Start Calculating..." : result}</div>


            <div className='row justify-content-between '>
              <div className='col'>
                <Calbutton text={"C"} handleClick={handleClick} />
                <Calbutton text={"7"} handleClick={handleClick} />
                <Calbutton text={"4"} handleClick={handleClick} />
                <Calbutton text={"1"} handleClick={handleClick} />
                <Calbutton text={"="} handleClick={handleClick} />
              </div>
              <div className='col'>
                <Calbutton text={"CE"} handleClick={handleClick} />
                <Calbutton text={"8"} handleClick={handleClick} />
                <Calbutton text={"5"} handleClick={handleClick} />
                <Calbutton text={"2"} handleClick={handleClick} />
                <Calbutton text={"0"} handleClick={handleClick} />
              </div>
              <div className='col'>
                <Calbutton text={"("} handleClick={handleClick} />
                <Calbutton text={"9"} handleClick={handleClick} />
                <Calbutton text={"6"} handleClick={handleClick} />
                <Calbutton text={"3"} handleClick={handleClick} />
                <Calbutton text={"."} handleClick={handleClick} />
              </div>
              <div className='col'>
                <Calbutton text={")"} handleClick={handleClick} />
                <Calbutton text={"*"} handleClick={handleClick} />
                <Calbutton text={"-"} handleClick={handleClick} />
                <Calbutton text={"+"} handleClick={handleClick} />
                <Calbutton text={"/"} handleClick={handleClick} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator
