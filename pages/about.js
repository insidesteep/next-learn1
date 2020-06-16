import React, { Component } from 'react'
import Layout from '../components/Layout'
import Error from './_error'

class About extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/insidesteep')
    const data = await res.json()
    const statusCode = res.status > 200 ? res.status : false

    return { user: data, statusCode }
  }

  render() {
    const { user, statusCode } = this.props

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title='About Page'>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt='Suxrob' height='200px' />
      </Layout>
    )
  }
}

export default About
