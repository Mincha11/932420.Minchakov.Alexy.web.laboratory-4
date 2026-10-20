
const userName = prompt("Как тебя зовут?");

if (userName && userName.trim() !== "") {
    alert(`Привет, ${userName.trim()}! Добро пожаловать на страницу геймера и разработчика игр.`);
} else {
    alert("Привет! Добро пожаловать на страницу геймера и разработчика игр.");
}

const gameHours = [12, 8, 15, 3, 2, 6];

function findMaximum(numbers) {
    if (numbers.length === 0) return 0;

    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}

function filterPopularGames(numbers) {
    return numbers.filter(hours => hours > 10);
}

function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}


const totalHours = calculateSum(gameHours);
const popularGames = filterPopularGames(gameHours);
const popularHours = calculateSum(popularGames);
const maximumHours = findMaximum(gameHours);


let shortSessionsCount = 0;

for (let i = 0; i < gameHours.length; i++) {
    if (gameHours[i] <= 3) {
        shortSessionsCount++;
    }
}

const shortSessionsShare =
    (shortSessionsCount / gameHours.length) * 100;


alert(
    `Вы провели ${totalHours} часов в играх, ` +
    `из них ${popularHours} часов – в самых популярных.`
);


console.log("Время в играх за неделю:", gameHours);
console.log("Максимальное время в одной игре:", maximumHours, "часов");
console.log("Игры, в которые играли больше 10 часов:", popularGames);
console.log("Количество коротких игровых сессий (≤ 3 часов):", shortSessionsCount);
console.log("Доля коротких игровых сессий:", shortSessionsShare.toFixed(1) + "%");


if (totalHours > 25) {
    console.log("Возможно, стоит сбалансировать время между играми и учёбой");
}
