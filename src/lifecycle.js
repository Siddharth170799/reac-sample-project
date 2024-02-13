

import React,{Component} from 'react'


class LifeCycle extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"siddharth",
            count:0,
            data:"hello"
        }
        
    }

    componentDidMount(){
        
            console.log("hello")
    }
        componentDidUpdate(prevstate,prevprops){
            console.log("did update called")
        }
        
    
    render(){
        console.log("hello")
        return (
            
            <>
            

        <div>Hello, this is lifecycle component {this.state.name}</div>
        <div>
            <input onChange={(e)=>{console.log("input button clicked")
            this.setState({data:e.target.value}) }}/>

            
        </div>
       <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
       <button onClick={()=>this.setState({count:this.state.count-1})}>decrement</button>
       <div onMouseOver={()=>this.setState({count:0})}>Reset</div>
       <div>{this.state.count}</div>




        </>
         )
    }
}



export default LifeCycle