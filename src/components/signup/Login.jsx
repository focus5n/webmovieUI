import axios from "axios";
import { useEffect } from "react";

import keyhole from "./imgs/keyhole.jpg";

function Login() {
  useEffect(() => {
    if (localStorage.getItem("id") != null) {
      alert("로그인 되어있습니다.");
      window.location = "/";
    }
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData();
        const userId = e.target["0"].value;
        const userPw = e.target["1"].value;
        formData.append("userId", userId);
        formData.append("userPw", userPw);
        axios({
          url: "http://localhost:8080/login",
          method: "post",
          data: formData,
        }).then((res) => {
          console.log(res.data);
          if (res.data != null) {
            localStorage.setItem("id", res.data.user.id);
            localStorage.setItem("userId", res.data.user.userId);
            localStorage.setItem("userPw", res.data.user.userPw);
            localStorage.setItem("userEmail", res.data.user.userEmail);
            localStorage.setItem("userCash", res.data.user.userCash);
            console.log(localStorage.getItem("id"));
            console.log(localStorage.getItem("userId"));
            console.log(localStorage.getItem("userPw"));
            console.log(localStorage.getItem("userEmail"));
            console.log(localStorage.getItem("userCash"));
            window.location = "/";
          }
          alert(res.data.msg);
        });
      }}
    >
      <div className="loginSection">
        <div className="loginContainer">
          <div className="user singinBx">
            <div className="imgBx">
              <img src={keyhole} alt="keyhole" />
            </div>
            <div className="formBx">
              <form>
                <h2>어서오세요!</h2>
                <input type="text" placeholder="아이디에요" />
                <input type="password" placeholder="비밀번호를 적어주세요!" />
                <input type="submit" value={"들어가기"} />
                <p className="signup">
                  <a href="/signup">아직 회원이 아니신가요?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
