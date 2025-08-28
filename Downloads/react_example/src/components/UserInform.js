import React from 'react'

class UserInfor extends React.Component{
    state = {
        name : "KT" ,
        age : 20,
        address : "in the my heart"
    };

    HandleClick(event)
    {
        console.log("Vừa nhấn nút nhé")
       // this.state.name = "Manh";
    };

    HandleMouseOver(event)
    {
        console.log("Di chuột vào",this.state.name);
        this.setState({
            name: "Manh",
            age : Math.floor((100*Math.random()) + 1)
        })
    }

    HandleOneChange = (event) =>
    {
        // console.log(event, event.target.value)
        this.setState({
            name : event.target.value
        })
    }

    HandleOnChangeAge = (event) =>
    {
       
        this.setState({
            age : event.target.value
        })
    }

    HandleOnSumbit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        <div>complete</div>
    }
    
    render()
    {
        return(
            <div>
                Tên bạn là {this.state.name} và tuổi là {this.state.age}
                <button onClick={(event) => {this.HandleClick(event)}}></button>
                <form onSubmit={(event) => {this.HandleOnSumbit(event)}}>
                    <label>Your name</label>
                    <input 
                        value = {this.state.name}
                        type = "text"
                        onChange = {(event) => this.HandleOneChange(event)}
                    />
                    <button>Submit</button>
                </form>

                <form onSubmit={(event) => {this.HandleOnSumbit(event)}}>
                    <label>Your age</label>
                    <input 
                        value = {this.state.age}
                        type = "text"
                        onChange = {(event) => this.HandleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;