const accessKey = "6JLm5O5jqsoM_ZDTbCMPqo6NVQKmH_a6EbgjCPbRvrU";
const searchform =document.getElementById("search-form");
const searchbox =document.getElementById("search-box");
const searchresult =document.getElementById("search-result");
const showmorebtn =document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchresult.innerHTML = ""; // Clear previous results
    }

    const results = data.results;
    results.map((results)=>{
        const img = document.createElement("img");
        img.src = results.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = results.links.html;
        imagelink.target = "_blank"; // Open in new tab

        imagelink.appendChild(img);
        searchresult.appendChild(imagelink);

    })
    showmorebtn.style.display = "block"; // Show the "Show more" button 
}
 searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1; // Reset page number for new search
    searchImages();
 })

 showmorebtn.addEventListener("click", () => {
    page++;
    searchImages();
    showmorebtn.style.display = "none"; // Hide the button after clicking
 });
