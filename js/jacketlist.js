

async function getJacket(){
    const response = await fetch ("https://pernilledall.no/wpapi/wp-json/wc/store/products");
    const data = await response.json();
    console.log(data);
    data.forEach((jacket) => {
       renderJacket(jacket); 
    });
}

getJacket();

 function renderJacket(jacket){
document.querySelector(".jacketlist").innerHTML+=`
<a href="./jacket.html?id=${jacket.id}">

<img src="${jacket.images[0].src}" width="200px" >
<h3>${jacket.name}</h3>
<p>${jacket.price_html}</p>
<div class="jacketbutton"><button class="favoritter">legg til i favoritter</button>
                            <button class="handlekurv">legg i handlekurven</button>
                        </div>
                        </a>


`
 }
