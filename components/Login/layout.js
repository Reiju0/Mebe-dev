import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <div className="relative min-h-screen flex ">
          <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
            {/* start left side */}
            <div
              className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
              }}>
              <div className="absolute bg-gradient-to-b from-blue-700 to-cyan-600 opacity-75 inset-0 z-0" />
              <div className="w-full  max-w-md z-10">
                <div className="sm:text-5xl xl:text-50xl font-bold leading-tight mb-6">
                  MEBE V.4
                </div>
                <div className="sm:text-xl xl:text-md text-gray-200 font-normal">
                  "Monitoring Evaluation Budget Execution"
                </div>
              </div>
            </div>
            {/*  end of left side */}

            {/* start form login */}
            <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
              <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                  <h1 className="mt-6 text-4xl font-bold text-blue-600">
                    Login Page!
                    {/* {children} server side rendering */}
                  </h1>
                </div>
                <div className="flex items-center justify-center space-x-2"></div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="relative">
                    <div className="absolute right-3 mt-4"></div>
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                      Username
                    </label>
                    <input
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                      type
                      placeholder="username"
                      defaultValue="kppn107"
                    />
                  </div>
                  <div className="mt-8 content-center">
                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </label>
                    <input
                      className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                      type
                      placeholder="Enter your password"
                      defaultValue="******"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="text-indigo-400 hover:text-blue-500">
                        Lupa Password
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className=" w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-3 m-auto rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
