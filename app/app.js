document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const megamenu = document.getElementById('megamenu');
    const dropdownArrow = document.getElementById('dropdownArrow');
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    dropdownButton.addEventListener('click', function () {
        megamenu.classList.toggle('hidden');
        if (megamenu.classList.contains('hidden')) {
            megamenu.classList.remove('max-h-96');
            megamenu.classList.add('max-h-0');
            dropdownArrow.classList.remove('rotate-180');
        } else {
            megamenu.classList.remove('max-h-0');
            megamenu.classList.add('max-h-96');
            dropdownArrow.classList.add('rotate-180');
        }
    });

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            tabLinks.forEach(link => link.classList.remove('text-blue-800', 'font-bold'));
            tabContents.forEach(content => content.classList.add('hidden'));

            link.classList.add('text-blue-800', 'font-bold');
            const target = document.querySelector(link.getAttribute('href'));
            target.classList.remove('hidden');
        });
    });

    // Activate the first tab by default
    tabLinks[0].classList.add('text-blue-800', 'font-bold');
    tabContents[0].classList.remove('hidden');
});