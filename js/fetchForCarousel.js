const container = document.querySelector(".carousel");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const test =
  "https://leaugeblog.sugal.no/?_embed=true&per_page=100&rest_route=/wp/v2/posts/";

async function fetchPosts() {
  try {
    const response = await fetch(test);
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

fetchPosts();

function html(moreDetails) {
  container.innerHTML = `
      <div class="moreDetails-image"
          ${moreDetails[6].content.rendered}
          <h2>${moreDetails[6].title.rendered}
          <a href=blogSpesific.html?id=${moreDetails[6].id} class="tftTitle "
          </h2>
        </a>
        </div>

        <div class="moreDetails-image"
       
          ${moreDetails[7].content.rendered}
          <h2>${moreDetails[7].title.rendered}
          <a href=blogSpesific.html?id=${moreDetails[7].id} class="aramTitle "

          </h2>
        </a>
        </div>


        <div class="moreDetails-image"
       
          ${moreDetails[8].content.rendered}
          <h2>${moreDetails[8].title.rendered}
          <a href=blogSpesific.html?id=${moreDetails[8].id} class="newShopTitle  "

          </h2>
        </a>
        </div>

        <div class="moreDetails-image"
       
          ${moreDetails[9].content.rendered}
          <h2>${moreDetails[9].title.rendered}
          <a href=blogSpesific.html?id=${moreDetails[9].id} class="seasonAwardsTitle "  "

          </h2>
        </a>
        </div>

        <div class="moreDetails-image"

          ${moreDetails[3].content.rendered}
          <h2>${moreDetails[3].title.rendered}
          <a href=blogSpesific.html?id=${moreDetails[3].id} class="skarnerTitle "

          </h2>
        </a>
        </div>


        <div class="moreDetails-image"

        ${moreDetails[4].content.rendered}
        <h2>${moreDetails[4].title.rendered}
        <a href=blogSpesific.html?id=${moreDetails[4].id} class="newMapTitle "

        </h2>
      </a>
      </div>



      <div class="moreDetails-image"

      ${moreDetails[1].content.rendered}
      <h2>${moreDetails[1].title.rendered}
      <a href=blogSpesific.html?id=${moreDetails[1].id} class="RivenTitle "

      </h2>
    </a>
    </div>



      <div class="moreDetails-image"

      ${moreDetails[2].content.rendered}
      <h2>${moreDetails[2].title.rendered}
      <a href=blogSpesific.html?id=${moreDetails[2].id} class="RiotTitle "

      </h2>
    </a>
    </div>


    <div class="moreDetails-image"

    ${moreDetails[0].content.rendered}
    <h2>${moreDetails[0].title.rendered}
    <a href=blogSpesific.html?id=${moreDetails[0].id} class="urfTitle "

    </h2>
  </a>
  </div>


  <div class="moreDetails-image"

  ${moreDetails[10].content.rendered}
  <h2>${moreDetails[10].title.rendered}
  <a href=blogSpesific.html?id=${moreDetails[10].id} class="winterTitle "

  </h2>
</a>
</div>



<div class="moreDetails-image"

${moreDetails[11].content.rendered}
<h2>${moreDetails[11].title.rendered}
<a href=blogSpesific.html?id=${moreDetails[11].id} class="udyrTitle "

</h2>
</a>
</div>



<div class="moreDetails-image"

${moreDetails[12].content.rendered}
<h2>${moreDetails[12].title.rendered}
<a href=blogSpesific.html?id=${moreDetails[12].id} class="spaceTitle "

</h2>
</a>
</div>



<div class="moreDetails-image"

${moreDetails[13].content.rendered}
<h2>${moreDetails[13].title.rendered}
<a href=blogSpesific.html?id=${moreDetails[13].id} class="ksanteTitle  "

</h2>
</a>
</div>

<div class="moreDetails-image"

${moreDetails[5].content.rendered}
<h2>${moreDetails[5].title.rendered}
<a href=blogSpesific.html?id=${moreDetails[5].id} class="dominionTitle "

</h2>
</a>
</div>






    `;
}
