import { fetcher } from '../frontendLibs/fetch';
import { useCurrentUser } from '../frontendLibs/user';
import { useRouter } from 'next/router';
import { useCallback, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const cPasswordRef = useRef();
  const nameRef = useRef();

  const { mutate } = useCurrentUser();

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        const response = await fetcher('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: emailRef.current.value,
            name: nameRef.current.value,
            password: passwordRef.current.value,
          }),
        });
        mutate({ user: response.user }, false);
        toast.success('Your account has been created');
        router.replace('/login');
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [mutate, router]
  );

  return (
    <div className={'card'}>
      <Toaster />
      <form className={'form'} onSubmit={onSubmit}>
      <h1 style={{textAlign:"center",fontSize:"25px"}}>Hi, please sign up</h1>
      <div className={'control'}>
          <label htmlFor='name'>Username</label>
          <input type='text' required id='name' ref={nameRef} />
        </div>
        <div className={'control'}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' ref={emailRef} />
        </div>
        <div className={'control'}>
          <label htmlFor='password'>New Password</label>
          <input type='password' required id='password' ref={passwordRef} />
        </div>
        <div className={'control'}>
          <label htmlFor='cPassword'>Confirm Password</label>
          <input type='password' required id='cPassword' ref={cPasswordRef} />
        </div>
        <div className={'actions'}>
          <button>Create Account</button>
        </div>
      </form>

      <style jsx>{`
        .card {
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          margin-top:20rem;
          width:60%;
          margin-left:20%;
        }
        .form {
          padding: 1rem;
        }

        .control {
          margin-bottom: 0.5rem;
          margin-bottom: 0.5rem;
          width: 60%;
          margin-left: 15%;
          display: block;
        }


        .control label {
          display: block;
          font-weight: bold;
          margin-bottom: 0.5rem;
          font-size: 20px;
        }

        .control input {
          display: block;
          font: inherit;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          border: 1px solid#ccc;
          padding: 1rem;
          width: 100%;
          font-size: 20px;
        }

        .actions {
          margin-top: 1rem;
          text-align: right;
        }

        .actions button {
          font: inherit;
          cursor: pointer;
          background-color: #0c0c0c;
          color: white;
          padding: 1rem 1.5rem;
          border: 1px solid #0c0c0c;
          border-radius: 4px;
          font-weight: bold;
        }

        .actions button:hover,
        .actions button:active {
          background-color: #0c0c0c;
          border-color: #0c0c0c;
        }
    `}</style>
    </div>
  );
};

export default SignUp;
