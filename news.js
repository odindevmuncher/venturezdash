// news.js

const NewsData = [
    {
        newsTitle: "Synthesia raises $90 Million in Series C funding",
        newsSource: "TechCrunch",
        newsLink: "https://example.com/link-to-news-article-1"
    },
    {
        newsTitle: "Bunq announces expansion to new markets",
        newsSource: "Reuters",
        newsLink: "https://example.com/link-to-news-article-2"
    }
    // ... Add more news items as needed
];

document.addEventListener("DOMContentLoaded", () => {
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
});

