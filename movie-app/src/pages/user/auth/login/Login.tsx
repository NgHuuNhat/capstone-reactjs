import React from 'react'

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
            Login
          </span>
        </h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              <i className="fas fa-envelope mr-2" />Email
            </label>
            <div>
              <input id="email" type="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              <i className="fas fa-lock mr-2" />Password
            </label>
            <div>
              <input id="password" type="password" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              LogIn
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-gray-600 hover:underline">Forgot password?</a>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6">Don't have an account? <a href="/auth/register" className="text-blue-500 hover:underline">Sign up</a></p>
        {/* <div className="mt-4">
          <p className="text-center text-gray-600">Or log in with:</p>
          <div className="flex justify-center mt-2">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
              <i className="fab fa-google" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  )
}
