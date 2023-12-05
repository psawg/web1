function loadHTMLComponent(url, id){
    fetch (url)
    .then(response => response.text())
    .then(html =>{
        const elememt = document.getElementById(id)
        if(elememt){
            elememt.innerHTML = html;
        }
    })
    .catch(error =>console.error(error))
}

loadHTMLComponent('/components/Footer.html', 'footer');
loadHTMLComponent('/components/Header.html', 'header');
loadHTMLComponent('/components/Section.html', 'section');
// loadHTMLComponent('/components/intro.html', 'intro');

