import React, { Component } from 'react';

import { connect } from 'react-redux';

import Cleaner from './cleaner';
import StackStat from './stackStat';
import SearchBar from './searchBar';

import { Grid, Container } from 'semantic-ui-react';

class WordStacks extends Component {
  renderStacks(){
    return this.props.stacks.map((c,i)=> {
      return <Grid.Column key={i+1}>
          <StackStat />
        </Grid.Column>
    })
  }
  render(){
    return <Container>
      <Grid >
        <Grid.Column key={0}>
          <SearchBar />
          <Cleaner data={this.props.cleanerWords} />
        </Grid.Column>
        {this.renderStacks()}
      </Grid>
    </Container>
  }
}

function mapStateToProps(state){
  return {
    cleanerWords: state.wordStackCleanerWords,
    stacks: state.wordStacksStacksConfiguration||[]
  }
}

export default connect(mapStateToProps)(WordStacks);
