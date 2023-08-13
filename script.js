const tag_box = document.querySelector(".tag_box");
const input_field = document.querySelector(".input_field");

input_field.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();

        console.log('here');

        const tagText = input_field.value.trim(); // Trim to remove any leading/trailing spaces
        if (tagText) {
            const tagElement = document.createElement("div");
            tagElement.classList.add("tag");
            tagElement.innerHTML = `
                <p>${tagText}<span class="span" style="transform: rotate(45deg); display: inline-block; cursor:pointer">+</span></p>
            `;

            tag_box.appendChild(tagElement);

            input_field.value = "";
          

            const removeTagButton = tagElement.querySelector(".span");
            removeTagButton.onclick = function () {
                tagElement.remove();
            
            };
        }
    }
});


