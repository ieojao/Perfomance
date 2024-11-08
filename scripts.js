function redirectToLogin() {
    window.location.href = 'login.html';
}

function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cardWrapper = document.getElementById('cardWrapper');
    const cards = cardWrapper.getElementsByClassName('card-item');

    for (let i = 0; i < cards.length; i++) {
        const cardTitle = cards[i].getElementsByTagName('h4')[0].textContent.toLowerCase();
        if (cardTitle.includes(input)) {
            cards[i].style.display = ""; 
        } else {
            cards[i].style.display = "none"; 
        }
    }
}