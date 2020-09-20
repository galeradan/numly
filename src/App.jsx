import React from 'react';
import { useRef } from 'react';
import './app.css'

function App() {
  let min = 1;
  const [counter, setCounter] = React.useState(0)
  const [num, setNum] = React.useState([])
  const [max, setMax] = React.useState('');
  const [chosen, setChosen] = React.useState([])
  const [random, setRandom] = React.useState()
  const [randomIndex, setRandomIndex] = React.useState()
  const [pickLength, setPickLength] = React.useState('')
  const [isGenerating, setIsGenerating] = React.useState(false)
  const timingRef = useRef();
  

  const Shuffle =(array)=> {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    setNum(array)
    setIsGenerating(true)
    
  }
  

  const Generate =()=>{
    let numCopy = [];
    for(let x = min; x <= max; x++){
      numCopy.push(x)
    }

    Shuffle(numCopy)
    // setNum(numCopy)
    // setIsGenerating(true)
  }

  const Reset =()=>{
    setIsGenerating(false)
    clearInterval(timingRef.current)
    setMax('')
    setChosen([])
    setPickLength('')
    setRandom('')
    setCounter(0)
    setNum([])
  }

  React.useEffect(()=>{
    if(num.length>0){
       const timing = setInterval(()=>{
        setCounter(counter => counter+1)
      },200)
      timingRef.current = timing
      return () => clearInterval(timing);
    }
  },[isGenerating])

  
  React.useEffect(()=>{
    if(counter!==0){
        let picker = num[Math.floor(num.length * Math.random())]
        let index = num.indexOf(picker)
        setRandom(picker)
        setRandomIndex(index) 
      if(counter%50===0){
        let numCopy = [...num]
        numCopy.splice(randomIndex,1)
        setNum(numCopy)
        setChosen(chosen => [...chosen, random]);
      }
    }
    if(Number(chosen.length)===Number(pickLength)){
      clearInterval(timingRef.current)
      setRandom(0)
    }
    // eslint-disable-next-line
  },[counter]) 


  return (
   <>
    <div className="container py-5">
      <h1>{Math.floor(counter/5)}</h1>
       <div className="card">
        <div className="card-header">
          <h6>Number Generator</h6>
        </div>
        <div className="card-body">
          <div className="form-row">
            <div className="form-group col-auto">
              <label htmlFor="">Max Number</label>
              <input className="form-control" type="number" min="1" value={max} onChange={e => setMax(e.target.value)} disabled={isGenerating}/>
            </div>
            <div className="form-group col-auto">
              <label htmlFor="">Numbers to Pick</label>
              <input className="form-control" type="number" min="1" value={pickLength} onChange={e => setPickLength(e.target.value)} disabled={isGenerating}/>
            </div>
            <div className="form-group col-auto mt-auto">
              <button className="btn btn-primary" onClick={Generate} disabled={isGenerating}>Generate</button>
              <button className="btn btn-warning ml-2" onClick={Reset} disabled={!isGenerating}>Reset</button>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      {
        num.length===0 &&(
          <div className="alert alert-warning" role="alert">
            Please Generate numbers to get started!
          </div>
        )
      }
      <div className="row">
        { 
         
          num.length>0 &&(
            num.map((number)=>{
              return (
                <div key={number} className="col-md-1 mb-2">
                  <div className={`card text-center ${number === random && chosen.length<6 ? 'active' : '' }` }>
                    {number}
                  </div>
                </div>
              )
            })
          )
        }        
      </div>
      <div>
        <h4>Selected Numbers</h4>
        <hr/>
      </div>
      <div className="row text-center">
        {
          chosen.length>0 && (
            chosen.map((num)=>{
              return (
                <div key={num} className="col-md-2">
                  <div className="card">
                    <h4>{num}</h4>
                  </div>
                </div>
              )
            })
          )
        } 
      </div>
    </div>
    
   </>
  );
}

export default App;
