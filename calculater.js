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