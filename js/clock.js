
window.onload = function() {
    const username = prompt("Enter your name: ");

    if (username) {
       
        document.getElementById("myName").innerText = username;
    } else {
        
        alert("Enter your name");
    }

    function showTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        document.getElementById("myClock").innerText = formattedTime;


    }
    
    showTime();
    setInterval(showTime,1000);
};
