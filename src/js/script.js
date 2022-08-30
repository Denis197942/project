'use strict';
let money,
	time;

let appData = {
	budget: money,
	expenses: {},
	optExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	optionalExpenses: true,
	chooseInComeQuestion: true,
	start: function () {
		money = +prompt("Ваш бюджет на месяц?", '');
		time = prompt('Введите дату в формате YYYY-MM-DD', '');
	
		while(isNaN(money) || money =='' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
		}
	},
	checkSaving: function () {
		appData.savings = confirm('У вас есть депозит в банке?');
		if(appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?');
			let percent = +prompt('Под какой процент?');
	
			appData.monthIncome = (save / 100 / 12 * percent).toFixed();
			alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
		}
	},
	detectDayBudget: function () {
		if(appData.savings == true) {
			appData.moneyPerDey = ((appData.budget  + appData.monthIncome) / 30).toFixed();
			alert('ваш бюджет на один день составляет ' + appData.moneyPerDey);
		} else {
			appData.moneyPerDey = (appData.budget / 30).toFixed();
			alert('ваш бюджет на один день составляет ' + appData.moneyPerDey);
		}
	},
	detectLevel: function () {
	switch(true) {
		case  appData.moneyPerDey < 1000:
			alert('тяжело, но жить можно');
		break;
		case  appData.moneyPerDey > 1000 && appData.moneyPerDey < 5000:
			alert('жить можно потихоньку');
		break;
		case  appData.moneyPerDey > 5000 && appData.moneyPerDey < 10000:
			alert('нормальный доход');
		break;
		case  appData.moneyPerDey > 10000 && appData.moneyPerDey < 20000:
			alert('ты хорошо зарабатываешь');
		break;
		default:
			alert('шикарно живёшь'); 
			break;
		}
	},
	chooseExpenses: function () {
		alert('а теперь давай посчитаем бюджет на день с учётом статей твоих расходов :)');
		for(let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
			if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
				appData.expenses[a] = b;
			} else {
				i = i - 1;
				alert('вы где то ошиблись, попробуйте ещё раз');
			}
		}
	},
	chooseOptExpenses: function () {
		appData.optionalExpenses = confirm('У вас есть необязательные расходы?');
		if( appData.optionalExpenses == true) {
			for(let i = 0; i < 2; i++) {
				let a = prompt("Введите необязательную статью расходов в этом месяце", ''),
					b = prompt("Во сколько обойдется?", '');
				if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
					appData.optExpenses[a] = b;
				} else {
					i = i - 1;
					alert('вы где то ошиблись, попробуйте ещё раз');
				}
			}
		} else {
			appData.optExpenses = 0;
			alert('Ну и хорошо');
		}
	},
	chooseInCome: function () {
		appData.chooseInComeQuestion = confirm('У вас есть дополнительные источники дохода?');
		if (appData.chooseInComeQuestion === true) {
			let items = prompt('что принесёт дополнительный доход? (Перечислите через запятую)');
			while(items =='' || items == null) {
				items = prompt("Вы где то ошиблись, ответьте на этот впрос корректно. Что принесёт дополнительный доход? (Перечислите через запятую)", '')};
			appData.income = items.split(', ');
			appData.income.push(prompt('Может что то ещё?'));
			appData.income.sort();
		} else {
			alert('я тебя понял');
		}
	}
};
for(let keys in appData) {
	console.log(appData[keys]);
}
appData.start();

appData.checkSaving();

appData.chooseInCome();

appData.detectDayBudget();

appData.detectLevel();

appData.chooseExpenses();

appData.chooseOptExpenses();



