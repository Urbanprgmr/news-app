document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("news-container");
    const alertContainer = document.getElementById("alert-container");

    // Fetch News from a Public RSS Feed (Example: BBC)
    const RSS_URL = "https://rss.bbc.co.uk/news/world/rss.xml";
    
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`)
    .then(response => response.json())
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = xml.querySelectorAll("item");

        newsContainer.innerHTML = "";
        items.forEach((item, index) => {
            if (index < 5) { // Limit to 5 news items
                const title = item.querySelector("title").textContent;
                const link = item.querySelector("link").textContent;
                
                const newsItem = document.createElement("p");
                newsItem.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
                newsContainer.appendChild(newsItem);
            }
        });
    })
    .catch(error => {
        newsContainer.innerHTML = "<p>Failed to load news.</p>";
    });

    // Simulated Alerts (Static Data)
    const alerts = [
        { message: "Heavy rain expected in Malé", type: "weather" },
        { message: "Major accident on main highway", type: "emergency" }
    ];

    alertContainer.innerHTML = "";
    alerts.forEach(alert => {
        const alertItem = document.createElement("p");
        alertItem.textContent = alert.message;
        alertItem.style.fontWeight = "bold";
        alertItem.style.color = alert.type === "emergency" ? "red" : "blue";
        alertContainer.appendChild(alertItem);
    });

    // Simulated Trend Analysis (Static Data)
    const ctx = document.getElementById('trendChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Politics', 'Economy', 'Weather', 'Health', 'Tourism'],
            datasets: [{
                label: 'Trending Topics',
                data: [12, 19, 7, 10, 15],
                backgroundColor: ['blue', 'green', 'red', 'orange', 'purple']
            }]
        }
    });
});
