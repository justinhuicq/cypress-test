document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le rechargement de la page

    let key = parseInt(document.getElementById("nombres").value);
    let text = document.getElementById("text").value;

    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            // majuscule
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            }
            // minuscule
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }

        result += char;
    }

    let p = document.getElementById("resultat");
    result = result
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

    p.textContent = result;
    p.style.color = "green";
    
});