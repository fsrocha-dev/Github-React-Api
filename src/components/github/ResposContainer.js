import React, { Component } from 'react'
import { fetchRepos } from '../../service/repos-api'

class ReposContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  componentDidMount(){
    fetchRepos('fsrocha.dev').then(res => window.console.log(res.data))
  }

  render(){
    return (
      <h1>Repositórios</h1>
    )
  }

}

export default ReposContainer