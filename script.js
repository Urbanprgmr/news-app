document.addEventListener("DOMContentLoaded", function() {
    // Placeholder news data
    const newsData = [
        { title: "New Infrastructure Projects Announced", sentiment: "positive" },
        { title: "Severe Weather Warning Issued", sentiment: "negative" },
        { title: "Tourism Industry Reports Record Growth", sentiment: "positive" }
    ];

    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "";
    newsData.forEach(news => {
        const newsItem = document.createElement("p");
        newsItem.textContent = news.title;
        newsItem.style.color = news.sentiment === "negative" ? "red" : (news.sentiment === "positive" ? "green" : "black");
        newsContainer.appendChild(newsItem);
    });

    // Placeholder alert system
    const alerts = [
        { message: "Heavy rain expected in Malé", type: "weather" },
        { message: "Major accident on main highway", type: "emergency" }
    ];

    const alertContainer = document.getElementById("alert-container");
    alertContainer.innerHTML = "";
    alerts.forEach(alert => {
        const alertItem = document.createElement("p");
        alertItem.textContent = alert.message;
        alertItem.style.fontWeight = "bold";
        alertItem.style.color = alert.type === "emergency" ? "red" : "blue";
        alertContainer.appendChild(alertItem);
    });

    // Placeholder trend analysis (chart)
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
