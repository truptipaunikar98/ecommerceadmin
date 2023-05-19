import { useState, useEffect } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const image = "https://emoji.gg/assets/emoji/7691_Woozy_Monkey.gif";
  const [img, setImg] = useState(image);
  useEffect(() => {
    if (password.length > 0) {
      setImg(
        "https://media.tenor.com/images/89e89bf0746dcd5ec2ef6595ddf27686/tenor.gif"
      );
    } else {
      setImg(image);
    }
  }, [password]);

   const login =()=>{
    let givenPassword= 1234;
    let givenEemail = "abc@gmail.com";
    if(email==givenEemail && password==givenPassword){
        localStorage.setItem("isLogin", true)
        window.location.reload();
    }
    else{
        alert("Wrong username or password")
    }
   }

  return (
    <div className="App">
      <div className="imageContainer">
        <img src={img} />
      </div>
      <div className="otherDetails">
        <lable>Email</lable>
        <br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="loginInp"/>
        <br />
        <lable>Password</lable>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} className="loginInp"/>
        <br />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
