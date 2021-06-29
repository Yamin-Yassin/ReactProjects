import React from 'react'
import reactDom from 'react-dom'

function Greeting(){
  return <h4> ola pipi</h4>
}

reactDom.render(
  <Greeting/>, document.getElementById('root')
);