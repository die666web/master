import React, { useState } from 'react'

// class AddUserInfor extends React.Component{
//     state = {

//     };

//     HandleClick(event)
//     {
//         console.log("Vừa nhấn nút nhé")
//        // this.state.name = "Manh";
//     };

//     HandleMouseOver(event)
//     {
//         console.log("Di chuột vào",this.state.name);
//         this.setState({
//             name: "Manh",
//             age : Math.floor((100*Math.random()) + 1)
//         })
//     }

//     HandleOneChange = (event) =>
//     {
//         // console.log(event, event.target.value)
//         this.setState({
//             name : event.target.value
//         })
//     }

//     HandleOnChangeAge = (event) =>
//     {
//         this.setState({
//             age : event.target.value
//         })
//     }

//     HandleOnSumbit = (event) =>{
//         event.preventDefault();
//         this.props.handleAddUser({
//             id :  Math.floor((100*Math.random()) + 1),
//             name : this.state.name,
//             age : this.state.age
//         });
//     }
// }

const AddUserInfor = (props) => 
{
    const [name,setName] = useState('Kt');
    const [age,setAge] = useState('20');
    const HandleOnSumbit = (event) =>
    {
        event.preventDefault();
        props.handleAddUser({
            id : Math.floor((100 * Math.random()) + 1),
            name : name,
            age : age,
        })
    }

    const HandleOneChangeName = (event) =>
    {
        setName(event.target.value);
    }

    const HandleOnChangeAge = (event) =>
    {
        setAge(event.target.value);
    }
    return(
            <div>
                Tên bạn là {name} và tuổi là {age}
                {/* <button onClick={(event) => {this.HandleClick(event)}}></button> */}
                <form onSubmit={(event) => {HandleOnSumbit(event)}}>
                    <label>Your name</label>
                    <input 
                        value = {name}
                        type = "text"
                        onChange = {(event) => HandleOneChangeName(event)}
                    />
                    <label>Your age</label>
                    <input 
                        value = {age}
                        type = "text"
                        onChange = {(event) => HandleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
    )
}

export default AddUserInfor;