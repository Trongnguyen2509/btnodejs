import React from 'react';
import TrashBill from "./TrashBill";
const axios = require('axios');


export default class Daxoa extends React.Component {
  state ={
    data:[],
  }
  componentDidMount()
  {
    this.getBill();
  }
  async getBill(){
    let res = await axios.get("http://localhost:3001/bill/Trashbill");
    
    this.setState({
      data:[...res.data],
    });
  }
  render(){
    let {data} = this.state;
    return (
        <>
        <div className="page1">
        <div className="grid-container1">
        <div className="contentxoa">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Đơn đã xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item,index)=>{
                    return <TrashBill key={index} item={item}></TrashBill>
                  })}
                </tbody>
              </table>
            </div>
            </div>
            </div>
      </>
    )
  }
}