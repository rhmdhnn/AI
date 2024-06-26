function showLoadingScreen() {
    var inputText = document.getElementById("userInput").value;

    // Show loading screen
    document.getElementById("loading-screen").style.display = "flex";
  
    var loadingMessages = [
        "Menganalisa Pikiran Anda...",
        "Scan Memori...",
        "Menghitung Probabilitas...",
        "Penguraian Kode..."
    ];
    var messageIndex = 0;
    var loadingTextElement = document.getElementById("loading-text");

    function changeLoadingMessage() {
        if (messageIndex < loadingMessages.length) {
            loadingTextElement.textContent = loadingMessages[messageIndex];
            messageIndex++;
        } else {
            messageIndex = 0;
        }
    }

    var loadingInterval = setInterval(changeLoadingMessage, 1000); // Change message every second

    // Simulate a delay to demonstrate the loading screen
    setTimeout(function() {
        // Hide loading screen
        document.getElementById("loading-screen").style.display = "none";
        clearInterval(loadingInterval);

        if (inputText.trim() === "") {
            outputText = "Kamu Tidak Memikirkan Angka Berapapun";
        } else { 
            outputText = "Kamu Memikirkan Angka " + inputText.toUpperCase();
        }

        // Tampilkan teks yang telah diubah di elemen output
        document.getElementById("output").innerHTML = outputText;
    }, 4000); // 4-second delay
}
