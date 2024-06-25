//Sample data from the experiment
let values = [4.2, 5.1, 3.8, 4.7, 5.3];

//Function to calculate the mean of an array
function calculateMean(values) {
var sum = 0;
for (var i=0; i < values.length; i++) {
sum += values[i];
}
return sum / values.length;
} 

//Calculate the mean
var mean = calculateMean(values);
var roundedMean = Math.round(mean * 100) / 100;
var resultMessage = "Mean " + roundedMean;
console.log(resultMessage);