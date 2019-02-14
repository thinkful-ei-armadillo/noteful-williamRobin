import React,{Component} from 'react';
import NotefulContext from './NotefulContext';

export default class AddNote extends Component{
    static contextType = NotefulContext
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.contentInput = React.createRef();
        this.state = {
            folder: null
        }
      }

handlefolderSection = () => {
   return this.context.folders.map(el => <option value={el.id}>{el.name}</option>)
}
handleFolderOption =(e) =>{
   this.setState({
       folder: e.target.value
   })
}
handleSubmit =ev =>{
    ev.preventDefault();
    const note = {
    name: this.nameInput.current.value,
    modified: new Date(),
    folderId: this.state.folder,
    content: this.contentInput.current.value
      };
    console.log(note)
     const options = {
       method: "POST",
       headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(note)
     }
  fetch("http://localhost:9090/notes/", options)
    .then(res => res.json())
    .then(resJson => { 
        this.context.addNote(resJson);
        this.props.history.push(`/notes/${resJson.id}`);
    })
      }



    render(){
        return (
         <form onSubmit={this.handleSubmit}>
             <label htmlFor="Name-Input" >Name: </label>
             <input id="Name-Input" type="text" ref={this.nameInput}></input>
             <label for="content-input">Content: </label>
             <input id="content-input" type="text" ref={this.contentInput}></input>
             <label for="folders-list">Folders: </label>
             <select id="folders-list" onChange={this.handleFolderOption}>
                {this.handlefolderSection()}
             </select>
             <input type="submit" value="submit"></input>
         </form>   
        )
    }
}