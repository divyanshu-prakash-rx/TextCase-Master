<<<<<<< HEAD
import React from 'react'

function Alert(props) {
    // const [text2, setAlert] = useState("");
    // const Capitalize = (word) => {
    //     let newWord = word.toLowerCase();
    //     return newWord[0].toUpperCase() + newWord.slice(1)
    // }
    return (<div style={{ height: "52px" }}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            {props.alert.msg}
        </div>}  </div>
    )
}

=======
import React from 'react'

function Alert(props) {
    // const [text2, setAlert] = useState("");
    // const Capitalize = (word) => {
    //     let newWord = word.toLowerCase();
    //     return newWord[0].toUpperCase() + newWord.slice(1)
    // }
    return (<div style={{ height: "52px" }}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            {props.alert.msg}
        </div>}  </div>
    )
}

>>>>>>> 0717220 (My message)
export default Alert