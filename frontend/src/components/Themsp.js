import React from "react";
class Themsp extends React.Component {
  state={
    ten:'',
    soluong:0,
    giaohangden:'',
    ngaytaodon:'',
    tongtien:0,
  }

  addName=(event)=>{
      this.setState({ten:event.target.value})
  }
  addsoluong=(event)=>{
    this.setState({soluong:event.target.value})
  }
  addgiaohangden=(event)=>{
    this.setState({giaohangden:event.target.value})
  }
  addngaytaodon=(event)=>{
    this.setState({ngaytaodon:event.target.value})
  }
  addtongtien=(event)=>{
    this.setState({tongtien:event.target.value})
  }
  handleAdd=()=>{
    this.props.add(this.state.ten,this.state.soluong,this.state.giaohangden,this.state.ngaytaodon,this.state.tongtien);
  }
  render() {
    
    return (
      
        <div className="container">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Thêm Đơn hàng
            </button>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title">Tạo thông tin đơn hàng</h1>
                    </div>
                    <div className="modal-body">

                    
                    <h6>Sản phẩm: <input onChange={this.addName}></input></h6>
                    <p>Số lượng: <input onChange={this.addsoluong}></input></p>
                    <p>Sđt và địa chỉ: <input onChange={this.addgiaohangden}></input></p>
                    <p>Ngày tạo đơn: <input  type='date' onChange={this.addngaytaodon}></input></p>
                    <p>Tổng cộng: <input onChange={this.addtongtien}></input></p>
                    </div>
                    
                    <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.handleAdd}>Thêm</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    
                </div>
            </div>
            </div>
            </div>
    );
  }
}
export default Themsp;

