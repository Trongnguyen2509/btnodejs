import React from 'react';
import { FaTrash } from "react-icons/fa";

class CompleteBill extends React.Component{
    render(){
        let {item} = this.props;
        return(
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.ten}</td>
                <td>{item.soluong}</td>
                <td>{item.giaohangden}</td>
                <td>{item.ngay}</td>
                <td>{item.tongtien}</td>
                <td>
                <button onClick={()=>this.props.remove(item._id)}><FaTrash /></button>
                    {/* <button onClick={()=>this.props.complete(item.id)}><FaCheck /></button> */}
                </td>
            </tr>
        );
    }
}
export default CompleteBill