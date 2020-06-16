import { withRouter } from 'next/router'
import Layout from '../components/Layout'

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: '80vw' }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
      aspernatur, dolor consequuntur, nulla iusto cum rerum eaque repudiandae
      animi, enim doloremque sint delectus quos commodi magnam. Blanditiis
      tempora odio cum.
    </p>
  </Layout>
)

export default withRouter(Post)
