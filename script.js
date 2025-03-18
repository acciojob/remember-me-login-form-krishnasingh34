document.addEventListener("DOMContentLoaded", () => {
    let usernameInput = document.getElementById("username")
    let passwordInput = document.getElementById("password")
    let checkbox = document.getElementById("checkbox")
    let submitButton = document.getElementById("submit")
    let existingButton = document.getElementById("existing")

    // Check localStorage for saved credentials
    let savedUsername = localStorage.getItem("username")
    let savedPassword = localStorage.getItem("password")

    if (savedUsername) {
        existingButton.style.display = "block"
    }

    submitButton.addEventListener("click", (e) => {
        e.preventDefault()
        let username = usernameInput.value
        let password = passwordInput.value
        alert(`Logged in as ${username}`);

        if (checkbox.checked) {
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
        }
        else {
            localStorage.removeItem("username")
            localStorage.removeItem("password")
        }
        location.reload()
    })
    existingButton.addEventListener("click", () => {
        alert(`Logged in as ${savedUsername}`)
    })
})