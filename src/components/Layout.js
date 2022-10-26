import Link from 'next/link'
import Head from 'next/head'
import { fetcher } from '../frontendLibs/fetch';
import { useCurrentUser } from '../frontendLibs/user';
import { useRouter } from 'next/router';
import { useCallback, useEffect} from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Layout = ({ children, title }) => {
  const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
  const router = useRouter()

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
  }, [mutate]);



return (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="container">
      <nav>
        {user ? (
          <Link href="/">
            <a
              onClick={onSignOut}
              style={{ marginRight: "15rem" }}
              className="abuttons"
            >
              <span className="main-title">Logout</span>
            </a>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <a className="abuttons">
                <span className="main-title">Login</span>
              </a>
            </Link>
            <Link href="/signup">
              <a style={{ marginRight: "15rem" }} className="abuttons">
                <span className="main-title">Sign up</span>
              </a>
            </Link>
          </>
        )}
        <Link href="/">
          <a
            style={router.pathname == "/" ? { padding: 15 } : {}}
            className="abuttons"
          >
            <span className="main-title">Explore Movies</span>
          </a>
        </Link>
        {user ? (
          <Link
            href={router.pathname.includes("/userList") ? "#" : "/userList"}
            as={{
              pathname: "/userList",
              query: { userId: user._id },
            }}
          >
            <a
              style={
                router.pathname.includes("/userList") ? { padding: 15 } : {}
              }
              className="abuttons"
            >
              <span className="main-title">My Movie List</span>
            </a>
          </Link>
        ) : null}
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
        .abuttons {
          background: #0c0c0c;
          text-decoration: none;
          font-size: 16px;
          border: 2px solid white;
          padding: 10px;
          text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
          -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
          -moz-box-shadow: 0 2px 0 rgb(0 0 0/5%);
          box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
          font-weight: bold;
          margin-right: 10px;
          color: white;
        }
        .abuttons:hover {
          background: white;
          border: 2px solid #white;
          color: #0c0c0c;
        }
        .main-title {
          font-weight: bold;
          color: white;
        }
        .main-title:hover {
          color: #0c0c0c;
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
);
};

export default Layout;
