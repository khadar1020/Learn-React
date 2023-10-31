import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // setText("you have clicked on handleUpClick" + text)
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  }
  const handleLoClick=()=>{
    // setText("you have clicked on handleUpClick" + text)
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  }
  const gmailClick=()=>{
    // setText("you have clicked on handleUpClick" + text)
      let pattern = /[\w.-]+@gmail\.com/g;
      let gmailAddresses = text.match(pattern);
      if(gmailAddresses===null){
        props.showAlert("There are no Gmails in the text","success")
      }
      else{
        let gmailAddressesString = gmailAddresses.join(', ');
        setGmailAddresses(gmailAddressesString);
        props.showAlert("The Gmails are taken from the text","success")
      }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to clipboard","success")
    }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));   
    props.showAlert("Extra spaces had been removed","success") 
  }

  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
const [text, setText] = useState('');
const [gmailAddresses, setGmailAddresses] = useState('');
// text="new text"; / Wrong way to initialize state
// setText("new text"); //correct way to initialize state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <div className="form-group">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Upper case</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lower case</button>
      <button className="btn btn-primary mx-1" onClick={gmailClick} >Gmail</button>
      <button className="btn btn-primary mx-1" onClick={copyToClipboard} >copyText</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >removeExtraSpaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
      <h3>The Gmails are</h3>
      <p>{gmailAddresses}</p>
    </div>
    </>
  )
}
