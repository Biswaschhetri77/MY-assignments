/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer */

let input_month = prompt("Enter the month");
let season = "";
if (input_month === "september" || input_month === "october" || input_month === "November"){
    season = "Autumn";
}else if (input_month === "December" || input_month === "January" || input_month === "Feburary"){
    season = "winter";
}else if (input_month === "March" || input_month === "April" || input_month === "May"){
    season = "spring";
}else if (input_month === "june" || input_month === "july" || input_month === "August"){
    season = "Summer";
}
console.log("The season is ${season}");
