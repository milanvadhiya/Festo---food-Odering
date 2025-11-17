import React from "react";
import { Link } from "react-router-dom";
class UserClass2 extends React.Component {


    constructor(props){
        super(props);
        console.log(props); 
        this.state={
             userInfo:{
                    name: "abc",
                    location: "default location",
                    avatar_url:""

        },
     };
    };

     
  async  componentDidMount(){
       const data=await fetch("https://api.github.com/users/milanvadhiya");
       const json=await data.json();
       console.log(json);     
       this.setState({
          userInfo:json,
       });
  };

  render() {
          let {name,location,avatar_url}=this.state.userInfo;
          
        return (    
            <div className="user-card2">
                <img className="img-card "src={avatar_url}/>
                <h1>User Component</h1>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: +919313273221</h2>
            </div>
        );  
    }
};
export default UserClass2;