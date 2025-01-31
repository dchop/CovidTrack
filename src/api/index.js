import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableUrl = url;
    
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);

        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate
        // }

        // console.log(response)
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData = data.map((fetchDailyData) => ({
            confirmed: fetchDailyData.confirmed.total,
            deaths: fetchDailyData.deaths.total,
            date: fetchDailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}