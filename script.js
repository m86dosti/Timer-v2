
        let count = 0;
        let timerInterval;

        let start = function()
        {timerInterval = setInterval(() => {count++;document.getElementById('timer').innerText = count;}, 1000);};

        let stop = function() {clearInterval(timerInterval);};

        let reset = function() {count = 0;document.getElementById('timer').innerText = count;};
