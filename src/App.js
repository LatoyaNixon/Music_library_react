import React, { Component } from "react";
import axios from "axios"
import DisplaySongs from "./Component/DisplaySongs";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }
  componentDidMount(){
    this.getSongs()
  }
  getSongs = async () =>{
    let response = await axios.get('http://127.0.0.1:8000/musicapp/');
    this.setState({
      songs: response.data.songs
    })
  }
  deleteSongs = async (songs) =>{
    let response = await axios.delete("http://127.0.0.1:8000/musicapp/");
  }
  

  render() {
    return (
      <div class ='container'>
        <hi>Music App</hi>
        {this.state.jokes.length > 0 &&
        <DisplaySongs songs={this.state.jokes} getAllSongs= {this.getSongs} />
        }
        
      </div>
    );
  }
}

export default App;








    

     




 
        
   
  

        
          
      
       
        
     
      


