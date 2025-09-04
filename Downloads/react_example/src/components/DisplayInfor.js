import React, { useState } from 'react'
import './DisplayInfor.scss'

const DisInfor = (props) =>
{
    const {listUser} = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const HandleClick = (event) =>
    {
        setShowHideListUser(!isShowHideListUser);
    }

    return ( 
            //nhiệm vụ dùng để render ra thông tin người dùng ư
            <div className = 'display-infor'>
                <div>
                    <span onClick={() => HandleClick()}>Show hide list user</span>
                </div>
                { isShowHideListUser &&
                    <>
                    {
                    listUser.map( user => {
                        return (
                            <div
                                key = {user.id}
                                className = {+user.age > 18 ? "green" : 'red'}
                            >
                                <div>ID : {user.id}</div>
                                <div>Tôi tên là {user.name} và tuổi là {user.age}</div>
                                <hr />
                                <button onClick={() => props.HandleDelete(user.id)}>Delete</button>
                            </div>
                            
                        )
                    })}
                    </>
                }
            </div>           
        ) 
}

export default DisInfor;