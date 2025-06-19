// const name = prompt("Как тебя зовут?");
// if (name && name.trim()) {
//     alert("Привет, " + name + "!");
// } else {
//     alert("Имя не введено.");
// }

// const resultDiv = document.getElementById('result');
// const resultInfoDiv = document.getElementById('result-info');
// const bmiInfoDiv = document.getElementById('bmi-info');
// const resultH1 = document.querySelector('.resulth1');

// const userAgeInput = prompt("Enter your age: ");

// if (userAgeInput === null) {
//     alert('You did not want to enter your age');
// } else if (userAgeInput.trim() === '') {
//     alert('You entered empty numbers');
// } else if (isNaN(Number(userAgeInput))) {
//     alert('Age must be a number');
// } else if (Number(userAgeInput) < 1 || Number(userAgeInput) >= 120) {
//     alert("Age must be between 1 and 119");
// } else {

//     const userHeightInput = prompt("Enter your height: cm");
//     if (userHeightInput === null) {
//         alert('You did not want to enter your height');
//     } else if (userHeightInput.trim() === '') {
//         alert('You entered empty numbers');
//     } else if (isNaN(Number(userHeightInput))) {
//         alert('Height must be a number');
//     } else if (Number(userHeightInput) === 0 || Number(userHeightInput) <= 20 || Number(userHeightInput) >= 230) {
//         alert("Your height must be between 20 and 230");
//     } else {
//         const userWeightInput = prompt("enter your weight: kg");
//         if (userWeightInput === null) {
//             alert('You did not want to enter your weight');
//         } else if (userWeightInput.trim() === '') {
//             alert('You entered empty numbers');
//         } else if (isNaN(Number(userWeightInput))) {
//             alert('Weight must be a number');
//         } else if (Number(userWeightInput) === 0 || Number(userWeightInput) <= 20 || Number(userWeightInput) >= 200) {
//             alert("Yor weigth must be between 20 and 199 ");
//         } else {
//             const userLifestyleInput = prompt("Lifestyle choices (1 - For sedentary people, little or no exercise, 2 - For people with low activity, light exercise 1-3 times per week or equivalent to other activity, 3 - For moderately active people: moderate physical work or regular exercise 3-5 days per week, 4 - For very active people: full-day physical work or intense exercise 6-7 times per week, 5 - For extremely active people: heavy physical work and intensive training/exercise.)");
//             if (userLifestyleInput === null) {
//                 alert('You did not want to enter your Lifestyle');
//             } else if (userLifestyleInput.trim() === '') {
//                 alert('You entered empty numbers');
//             } else if (isNaN(Number(userLifestyleInput))) {
//                 alert('Lifestyle must be a chose a number 1, 2 or 3');
//             } else if (Number(userLifestyleInput) < 1 || Number(userLifestyleInput) >= 6) {
//                 alert("Your Lifestyle choices must be from 1 to 6");
//             } else {

//                 const userWeight = +userWeightInput;
//                 const userHeight = +userHeightInput;
//                 const userAge = +userAgeInput;
//                 const userLifestyle = +userLifestyleInput;

//                 const BMR = 10 * userWeight + 6.25 * userHeight - 5 * userAge + 5;
//                 let caloriesMaintain;

//                 if (userLifestyle === 1) {
//                     caloriesMaintain = BMR * 1.2;
//                 } else if (userLifestyle === 2) {
//                     caloriesMaintain = BMR * 1.375;
//                 } else if (userLifestyle === 3) {
//                     caloriesMaintain = BMR * 1.55;
//                 } else if (userLifestyle === 4) {
//                     caloriesMaintain = BMR * 1.725;
//                 } else if (userLifestyle === 5) {
//                     caloriesMaintain = BMR * 1.9;
//                 } else {
//                     caloriesMaintain = BMR;
//                 }

//                 const baseMetabolism = caloriesMaintain * 0.8;
//                 caloriesLose = caloriesMaintain - (caloriesMaintain * 0.15);
//                 caloriesGain = caloriesMaintain * 1.15;
//                 const bmi = Math.round(userWeight / (userHeight / 100 * userHeight / 100));


//                 resultDiv.innerHTML = `<ul>
//                     <li> 
//                         <span class="result-label">Your base metabolism:</span>
//                         <span class="result-value">${Math.round(baseMetabolism)}</span>
//                         <span class="result-unit">kcal</span>
//                     </li>
//                     <li>
//                         <span class="result-label">To maintain weight:</span>
//                         <span class="result-value">${Math.round(caloriesMaintain)}</span>
//                         <span class="result-unit">kcal</span>
//                     </li>
//                     <li>
//                         <span class="result-label">To lose weight:</span>
//                         <span class="result-value">${Math.round(caloriesLose)}</span>
//                         <span class="result-unit">kcal</span>
//                     </li>
//                     <li>
//                         <span class="result-label">To gain weight:</span>
//                         <span class="result-value">${Math.round(caloriesGain)}</span>
//                         <span class="result-unit">kcal</span>
//                     </li>
//                 </ul>`;
//                 resultDiv.style.display = "block";

//                 resultH1.innerHTML = "Your calculated kcal";
//                 resultInfoDiv.innerHTML = `
//                     <h2>Your daily calories</h2>
//                     <p>Your basal metabolism <span class="result-value">${Math.round(baseMetabolism)}</span><span class="result-unit">kcal</span> (basal metabolic rate). These are the calories that are burned when you are at rest and the energy is spent to support the processes of breathing, blood circulation, maintaining body temperature, etc.</p>
//                     <p>Your calorie allowance for weight maintenance <span class="result-value">${Math.round(caloriesMaintain)}</span> <span class="result-unit">kcal</span> with current physical activity (you are not losing or gaining weight)</p>
//                 `;
//                 resultInfoDiv.style.display = "block";

//                 if (bmi > 25) {
//                     bmiInfoDiv.innerHTML = `
//                         <div class="bmi-center">
//                             <div class="bmi-label">Your BMI is</div>
//                             <div class="bmi-badvalue">${bmi}</div>
//                             <div class="bmi-normal">(normal is 18.5 to 25)
//                                 It is <span class="red-value">recommended</span> that you reduce your weight
//                             </div>
//                         </div>
//                     `;
//                     bmiInfoDiv.style.display = "flex";
//                 } else if (bmi < 18.5) {
//                     bmiInfoDiv.innerHTML = `
//                         <div class="bmi-center">
//                             <div class="bmi-label">Your BMI is</div>
//                             <div class="bmi-badvalue">${bmi}</div>
//                             <div class="bmi-normal">(normal is 18.5 to 25)
//                                 It is <span class="red-value">recommended</span> to increase the weight
//                             </div>
//                         </div>
//                     `;
//                     bmiInfoDiv.style.display = "flex";
//                 } else {
//                     bmiInfoDiv.innerHTML = `
//                         <div class="bmi-center">
//                             <div class="bmi-label">Your BMI is</div>
//                             <div class="bmi-value">${bmi}</div>
//                             <div class="bmi-normal">(normal is 18.5 to 25)</div>
//                         </div>
//                     `;
//                     bmiInfoDiv.style.display = "flex";
//                 }
//             }
//         }
//     }
// }

// document.getElementById('reloadBtn').onclick = function () {
//     location.reload();
// };




const form = document.getElementById('calcForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // stay on the page, reload by click is off

    // Get the values of all fields
    const age = +document.getElementById('age').value;
    const height = +document.getElementById('height').value;
    const weight = +document.getElementById('weight').value;
    const activity = +document.getElementById('Activity').value;
    const gender = document.getElementById('sex').value;
    const resultDiv = document.getElementById('result');
    const resultInfoDiv = document.getElementById('result-info');
    const bmiInfoDiv = document.getElementById('bmi-info');
    const resultH1 = document.querySelector('.resulth1');

    const reload = document.getElementById('reloadBtn');
    reload.onclick = function () {
        location.reload();
    };


    const activityCoeffs = {
        1: 1.2,
        2: 1.375,
        3: 1.55,
        4: 1.725,
        5: 1.9
    };
    function showResults() {
        form.style.display = 'none';
        reload.style.display = 'block';
        bmiInfoDiv.style.display = "flex";
    }



    let BMR; //BMR calculating by gender
    if (gender === "male") {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // let caloriesMaintain;

    // if (activity === 1) {
    //     caloriesMaintain = BMR * 1.2;
    // } else if (activity === 2) {
    //     caloriesMaintain = BMR * 1.375;
    // } else if (activity === 3) {
    //     caloriesMaintain = BMR * 1.55;
    // } else if (activity === 4) {
    //     caloriesMaintain = BMR * 1.725;
    // } else if (activity === 5) {
    //     caloriesMaintain = BMR * 1.9;
    // } else {
    //     caloriesMaintain = BMR;
    // }

    // activity - is a value from select, i.e. a string. It must be converted to a number!
    let activityLevel = Number(activity);

    // We get the coefficient by activity level 
    let activityCoeff = activityCoeffs[activityLevel];

    let caloriesMaintain = BMR * activityCoeff;


    const baseMetabolism = caloriesMaintain * 0.8;
    const caloriesLose = caloriesMaintain - (caloriesMaintain * 0.15);
    const caloriesGain = caloriesMaintain * 1.15;
    const bmi = Number((weight / ((height / 100) * (height / 100))).toFixed(1));


    resultDiv.innerHTML = `<ul>
                    <li> 
                        <span class="result-label">Your base metabolism:</span>
                        <span class="result-value">${Math.round(baseMetabolism)}</span>
                        <span class="result-unit">kcal</span>
                    </li>
                    <li>
                        <span class="result-label">To maintain weight:</span>
                        <span class="result-value">${Math.round(caloriesMaintain)}</span>
                        <span class="result-unit">kcal</span>
                    </li>
                    <li>
                        <span class="result-label">To lose weight:</span>
                        <span class="result-value">${Math.round(caloriesLose)}</span>
                        <span class="result-unit">kcal</span>
                    </li>
                    <li>
                        <span class="result-label">To gain weight:</span>
                        <span class="result-value">${Math.round(caloriesGain)}</span>
                        <span class="result-unit">kcal</span>
                    </li>
                </ul>`;
    resultDiv.style.display = "block";

    resultH1.innerHTML = "Your calculated kcal";
    resultInfoDiv.innerHTML = `
                    <h2>Your daily calories</h2>
                    <p>Your basal metabolism <span class="result-value">${Math.round(baseMetabolism)}</span><span class="result-unit">kcal</span> (basal metabolic rate). These are the calories that are burned when you are at rest and the energy is spent to support the processes of breathing, blood circulation, maintaining body temperature, etc.</p>
                    <p>Your calorie allowance for weight maintenance <span class="result-value">${Math.round(caloriesMaintain)}</span> <span class="result-unit">kcal</span> with current physical activity (you are not losing or gaining weight)</p>
                `;
    resultInfoDiv.style.display = "block";

    if (bmi > 25) {
        bmiInfoDiv.innerHTML = `
                        <div class="bmi-center">
                            <div class="bmi-label">Your BMI is</div>
                            <div class="bmi-badvalue">${bmi}</div>
                            <div class="bmi-normal">(normal is 18.5 to 25)
                                It is <span class="red-value">recommended</span> that you reduce your weight
                            </div>
                        </div>
                    `;

        showResults()
    } else if (bmi < 18.5) {
        bmiInfoDiv.innerHTML = `
                        <div class="bmi-center">
                            <div class="bmi-label">Your BMI is</div>
                            <div class="bmi-badvalue">${bmi}</div>
                            <div class="bmi-normal">(normal is 18.5 to 25)
                                It is <span class="red-value">recommended</span> to increase the weight
                            </div>
                        </div>
                    `;

        showResults()

    } else {
        bmiInfoDiv.innerHTML = `
                        <div class="bmi-center">
                            <div class="bmi-label">Your BMI is</div>
                            <div class="bmi-value">${bmi}</div>
                            <div class="bmi-normal">(normal is 18.5 to 25)</div>
                        </div>
                    `;

        showResults()


    }
}

);
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Клик вне меню — закрыть (не обязательно, но удобно)
document.addEventListener('click', (e) => {
    if (
        !e.target.closest('#burger') &&
        !e.target.closest('#mobileMenu') &&
        mobileMenu.classList.contains('open')
    ) {
        mobileMenu.classList.remove('open');
    }
});