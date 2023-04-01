import React, {useState} from "react";



const Cahnge= ()=>{

const[cur,word]=useState("");
const[cu,l]=useState(0)
const[wr,wrcunt]=useState(0)

const textchange= (w)=>{
    const z= w.target.value;
    word(z)
    l(z.split(" ").join("").length);
    wrcunt(z.trim().split(/\s+/).length);

}
const Upper= ()=>{
    word(cur.toUpperCase());
    
}
const Lower= ()=>{
    word(cur.toLowerCase());
}


  

return(
    <div>
        <textarea className="area" placeholder="ENTER A TEXT" onChange={textchange} value={cur}/> <br/>
        <button className="button"  onClick={Upper} >Upper CASE</button>
        <button className="button"  onClick={Lower} >Lower CASE</button>
        <h4>Total Alphabets{cu}</h4>
        <h4>Total Words{wr}</h4>
    </div>
)



}
export default Cahnge;