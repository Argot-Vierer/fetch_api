
fetch('https://reqres.in/api/users/2')
.then(res => {
    if(res.ok) {console.log('SUCCESS')}
    else{console.log('Not Successful')}
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))



fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    return res.json();
})
.then(data => {
    data.forEach(user => {
        const markup = `<li>${user.name}<li>`
        document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
    })
})
.then(data => {console.log(data);})
.catch(error => console.log(error));