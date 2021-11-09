import React, { Component } from "react";
import axios from "axios"
import DisplaySongs from "./Component/DisplaySongs";
import App.js from 

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
  handleSubmit = (event)=> {
    event.preventDefault[{}];
    const form_data = {
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      release_date: this.state.release_date,
      genre: this.state.genre,
    };
    let response = axios.post("http://127.0.0.1:8000/musicapp/", form_data);
    let data = response.data;
  }


  render() {
    return (
      <div class ='container'>
        <hi>Music App</hi>
        {this.state.songs.length > 0 &&
        <DisplaySongs songs={this.state.jokes} getAllSongs= {this.getSongs} />
        }
        
      </div>
    );
  }
}

export default App;








    

     




 
        
   
  

        
          
      
       
        
     
      


