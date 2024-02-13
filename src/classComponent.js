import React,{Component} from "react";


class Example2 extends Component{
    constructor(props){
        super(props)
        this.state={
            name: "sid",
            data:"initial value",
            update:"type the value"
        }
    }
updateInput=(e)=>{
    this.setState({data:e.target.value})
}
render(){
    return (
        <>
        <div><input type="text" 
        onChange={this.updateInput}
        placeholder="Type Whatever you want here"
        value={this.state.data}/>
        <div>{this.state.data}</div>
        </div>


        <div>
            <input type="text"
        value={this.state.update}
        onChange={(e)=>{
            this.setState({update:e.target.value})
        }}
        placeholder="second type"/>
        
        </div>
        <div>the second input value is{this.state.update}</div>

        </>
    )
}
}
export default Example2