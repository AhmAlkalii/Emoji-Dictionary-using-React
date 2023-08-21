import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./entry";


function trying(emojipedia){
  return(
    <Entry 
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />

  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      
      <dl className="dictionary">
    
        {emojipedia.map(trying)}
      </dl>
    </div>
  );
}

export default App;
