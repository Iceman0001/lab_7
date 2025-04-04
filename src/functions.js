function hello(name){
    return(`hello ${name}`);
}

function fahrenheittocelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius; 
}

function squarefeettoacres(sqft){
    const acres = sqft/43560
    return acres;
}

function meterstominutes (width, length,sqmetersperminute){
    const time = (width * length)/ sqmetersperminute
    return time;
}

function airquality(index) {
    if (index >= 0 && index <= 50) {
        return "Good";
    } else if (index >= 51 && index <= 100) {
        return "Moderate";
    } else if (index >= 101 && index <= 150) {
        return "Unhealthy for Sensitive Groups";
    } else if (index >= 151 && index <= 200) {
        return "Unhealthy";
    } else if (index >= 201 && index <= 300) {
        return "Very Unhealthy";
    } else if (index > 300) {
        return "Hazardous";
    } else {
        return "Invalid AQI value";
    }

}

function yee_ha(number) {
    if (number % 3 === 0 && number % 7 === 0) {
        return "Yee Ha";
    } else if (number % 3 === 0) {
        return "Yee";
    } else if (number % 7 === 0) {
        return "Ha";
    } else {
        return "Nada";
    }
}
function calculateslope(x1, y1, x2, y2) {
    const rise = y2 - y1;
    const run = x2 - x1;

    if (run === 0) {
        return "Undefined (vertical line)";
    }

    return rise / run;
}
export {hello, fahrenheittocelsius, squarefeettoacres, meterstominutes,airquality,yee_ha,calculateslope}

