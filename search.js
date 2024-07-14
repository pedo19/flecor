let searchForm = document.getElementById('search-form');
let searchResultList = document.querySelectorAll('.result-items');
let result = document.getElementById('search-results');
let searchValue = result.getElementsByTagName("p");

searchForm.addEventListener("keyup", function() {
    let query = searchForm.value.toUpperCase();
    let hasResults = false; // Flag to check if any result matches

    for (var i = 0; i < searchValue.length; i++) {
        let value = searchResultList[i].getElementsByTagName('p')[0];
        let filterValue = value.textContent || value.innerHTML;

        if (filterValue.toUpperCase().indexOf(query) > -1) {
            searchResultList[i].style.display = "";
            hasResults = true; // Set flag to true if there's a match
        } else {
            searchResultList[i].style.display = "none";
        }
    }

    // Check if no results were found and display the message
    if (!hasResults) {
        if (!document.getElementById('no-results')) {
            let noResultsMessage = document.createElement('div');
            noResultsMessage.id = 'no-results';
            noResultsMessage.textContent = 'Nenhum resultado encontrado.';
            result.appendChild(noResultsMessage);
        }
    } else {
        let noResultsMessage = document.getElementById('no-results');
        if (noResultsMessage) {
            result.removeChild(noResultsMessage);
        }
    }
});


