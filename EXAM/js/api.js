document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const postData = {
      title: document.getElementById("post-title").value,
      image: document.getElementById("post-image").files[0],
      tag: document.getElementById("post-tag").value,
      description: document.getElementById("post-description").value,
    };

    if (!postData.title || !postData.description) {
      alert("Title and description are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("image", postData.image);
    formData.append("tag", postData.tag);
    formData.append("description", postData.description);

    fetch("https://your-api-endpoint.com/posts", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer your-access-token",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          alert("Post created successfully!");
          form.reset();
        } else {
          alert("Failed to create post: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while creating the post.");
      });
  });
});
