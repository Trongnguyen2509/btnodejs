import React from 'react';
import Navbar from "./Navbar";
import Mainpage from "./Mainpage";
import Container from "./Container";
import Themsp from "./Themsp";
const axios = require('axios');

export default class Home extends React.Component {
  state ={
    data:[],
  }
  componentDidMount()
  {
    this.getBill();
  }
  async getBill(){
    let res = await axios.get("http://localhost:3001/bill");
    
    this.setState({
      data:[...res.data],
    });
  }
  add =async (ten,soluong,giaohangden,ngay,tongtien,isComplete = false)=>{
    await axios.post("http://localhost:3001/bill/add",{ten:ten, soluong:soluong, giaohangden:giaohangden,ngay:ngay,tongtien:tongtien, isComplete:isComplete});
   this.getBill();
  }
  setComplete= async(_id)=>{
    await axios.post("http://localhost:3001/bill/update",{_id:_id});
    this.getBill();
  }
  remove= async(_id)=>{
    await axios.post("http://localhost:3001/bill/remove",{_id:_id});
    this.getBill();
  }
  render(){
    return (
        <>
          <Navbar />
          <Mainpage />
          <Themsp add={this.add}/>
          <Container data={this.state.data} setComplete={this.setComplete} 
          remove={this.remove}/>
      </>
    )
  }
}