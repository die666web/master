import React from 'react'

class DisInfor extends React.Component
{
    state = {
        condition : true
    }

    HandleClick = (event) => 
    {
        this.setState({
            condition : !this.state.condition
        });
    }
    render(){
        // cách dùng desctrcuting array 
        const { listUser, condition }  = this.props;
        console.log(this.props);
        return (
            //nhiệm vụ dùng để render ra thông tin người dùng ư
            <div>
                <div>
                    <span onClick = {(event) => {this.HandleClick(event)}}>Ẩn</span>
                </div>
                {this.state.condition &&
                    <div>
                {
                    listUser.map( user => {
                        return (
                            <div
                                key = {user.id}
                                className = {+user.age > 18 ? "green" : 'red'}
                            >
                                Tôi tên là {user.name} và tuổi là {user.age}
                                <hr />
                            </div>
                        )
                    })
                }
                    </div>
                }
            </div>
           
        ) 
    }
}

export default DisInfor;