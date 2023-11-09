setInterval(function(){
    plus_slide();
}, 5000);

// Индекс слайда по умолчанию
var slide_index = 1;
show_slides(slide_index);

// Функция увеличивает индекс на 1, показывает следующй слайд
function plus_slide() {
    show_slides(slide_index += 1);
}

// Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minus_slide() {
    show_slides(slide_index -= 1);
}

// Устанавливает текущий слайд
function current_slide(n) {
    show_slides(slide_index = n);
}

// Основная функция сладера
function show_slides(n) {
    let i;
    const slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slide_index = 1
    }

    if (n < 1) {
        slide_index = slides.length
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slide_index - 1].style.display = "block";
}
