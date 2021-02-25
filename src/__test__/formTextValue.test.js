//https://knowledge.udacity.com/questions/246378  reference this link as a resource when submitting this project. 

import {formTextValue} from '../client/js/formTextValue'

test('Grabs value from input tag', () => {
    //create mock dom element
    document.body.innerHTML = '<input id="text" type="text" name="input" value="I eat apples" placeholder="Enter Text for Analysis:"/>'
    //get input value by calling formTextValue function
    const inputValue = formTextValue();
    //Test to see input was grabbed correctly 
    expect(inputValue).toEqual("I eat apples")
})