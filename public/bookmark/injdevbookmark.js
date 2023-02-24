function build_login() {
  const gui_login = document.createElement('div');
  gui_login.style.boxSizing = "border-box";
  gui_login.style.width = "40vh";
  gui_login.style.height = "60vh";
  gui_login.style.background = "#181818";
  gui_login.style.border = "1.5108593012275733vh solid #0F0F0F";
  gui_login.style.borderRadius = "5.09915014164306vh";
  gui_login.id = "main-login";
  gui_login.style.position = "absolute";
  gui_login.style.left = "50%";
  gui_login.style.top = "50%";
  gui_login.style.transform = "translate(-50%, -50%)";
  gui_login.style.display = "block";
  gui_login.style.zIndex = "99999";



  const gui_login_img = document.createElement('img');
  gui_login_img.src = "";
  gui_login_img.style.width = "45%";
  gui_login_img.style.position = "absolute";
  gui_login_img.style.top = "30px";
  gui_login_img.style.left = "50%";
  gui_login_img.style.transform = "translate(-50%)";

  const gui_login_text = document.createElement('div');
  gui_login_text.style.textAlign = "center";

  const gui_login_username = document.createElement('input');
  gui_login_username.type = "text";
  gui_login_username.style.marginTop = "70%";
  gui_login_username.placeholder = "Username";
  gui_login_username.style.textAlign = "center";
  gui_login_username.style.borderRadius = "12px";
  gui_login_username.style.height = "30px";
  gui_login_username.style.border = "none";
  gui_login_username.style.backgroundColor = "#313131";
  gui_login_username.style.color = "#CBCBCB";
  gui_login_username.style.fontFamily = "Inter";
  gui_login_username.style.fontSize = "14px";
  gui_login_username.id = "syringe-username-box";

  const gui_login_password = document.createElement('input');
  gui_login_password.type = "password";
  gui_login_password.style.marginTop = "10%";
  gui_login_password.placeholder = "Password";
  gui_login_password.style.textAlign = "center";
  gui_login_password.style.borderRadius = "12px";
  gui_login_password.style.height = "30px";
  gui_login_password.style.border = "none";
  gui_login_password.style.backgroundColor = "#313131";
  gui_login_password.style.color = "#CBCBCB";
  gui_login_password.style.fontFamily = "Inter";
  gui_login_password.style.fontSize = "14px";
  gui_login_password.id = "syringe-password-box";

  const gui_login_forgot_linebreak = document.createElement("br");

  const gui_login_forgot = document.createElement("a");
  gui_login_forgot.style.color = "white";
  gui_login_forgot.innerText = "forgot your password?";
  gui_login_forgot.href = "https://example.com";
  gui_login_forgot.style.textAlign = "center";
  gui_login_forgot.style.display = "inline-block";
  gui_login_forgot.style.marginTop = "2px";
  gui_login_forgot.style.marginBottom = "50px";
  gui_login_forgot.style.fontFamily = "Inter";
  gui_login_forgot.style.fontSize = "13px";

  const gui_login_login_button_linebreak = document.createElement("br");

  const gui_login_login_button = document.createElement("button");
  gui_login_login_button.style.borderRadius = "16px";
  gui_login_login_button.style.marginTop = "0px";
  gui_login_login_button.innerText = "Login";
  gui_login_login_button.style.textAlign = "center";
  gui_login_login_button.id = "syringe-login-button";
  gui_login_login_button.style.height = "40px";
  gui_login_login_button.style.width = "90px";
  gui_login_login_button.style.cursor = "pointer";
  gui_login_login_button.style.backgroundColor = "#313131";
  gui_login_login_button.style.color = "#CBCBCB";
  gui_login_login_button.style.fontFamily = "Inter";
  gui_login_login_button.style.fontSize = "12px";
  gui_login_login_button.onclick = login;

  gui_login_login_button.classList.add("syringe-button");

  const gui_login_noacc_linebreak = document.createElement("br");

  const gui_login_noacc = document.createElement("a");
  gui_login_noacc.style.color = "white";
  gui_login_noacc.innerText = "don't have an account?";
  gui_login_noacc.href = "https://example.com";
  gui_login_noacc.style.textAlign = "center";
  gui_login_noacc.style.display = "inline-block";
  gui_login_noacc.style.marginBottom = "1px";
  gui_login_noacc.style.fontFamily = "Inter";
  gui_login_noacc.style.fontSize = "13px";

  const google_fonts = document.createElement('link');
  google_fonts.href = "https://fonts.googleapis.com/css2?family=Inter&display=swap";
  google_fonts.rel = "stylesheet";

  const stylesheet = document.createElement("style");
  stylesheet.innerHTML = `.syringe-button {
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.syringe-button:before {
    content: '';
    background: linear-gradient(45deg, #84FFC9, #AAB2FF, #ECA0FF, #84FFC9);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.syringe-button:hover:before {
    opacity: 1;
}

.syringe-button:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #313131;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}`;

  document.body.appendChild(gui_login);
  document.head.appendChild(google_fonts);
  document.body.appendChild(stylesheet);
  gui_login.appendChild(gui_login_img);
  gui_login.appendChild(gui_login_text);
  gui_login_text.appendChild(gui_login_username);
  gui_login_text.appendChild(gui_login_password);
  gui_login_text.appendChild(gui_login_forgot_linebreak);
  gui_login_text.appendChild(gui_login_forgot);
  gui_login_text.appendChild(gui_login_login_button_linebreak);
  gui_login_text.appendChild(gui_login_login_button);
  gui_login_text.appendChild(gui_login_noacc_linebreak);
  gui_login_text.appendChild(gui_login_noacc);
}

build_login();
let toggle = 0;
const main_login = document.getElementById("main-login");

document.addEventListener("keydown", function onEvent(event) {
   
    if (event.key === "Shift") {
        if (toggle === 0) {
          main_login.style.display = "none";
          toggle++;

        }
        else if (toggle === 1) {
          main_login.style.display = "block";
          toggle--;
        };
    };
});
function load_os() {
  const backgroundOS = document.createElement("img");
  backgroundOS.style.width = "100%";
  backgroundOS.style.height = "100%";
  backgroundOS.style.position = "absolute";
  backgroundOS.style.zIndex = "100000";

  document.body.appendChild(backgroundOS);
  
};
function splashOS() {
  const main_gui = document.getElementById("syringe-gui-box");
  
  document.getElementById("welcome").remove();
  const appSplash = document.createElement("div");
  appSplash.id = "app";
  appSplash.style.zIndex = "2000";

  const sosimg = document.createElement("img");
  sosimg.classList.add("osimg");
  sosimg.src = "https://xskripting.github.io/syringe/sos.png";

  const progress = document.createElement("progress");
  progress.max = "200";
  progress.value = "0";
  progress.id = "progress";

  const loadingtag = document.createElement("p");
  loadingtag.id = "tag";
  loadingtag.innerText = "Loading..";

  const the_style = document.createElement("style");
  the_style.innerHTML = 
    
  `
  #progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
   appearance: none;

  width: 300px;
  height: 20px;
}
#progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}
#progress[value]::-webkit-progress-value {
  background-image:
	   -webkit-linear-gradient(-45deg, 
	                           transparent 33%, rgba(0, 0, 0, .1) 33%, 
	                           rgba(0,0, 0, .1) 66%, transparent 66%),
	   -webkit-linear-gradient(top, 
	                           rgba(255, 255, 255, .25), 
	                           rgba(0, 0, 0, .25)),
	   -webkit-linear-gradient(left, #84FFC9, #AAB2FF, #ECA0FF, #84FFC9);

    border-radius: 10px; 
    background-size: 35px 20px, 100% 100%, 100% 100%;
}
#progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.osimg {
  height: 10.6vw;
  width: 10.6vw;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
}

#tag {
  color: white;
  font-family: sans-serif;
  font-size: 20px;
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -52%);
}
  
  `;

  document.body.appendChild(the_style);
  main_gui.appendChild(appSplash);
  appSplash.appendChild(sosimg);
  appSplash.appendChild(progress);
  appSplash.appendChild(loadingtag);
  
  const progressBar = document.getElementById("progress");
  let number = 1;
  let number2 = 0;
  
  function everyTime() {
      number2++;
      console.log("ran");
      progressBar.value = number*number2;
      if (progressBar.value === 200) {
        clearInterval(myInterval);
        console.log("finished");
        document.getElementById("tag").innerText = "Done!";
      };
  };
  
  var myInterval = setInterval(everyTime, 10);


  
};


function welcome() {
  main_login.remove();
  let toggle2 = 0;
  document.addEventListener("keydown", function onEvent(event) {
   
    if (event.key === "Shift") {
        console.log("test");
        if (toggle2 === 0) {
          gui_main.style.animation = "toggle-in 1s";
          gui_main.style.left = "100%";
          toggle2++;

        }
        else if (toggle === 1) {
          gui_main.style.animation = "toggle-out 1s";
          gui_main.style.left = "0%";
          toggle2--;
        };
    };
  });


  
  document.body.style.margin = "0px";
  const gui_main = document.createElement("div");
  gui_main.style.width = "100%";
  gui_main.style.height = "100%";
  gui_main.style.backgroundColor = "#0f0f0f";
  gui_main.style.position = "absolute";
  gui_main.style.zIndex = "1000";
  gui_main.style.top = "0px";
  gui_main.style.left = "0px";
  gui_main.style.margin = "0px";
  gui_main.style.padding = "0px";
  gui_main.id = "syringe-gui-box";

  const gui_animation_style = document.createElement("style");
  gui_animation_style.innerHTML = 
    
  
  `
  
  @keyframes toggle-in {
  0% {left: 0%; top:0px;}
  100% {left: 100%; top:0px;}
  }
  
  @keyframes toggle-out {
  0% {left: 100%; top:0px;}
  100% {left: 0%; top:0px;}
  }
  @keyframes welcome-opacity {

  80% {opacity: 1;}
  }
  

  `;

  const gui_welcome = document.createElement("p");
  gui_welcome.id = "welcome";
  gui_welcome.style.color = "white";
  gui_welcome.innerText = "Welcome.";
  gui_welcome.style.position = "absolute";
  gui_welcome.style.left = "50%";
  gui_welcome.style.top = "50%";
  gui_welcome.style.transform = "translate(-50%, -50%)";
  gui_welcome.style.textAlign = "center";
  gui_welcome.style.display = "inline-block";
  gui_welcome.style.marginBottom = "1px";
  gui_welcome.style.fontFamily = "Inter";
  gui_welcome.style.fontSize = "25px";
  gui_welcome.style.opacity = "0";
  gui_welcome.style.animation = "welcome-opacity 3.5s";
    

  document.body.appendChild(gui_main);
  document.body.appendChild(gui_animation_style);
  gui_main.appendChild(gui_welcome);

  function listener(event) {
    switch(event.type) {
      case "animationend":
        console.log(`Ended: elapsed time is ${event.elapsedTime}`);
        splashOS();
        
        
        
        break;
  
    };
  };
  
  const element2 = document.getElementById("welcome");
  element2.addEventListener("animationend", listener, false);
  element2.className = "welcome";
};



function login() {
  console.log("Ran!");
  const username = document.getElementById("syringe-username-box").value;
  const password = document.getElementById("syringe-password-box").value;
  let loginreq = new XMLHttpRequest();
  loginreq.open("GET", "");
  loginreq.setRequestHeader("username", username);
  loginreq.setRequestHeader("password", password);
  loginreq.send();
  loginreq.responseType = 'text';

  loginreq.onload = () => {
    if (loginreq.readyState === loginreq.DONE) {
      if (loginreq.status === 200) {
        document.getElementById("syringe-login-button").innerHTML = loginreq.response;
        if (loginreq.response === "Loading...") {
          setTimeout(welcome, Math.random()*3000);
        };
      };
    };
  };
};
