import {validateForm} from '../client/js/formValidation'

test('input text is 5 or more characters', () => {
    //create mock dom element
    document.body.innerHTML = '<input id="text" type="text" name="input" value="I eat apples" placeholder="Enter Text for Analysis:"/>'
    let valueLength = validateForm()
    //check if length is 5 or more (if so, will return true)
    expect(valueLength).toBeTruthy()
})