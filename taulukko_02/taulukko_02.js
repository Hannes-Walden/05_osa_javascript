/* Harjoitus 1: */
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function myAlphabetLength() {
    let length = myAlphabet.length;
    console.log("Taulukon myAlphabet pituus: 7", length);

    if (length < 5) {
        console.log("Taulukon pituus on alle 5.")
    } else {
        console.log("Taulukon pituus on suurempi tai yhtä suuri kuin 5");
    }
}
myAlphabetLength();


/* Harjoitus 2: */
const planets = ['Merkurius', 'Venus', 'Maa', 'Mars', 'Jupiter'];

planets.forEach((planets, index) => {
    console.log(`Indeksi: ${index}, Planeetta: ${planet}`);
});


/* Harjoitus 3: */
const wowDatatypes = [1, 'text', false, null, undefined];

wowDatatypes.forEach((element, index) => {
    console.log(`Indeksi: ${index}, Arvo: ${element}, Tyyppi: ${typeof element}`);
});


/* Harjoitus 4: */
let myArr = [1, 2, 'one', true];

myArr.forEach(item => {
    console.log(item);
});


/* Harjoitus 5: */
let student1Courses = ['Matematiikka', 'Englanti', 'Ohjelmointi'];
let student2Courses = ['Maantieto', 'Espanja', 'Ohjelmointi'];

let commonCourses = student1Courses.filter(course => student2Courses.includes(course));

console.log('Yhteiset kurssit:', commonCourses);


/* Harjoitus 6: */
let furniture = ['Pöytä', 'Tuolit', 'Matto'];

furniture.forEach(item => {
    for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
    }
});

/* Harjoitus 7: */
function getPositiveTemperatures(temperatures) {
    return temperatures.filter(temp => temp > 0);
}

let temperatures = [-5, 3, -1, 22, -40, 5, 18];
let positiveTemperatures = getPositiveTemperatures(temperatures);

console.log(positiveTemperatures);


/* Harjoitus 8 */
function getOddYears(years) {
    return years.filter(year => year % 2 !== 0);
}

console.log(getOddYears([2019, 2020, 2021]));
console.log(getOddYears([2000, 2015, 2018, 2020]));