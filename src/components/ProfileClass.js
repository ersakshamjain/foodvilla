import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    }
    console.log("Child - Constructor()" + this.props.name);
  }

  async componentDidMount() {
    console.log("Child - componentDIDMount()" + this.props.name);

    const data = await fetch("https://api.github.com/users/ersakshamjain");
    const json = await data.json();
    console.log(json)
    this.setState({
      userInfo: json,
    });
  }

 componentDidUpdate(prevProps, prevState){
     console.log("ComponentDidUpdate");
        if( this.state.count !== prevState.count){
            //code
          } 
        if(this.state.count2!== prevState.count2){
            //Code
          }
 }

 componentWillUnmount(){
 console.log("ComponentWillUnmount")
 }


  render() {
    const { count } = this.state;
    console.log("Child - render()" + this.props.name);
    return (
      <div>
        <h1>Profile Class Based Component</h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h2>Created At: {this.state.userInfo.created_at}</h2>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3> Location: {this.state.userInfo.location} </h3>
      </div>
    );
  }
}

export default Profile;
