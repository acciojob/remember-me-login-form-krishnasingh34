//your JS code here. If required.
let form = document.querySelector('form')
let usernameBox = document.querySelector('#username')
let passwordBox = document.querySelector('#password')
let checkbox = document.querySelector('#checkbox')
let btn = document.querySelector('#submit')
let existingbtn = document.querySelector('#existing')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let username = usernameBox.value
    let password = passwordBox.value
    checkbox.addEventListener('click', ()=>{
        let check = checkbox.checked
        if(check){
            localStorage.setItem('username', JSON.stringify(username))
            localStorage.setItem('passowrd', JSON.stringify(password))
        }
        alert(`Logged in as ${username}`)
        else{
            localStorage.removeItem('username')
            localStorage.removeItem('passowrd')
        }
    })
})

