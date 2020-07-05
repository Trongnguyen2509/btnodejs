import React from 'react';

class TrashBill extends React.Component{
    render(){
        let {item,key} = this.props;
        return(
            <tr>
                <th scope="row">{key}</th>
                <td>{item.ten}</td>
                <td>{item.soluong}</td>
                <td>{item.giaohangden}</td>
                <td>{item.ngay}</td>
                <td>{item.tongtien}</td>
            </tr>
        );
    }
}
export default TrashBill