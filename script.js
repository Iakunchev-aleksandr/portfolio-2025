// script.js

const filterButtons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // убираем класс active со всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // добавляем active текущей кнопке
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-type') === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
