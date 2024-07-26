const $articles = document.querySelector("#article-box");

function dataList() {
  fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      renderArticles(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
dataList();

const renderArticles = (data) => {
  const articles = data.data || data;
  articles.forEach((element) => {
    const $div = document.createElement("div");
    $div.className = "card";
    $div.innerHTML = `
            <div class="article">
              <img src="${element.image}" alt="${element.title}" />
                <h3>${element.title}</h3>
                <p>${element.description}</p>
            
                <div class="box-dlex">
                    <div><img src="./assets/Ellipse.svg" width="40" alt="" /></div>
                    <div>
                      <a href="./post.html"><p class="author">Ibrokhim Jalilov</p></a>
                      <span>Author</span>
                    </div>
                </div>
          </div>
        `;
    $articles.appendChild($div);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  let text = "M MM MMMM MMMMM MMMMM MMMM MMM MMMMMM M MM ";
  let container = document.getElementById("animatedText");
  for (let i = 0; i < text.length; i++) {
    let span = document.createElement("span");
    span.classList.add("letter");
    span.style.animationDelay = Math.random() * 2 + "s";
    span.textContent = text[i];
    container.appendChild(span);
  }
});

// Sign start
function togglePassword() {
  let passwordField = document.querySelector(
    '.form-group input[type="password"]'
  );
  let passwordFieldType = passwordField.getAttribute("type");
  if (passwordFieldType === "password") {
    passwordField.setAttribute("type", "text");
  } else {
    passwordField.setAttribute("type", "password");
  }
}
