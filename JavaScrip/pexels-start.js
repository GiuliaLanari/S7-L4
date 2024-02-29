const primaURL = "https://api.pexels.com/v1/search?query=dog";
const secondaURL = "https://api.pexels.com/v1/search?query=fish";
const secondoURL = "https://api.pexels.com/v1/search?query=dog";
const Authorization = "2bBpGd6nO718fGKKID6Pj1Pu9u10QrOgiJ4zkxd2sW88ZippDqSZVodP";

const btnLoad = document.getElementById("load-btn");
const btnLoad2 = document.getElementById("load-btn2");

const cambioImg = (url) => {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: Authorization,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 400) {
          throw new Error("400 - Errore lato client");
        }

        if (response.status === 404) {
          throw new Error("404 - Dato non trovato");
        }

        if (response.status === 500) {
          throw new Error("500 - Errore lato server");
        }

        throw new Error("Errore nel reperimento dati");
      }
    })
    // .then((imgX) => {
    //   for (let i = 0; i < imgX.photos.length; i++) {
    //     const imgSRC = imgX.photos[i].src;
    //     const imgs = document.querySelectorAll("img");
    //     console.log(imgs);
    //     imgs[i].src = imgSRC.original;
    //   }
    // })

    .then((file) => {
      console.log(file);

      file.photos.forEach((photoObj) => {
        //console.log(photoObj.src.original);
        // const imgVariabile = document.createElement("img");
        //imgVariabile.src = photoObj.src.original;
        // imgVariabile.classList.add("bd-placeholder-img", "card-img-top");
        //imgVariabile.alt = "Dog";

        const nodeCol = document.getElementById("col");
        nodeCol.innerHTML = `
        <div class="card mb-4 shadow-sm">
                <img src="https://picsum.photos/id/237/300/200" class="bd-placeholder-img card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
        `;

        card.appendChild(imgVariabile);
        // btnLoadImg.onclick = function (e) {
        //   cardImg.remove();
        // };
      });
    })

    .catch((error) => console.log(error));
};

window.onload = () => {
  btnLoad.addEventListener("click", () => cambioImg(primaURL));
  btnLoad2.addEventListener("click", () => cambioImg(secondaURL));
};
