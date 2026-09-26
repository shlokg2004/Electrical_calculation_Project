function calculate() {

    let voltage =
        parseFloat(document.getElementById("voltage").value);

    let current =
        parseFloat(document.getElementById("current").value);

    let resistance =
        parseFloat(document.getElementById("resistance").value);


    // Check values

    if (isNaN(voltage) &&
        isNaN(current) &&
        isNaN(resistance)) {

        alert("Please enter at least two values.");

        return;
    }


    // Calculate missing value

    if (isNaN(voltage)) {

        if (!isNaN(current) &&
            !isNaN(resistance)) {

            voltage = current * resistance;

        } else {

            alert("Enter Current and Resistance.");

            return;
        }
    }


    if (isNaN(current)) {

        if (!isNaN(voltage) &&
            !isNaN(resistance)) {

            current = voltage / resistance;

        } else {

            alert("Enter Voltage and Resistance.");

            return;
        }
    }


    if (isNaN(resistance)) {

        if (!isNaN(voltage) &&
            !isNaN(current)) {

            resistance = voltage / current;

        } else {

            alert("Enter Voltage and Current.");

            return;
        }
    }


    // Calculate Power

    let power = voltage * current;


    // Display results

    document.getElementById("power").innerText =
        power.toFixed(2) + " W";

    document.getElementById("resultVoltage").innerText =
        voltage.toFixed(2) + " V";

    document.getElementById("resultCurrent").innerText =
        current.toFixed(2) + " A";

    document.getElementById("resultResistance").innerText =
        resistance.toFixed(2) + " Ω";

}


function resetCalculator() {

    document.getElementById("voltage").value = "";

    document.getElementById("current").value = "";

    document.getElementById("resistance").value = "";


    document.getElementById("power").innerText =
        "-- W";

    document.getElementById("resultVoltage").innerText =
        "-- V";

    document.getElementById("resultCurrent").innerText =
        "-- A";

    document.getElementById("resultResistance").innerText =
        "-- Ω";

}