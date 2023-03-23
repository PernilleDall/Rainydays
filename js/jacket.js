const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id = params.get("id");



async function getJacket(){
    try {
    const response = await fetch(`https://pernilledall.no/wpapi/wp-json/wc/store/products/${id}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".jacket").innerHTML+=`
    <img src="${data.images[0].src}" width="200px" >
    <h3>${data.name}</h3>
    <p>${data.price_html}</p>
    <p>${data.description}</p>
<p>${data.short_description}</p>
    <div class="jacketbutton"><button class="favoritter">legg til i favoritter</button>
                                <button class="handlekurv">legg i handlekurven</button>
                            </div>
                            
    
    
    ` 
}
    catch (error){
        console.log(error);

    }
    
}

getJacket();

