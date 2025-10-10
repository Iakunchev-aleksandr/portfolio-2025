const filterButtons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        projects.forEach(p => {
            if(filter === 'all' || p.dataset.type === filter) {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }
        });
    });
});
