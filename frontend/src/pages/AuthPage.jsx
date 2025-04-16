import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin((prev) => !prev);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-cyan-700 flex items-center justify-center">
      <div className="bg-slate-800 rounded-lg shadow-lg w-90 p-6 relative">
        {isLogin ? <Login /> : <Signup />}

        <div className="text-sm text-cyan-300 text-center mt-4">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={toggleForm}
                className="hover:underline text-xs text-cyan-300"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={toggleForm}
                className="hover:underline text-xs text-cyan-300"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
