let clickableRow = document.getElementsByClassName("clickable-row");

console.log(clickableRow);

Array.from(clickableRow).forEach(row => {
    row.addEventListener('click', (event) => {
        //TODO open url
    });
});