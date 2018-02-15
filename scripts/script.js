//empty object
const travelSearch = {}

// const userDuration = $("#duration").val();
// console.log(userDuration);

// const userHappiness = $("#happinessValue").val();
// console.log(userHappiness);

//function to get the location data from the api 
travelSearch.getCountry = () => {
    $.ajax({
        url: "http://inqstatsapi.inqubu.com",
        dataType: "json",
        method: "GET",
        data: {
            api_key: "9524b504493adb49",
            format: "json",
            cmd: "getWorldData",
            data: "happiness_index"
        }
    }).then(function (res) {
        // console.log(res);
        // const lowHappiness = for(item.happiness_index >= 2500 && item.happiness_index <= 4000) {
        //     console.log(item.countryName, item.happiness_index);
        // }
        res.forEach(function(item){
            const happinessIndex = [item.countryName, item.happiness_index];
            console.log(happinessIndex);

            // if (userHappiness === lowHappiness){
            //     console.log(userHappiness);
            // }
            const lowHappiness = [item.happiness_index >= 2900 && item.happiness_index <= 4000];
            // console.log(lowHappiness[item][countryName]);
            // const midHappiness = [item.happiness_index >= 4001 && item.happiness_index <= 5500];
            // const highHappiness = [item.happiness_index >=5501 && item.happiness_index <=7600];
            
            // if (item.happiness_index >= 4500 && item.happiness_index <= 5000) {
            //     console.log(item.countryName,item.happiness_index);
            // };
        });
        const countries = res;
        travelSearch.filterCountry(countries);
    });
}


   


travelSearch.filterCountry = (countries) => {

    $("form").on("change", function(){
        event.preventDefault();

        const userSelection = []

        $('input[name=ingredient]').on('change', function () {

        const userHappiness = $("input[name=happinessValue]").val();

        console.log(userHappiness); 

        // const lowHappy = countries.filter(function(country){
        //     return country === lowHappiness
            // if (country.happiness_index >= 4500 && country.happiness_index <= 5000)
        });

        // if (userHappiness === lowHappiness){
        //     console.log()
        // }
        travelSearch.getCountry();
        // console.log (travelSearch.getCountry)
    });
};

//creates function to launch our app on page load
travelSearch.init = () => {
    // travelSearch.getCountry();
    // travelSearch.filterCountry();
}

//document ready
$(function () {
    travelSearch.init();
});