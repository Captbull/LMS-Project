import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
const Contents = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const loginHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const request = await fetch(
        "https://lms-backend-2mm5.onrender.com/login/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const response = await request.json();
      if (request.ok) {
        if (response.data.role === "INSTRUCTOR") {
          navigate("", { replace: true });
        } else {
          navigate("/Display/profile", { replace: true });
        }
      }
      console.log(response);
      setLoading(false);
      alert(response.responseMessage);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-black pt-[3rem] bg-inherit  ">
      <div className="text-4xl font-semibold text-center">Welcome Back</div>
      <div className="text-lg font-normal text-center">
        Login into your account
      </div>
      <form
        method="post"
        className="flex flex-col justify-center items-center gap-[3rem] mt-[3rem]"
      >
        <input
          type="text"
          placeholder="Email or Username"
          className="w-[24rem] h-16 rounded-lg border border-zinc-300 pl-5 "
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-[24rem] h-16 rounded-lg border border-zinc-300 pl-5 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="absolute top-[1.6rem] right-[2rem] cursor-pointer text-gray-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaRegEyeSlash />}
          </div>
        </div>
      </form>

      <div className="mt-[1rem] flex justify-center items-center gap-[10rem]">
        <div className="flex justify-center items-center gap-[2.3rem]">
          <div>
            <form>
              <input type="checkbox" name="" id="Remember" />

              <label
                htmlFor="Remember"
                className="text-zinc-900 text-xs font-normal tracking-tight"
              >
                {" "}
                Remember me
              </label>
            </form>
          </div>
        </div>

        <div>
          <button className="text-red-600 text-sm font-light top-[1.5px]">
            Recover Password
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center">
        <button
          className="text-zinc-600 text-lg font-normal w-[24rem] h-16 rounded-lg bg-zinc-200 "
          onClick={loginHandler}
        >
          {loading ? "Signing in" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default Contents;
