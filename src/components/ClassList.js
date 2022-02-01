import React, { Component } from 'react';
import ClassListRows from './ClassListRows';

export default class ClassList extends Component {
    constructor(props){
        console.log('Component Constructed')
        super(props);
        this.state={
            classmates: []
        }
    }
    componentDidMount(){
        console.log('Component Mounted')
        fetch(' https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data =>{
           console.log(data)
            this.setState({
                classmates: data
            })
        })
    }
  render() {
      console.log('component Rendered')
    return (
        <div className="container">
        <h1> Meet Kekambas-79!</h1>
        <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    </tr>
                </thead>
        </table>
        <tbody>

            {this.state.classmates.map((c, i)=> <ClassListRows classmate={c} key={i}/>)}
        </tbody>
        
        </div>
    );
  }
}