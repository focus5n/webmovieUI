import axios, { Axios } from "axios";

function UserInfo() {
  return (
    <form>
      새로운 비밀번호 : <input type="password" name="userPw" />
      <input
        type="button"
        value="수정"
        onClick={(e) => {
          e.preventDefault();
          const userPw = document.querySelector("[name=userPw]").value;
          localStorage.setItem("userPw", userPw);
          const formData = new FormData();
          formData.append("id", localStorage.getItem("id"));
          formData.append("userPw", userPw);

          axios({
            url: "http://localhost:8080/pw_modi",
            method: "post",
            data: formData,
          }).then((res) => {
            console.log(res.data.msg);
            alert(res.data.msg);
            window.location = "/";
          });
        }}
      />
      <br />
      <input
        type="button"
        value="탈퇴"
        onClick={(e) => {
          const formData = new FormData();
          formData.append("id", localStorage.getItem("id"));
          axios({
            url: "http://localhost:8080/signout",
            method: "post",
            data: formData,
          }).then((res) => {
            console.log(res.data.msg);
            alert(res.data.msg);
            localStorage.clear();
            window.location = "/";
          });
        }}
      />
    </form>
  );
}
export default UserInfo;
