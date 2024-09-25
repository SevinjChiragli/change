document.getElementById("carList").addEventListener("change", (ev) => {
  console.log(ev.target.value);
});
const carsArr = [
  { brand: "Ford", model: "Mustang", year: 2022 },
  { brand: "Ford", model: "F-150", year: 2023 },
  { brand: "BMW", model: "X5", year: 2022 },
  { brand: "BMW", model: "3 Series", year: 2023 },
  { brand: "Mazda", model: "CX-5", year: 2022 },
  { brand: "Mazda", model: "Mazda3", year: 2023 },
  { brand: "Toyota", model: "Camry", year: 2022 },
  { brand: "Toyota", model: "RAV4", year: 2023 },
];

//   let cars = document.getElementById('cars')

// document.getElementById('carList').addEventListener('change', (ev) => {
//     console.log(ev.target.value)
//     let filteredCars = carsArr.filter((item) => item.brand === ev.target.value)
//     cars.innerHTML = ''
//     filteredCars.forEach((item) => {
//         let li = document.createElement('li')
//         li.innerText = `${item.brand} - ${item.model} - ${item.year}`
//         cars.appendChild(li)
//     })
// })

let cars = document.getElementById("cars");
let year;
let brand;

const showCars = () => {
  let filteredCars = carsArr.filter(
    (item) => item.brand === brand && item.year == year
  );
  cars.innerHTML = "";
  filteredCars.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = `${item.brand} - ${item.model} - ${item.year}`;
    cars.appendChild(li);
  });
};
document.getElementById("carList").addEventListener("change", (ev) => {
  brand = ev.target.value;
  showCars();
});
document.getElementById("year").addEventListener("change", (ev) => {
  year = ev.target.value;
  showCars();
});

let select=document.querySelectorAll('select')
select.forEach((item)=>{
    item.addEventListener('click',(ev)=>{
        select.forEach((item)=>{
            item.style=`background-color: white`
        })
       ev.target.style=`background-color: red`
        })

    })