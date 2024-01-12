import React from 'react'

export default function Home() {
    return (<>
        <div className='d-flex justify-content-center align-items-center' style={{height:"80vh",backgroundColor:"Blue"}}>
            <button type="button" className="btn btn-primary btn-lg m-5" >Text Converter</button>
            <button type="button" className="btn btn-secondary btn-lg m-5">Calculator</button>
        </div>
    </>
    )
}
