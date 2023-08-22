const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    if (typeof Orders !== 'undefined') {
        Orders.forEach(order => {
            const tr = document.createElement('tr');
            const trContent = `
                <td class="company-container">
                    <img src="${order.logoURL}" alt="${order.startupName} logo" class="company-logo">
                    <div class="company-name">${order.startupName}</div>
                </td>
                <td>${order.startupDescription}</td>
                <td>${order.startupLocation}</td>
                <td class="${order.startupFunding === 'Declined' ? 'danger' : order.startupFunding === 'Pending' ? 'warning' : 'primary'}">${order.startupFunding}</td>
                <td class="primary">Details</td>
            `;
            tr.innerHTML = trContent;
            document.querySelector('table tbody').appendChild(tr);
        });
    }

    if (typeof NewsData !== 'undefined') {
        const newsTbody = document.querySelector('.recent-orders tbody');

        NewsData.forEach(item => {
            const tr = document.createElement('tr');
            const trContent = `
                <td>${item.newsTitle}</td>
                <td>${item.newsSource}</td>
                <td><a href="${item.newsLink}" target="_blank">View Article</a></td>
            `;

            tr.innerHTML = trContent;
            newsTbody.appendChild(tr);
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {

    // Check if the user is on news.html
    if(window.location.pathname.endsWith('news.html')) {
        document.body.classList.add('dark-mode');   // Add dark mode by default
        document.getElementById('darkModeToggle').classList.add('active'); // Activate the toggle button
    }

    // Event listener for the dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Toggle active state of button
        this.classList.toggle('active');
    });

});
