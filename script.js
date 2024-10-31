function loadContent(page) {
    const pageUrl = `${page}.html`;
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) throw new Error(`Could not load ${pageUrl}`);
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}