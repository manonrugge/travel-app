//empty object
const travelSearch = {}

// const userDuration = $("#duration").val();
// console.log(userDuration);

// const userHappiness = $("#happinessValue").val();
// console.log(userHappiness);

//first get user value and then make the ajax request
travelSearch.filterCountry = () => {
    $("form").on("change", function () {
        userHappiness = $("input[name=happinessValue]").val();
        console.log(userHappiness);

        userForest = $("input[name=forestValue]").val();
        console.log(userForest);

        userSize = $("input[name=sizeValue]").val();
        console.log(userSize);

        userBigmac = $("input[name=bigmacValue]").val();
        console.log(userBigmac);

        travelSearch.getCountry(userHappiness);
    })
}

//function to get the location data from the api 
travelSearch.getCountry = (userHappiness) => {
    $.ajax({
        url: "http://inqstatsapi.inqubu.com",
        dataType: "json",
        method: "GET",
        data: {
            api_key: "9524b504493adb49",
            format: "json",
            cmd: "getWorldData",
            data: "happiness_index,forest_area_percent,density,size,bigmac_index"
        }
    }).then(function (res) {
        console.log(res);

        //simplify my array
        const mappedCountries = res.map(function(index){
            return {
                countryName: index.countryName,
                happiness_index: index.happiness_index,
                forest_area_percent: index.forest_area_percent,
                density: index.density,
                size: index.size,
                bigmac_index: index.bigmac_index
            }
        });
        console.log(mappedCountries);

        const filterdCountries = mappedCountries.filter(function(item){
            return item.bigmac_index < (userBigmac + 1) && item.bigmac_index > (userBigmac - 1);
        //     return item.size < (userSize + 100000) && item.size > (userSize - 100000); 
        // }).filter(function (item) {
        //     return item.forest_area_percent < (userForest + 15) && item.forest_area_percent > (userForest - 15);
        // }).filter(function(item) {
        //     return item.happiness_index < (userHappiness + 500) && item.happiness_index > (userHappiness - 500);
        // }).filter(function (item) {
            // return item.bigmac_index < (userBigmac + 1) && item.bigmac_index > (userBigmac - 1);
        });
        
        console.log(filterdCountries);

        // const filterForest = mappedCountries.filter(function (item) {
        //     return item.forest_area_percent < (userForest + 5) && item.forest_area_percent > (userForest - 5);
        // });
        // console.log(filterForest);
        

        // res.forEach(function(item){
        //     const happinessIndex = [item.countryName, item.happiness_index];
            // console.log(happinessIndex);

            // if (userHappiness === lowHappiness){
            //     console.log(userHappiness);
            // }
           
            // console.log(lowHappiness[item][countryName]);
            // const midHappiness = [item.happiness_index >= 4001 && item.happiness_index <= 5500];
            // const highHappiness = [item.happiness_index >=5501 && item.happiness_index <=7600];
            
            // if (item.happiness_index >= 4500 && item.happiness_index <= 5000) {
            //     console.log(item.countryName,item.happiness_index);
            // };
        // });
        // const countries = res;

        // const lowHappiness = (countries.happiness_index >= 2900 && countries.happiness_index <= 4000);
        // console.log(lowHappiness);

        const lowHappy = countries.filter(function (country) {
            return country === lowHappiness
        });
    });
}



//creates function to launch our app on page load
travelSearch.init = () => {
    travelSearch.filterCountry();
}

//document ready
$(function () {
    travelSearch.init();
});