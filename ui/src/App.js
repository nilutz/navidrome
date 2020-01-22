// in src/App.js
import React from 'react'
import { Admin, Resource } from 'react-admin'
import dataProvider from './dataProvider'
import authProvider from './authProvider'
import { Login } from './layout'
import user from './user'
import song from './song'
import album from './album'

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={Login}
  >
    <Resource name="song" {...song} />
    <Resource name="album" {...album} />
    <Resource name="user" {...user} />
  </Admin>
)
export default App
