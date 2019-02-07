import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hi from Next.js 👋</h1>
      <p><Link href='/about'><a>About</a></Link></p>
      <button>Call login mutation</button>
    </Layout>
  )
}

export default IndexPage;
