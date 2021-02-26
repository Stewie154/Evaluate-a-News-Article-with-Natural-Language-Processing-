export const validateForm = () => {
    let inputValue = document.getElementById('text').value
    
    if (inputValue.length < 5 ) {
        return false
    }
    return true
}