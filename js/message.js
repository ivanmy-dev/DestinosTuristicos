function message(){
    var name = document.getElementById('nombre');
    var email = document.getElementById('email');
    var msg = document.getElementById('mensaje');
    const success = document.getElementById('success');

    if(name.value === '' || email.value === '' || msg.value === ''){
    }else{
        setTimeout(() => {
            name.value = '';
            email.value = '';
            msg.value = '';
        }, 8000);

        success.style.display = 'block';
    }
    setTimeout(() =>{
        success.style.display = 'none';
    }, 8000);

}