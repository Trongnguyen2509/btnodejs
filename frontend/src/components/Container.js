import React from "react";
import styled from "styled-components";
import CompleteBill from "./CompleteBill";
import Bill from "./Bill";

class Container extends React.Component {
  render() {
    const {data}=this.props;
    const chuaGiao =data.filter(item=>item.isComplete===false);
    const Dagiao =data.filter(item=>item.isComplete===true);
    return (
      <>
        <Table>
          <div className="grid-container">
            <div className="content">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Sđt và địa chỉ</th>
                    <th scope="col">Ngày tạo đơn</th>
                    <th scope="col">Tổng cộng</th>
                    <th scope="col">Các thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {chuaGiao.map((item,index)=>{
                    return <Bill key={index} item={item} setComplete={this.props.setComplete}
                    remove={this.props.remove}></Bill>
                  })}
                </tbody>
              </table>
            </div>
            <div className="content">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Đơn hàng đã giao</th>
                  </tr>
                </thead>
                <tbody>
                {Dagiao.map((item,index)=>{
                    return <CompleteBill key={index} item={item} remove={this.props.remove}></CompleteBill>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Table>
      </>
    );
  }
}
export default Container;
const Table = styled.div`
  width: 100%;
  margin-top: 50px;
  .grid-container {
    display: grid;
    grid-template-columns: 6fr 6fr;
    grid-column-gap: 30px;
  }
`;
