function buat_login() {
    // hapus button Daftar
    let elm = document.getElementById('x');
    elm.parentElement.removeChild(elm);

    // get div.kotak_login
    let element = document.getElementsByTagName('div')[0];

    // element p
    let p = document.createElement('p');
    p.className = 'tulisan_login';
    p.innerHTML = 'Silakan Mendaftar';
    element.appendChild(p);

    // element form
    let form = document.createElement('form');
    form.className = 'form_login';
    form.method = 'get';
    element.appendChild(form);

    // label nama user
    let labelUser = document.createElement('label');
    let attrForUser = document.createAttribute('for');
    labelUser.innerHTML = 'Nama User';
    attrForUser.value = 'nama_user';
    labelUser.attributes.setNamedItem(attrForUser);
    form.appendChild(labelUser);

    // input nama user
    let inputUser = document.createElement('input');
    inputUser.type = 'text';
    inputUser.className = 'form_login';
    inputUser.id = 'nama_user';
    inputUser.name = 'nama';
    inputUser.placeholder = 'Nama User..';
    form.appendChild(inputUser);

    // label handphone
    let labelHp = document.createElement('label');
    let attrForHp = document.createAttribute('for');
    labelHp.innerHTML = 'Nomor Handphone';
    attrForHp.value = 'hp_user';
    labelHp.attributes.setNamedItem(attrForHp);
    form.appendChild(labelHp);

    // input handphone
    let inputHpUser = document.createElement('input');
    inputHpUser.type = 'tel';
    inputHpUser.className = 'form_login';
    inputHpUser.id = 'hp_user';
    inputHpUser.name = 'hp';
    inputHpUser.placeholder = 'Nomor Handphone..';
    form.appendChild(inputHpUser);

    // label username
    let labelUsername = document.createElement('label');
    let attrForUsername = document.createAttribute('for');
    labelUsername.innerHTML = 'Username';
    attrForUsername.value = 'username';
    labelUsername.attributes.setNamedItem(attrForUsername);
    form.appendChild(labelUsername);
    
    // input username
    let inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.className = 'form_login';
    inputUsername.id = 'username';
    inputUsername.name = 'user';
    inputUsername.placeholder = 'Username atau email..';
    form.appendChild(inputUsername);

    // label password
    let labelPassUser = document.createElement('label');
    let attrForPassUser = document.createAttribute('for');
    labelPassUser.innerHTML = 'Password';
    attrForPassUser.value = 'pass_user';
    labelPassUser.attributes.setNamedItem(attrForPassUser);
    form.appendChild(labelPassUser);

    // input password
    let inputPassUser = document.createElement('input');
    inputPassUser.type = 'password';
    inputPassUser.className = 'form_login';
    inputPassUser.id = 'pass_user';
    inputPassUser.name = 'pass_user';
    inputPassUser.placeholder = 'Password..';
    form.appendChild(inputPassUser);

    // button register
    let inputButtonUser = document.createElement('input');
    inputButtonUser.type = 'submit';
    inputButtonUser.value = 'DAFTAR SEKARANG';
    inputButtonUser.className = 'tombol_login';
    form.appendChild(inputButtonUser);
}