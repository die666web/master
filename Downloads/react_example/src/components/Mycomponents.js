
import React, { Component } from 'react' 
import UserInfor from './UserInform';
import DisInfor from './DisplayInfor';
class MyComonent extends Component { // cho phép kế thừa tất cả chức năng component từ react
    state = {
        listUser : [
            {id : 1, name : 'Manh' , age : '20'},
            {id : 2, name : 'Kieu Trang' , age : '10'},
            {id : 3, name : 'Thanh' , age : '20'}
        ],
    }
    render(){
        // cho phép mk viết những dòng code JSX hay còn gọi là code html trong 1 file js
        // bình thường thì một ngươi f, 
        return(
            <div>
                <UserInfor/>
                <DisInfor listUser = {this.state.listUser} condition = {this.state.condition}></DisInfor>
            </div>
        )
    }
}

export default MyComonent; // cho phép những nơi import , được phép dùng cú pháp của component 