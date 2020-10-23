var graphic;

function updateData(callsOnly) {
    var chatAgentsPercent = Number(document.getElementById('chat-agents-percent').value);
    var chatTimePercent = Math.ceil(Number(document.getElementById('chats-secconds').value)/Number(document.getElementById('calls-secconds').value)*100);
    var secondsPerCall = Number(document.getElementById('calls-secconds').value);
    var secondsPerChat = Number(document.getElementById('chats-secconds').value);
    var dataTableCalls = document.querySelectorAll('#data-table tr')[1].querySelectorAll('td');
    var calls = [];
    dataTableCalls.forEach(td => calls.push(Number(td.textContent)));
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

    saving.querySelector('span').textContent = ' ' + (100 - Math.round(agents.totalSmartAgents/agents.totalAgents * 100)) + '%';
    reduction.querySelector('span').textContent = ' ' + chatTimePercent + '%';
    usage.querySelector('span').textContent = ' ' + chatAgentsPercent + '%';
}

window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    updateData(true);
    graphic = new Chart(ctx, config);
    var saving = document.getElementById('saving');
    var usage = document.getElementById('usage');
    var reduction = document.getElementById('reduction');

    document.getElementById('callsButton').addEventListener('click', function () {
        dataRoll.push(dataRoll.shift());
        document.getElementById('chat-agents-percent').value = 0;
        document.getElementById('chats-secconds').value = document.getElementById('calls-secconds').value;
        updateData(true);
        graphic.update();
        if (!saving.classList.contains('hide')) {
            saving.classList.add('hide');
            reduction.classList.add('hide');
            usage.classList.add('hide');
        }
    });

    function updateSmartData() {
        dataRoll.push(dataRoll.shift());
        updateData(false);
        graphic.update();
        if (saving.classList.contains('hide')) {
            saving.classList.remove('hide');
            reduction.classList.remove('hide');
            usage.classList.remove('hide');
        }
    }

    document.getElementById('chatButton10').addEventListener('click', function () {
        document.getElementById('chats-secconds').value = document.getElementById('calls-secconds').value * 1;
        document.getElementById('chat-agents-percent').value = 10;
        updateSmartData();
    });

    document.getElementById('chatButton20').addEventListener('click', function () {
        document.getElementById('chats-secconds').value = document.getElementById('calls-secconds').value * 1;
        document.getElementById('chat-agents-percent').value = 20;
        updateSmartData();
    });

    document.getElementById('chatButton30').addEventListener('click', function () {
        document.getElementById('chats-secconds').value = document.getElementById('calls-secconds').value * 1;
        document.getElementById('chat-agents-percent').value = 30;
        updateSmartData();
    });

    document.getElementById('chatButton10time').addEventListener('click', function () {
        document.getElementById('chats-secconds').value = document.getElementById('calls-secconds').value * 0.8;
        updateSmartData();
    });

    document.getElementById('chatButton20time').addEventListener('click', function () {
        document.getElementById('chats-secconds').value = document.getElementById('calls-secconds').value * 0.6;
        updateSmartData();
    });

    document.getElementById('chatButton30time').addEventListener('click', function () {
        document.getElementById('chats-secconds').value = 145;
        updateSmartData();
    });

    function customData() {
        dataRoll.push(dataRoll.shift());
        updateData(false);
        graphic.update();
        if (saving.classList.contains('hide')) {
            saving.classList.remove('hide');
            reduction.classList.remove('hide');
            usage.classList.remove('hide');
        }
    }

    document.getElementById('chatButton').addEventListener('click', customData);

    document.getElementById('chats-secconds').addEventListener('focusout', customData);
    document.getElementById('calls-secconds').addEventListener('focusout', customData);
    document.getElementById('chat-agents-percent').addEventListener('focusout', customData);

    document.getElementById('chats-secconds').addEventListener('change', customData);
    document.getElementById('calls-secconds').addEventListener('change', customData);
    document.getElementById('chat-agents-percent').addEventListener('change', customData);
    document.getElementById('data-table').addEventListener('change', customData);

};