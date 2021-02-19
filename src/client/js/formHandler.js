function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:3000/test')
    //add key
    // fetch('https://api.meaningcloud.com/sentiment-2.1?key=&of=json&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.&model=Restaurants&lang=en')
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
