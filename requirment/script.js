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