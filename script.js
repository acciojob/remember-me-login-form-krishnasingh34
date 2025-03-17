//your JS code here. If required.
let form = document.querySelector('form')
let usernameBox = document.querySelector('#username')
let passwordBox = document.querySelector('#password')
let checkbox = document.querySelector('#checkbox')
let btn = document.querySelector('#submit')
let div = document.querySelector('.new')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let username = usernameBox.value
    let password = passwordBox.value
    alert(`Logged in as ${username}`)
    checkbox.addEventListener('click', ()=>{
        check = checkInput.checked
        if(check){
            localStorage.setItem('username', JSON.stringify(username))
            localStorage.setItem('passowrd', JSON.stringify(password))
            let newbtn = document.createElement('button')
            newbtn.id = 'existing'
            newbtn.innerText = 'Login as existing user'
            div.append(newbtn)
            newbtn.addEventListener('click',()=>{
                alert(`Logged in as ${username}`)
            })
        }
        else{
            localStorage.removeItem('username')
            localStorage.removeItem('passowrd')
        }
    })
})

