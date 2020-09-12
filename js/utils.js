function recalculateData (chatAgentsPercent, SECONDS_PER_CALL, CALLS, AGENTS, SMART_AGENTS) {
	var SECONDS_PER_HALF_HOUR = 60 * 30;
	var CALLS_IN_HALF_HOUR_BY_AGENT = SECONDS_PER_HALF_HOUR / SECONDS_PER_CALL;

	var CURRENT_CALLS = CALLS.map(calls => Math.ceil(calls / CALLS_IN_HALF_HOUR_BY_AGENT));
	//var AGENTS = [20, 100, 200, 250, 300, 350, 400, 450, 450, 500, 500, 500, 450, 400, 350, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 250, 200, 200, 150, 100, 50, 50, 50, 20]
	//var SMART_AGENTS = [20, 100, 200, 250, 300, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 250, 200, 200, 150, 100, 50, 50, 50, 20]

	var CALL_AGENTS = [];
	var CHAT_AGENTS = [];
	var DELAYED_CHAT_AGENTS = [];

	CURRENT_CALLS.forEach(current => {
		var calls = Math.ceil(current * (100 - chatAgentsPercent) / 100);
		var chats = Math.ceil(current * (chatAgentsPercent) / 100);
		CALL_AGENTS.push(calls);
		CHAT_AGENTS.push(chats);
	});

	var chatsPending = 0;
	CHAT_AGENTS = CHAT_AGENTS.map((chats, i) => {
		var chatsAnsered = Math.max(0, Math.min(SMART_AGENTS[i], chats + CALL_AGENTS[i]) - CALL_AGENTS[i] - chatsPending / 9);
		chatsPending += chats - chatsAnsered;
		var chatsAnseredDelayed = Math.max(0, Math.min(chatsPending, SMART_AGENTS[i] - chatsAnsered - CALL_AGENTS[i]));
		chatsPending -= chatsAnseredDelayed;
		DELAYED_CHAT_AGENTS.push(chatsAnseredDelayed);
		return chatsAnsered;
	});




	var DATA = {
		current: {
			label: 'Actual',
			yAxisID: 'current',
			borderColor: COLORS.grey,
			backgroundColor: COLORS.grey_med,
			data: CURRENT_CALLS,
		},
		current_orange: {
			label: '',
			borderColor: COLORS.orange,
			backgroundColor: COLORS.orange_med,
			data: ZERO,
		},
		calls: {
			label: 'Llamadas',
			borderColor: COLORS.white,
			backgroundColor: COLORS.yellow,
			data: CALL_AGENTS,
		},
		rt_chats: {
			label: 'Chats',
			borderColor: COLORS.red,
			backgroundColor: COLORS.red_med,
			data: CHAT_AGENTS,
		},
		delayed_chats: {
			label: 'Chats Async',
			borderColor: COLORS.orange,
			backgroundColor: COLORS.orange_med,
			data: DELAYED_CHAT_AGENTS,
		},
		planified_agents: {
			label: 'Agentes',
			yAxisID: 'current',
			steppedLine: 'before',
			borderColor: COLORS.blue,
			backgroundColor: COLORS.white,
			data: SMART_AGENTS,
		},
	};

	dataRoll = [
		[DATA.calls, DATA.rt_chats, DATA.delayed_chats, DATA.current, DATA.planified_agents]
	];

	initData =	[
		{
			label: '',
			borderColor: COLORS.white,
			backgroundColor: COLORS.white,
			data: [].concat(CURRENT_CALLS)
		},
		{
			label: '',
			borderColor: COLORS.white,
			backgroundColor: COLORS.white,
			data: [].concat(ZERO)
		},
		{
			label: '',
			borderColor: COLORS.white,
			backgroundColor: COLORS.white,
			data: [].concat(ZERO)
		},
		{
			label: 'Actual',
			yAxisID: 'current',
			borderColor: COLORS.yellow,
			backgroundColor: COLORS.yellow,
			data: [].concat(CURRENT_CALLS)
		},
		{
			label: 'Agentes',
			yAxisID: 'current',
			steppedLine: 'before',
			borderColor: COLORS.blue,
			backgroundColor: COLORS.white,
			data: AGENTS,
		}]
}