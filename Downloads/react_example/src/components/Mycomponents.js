
import React, { Component, useState } from 'react' 
import AddUserInfor from './AddInfor';
import DisInfor from './DisplayInfor';
import { Fragment } from 'react';

// class MyComonent extends Component { // cho phép kế thừa tất cả chức năng component từ react
//     constructor(props)
//     {
//         super(props);
//         this.state = {
            
//         };
//     }
    

//     handleAddUser = (userObject) => {
//         console.log(this.state.listUser);
//         this.setState({
//             listUser : 
//         })
//     }

//     
// }

const MyComonent = (props) =>
{
    const [listUser,setListUser] = useState(
        [
                {id : 1, name : 'Manh' , age : '20'},
                {id : 2, name : 'Kieu Trang' , age : '10'},
                {id : 3, name : 'Thanh' , age : '20'}
        ]
    );

    const HandleAddUser = (userObject) =>
    {
        setListUser([userObject,...listUser]);
    }

    const HandleDelete = (userId) =>
    {
        let listUserNew = [...listUser];
        listUserNew = listUser.filter(item => item.id !== userId);
        setListUser(listUserNew);
    }

    // cho phép mk viết những dòng code JSX hay còn gọi là code html trong 1 file js
    // bình thường thì một ngươi f, 
    return(
        <>
            <AddUserInfor 
                listUser = {listUser}
                handleAddUser = {HandleAddUser}
            ></AddUserInfor>
            <DisInfor 
                listUser = {listUser}
                HandleDelete = {HandleDelete}
            ></DisInfor>
        </>
    );
}

export default MyComonent; // cho phép những nơi import , được phép dùng cú pháp của component 