import React, { Component } from 'react';
import ClassList from './components/ClassList';
import FetchPosts from './components/FetchPosts';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="classmates" element={<FetchPosts/>}/>
        </Routes>
      </>
    );
  }
}