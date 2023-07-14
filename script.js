const generateMemebtn = document.querySelector(".memeGenerator .btn-meme");

const memeImage = document.querySelector(".memeGenerator img");
const memeTitle = document.querySelector(".memeGenerator .meme-title");
const memeAuthor = document.querySelector(".memeGenerator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};
generateMemebtn.addEventListener("click", generateMeme);
generateMeme();
