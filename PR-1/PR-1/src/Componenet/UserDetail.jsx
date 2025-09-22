import React from "react";
import "../css/UserDetail.css"

class UserDetail extends React.Component {
    constructor(props){
        super()
    }
  render() {
    const { name, age, form } = this.props;

    return (
      <div className="border"
        style={{
          border: "5px solid #4caf50",
          padding: "16px",
          borderRadius: "12px",
          width: "300px",
          margin: "20px auto",
          fontFamily: "Arial",
        }}
      >
        <img className="image" src={this.props.img}/>
        <p className="name">
          <b>Name:{this.props.name}</b>
        </p>
        <p className="age">
          <b>Age:{this.props.age}</b> 
        </p>
        <p className="from">
          <b>From:{this.props.from}</b>
        </p>
      </div>
    );
  }
}

export default UserDetail;
