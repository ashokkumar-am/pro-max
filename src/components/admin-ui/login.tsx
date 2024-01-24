import React from "react";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex-1 bg-image bg-blue-50">Left Screen</div>
        <div className="flex-1 bg-green-50">
          <div className="items-center justify-center">
            <input type="text"  />
            <input type="text" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
