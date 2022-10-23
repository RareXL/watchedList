import Link from 'next/Link'
import Head from 'next/head'

const Layout = ({ children, title }) => (
  <div>
    <Head>
        <title>{title}</title>
    </Head>
    <div className="container">
      <nav>
        <Link href="/">
          <a>
            <span className="main-title">Movie List</span>
          </a>
        </Link>
      </nav>
        
      {children}

      <style jsx>{`
        .container {
          margin: 0 auto;
          background: #0c0c0c;
        }
        nav {
          box-shadow: rgb(12 12 12 / 30%) 0px 10px 30px;
          padding: 2rem;
          background: #0c0c0c;
          position: fixed;
          z-index: 1000;
          width: 100%;
          top: 0;
        }
        nav > * {
          display: inline-block;
          color: #0c0c0c;
        }
        nav a {
          text-decoration: none;
        }
        nav .main-title {
          font-weight: bold;
          color: white;
        }
      `}</style>
      <style global jsx>{`
        body {
          background: white;
          font-family: monospace;
        }
      `}</style>
    </div>
  </div>
);

export default Layout;