import React, { Component }from 'react';
import { Input } from 'semantic-ui-react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term:'' }
    this.onInputChange = this.onInputChange.bind(this);
    this.searchWord = this.searchWord.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  searchWord(word){
    console.log("searching ", word)
  }
  onInputChange(event){
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event){
    event.preventDefault();
    this.searchWord(event.target.value);
    this.setState({ term: '' });
  }
  render(){
    return <form onSubmit={this.onFormSubmit}>
      <Input
        icon='search'
        placeholder='Search...'
        value={this.state.term}
        onChange={this.onInputChange}/>
    </form>
  }

}
