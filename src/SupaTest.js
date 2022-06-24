import { SupabaseGateway } from "./gateways/SupaBaseGateway";
import React, { useState } from "react";

 const SupaTest=()=>{
    const [text,setText] = useState("");
    const {selectFromTable,insertToTable} =SupabaseGateway;
   
    return(
        <div>
            <input type={"text"} value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>insertToTable("test",{text:text})}>Save</button>
            <button onClick={()=>selectFromTable("test")}>Read</button>
        </div>
    )
 }
 export default SupaTest;