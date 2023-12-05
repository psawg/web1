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

loadHTMLComponent('/AllOfGames/components/Footer.html', 'footer');
loadHTMLComponent('/AllOfGames/components/Header.html', 'header');
loadHTMLComponent('/AllOfGames/components/Section.html', 'section');
loadHTMLComponent('/AllOfGames/components/intro.html', 'intro');

