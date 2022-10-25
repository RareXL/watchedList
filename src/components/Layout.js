import Link from 'next/link'
import Head from 'next/head'
import { fetcher } from '../frontendLibs/fetch';

import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

const Layout = ({ children, title }) => {

  const onSignOut = useCallback(async () => {
    try {
      await fetcher('/api/auth', {
        method: 'DELETE',
      });
      toast.success('You have been signed out');
      mutate({ user: null });
    } catch (e) {
      toast.error(e.message);
    }
  }, []);
return (
  <div>
    <Head>
        <title>{title}</title>
    </Head>
    <div className="container">
      <nav>
        <Link href="/">
          <a>
            <span className="main-title">Explore Movies</span>
          </a>
        </Link>
      </nav>
        
      {children}

      <style jsx>{`
        .container {
          margin: 0 auto;
          background: #0c0c0c;
          min-height: 96vh;
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
          font-size: 16px;
          border: 2px solid white;
          padding: 10px;
          text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
          -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
          -moz-box-shadow: 0 2px 0 rgb(0 0 0/5%);
          box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
          font-weight: bold;
        }
        nav .main-title {
          font-weight: bold;
          color: white;
        }
      `}</style>
      <style global jsx>{`
        body {
          background: #0c0c0c;
          font-family: monospace;
          margin: 0;
        }
      `}</style>
    </div>
  </div>
)
};

export default Layout;