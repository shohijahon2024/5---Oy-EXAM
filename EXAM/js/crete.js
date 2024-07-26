document.getElementById("postForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const tag = document.getElementById("tag").value;
  const description = document.getElementById("description").value;

  createPost(title, image, tag, description);

  document.getElementById("postForm").reset();
});

function createPost(title, image, tag, description) {
  const postContainer = document.getElementById("postContainer");

  const post = document.createElement("div");
  post.className = "post";

  const postTitle = document.createElement("h2");
  postTitle.textContent = title;
  post.appendChild(postTitle);

  const postImage = document.createElement("img");
  postImage.src = image;
  post.appendChild(postImage);

  const postTag = document.createElement("p");
  postTag.textContent = `Tag: ${tag}`;
  post.appendChild(postTag);

  const postDescription = document.createElement("p");
  postDescription.textContent = description;
  post.appendChild(postDescription);

  postContainer.appendChild(post);
}
