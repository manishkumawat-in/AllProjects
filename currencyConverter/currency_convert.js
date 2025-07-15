const url = 'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9630aad361mshc942c9b0da89381p18ba5bjsn9410b407a513',
        'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
    }
};

const fromcurr = document.querySelector("#selection1");
const tocurr = document.querySelector("#selection2");
const dropdowns = document.querySelectorAll(".country select");

const msg = document.querySelector("#rate");
const btn = document.querySelector("button");


const flagchange = (element)=> {
    // console.log(element.value);
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;

    let flage = element.parentElement.querySelector("img");
    flage.src= newsrc;
}

for(let select of dropdowns) {
    for(let name in countryList) {
        let option = document.createElement("option");
        option.innerText = name;
        option.value = name;
        select.append(option);
        
        if(name == "INR" && select.name == "from") {
            option.selected = "selected";
        } else if(name == "USD" && select.name == "to") {
            option.selected = "selected";
        }
    }
    
    select.addEventListener("change", (evt)=> {
        flagchange(evt.target);    
    });
}

btn.addEventListener("click", async ()=> {

    const inp = document.querySelector("input");
        let amount = inp.value;
        const newurl = `${url}${fromcurr.value}&to=${tocurr.value}&amount=${amount}`;

    try {
        
        const response = await fetch(newurl, options);
        const result = await response.json();

        let exrate = result.result["convertedAmount"];
        msg.innerText = `EXCHANGE RATE = ${exrate} ${tocurr.value}`;
    } catch (error) {
        console.error(error);
    }
});

