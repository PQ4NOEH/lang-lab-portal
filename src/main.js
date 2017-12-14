import React from 'react'
import { render } from 'react-dom'
import { Container, Header } from 'semantic-ui-react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import User from './components/user';
import AppMenu from './components/app-menu';
import Brand from './components/branding';
import WordStacks from './components/vocab/stacks/index'

import reducers from './reducers';

const MOUNT_NODE = document.getElementById('root')

const App = () => (
  <div>
    <Header >
      <Brand />
      <User />
    </Header>
    <AppMenu />
    <WordStacks />
  </div>
)

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , MOUNT_NODE);
