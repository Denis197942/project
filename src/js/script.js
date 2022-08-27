'use strict';
let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

appData.moneyPerDey = appData.budget / 30;
alert('ваш бюджет на один день составляет ' + appData.moneyPerDey);

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
};

alert('а теперь давай посчитаем бюджет на день с учётом статей твоих расходов :)');

	for(let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
		if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
			appData.expenses[a] = b;
		} else {
			i = 0;
			alert('вы где то ошиблись, попробуйте ещё раз');
		}
	};
