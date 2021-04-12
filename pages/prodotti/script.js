function configureItems(){
    const products = document.querySelector('#products');
    let new_div;
    let new_h1;
    let star;
    let new_img;
    let new_h2;
    let new_p;
    const input_box = document.querySelector('#sbar').querySelector('input');
    input_box.addEventListener('keyup',searchItem);


    for(element of contents){
        new_div = document.createElement('div');
        new_h1 = document.createElement('h1');
        star = document.createElement('img');
        new_img = document.createElement('img');
        new_h2 = document.createElement('h2');
        new_p = document.createElement('p');

        new_h1.textContent = element.name;
        star.classList.add('star');
        star.src = 'images/star.png';
        star.addEventListener("click",addPrefs);
        new_img.classList.add('contents');
        new_img.src = element.image;
        new_h2.textContent = element.descr;
        new_p.textContent = 'Clicca per piu dettagli';
        new_p.addEventListener("click",showDetails);

        new_div.appendChild(new_h1);
        new_div.appendChild(star);
        new_div.appendChild(new_img);
        new_div.appendChild(new_h2);
        new_div.appendChild(new_p);
        products.appendChild(new_div);
    }
}

function showDetails(event){
    const div = event.currentTarget.parentNode;
    const h2_class = div.querySelector('h2').classList;
    if(h2_class!='visible'){
        h2_class.add('visible');
        event.currentTarget.textContent = 'Meno Dettagli';
    }
    else{
        h2_class.remove('visible');
        event.currentTarget.textContent = 'Clicca per piu dettagli';
    }
}

function removePrefs(event){
    const par_div = event.currentTarget.parentNode;
    const pref_box = document.querySelector('#prefs_box');
    par_div.remove();
    if(!pref_box.querySelectorAll('div').length)
        document.querySelector('#prefs').classList.remove('visible');
}

function addPrefs(event){
    const par_div = event.currentTarget.parentNode;
    const pref_box = document.querySelector('#prefs_box');

    for(let element of pref_box.querySelectorAll('div'))
        if(element.querySelector('h1').textContent==par_div.querySelector('h1').textContent)
            return;
            
    /*METODO CON CREATEELEMENT
    const innHtml = par_div.innerHTML;
    const new_div = document.createElement('div');
    new_div.innerHTML = innHtml;*/

    const new_div = par_div.cloneNode(true);
    const clas = document.querySelector('#prefs').classList;

    new_div.querySelector('h2').remove();
    new_div.querySelector('p').remove();
    new_div.querySelector('.star').src='images/fullstar.png';
    new_div.querySelector('.star').addEventListener('click',removePrefs);
    pref_box.appendChild(new_div);

    if(!clas.contains('visible'))
        clas.add('visible');
}

function searchItem(){
    const divs = document.querySelector('#products').querySelectorAll('div');
    let input = document.querySelector('#sbar').querySelector('input');
    let my_input = input.value.toUpperCase();
    let my_text;

    for(element of divs){
        my_text = element.querySelector('h1').textContent;
        if(my_text.toUpperCase().indexOf(my_input) > -1){
            element.classList.remove('hide');
        }
        else
            element.classList.add('hide');
    }
}

configureItems();