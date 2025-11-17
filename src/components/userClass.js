import React from "react";
class UserClass extends React.Component {


    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count: 0,
            count2: 1
        };
        console.log(this.props.name+"Constructor called from userclasss");        
    };


    componentDidMount(){
    console.log(this.props.name+"componentDidCatch called from userclass.js!!!");
  };

  render() {
          let {name,location}=this.props;
          let {count,count2} = this.state;
        console.log(this.props.name+"Render called form userclass.js!!! ");
        return (    
            <div className="user-card">
                <h1>count={count}</h1>
                <button className="btn" onClick={()=>{
                    this.setState(
                        {
                            count:this.state.count + 1,
                            count2:count2+ 1
                        }
                    )
                }}>
                    updated count!
                </button>
                  <h1>count2={count2}</h1>
                <h1>User Component</h1>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: +919313273221</h2>
            </div>
        );  
    }
};
export default UserClass;