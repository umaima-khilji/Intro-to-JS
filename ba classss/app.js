const submitUser = () => {
    let name = document.getElementById('name').value
    let fathername = document.getElementById('fathername').value
    let user = {
        name,fathername
    }
    console.log(user)

    localStorage.setItem('user', JSON.stringify(user))

}

let getUsers = ()=>{
    const data = localStorage.getItem('user');
    console.log(data)
}
getUsers();
