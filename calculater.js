let inputed_text;
function storedata(_input){
    inputed_text = document.querySelector('.js-result-display');
    if(_input === 'c'){
        inputed_text.innerHTML = '';
    }else if(_input === '='){
        calculating();
    }else{
        inputed_text.innerHTML += `${_input}`;
    }    
}
function calculating(){
    try{
        inputed_text.innerHTML = eval(inputed_text.innerHTML);
    }
    catch(error){
        inputed_text.innerHTML = `Error`;
    }
    
    
}
document.querySelector('.js-number-9')
    .addEventListener('click', () => {
        storedata('9');
    });
document.querySelector('.js-number-8')
    .addEventListener('click', () => {
        storedata('8');
    });    
document.querySelector('.js-number-7')
    .addEventListener('click', () => {
        storedata('7');
    });
document.querySelector('.js-number-6')
    .addEventListener('click', () => {
        storedata('6');
    });
document.querySelector('.js-number-5')
    .addEventListener('click', () => {
        storedata('5');
    });
document.querySelector('.js-number-4')
    .addEventListener('click', () => {
        storedata('4');
    });
document.querySelector('.js-number-3')
    .addEventListener('click', () => {
        storedata('3');
    });
document.querySelector('.js-number-2')
    .addEventListener('click', () => {
        storedata('2');
    });
document.querySelector('.js-number-1')
    .addEventListener('click', () => {
        storedata('1');
    });
document.querySelector('.js-number-division')
    .addEventListener('click', () => {
        storedata('/');
    });
document.querySelector('.js-number-addition')
    .addEventListener('click', () => {
        storedata('+');
    });
document.querySelector('.js-number-substitution')
    .addEventListener('click', () => {
        storedata('-');
    });
document.querySelector('.js-number-multiplication')
    .addEventListener('click', () => {
        storedata('*');
    });
document.querySelector('.js-number-isequalto')
    .addEventListener('click', () => {
        storedata('=');
    });
document.querySelector('.js-number-clear')
    .addEventListener('click', () => {
        storedata('c');
    });
document.querySelector('.js-number-0')
    .addEventListener('click', () => {
        storedata('0');
    });


document.body.addEventListener('keydown', (event) => {
    if(event.key === '1'){
        storedata('1');
    }else if(event.key === '2'){
        storedata('2');
    }else if(event.key === '3'){
        storedata('3');
    }else if(event.key === '4'){
        storedata('4');
    }else if(event.key === '5'){
        storedata('5');
    }else if(event.key === '6'){
        storedata('6');
    }else if(event.key === '7'){
        storedata('7');
    }else if(event.key === '8'){
        storedata('8');
    }else if(event.key === '9'){
        storedata('9');
    }else if(event.key === '0'){
        storedata('0');
    }else if(event.key === '+'){
        storedata('+');
    }else if(event.key === '-'){
        storedata('-');
    }else if(event.key === '*'){
        storedata('*');
    }else if(event.key === '/'){
        storedata('/');
    }else if(event.key === '=' || 'enter'){
        storedata('=');
    }else if(event.key === 'c'){
        storedata('c');
    }
});    
    
