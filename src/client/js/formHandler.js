import {displayResults} from './displayResults'
import {formTextValue} from './formTextValue'
import {validateForm} from './formValidation'
const handleSubmit = async (event) => {
    event.preventDefault()
    if(!validateForm()){
        document.getElementById('error-message').style.opacity = 1;
        return false
    } 
    let formText = formTextValue()
    
    return new Promise( (resolve, reject) => {
        fetch('http://localhost:3000/submit?' + new URLSearchParams({
            content: formText
        }))
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('error-message').style.opacity = 0;
            displayResults(res)
            resolve()
        })
        .catch(reject)
    })
}


export { handleSubmit }
