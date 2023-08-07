
import React, {useState} from 'react'


export default function TextForm(props) {

    const handleuppercase = ()=>{
        // console.log('Clicked')
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handlelowercase = ()=>{
        // console.log('Clicked')
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const handleclear = ()=>{
        // console.log('Clicked')
        let newtext = ''
        setText(newtext)
    }
    const handlecopy = ()=>{
        var text = document.getElementById('mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handlechange = (event)=>{
        // console.log('Changed')
        setText(event.target.value)
    }
     
    const [text, setText] = useState("")

    return (
        <>
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                   <textarea style={{backgroundColor: props.mode==='dark'?'blue':'white', color: props.mode==='dark'?'white':'black'}} className="form-control" value={text} onChange={handlechange} id="mybox" name='mybox' rows="8"></textarea>
            </div>
            <button style={{backgroundColor: props.mode==='dark'?'black':'#0d6efd', border: props.mode==='dark'?'1px solid black':'1px solid #0d6efd'}} className="btn btn-primary" onClick={handleuppercase}>Convert to Upper Case</button>
            <button style={{backgroundColor: props.mode==='dark'?'black':'#0d6efd', border: props.mode==='dark'?'1px solid black':'1px solid #0d6efd'}} className="btn btn-primary mx-2" onClick={handlelowercase}>Convert to Lower Case</button>
            <button style={{backgroundColor: props.mode==='dark'?'black':'#0d6efd', border: props.mode==='dark'?'1px solid black':'1px solid #0d6efd'}} className="btn btn-primary mr-2" onClick={handleclear}>Clear Text</button>
            <button style={{backgroundColor: props.mode==='dark'?'black':'#0d6efd', border: props.mode==='dark'?'1px solid black':'1px solid #0d6efd'}} className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
             
             <div className={` mt-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text: 'Enter something in the textbox above to preview'}</p>
             </div>

        </>
    )
}
