let users = []
let form = document.getElementById('registForm')
let userList = document.getElementById('userList')

form.addEventListener('submit', function(e)   {
    e.preventDefault()
    let name = document.querySelector('#name').value
    let password = document.querySelector('#password').value
    let email = document.querySelector('#email').value

    let newUser = {
        name: name,
        password: password,
        email: email
    }
        users.push(newUser)

        form.reset()
        console.log(users)
}
)