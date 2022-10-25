import { fetcher } from '../frontendLibs/fetch';
import { useCurrentUser } from '../frontendLibs/user';
import { useRouter } from 'next/router';
import { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';

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
      <form className={'form'} onSubmit={onSubmit}>
        <h1>Hi, please sign up</h1>
      <div className={'control'}>
          <label htmlFor='name'>Username</label>
          <input type='tewxt' required id='name' ref={nameRef} />
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
        }
        .form {
          padding: 1rem;
        }
        
        .control {
          margin-bottom: 0.5rem;
        }
        
        .control label {
          display: block;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .control input {
          display: block;
          font: inherit;
          border-radius: 4px;
          border: 1px solid #ccc;
          padding: 0.25rem;
          width: 100%;
        }
        
        .actions {
          margin-top: 1rem;
          text-align: right;
        }
        
        .actions button {
          font: inherit;
          cursor: pointer;
          background-color: #77002e;
          color: white;
          padding: 0.5rem 1.5rem;
          border: 1px solid #77002e;
          border-radius: 4px;
          font-weight: bold;
        }
        
        .actions button:hover,
        .actions button:active {
          background-color: #a50e48;
          border-color: #a50e48;
        }
    `}</style>
    </div>
  );
};

export default SignUp;
