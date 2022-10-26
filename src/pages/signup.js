import  SignUp  from '../components/SignUp'
import Head from 'next/head';

const SignUpPage = () => {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp />


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

export default SignUpPage;