let choices = document.querySelectorAll(".btn");

let you = document.querySelector("#you");
let com = document.querySelector("#com");
let msg = document.querySelector("#msg");
let yourcount = 0;
let comcount =0;


const showwinner = (userwin, comch)=> {
    if (userwin === true) {
        you.innerText = ++yourcount;
        msg.innerText = `you won computer chosed ${comch}`;
    }
    else {
        com.innerText = ++comcount;
        msg.innerText = `you lost computer chosed ${comch}`;
    }
}

const comchoice = ()=> {
    const values = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return values[idx];
}

const playgame= (userch)=> {
    let comch = comchoice();

    if(comch == userch){
        msg.innerText = "match drawed choices was same";
    }
    else {
        let userwin = true;

        if(comch == "rock") {
            userwin = userch == "paper" ? true : false;
        }
        else if(comch == "paper"){
            userwin = userch == "scissor" ? true : false;
        }
        else if(comch == "scissor"){
            userwin = userch == "rock" ? true :false;
        }

        showwinner(userwin, comch);       
    }
}

choices.forEach((choice)=> {
    
    choice.addEventListener("click", ()=>{
        const userch = choice.getAttribute("id");
        playgame(userch);
    })
})
