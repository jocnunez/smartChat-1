var histories = [{
		title: "atm & paymens",
		start: "10:12",
		messages: [
			{
				type: "customer",
				text: "Hello, I'm going on a trip to Germany",
				minutes: 0
			},
			{
				type: "customer",
				text: "What fees are applied when withdrawing money and paying by card",
				minutes: 1
			},
			{
				type: "agent",
				text: "Here it is a table with all the data",
				minutes: 42
			},
			{
				type: "agent",
				text: "<img style=\"width: 215px;\" src=\"comisions.png\">",
				minutes: 43
			}
		]
	},
	{
		title: "travel insurance",
		start: "11:02",
		messages: [
			{
				type: "agent",
				text: "Hello, we think you may be interested in travel insurance",
				minutes: 0
			},
			{
				type: "agent",
				text: "Here it is all info about travel insurances: https://www.ing.es/travel-insurance",
				minutes: 0
			},
			{
				type: "customer",
				text: "Can it be contracted for only 5 days?",
				minutes: 12
			},
			{
				type: "agent",
				text: "Sure!",
				minutes: 50
			},
			{
				type: "customer",
				text: "Ok, I want to contract it",
				minutes: 55
			},
			{
				type: "validate",
				text: "<img src=\"validate.jpeg\">",
				minutes: 55
			}
		]
	},
	{
		title: "Munich Airport ATMs",
		start: "16:54",
		messages: [
			{
				type: "customer",
				text: "I'm about to fly to Munich",
				minutes: 0
			},
			{
				type: "customer",
				text: "Can you tell me in which ATMs I can withdraw money?",
				minutes: 0
			},
			{
				type: "agent",
				text: "No problem, while you are abroad, all the ATMs have the same fee",
				minutes: 80
			},
			{
				type: "agent",
				text: "Let me send you a map of ATMs at the Munich airport",
				minutes: 80
			},
			{
				type: "agent",
				text: "<img style=\"width: 215px;\" src=\"munich.png\">",
				minutes: 82
			},
			{
				type: "agent",
				text: "Good trip!",
				minutes: 82
			}
		]
	},
	{
		title: "Payment duplicated",
		start: "18:24",
		messages: [
			{
				type: "customer",
				text: "I have just received two push messages for the same purchase",
				minutes: 0
			},
			{
				type: "customer",
				text: "Can you fix it?",
				minutes: 3
			},
			{
				type: "agent",
				text: "Hi, don't worry we will fix it as soon as possible",
				minutes: 90
			},
			{
				type: "agent",
				text: "You already have a refund in your account",
				minutes: 1024
			},
			{
				type: "agent",
				text: "sorry for the inconvenience",
				minutes: 1024
			}
		]
	},
	{
		title: "Incorrect ATM fee",
		start: "18:28",
		messages: [
			{
				type: "customer",
				text: "You told me that ATM withdrawls has a fee of 2€",
				minutes: 0
			},
			{
				type: "customer",
				text: "But yesterday I withdraw 150€ and you charge me a fee of 4.5€",
				minutes: 1
			},
			{
				type: "agent",
				text: "We have reviewed your withdrawal",
				minutes: 200
			},
			{
				type: "agent",
				text: "The problem is that the ATM where you withdraw has marked it as credit",
				minutes: 200
			},
			{
				type: "agent",
				text: "We have just deposit 2.5€ in your account",
				minutes: 201
			},
			{
				type: "agent",
				text: "Sorry for the inconvenience",
				minutes: 201
			}
		]
	}
]
