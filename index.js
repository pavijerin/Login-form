
function func()
{
    let email = document.getElementById("loginemail").value;
    let pass = document.getElementById('loginpass').value;

if(email == 'Entri Elevate' && pass == 'admin123')
{
    window.location.href="https://pavijerin.github.io/product-selling-/"
    alert("login Sucessful !");
}
else
{
    alert("Login wrong");
    return;
}

}   
function loginfg()
{
   let a = prompt("Enter The Email ID")
   alert('Verfication Code Send To your Email ID')
}

var state= false;
function toggle(){
    if (state)
    {
        document.getElementById("loginpass").setAttribute("type", "password");
        state= false;
    }
    else
    {
        document.getElementById("loginpass").setAttribute("type", "text");
        state= true;
    }
}