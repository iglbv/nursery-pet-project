function handleSubmit(event) {
    event.preventDefault();
    const input = document.querySelector('input[name="opinion"]');
    if (!input.value.trim()) {
        alert('Вы ничего не ввели!');
        return;
    }
    alert('Вы отправили своё мнение: ' + input.value);
}

function setupBreedSelection() {
    const select = document.querySelector('select');
    if (!select) return;

    const form = select.closest('form');
    const textarea = document.createElement('textarea');
    textarea.name = "custom_breed";
    textarea.placeholder = 'Введите свою породу';
    textarea.style.display = 'none';
    form.appendChild(textarea);

    select.addEventListener('change', function () {
        const isCustomBreed = this.value === 'own';
        textarea.style.display = isCustomBreed ? 'block' : 'none';
        textarea.required = isCustomBreed;

        if (!isCustomBreed && this.value) {
            alert(`Вы выбрали: ${this.selectedOptions[0].textContent}`);
        }
    });
}

function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        this.reset();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupBreedSelection();
    setupContactForm();

    const animateItems = document.querySelectorAll('.team-member, .contact-card');
    animateItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});