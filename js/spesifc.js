const container = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://leaugeblog.sugal.no/?_embed=true&rest_route=/wp/v2/posts/" + id;

async function fetchCharacter() {
  try {
    const response = await fetch(url);
    const moreDetails = await response.json();

    setTimeout(function () {
      container.innerHTML = "";

      html(moreDetails);
      console.log(moreDetails);
    }, 700);
  } catch (error) {
    console.log("An error occured");
    container.innerHTML = "An error occured";
  }
}

fetchCharacter();

function html(moreDetails) {
  document.title = `${moreDetails.title.rendered}`;
  container.innerHTML = `<h1> ${moreDetails.title.rendered} </h1>
  <h2> ${moreDetails._embedded.author[0].name} </h2>
  <h3> ${moreDetails.date} </h2>
  <p class="blogPost" ${moreDetails.excerpt.rendered} </p> 

  <div class="moreDetails-image" ${moreDetails.content.rendered}  </div> 


  `;
}
