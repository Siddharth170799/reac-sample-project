
import React,{Component} from "react";



class Hello extends Component{
    constructor(){
        super()
        this.state={
            name:"siddharth",
            location:"hyderabad"
        }
    }

    update=(e)=>{
        this.setState({location:e.target.value})

    }

    render(){
        return(
            <>
            <div>
            <input type="text"
            // value={this.state.name}
            onChange={(e)=>this.setState({name:e.target.value})}/>
</div>
<div>{this.state.name}</div>


<div>
   <input type="text"
   value={this.state.location}
   onChange= {this.update}
   />
</div>

<div>{this.state.location}</div>

            
            
            
            
            
            
            
            
            </>
        )
    }
}
export default Hello