const toggle_Button = document.getElementsByClassName('toggle_button')[0]
const navbar_Links = document.getElementsByClassName('navbar_links')[0]


toggle_Button.addEventListener('click', () =>{
    navbar_Links.classList.toggle('active')
})

document.getElementById("form").addEventListener
("submit",()=>{
    let real_name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let gender=document.getElementsByName("gender");
    let message=document.getElementById("message").value;
    let subscribe=document.getElementById("box").checked;

    if(real_name.length < 5){
        alert("Real name must be more than 5 characters.")
    }

    if(!email.endsWith(".com")){
        alert("Your email must be valid.")
    }

    if(!gender[0].checked && !gender[1].checked)
    {
        alert("Gender must be selected.")
    }

    if(message.length < 5){
        alert("Message length must be more than 10 characters.")
    }

    if(!subscribe)
    {
        alert("User must subscribe to our newsletter.")
    }

})