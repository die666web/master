
import React, { Component } from 'react' 

class MyComonent extends Component { // cho phép kế thừa tất cả chức năng component từ react
    
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
        console.log("Di chuột vào");
    }

    render(){
        // cho phép mk viết những dòng code JSX hay còn gọi là code html trong 1 file js
        // bình thường thì một ngươi f, 
        return(
            <div>
                Tên bạn là {this.state.name} và bạn trong {this.state.address}
                <button onClick={this.HandleClick}> Click me</button>
                <button onMouseOver={this.HandleMouseOver}> Hover me</button>
            </div>
        )
    }
}

export default MyComonent; // cho phép những nơi import , được phép dùng cú pháp của component 