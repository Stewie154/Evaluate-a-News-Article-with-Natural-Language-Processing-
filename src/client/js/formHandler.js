const handleSubmit = async (event) => {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('text').value
    
    try {
        fetch('http://localhost:3000/submit?' + new URLSearchParams({
            content: formText
        }))
        .then(res => res.json())
        .then(function(res) {
            console.log(res)
            //display results to user
            document.getElementById('agreement').innerHTML = res.agreement
            document.getElementById('confidence').innerHTML = res.confidence
            document.getElementById('irony').innerHTML = res.irony
        })
      

    } catch (error) {
        console.log('Error!', error)
    }
    
    
 
}

export { handleSubmit }
