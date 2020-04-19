import React,{Component} from 'react';
import Button from './button/Button';


class NoteTaking extends Component {
    constructor(props){
        super(props)
        this.state = {
            item:[]
        }
        this.addnote= this.addnote.bind(this)
    }
    addnote(event){

        console.log("working")

        if( this.thetitle.value !== "")
        {
            var newitem ={
                title: this.thetitle.value,
                note: this.thenote.value
            }
        }

        this.setState((prevstate)=>{
            return{
                item: prevstate.item.concat(newitem)
            }
        }
        )
        
        this.thetitle.value=""
        this.thenote.value=""
        console.log(this.state.item)

        event.preventDefault()
    }
  render(){
  return (
    <div >
        <header>
            <h1>Note Taking App</h1>
            <Button title='add note' color = 'blue' />
            <Button title='Delete' color = 'red' />
            <Button title='edit' color = 'orange' />
        </header>
        <div className="main-content">
        <ul>
        {this.state.item.map((val)=><li>{val.title}-{val.note}</li>)}
        </ul>
        </div>
        <footer>
            <form onSubmit={this.addnote}>
                <input type="text"
                placeholder="Enter note title here"
                ref={(title)=> this.thetitle=title}
                />
                <textarea
                placeholder="Enter your note here"
                ref={(note)=> this.thenote=note}
                />
                <button type="submit">Add Note </button>
            </form>
        </footer> 
      
    </div>
  );
}
}
export default NoteTaking;
