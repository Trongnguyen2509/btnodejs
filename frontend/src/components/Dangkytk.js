import React from 'react';

export default class Dangkytk extends React.Component {
  render(){
    return (
        <>
            <div className="page1">
             <div class="loginbox1">
                <h1>Đăng Ký Tk</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="" placeholder="Enter Username"></input>
                    <p>email</p>
                    <input type="email" name="" placeholder="Enter Email"></input>
                    <p>sđt</p>
                    <input type="sđt" name="" placeholder="Enter Sđt"></input>
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter Password"></input>
                    <input type="submit" name="" value="Đăng ký"></input>
                </form>
             </div>
            </div>
      </>
    )
  }
}