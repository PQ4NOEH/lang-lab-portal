import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default class AppMenu extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick(event){
    this.setState({activeItem: event.target.name});
  }
  render(){
    return <Menu icon vertical>
          <Menu.Item name='grammar' active={this.state.activeItem === 'grammar'} onClick={this.handleItemClick}>
            <Icon name='cogs' />
          </Menu.Item>
          <Menu.Item name='vocab' active={this.state.activeItem === 'vocab'} onClick={this.handleItemClick}>
            <Icon name='steam' />
          </Menu.Item>
          <Menu.Item name='reading' active={this.state.activeItem === 'reading'} onClick={this.handleItemClick}>
            <Icon name='book' />
          </Menu.Item>
          <Menu.Item name='listening' active={this.state.activeItem === 'listening'} onClick={this.handleItemClick}>
            <Icon name='assistive listening systems' />
          </Menu.Item>
          <Menu.Item name='writing' active={this.state.activeItem === 'writing'} onClick={this.handleItemClick}>
            <Icon name='write' />
          </Menu.Item>
          <Menu.Item name='speaking' active={this.state.activeItem === 'speaking'} onClick={this.handleItemClick}>
            <Icon name='beer' />
          </Menu.Item>
        </Menu>
  }
}
