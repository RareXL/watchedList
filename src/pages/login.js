import  Login  from '../components/Login'
import Head from 'next/head';

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </div>
  );
};

export default LoginPage;