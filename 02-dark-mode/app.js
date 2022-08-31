const articlesContainer = document.querySelector(".articles");

const toggleBtn = document.querySelector(".btn");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((article) => {
    // console.log(articles);

    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format("MMMM Do,YYYY");
    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length} min read</span>
        </div>
        <p>
          ${snippet}
        </p>
      </article>`;
  })
  .join("");

articlesContainer.innerHTML = articlesData;

// console.log(articles);
// console.log(moment);
