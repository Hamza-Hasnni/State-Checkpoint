import React from 'react';
import './App.css';
import Avatar from "./avatar.png";

class App extends React.Component {
  constructor (props)
{ 
  super(props) 
  this.state = {
    Person: {
      fullName: "Hasni Hamza",
      bio: "full stack js ",
      imgSrc: Avatar,
      profession: "web developer",
    
    },
    show: false ,
    count : 0,
    
  };
 

}

componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({
      count: this.state.count + 1
    })
  }, 1000);
}

 toggelPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <div>
            <h3> Time Since The Component Was Mounted "<span style={{color:"red"}}>{this.state.count} sec</span>"</h3>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img style={{maxWidth:"200px"}} src={this.state.Person.imgSrc} alt="hamza"></img>
            <h1>{this.state.Person.profession}</h1>
            <br/>
            
          </div>
        )}

        <button onClick={this.toggelPerson}>Show Profile</button>
      </div>
    );
  }
}
export default App;
