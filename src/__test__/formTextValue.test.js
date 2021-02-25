//https://knowledge.udacity.com/questions/246378  I looked at this page prior to writing this test

import {formTextValue} from '../client/js/formTextValue'

test('Grabs value from input tag', () => {
    //create mock dom element
    document.body.innerHTML = '<input id="text" type="text" name="input" value="I eat apples" placeholder="Enter Text for Analysis:"/>'
    //get input value by calling formTextValue function
    const inputValue = formTextValue();
    //Test to see input was grabbed correctly 
    expect(inputValue).toEqual("I eat apples")
})