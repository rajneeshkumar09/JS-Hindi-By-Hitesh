const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    const results = document.getElementById("results");
    // console.log(height, weight);

    if (height == "" || height < 0 || isNaN(height)) {
        // results.appendChild(document.createTextNode(`Please Enter the valid height ${height}`));
        results.innerHTML = `<span> Please Enter the valid height ${height} </span>`;
    } else if (weight == "" || weight < 0 || isNaN(weight)) {
        // results.appendChild(document.createTextNode(`Please enter the weight ${weight}`));
        results.innerHTML = `<span> Please Enter the valid weight ${height} </span>`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        if (bmi < 18.6) {
            // results.appendChild(document.createTextNode(`BMI : ${bmi} ==> Under Weight`));
            results.innerHTML = `<span> BMI : ${bmi} ==> Under Weight </span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            // results.appendChild(document.createTextNode(`BMI : ${bmi} ==> normal Weight`));
            results.innerHTML = `<span> BMI : ${bmi} ==> Normal Weight </span>`;
        } else {
            // results.appendChild(document.createTextNode(`BMI : ${bmi} ==> Over Weight`));
            results.innerHTML = `<span> BMI : ${bmi} ==> Over Weight </span>`;
        }
    }
});