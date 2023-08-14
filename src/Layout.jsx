import React, { Component } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'

export default class  extends Component {
  render() {
    return (
        <div className='h-[100svh]'>
            <Header/>
            <Main/>
        </div>
    )
  }
}
