import React, {
  Component, PropTypes
}
from 'react'
import ReactDOM from 'react-dom'
import {
  HelloWorldWidget
}
from './components/index'

ReactDOM.render( < HelloWorldWidget name = "Joe hello" / > , document.getElementById('app'))
