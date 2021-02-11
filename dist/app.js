console.log("Let's get this party started!");
const gifDiv = document.querySelector("#gif-gallery");
const submitBtn = document.querySelector('#submit-btn');
const removeBtn = document.querySelector('#remove-btn');

async function getGifByInput(q) {
    try {
        const res = await axios.get(baseUrlGifs, { params: { api_key, q } });
        renderGif(res.data.data[0].images.downsized_large.url, res.data.data[0].title);
    } catch (e) {
        alert("MATCH NOT FOUND!");
    }
}

function renderGif(gif, title) {
      gifDiv.append(makeGifCard(gif, title))
    }

function makeGifCard(gif, title) {
    const newCard = document.createElement('div');
    newCard.classList.add("card", "col-6", "col-lg-3", "p-0");
    const newGif = document.createElement('img');
    newGif.classList.add("card-img-top");
    newGif.setAttribute("src", gif);

    const newCardBody = document.createElement('div');
    newCardBody.classList.add("card-body", "bg-light");
    const newCardText = document.createElement("p");
    newCardText.classList.add("card-text", "mt-auto");
    newCardText.innerText = title;
 
    newCard.appendChild(newGif);
    newCardBody.append(newCardText);
    newCard.appendChild(newCardBody);
    
    return newCard;
  }

submitBtn.addEventListener("click", function (e) {
    console.log(e)

    const input = document.querySelector('#search');
    e.preventDefault();
    getGifByInput(input.value);
    
    input.value = '';
});

removeBtn.addEventListener("click", function (e) {
    newCard.remove();
});
      
      
      
      