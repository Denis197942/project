'use strict';
let money,
	time;

function start () {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money =='' || money == null) {
	money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();



let appData = {
	budget: money,
	expenses: {},
	optExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	optionalExpenses: true
};

appData.savings = confirm('У вас депозит в банке?');

function checkSaving() {
	if(appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?');
		let percent = +prompt('Под какой процент?');

		appData.monthIncome = save / 100 / 12 * percent;
		alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
	}
}

checkSaving();

function detectDayBudget() {
	if(appData.savings == true) {
		appData.moneyPerDey = ((appData.budget  + appData.monthIncome) / 30).toFixed();
		alert('ваш бюджет на один день составляет ' + appData.moneyPerDey);
	} else {
		appData.moneyPerDey = (appData.budget / 30).toFixed();
		alert('ваш бюджет на один день составляет ' + appData.moneyPerDey);
	}
}

detectDayBudget();

function detectLevel() {
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
}

detectLevel();


alert('а теперь давай посчитаем бюджет на день с учётом статей твоих расходов :)');

function chooseExpenses() {
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
}

chooseExpenses();

appData.optionalExpenses = confirm('У вас есть необязательные расходы?');

function chooseOptExpenses() {
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
}

chooseOptExpenses();

