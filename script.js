document.addEventListener("DOMContentLoaded", function() {
    const BACKEND_URL = "https://news-app-backend-1-1lbr.onrender.com";  // Replace with your actual backend URL

    // Fetch News from Backend API
    fetch(`${BACKEND_URL}/news`)
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = "";
        data.forEach(news => {
            const newsItem = document.createElement("p");
            newsItem.textContent = news.title;
            newsItem.style.color = news.sentiment === "negative" ? "red" : (news.sentiment === "positive" ? "green" : "black");
            newsContainer.appendChild(newsItem);
        });
    })
    .catch(error => {
        document.getElementById("news-container").innerHTML = "<p>Failed to load news.</p>";
    });

    // Fetch Alerts from Backend API
    fetch(`${BACKEND_URL}/alerts`)
    .then(response => response.json())
    .then(data => {
        const alertContainer = document.getElementById("alert-container");
        alertContainer.innerHTML = "";
        data.forEach(alert => {
            const alertItem = document.createElement("p");
            alertItem.textContent = alert.message;
            alertItem.style.fontWeight = "bold";
            alertItem.style.color = alert.priority === "critical" ? "red" : "blue";
            alertContainer.appendChild(alertItem);
        });
    })
    .catch(error => {
        document.getElementById("alert-container").innerHTML = "<p>Failed to load alerts.</p>";
    });

    // Fetch Trend Analysis from Backend API
    fetch(`${BACKEND_URL}/trends`)
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById('trendChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: 'Trending Topics',
                    data: Object.values(data),
                    backgroundColor: ['blue', 'green', 'red', 'orange', 'purple']
                }]
            }
        });
    })
    .catch(error => {
        console.error("Failed to load trend analysis", error);
    });
});
