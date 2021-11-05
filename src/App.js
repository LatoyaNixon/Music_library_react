import React, { useState } from "react";
import MusicTable from "./Component/MusicTable";
import "./App.css"
import data from "./data.json"

const App = () => {
const [MusicTable, setMuscTable] = useState(data);

  return <div className="app-container">
    <table>
      <thead>
        <tr>
          <th>Song Title</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {MusicTable.map((MusicTable) => ( 
        <tr>
      <td>{MusicTable.title}</td>
      <td>{MusicTable.album}</td>
       <td>{MusicTable.artist}</td>
       <td>{MusicTable.genre}</td>
       <td>{MusicTable.release_date}</td>
       </tr>
        ))}
       </tbody>
    </table>
  </div>
}
      
       
        
     
      

export default App;
