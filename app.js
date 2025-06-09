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
    const form = select.closest('form');

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Введите свою породу';
    textarea.style.display = 'none';
    form.appendChild(textarea);

    select.addEventListener('change', function () {
        const isCustomBreed = this.value === 'own';
        textarea.style.display = isCustomBreed ? 'block' : 'none';

        if (!isCustomBreed && this.value) {
            alert(`Вы выбрали: ${this.selectedOptions[0].textContent}`);
        }
    });
}

document.addEventListener('DOMContentLoaded', setupBreedSelection);