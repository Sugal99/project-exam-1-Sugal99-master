const url =
  "https://leaugeblog.sugal.no/wp-json/wp/v2/posts?_embed&per_page=100";

async function getPost() {
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}

function createPostHTML(post) {
  const container = document.querySelector(".container");

  const postContainer = document.createElement("div");

  postContainer.classList.add("post");
  postContainer.id = post.id;

  const title = document.createElement("h2");
  title.innerText = post.title.rendered;
  postContainer.append(title);

  console.log(post);
  const test123 = document.createElement("p");
  test123.innerText = post.excerpt.rendered;
  postContainer.append(test123);

  const imgData = post._embedded["wp:featuredmedia"][0].source_url;
  const img = document.createElement("img");
  img.src = imgData;
  postContainer.append(img);
  console.log(imgData);
  container.append(postContainer);

  container.innerHTML += `
  <a href=blogSpesific.html?id=${post.id} id=${(postContainer.id = post.id)}"
     </a>`;
}

function createPostsHTML(posts) {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    createPostHTML(post);
  }
}

async function main() {
  const posts = await getPost();
  createPostsHTML(posts);
}

main();
