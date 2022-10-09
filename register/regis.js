let state = false

function toggleNavbarNav(){
    let nav = document.getElementById('nav-content')

    if(state==false){
        nav.style.display = 'flex'
        state=true
    }else if(state==true){
        nav.style.display='none'
        state=false
    }
}


// form
let validasi = () =>{
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let national = document.getElementById('national');
    let agree = document.getElementById('agree');
    let Msg = [];

    validasiUsername(username,Msg);
    validasiPassword(password,Msg);
    validasiEmail(email,Msg);
    validasiBirth(birth,Msg);
    validasiNational(national,Msg);
    validasiAgree(agree,Msg);


    if(Msg.length === 0)
    {
        alert('Your registration Succes!!');
    }
    else{
        alert(Msg.join('\n'));
    }

}

let validasiUsername = (username,Msg) =>{
    if(username.value === '')
    {
        Msg.push('Username required');
    }else if(username.value.length < 4)
    {
        Msg.push('your username is too short, username len min 4');
    }
}

let validasiPassword = (password,Msg) =>{
    if(password.value === '')
    {
        Msg.push('Password required');
    }else if(password.value.length < 8)
    {
        Msg.push('Password must contain at least 8 digit');
    }
}

let validasiEmail = (email,Msg) =>{
    if(email.value === '')
    {
        Msg.push('Email required');
    }
    else if(email.value.startsWith('.') || email.value.startsWith('@')){
        Msg.push('email cant start with . or @');
    }
    else if(email.value.indexOf('.') === (email.value.indexOf('@')+1)){
        Msg.push('\'.\' cant be next to \'@\'');
    }
    else if(!email.value.endsWith('.com')){
        Msg.push('must contain .com');
    }

}


let validasiBirth = (birth,Msg) =>{
    if(birth.value === '')
    {
        Msg.push('Birth required');
    }
}

let validasiNational = (national,Msg) =>{
    if(national.value === '')
    {
        Msg.push('Nationality required');
    }
}

let validasiAgree = (agree,Msg) =>{
    if(!agree.checked)
    {
        Msg.push('please read and confirm the agreement');
    }
}