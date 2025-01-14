

        document.addEventListener("DOMContentLoaded", function () {
            const links = document.querySelectorAll(".o_nas a");
            const imageElement = document.getElementById("dynamic-image");

            links.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Отключает стандартное поведение ссылок
                    const newImage = link.getAttribute("data-image"); // Получает путь к изображению
                    imageElement.src = newImage; // Меняет источник изображения
                });
            });
        });


