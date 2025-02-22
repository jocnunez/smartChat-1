var histories = [
	{
		title: "",
		start: "10:15",
		messages: [
			{
				type: "agent",
				text: "Hi Laura, how are you? Do you want to make a query for a duplicate charge?",
				minutes: 0
			},
			{
				type: "customer",
				text: "Yes",
				minutes: 1
			},
			{
				type: "agent",
				text: "Please, can you indicate the date and the amount of the charge?",
				minutes: 1
			},
			{
				type: "customer",
				text: "October 2nd 20 Euros",
				minutes: 2
			},
			{
				type: "agent",
				text: "Thank you very much, we are verifying the charge, and we will inform you as soon as we have a solution.",
				minutes: 2
			}
		]
	},
	{
		title: "",
		start: "12:22",
		messages: [
			{
				type: "customer",
				text: "I want to make a transfer to Johnny Cash of 400 Euros.",
				minutes: 0
			},
			{
				type: "agent",
				text: "From which account?<br><br>Payroll account,<br>Savings Account,<br>Housing Account",
				minutes: 1
			},
			{
				type: "customer",
				text: "Payroll",
				minutes: 3
			},
			{
				type: "customer",
				text: "Do you confirm that you want to make a transfer of 400 ? from your Payroll Account to your contact  Johnny Cash with account number <br>ES21 1234 1323 1232 4321 1234?",
				minutes: 3
			},
			{
				type: "customer",
				text: "Please validate it with your Pin:",
				minutes: 3
			},
			{
				type: "validate",
				text: "<img style=\"width: 290px;\" src=\"pinpad.gif\">",
				minutes: 6
			},
			{
				type: "agent",
				text: "Your transfer has been made",
				minutes: 6
			},
			{
				type: "agent",
				text: "Remember that through smart chat you can make questions, operations and hire products.",
				minutes: 6
			}
		]
	}, {
		title: "",
		start: "10:12",
		messages: [
			{
				type: "customer",
				text: "Hello, I'm going on a trip to Germany",
				minutes: 0
			},
			{
				type: "customer",
				text: "What fees are applied when withdrawing money and paying by card?",
				minutes: 1
			},
			{
				type: "agent",
				text: "Hello John, it's Paul. Here it is a table with the info you asked for",
				minutes: 42
			},
			{
				type: "agent",
				text: "<img style=\"width: 215px;\" src=\"comisions.png\">",
				minutes: 43
			},
			{
				type: "agent",
				text: "Tell us if you need anything else",
				minutes: 42
			},
			{
				type: "customer",
				text: "Thanks",
				minutes: 83
			}
		]
	},
	{
		title: "",
		start: "11:02",
		messages: [
			{
				type: "agent",
				text: "Hello, we think you may be interested in a travel insurance",
				minutes: 0
			},
			{
				type: "agent",
				text: "Here it is all info about travel insurances: https://www.ing.es/travel-insurance",
				minutes: 0
			},
			{
				type: "customer",
				text: "Can it be contracted only for 5 days?",
				minutes: 12
			},
			{
				type: "agent",
				text: "Sure! Only tell us your travel dates",
				minutes: 50
			},
			{
				type: "customer",
				text: "Ok, I want to contract it from 25/9 to 30/9",
				minutes: 55
			},
			{
				type: "agent",
				text: "Ok, please validate with your Mobile Password:",
				minutes: 50
			},
			{
				type: "validate",
				text: "<img style=\"width: 295px;\" src=\"pinpad.gif\">",
				minutes: 55
			}
		]
	},
	{
		title: "",
		start: "16:54",
		messages: [
			{
				type: "customer",
				text: "I'm about to fly to Zurich",
				minutes: 0
			},
			{
				type: "customer",
				text: "Can you tell me in which ATMs I can withdraw money?",
				minutes: 0
			},
			{
				type: "agent",
				text: "Hi, it's Mike",
				minutes: 80
			},
			{
				type: "agent",
				text: "While you are abroad you can use any ATM, all of them have the fees we send you last week",
				minutes: 80
			},
			{
				type: "agent",
				text: "Let me send you a map of the ATMs at the Zurich airport",
				minutes: 81
			},
			{
				type: "agent",
				text: "<img style=\"width: 215px;\" src=\"munich.png\">",
				minutes: 82
			},
			{
				type: "agent",
				text: "Have a good trip!",
				minutes: 82
			}
		]
	},
	{
		title: "",
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
				text: "Hi it's Sussan, don't worry we will fix it as soon as possible",
				minutes: 90
			},
			{
				type: "agent",
				text: "If you can send me a photo of the purchase receipt, it would help us a lot",
				minutes: 91
			},
			{
				type: "customer",
				text: "<img style=\"width: 215px;\" src=\"ticket-lakers-store.jpg\">",
				minutes: 1024
			},
			{
				type: "agent",
				text: "We have just done a refund in your account",
				minutes: 1256
			},
			{
				type: "agent",
				text: "sorry for the inconvenience",
				minutes: 1256
			}
		]
	},
	{
		title: "",
		start: "10:12",
		messages: [
			{
				type: "customer",
				text: "Hello, I'm going on a trip to Germany",
				minutes: 0
			},
			{
				type: "customer",
				text: "What fees are applied when withdrawing money and paying by card?",
				minutes: 1
			},
			{
				type: "agent",
				text: "Hello John, it's Paul here",
				minutes: 42
			},
			{
				type: "agent",
				text: "Here it is a table with the info you asked for",
				minutes: 42
			},
			{
				type: "agent",
				text: "<img style=\"width: 215px;\" src=\"comisions.png\">",
				minutes: 43
			},
			{
				type: "agent",
				text: "Tell us if you need anything else",
				minutes: 42
			},
			{
				type: "customer",
				text: "Thanks",
				minutes: 83
			},
			{
				type: "date",
				text: "today",
				minutes: 83
			},
			{
				type: "customer",
				text: "You told me that ATM withdrawls has a fee of 2€",
				minutes: 1000
			},
			{
				type: "customer",
				text: "But yesterday I withdraw 150€ and you charge me a fee of 4.5€",
				minutes: 1001
			},
			{
				type: "agent",
				text: "Hello, I'm Andrew. I have reviewed your withdrawal",
				minutes: 1200
			},
			{
				type: "agent",
				text: "The problem is that the ATM where you withdraw has applied the credit card fee",
				minutes: 1200
			},
			{
				type: "agent",
				text: "We have just done a refund of 2.5€ in your account",
				minutes: 1201
			},
			{
				type: "agent",
				text: "Sorry for the inconvenience",
				minutes: 1201
			}
		]
	}
]