import 'regenerator-runtime/runtime';
import {handleSubmit} from '../client/js/formHandler';

//data that the fake fetch will return 
const fakeData = {agreement: "AGREEMENT", confidence: 100, irony: "NONIRONIC"};
//create mock fetch call
global.fetch = jest.fn(() => {
    const myResponse = {}
    myResponse.json = () => fakeData
    return new Promise( resolve => {
        resolve (myResponse)
    })
})


test('dom elements get populated with data from fetch call',  done => {
    const myEvent = {}
    document.body.innerHTML = '<input type="text" value="I eat apples" id="text"/> <span id="agreement"></span> <span id="confidence"></span> <span id="irony"></span>'
    myEvent.preventDefault = function(){}
    console.log(1)
    
    handleSubmit(myEvent);
    console.log(3)
    done()
    const agreementValue = document.getElementById('agreement').innerHTML
    const confidenceValue = document.getElementById('confidence').innerHTML
    const ironyValue = document.getElementById('irony').innerHTML
    expect(agreementValue).toEqual("AGREEMENT");
    expect(confidenceValue).toEqual(100);
    expect(ironyValue).toEqual("NONIRONIC");
})
