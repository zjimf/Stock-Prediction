import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provide } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const login = async () => {
    //點擊按鈕後，彈出登入視窗，詢問使用者要用哪隻帳號進行登入，並將結果保存至result變數。
    const result = await signInWithPopup(auth, provide);
    console.log(result);
    //登入成功後，將使用者導向主頁面。
    navigate("/");
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;