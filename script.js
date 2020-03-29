
// button dodaj click
document.querySelector('#button-dodaj').addEventListener('click', dodajNovi) //kad netko klikne na button pozovi dodajNovi funkciju

//dodaj novi item na todo
function dodajNovi() {
    let inputElement = document.querySelector('#input-text'); //ovako dođemo do texta
    let text = inputElement.value.trim(); //da ne prihvaća razmake

    if (text !== undefined && text.length > 0) {              //ovo smo dodali u KORAKU2 - da nije text undefined/postoji i prazan string - omda dodaj novi element
        const li = document.createElement('li'); //dodamo novi element
        li.innerText = '<span><span class="tick">y</span>'+ 
                        '<span>' +
                        text +
                        '</span></span>' +
                        '<span class="delete">x</span>'  
                                   //ovdje staviti html kod za li - inače pisalo li.innerText = text - kao običan text

        let ul = document.querySelector('#lista'); //dodamo li u ul
        ul.appendChild(li);
    }  //dovdje KORAK1

    inputElement.value = ''; //obriše text iz tražilice

} 



//KORAK 1, provjeriti je li dodano u text - KORAK 2
//KORAK 3 - želimo da se obriše text iz unosa nakon dodavanja