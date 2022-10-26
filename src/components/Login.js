import { fetcher } from '../frontendLibs/fetch';
import { useCurrentUser } from '../frontendLibs/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
  const router = useRouter();
  useEffect(() => {
    if (isValidating) return;
    if (user) router.replace('/');
  }, [user, router, isValidating]);

  const onSubmit = useCallback(
    async (event) => {
      setIsLoading(true);
      event.preventDefault();
      try {
        const response = await fetcher('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        });
        mutate({ user: response.user }, false);
        toast.success('You have been logged in.');
      } catch (e) {
        toast.error('Incorrect email or password.');
      } finally {
        setIsLoading(false);
      }
    },
    [mutate]
  );

  return (
    <div className={"card"}>
      <Toaster />
      <form className={"form"} onSubmit={onSubmit}>
        <h1 style={{textAlign:"center",fontSize:"25px"}}>Hi, Please login</h1>
        <div className={"control"}>
          <label htmlFor="email">Email</label>
          <input className={"input"} type="email" required id="email" ref={emailRef} />
        </div>
        <div className={"control"}>
          <label htmlFor="password">Address</label>
          <input className={"input"} type="password" required id="password" ref={passwordRef} />
        </div>
        <div className={'actions'}>
          <button>Login to Account</button>
        </div>
        <div className={"note"}>
        <Link href="/signup" passHref>
          <p color="link" variant="highlight">
            Don&apos;t have an account? Sign Up
          </p>
        </Link>
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

export default Login;
