var graphic;

function updateData(callsOnly) {
    var chatAgentsPercent = Number(document.getElementById('chat-agents-percent').value);
    var secondsPerCall = Number(document.getElementById('calls-secconds').value);
    var secondsPerChat = Number(document.getElementById('chats-secconds').value);
    var dataTableCalls = document.querySelectorAll('#data-table tr')[1].querySelectorAll('td');
    //var dataTableAgents = document.querySelectorAll('#data-table tr')[2].querySelectorAll('td');
    //var dataTableSmartAgents = document.querySelectorAll('#data-table tr')[3].querySelectorAll('td');
    var calls = [];
    // var agents = [];
    // var smartAgents = [];
    dataTableCalls.forEach(td => calls.push(Number(td.textContent)));
    //dataTableAgents.forEach(td => agents.push(Number(td.textContent)));
    //dataTableSmartAgents.forEach(td => smartAgents.push(Number(td.textContent)));
    var agents = recalculateData(chatAgentsPercent, secondsPerCall, secondsPerChat, calls); // agents, smartAgents);
    var nextData = callsOnly ? initData : dataRoll[0];
    config.data.datasets.forEach(function (dataset, pos) {
        dataset.label = nextData[pos].label;
        dataset.borderColor = nextData[pos].borderColor;
        dataset.backgroundColor = nextData[pos].backgroundColor;
        dataset.yAxisID = nextData[pos].yAxisID;
        dataset.data = dataset.data.map(function (elem, i) {
            return nextData[pos].data[i];
        });
    });

    saving.querySelector('span').textContent = 100 - Math.round(agents.totalSmartAgents/agents.totalAgents * 100) + '%';

    usage.querySelector('span').textContent = chatAgentsPercent + '%';
}

window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    updateData(true);
    graphic = new Chart(ctx, config);
    var saving = document.getElementById('saving');
    var usage = document.getElementById('usage');

    document.getElementById('callsButton').addEventListener('click', function () {
        dataRoll.push(dataRoll.shift());
        updateData(true);
        graphic.update();
        if (!saving.classList.contains('hide')) {
            saving.classList.add('hide');
            usage.classList.add('hide');
        }
    });

    function updateSmartData(percent, smartAgents) {
        document.getElementById('chat-agents-percent').value = percent;
        // smartAgents.forEach((agents, i) => {
        //     document.querySelectorAll('#data-table tr')[3].querySelectorAll('td')[i].textContent = agents;
        // });

        dataRoll.push(dataRoll.shift());
        updateData(false);
        graphic.update();
        if (saving.classList.contains('hide')) {
            saving.classList.remove('hide');
            usage.classList.remove('hide');
        }
    }

    document.getElementById('chatButton10').addEventListener('click', function () {
        var percent = 10;
        document.getElementById('chat-agents-percent').value = percent;
        // var smartAgents = [20, 100, 150, 225, 275, 325, 375, 400, 425, 425, 425, 425, 400, 350, 300, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 250, 200, 200, 150, 150, 100, 75, 50, 50];
        updateSmartData(percent);//, smartAgents);
    });

    document.getElementById('chatButton20').addEventListener('click', function () {
        var percent = 20;
        document.getElementById('chat-agents-percent').value = percent;
        // var smartAgents = [20, 100, 150, 225, 250, 300, 350, 375, 375, 375, 375, 375, 350, 350, 300, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 200, 200, 150, 150, 100, 100, 75, 50, 50];
        updateSmartData(percent);//, smartAgents);
    });



    document.getElementById('chatButton30').addEventListener('click', function () {
        var percent = 30;
        document.getElementById('chat-agents-percent').value = percent;
        // var smartAgents = [20, 75, 100, 150, 200, 250, 300, 350, 350, 350, 350, 350, 350, 300, 275, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 200, 200, 150, 150, 100, 100, 75, 50, 50];
        updateSmartData(percent);//, smartAgents);
    });

    document.getElementById('chatButton').addEventListener('click', function () {
        dataRoll.push(dataRoll.shift());
        updateData(false);
        graphic.update();
    });

};