'use strict'




const url = 'http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState|abbr%7d&zip=%7bzip%7d&pretty=true';
var gBookAddress;



function onInit() {

    getBookAddress(renderBookAdress);

}

function renderBookAdress(bookAddressArray) {

    console.log(bookAddressArray);
    const strHtml = bookAddressArray.map(book => 
        `
    <section class="book">
    <header class="book-header">${book.lname}, ${book.fname}</header>
<div class="book-body">
    <img class="book-img" src="https://robohash.org/${book.fname}?set=set5">
    <p class="details">
        address: ${book.address}
        <br>
        city: ${book.city}
        <br>
        state: ${book.state}
        <br>
        tel: ${book.tel}
        <br>
        zip: ${book.zip}
    </p>
</div>
</section>`
)

var elBookAddressContainr=document.querySelector(".books-container");
elBookAddressContainr.innerHTML=strHtml;

}