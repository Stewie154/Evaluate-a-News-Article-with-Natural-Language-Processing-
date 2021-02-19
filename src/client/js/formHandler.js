function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    // fetch('http://localhost:3000/test')
    //add key
    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${ADD_API_KEY_HERE}&of=json&txt=${formText}&model=general&lang=en`)
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('agreement').innerHTML = res.agreement

    })
}

export { handleSubmit }
