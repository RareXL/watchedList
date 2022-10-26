import  Login  from '../components/Login'
import Head from 'next/head';

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Login />

      <style global jsx>{`
        body {
          background: #0c0c0c;
          font-family: monospace;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;