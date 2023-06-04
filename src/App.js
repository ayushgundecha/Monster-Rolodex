import { Component} from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/searchbox.component';

class App extends Component{

  constructor(){
    super();


    this.state={

      Monsters: [],
      searchField: '',

     
    };
    console.log("constructor");
  }

  componentDidMount(){
    console.log("comonentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        ()=>{
          return{
            Monsters:users
          }
        },
        
        ))
  }

  onSearchChange=
    (event)=>{
      const searchField=event.target.value.toLocaleLowerCase();
     

      this.setState(()=>{
       return {searchField};
      });
    };
  

  render(){
    console.log("render");

    const {Monsters ,searchField}=this.state;
    const {onSearchChange}=this;


    const newmonsters=Monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <h1 className='app-title '>Monster-Rolodex </h1>
      <SearchBox onChangehandler={onSearchChange} className='monster-search-box' placeholder='Search monsters' />
      
      <CardList monsters={newmonsters}/>
      </div>
    );

  }
   
}

export default App;
