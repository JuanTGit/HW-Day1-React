import React, { Component } from 'react';
import ClassList from './ClassList';

export default class ClassListRows extends Component {
  render() {
      const classmate= this.props.classmate
    return (
        
         <tr>
             <th>{classmate.id}</th>
            <td>{classmate.first_name}</td>
            <td>{classmate.last_name}</td>
        </tr>
    )
  }
}