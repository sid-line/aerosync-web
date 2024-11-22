// Import the SDK using ES modules
import { openWidget } from 'https://cdn.jsdelivr.net/npm/aerosync-web-sdk@latest/+esm'

document.addEventListener('DOMContentLoaded', function() {
    const connectButton = document.getElementById('connectBank');
    connectButton.addEventListener('click', openAerosyncWidget);

    function openAerosyncWidget() {
        const config = {
            id: "widget",
            iframeTitle: 'Connect',
            environment: 'staging',
            // consumerId: '1615',
            // userId: '123',
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNWU4YjM2NS0xODQzLTQwNGItYTdmYi1mNjRjOTIwNWYzZjIiLCJleHAiOjE3MzIyNTc4MDksInVzZXJJZCI6ImI3YWY4YThhMDc3NzRjNGI5MDc0ZDI2MDc1NTE3NjU1IiwidXNlclBhc3N3b3JkIjoiOWMyNDJlNmMxZjc5NDg5Y2JkOTVmMTdjOTBlYmU2YzAiLCJDbGllbnRJZCI6IjBlZTc5YWMyLTM2NDMtNDA5YS1hYzk4LWJiNTNhMmIwMTg5OCIsIkNsaWVudE5hbWUiOiJCZWVtIiwic2Vzc2lvbklkIjoiZTYzMmVjZTg3MGQ4NDg5ZDg2NWZmZmU4ODM3NmNiMjAifQ.Qu5U2GtSgbHVCjmZl6yVTUcAwYcudsfrTIj67dXQ6Zk",
            
            style: {
                width: '375px',
                height: '688px',
                bgColor: '#000000',
                opacity: 0.7
            },
            
            onEvent: function(event, type) {
                console.log("Widget Event:", event, type);
            },
            
            onLoad: function() {
                console.log("Widget Loaded");
            },
            
            onSuccess: function(event) {
                console.log("Bank Connection Successful:", event);
                alert("Bank connected successfully!");
            },
            
            onClose: function() {
                console.log("Widget Closed");
            },
            
            onError: function(error) {
                console.error("Widget Error:", error);
                alert("An error occurred: " + error.message);
            }
        };

        try {
            const widgetRef = openWidget(config);
            widgetRef.launch();
        } catch (error) {
            console.error("Failed to launch widget:", error);
            alert("Failed to launch widget: " + error.message);
        }
    }
});
