    <script>

        // Create objects for reuse
        let currentAudio = null;
        let currentButton = null;
        let currentOldText = null;

        function playAudio(btn, number) {
            // Stop any currently playing audio
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                // Reset the previous button state immediately
            if (currentButton) {
                currentButton.disabled = false;
                currentButton.innerHTML = currentOldText;
                }
            }
            
            // Get the URL for the audio file
            // const url = "https://cantogo.github.io/voice/twister_" + number + ".mp3";
            const url = "/voice/twister_" + number + ".mp3";

            if (!url) {
                alert(`音频文件 ${number} 的URL未配置。`);
                return;
            }

            // disable the button
            const oldText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = "播放中...";

            // Create new audio element with the web URL
            currentAudio = new Audio(url);

            // Store current button information
            currentButton = btn;
            currentOldText = oldText;
            
            // Play the audio
            currentAudio.play().catch(error => {
                console.error('Error playing audio:', error);
                alert(`无法播放音频文件。请检查URL是否正确：${url}`);
            });

            // enable the button after playing the audio
            currentAudio.addEventListener('ended', function() {
                btn.disabled = false;
                btn.innerHTML = oldText;
            });         
        }
    </script>