import axios from "axios";

import makekey from "./imgs/makekey.jpg";

function SignUp() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData();

        const userId = document.querySelector("[name=userId]").value;
        const userPw = document.querySelector("[name=userPw]").value;
        const userName = document.querySelector("[name=userName]").value;
        const userEmail = document.querySelector("[name=userEmail]").value;
        const authKey = document.querySelector("[name=authKey]").value;
        formData.append("userId", userId);
        formData.append("userPw", userPw);
        formData.append("userName", userName);
        formData.append("userEmail", userEmail);
        formData.append("authKey", authKey);
        axios({
          url: "http://localhost:8080/signup",
          method: "post",
          data: formData,
        }).then((res) => {
          if (res.data.code === 200) {
            window.location = "/";
          }
          alert(res.data.msg);
        });
      }}
    >
      <div className="signupSection">
        <div className="signupContainer">
          <div className="user signupBx">
            <div className="imgBx">
              <img src={makekey} alt="keyhole" />
            </div>
            <div className="formBx">
              <form>
                <h2>처음이시죠?</h2>
                <input type="text" name="userId" placeholder="아이디 만들기" />
                <input
                  type="password"
                  name="userPw"
                  placeholder="비밀번호를 만들기"
                />
                <input
                  type="text"
                  name="userName"
                  placeholder="성함을 적어주세요!"
                />
                <input
                  type="email"
                  name="userEmail"
                  className="signupEmail"
                  placeholder="이메일을 적어주세요!"
                />
                <p className="signup">
                  <input
                    type="button"
                    value="인증코드 받아보기"
                    className="singupBtn"
                    onClick={(e) => {
                      e.preventDefault();
                      const formData = new FormData();
                      const email =
                        document.querySelector("[name=userEmail]").value;
                      formData.append("userEmail", email);
                      axios({
                        url: "http://localhost:8080/signupmail",
                        method: "post",
                        data: formData,
                      }).then((res) => {
                        alert(res.data.msg);
                      });
                    }}
                  />
                  <input
                    type="text"
                    name="authKey"
                    placeholder="인증코드 적어보기"
                    className="signupEmail"
                  />
                  <input
                    type="button"
                    value="인증코드 인증하기"
                    className="singupBtn"
                    onClick={(e) => {
                      const formData = new FormData();
                      const authKey =
                        document.querySelector("[name=authKey]").value;
                      formData.append("authKey", authKey);
                      axios({
                        url: "http://localhost:8080/signupcert",
                        method: "post",
                        data: formData,
                      }).then((res) => {
                        alert(res.data.msg);
                      });
                    }}
                  />
                  <input type="submit" value="회원가입"></input>
                  <a href="/login">이미 회원이신가요?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
