import axios from 'axios'

const url ="https://covid19.mathdro.id/api"

export const fetchData = async (country) =>{
  let changedURL = url

  if (country){
    changedURL = `${url}/countries/${country}`
  }

  try {
      const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changedURL)
      return {
          confirmed,
          recovered,
          deaths,
          lastUpdate
      }
  } catch (error) {
      
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
}

export const countries = async()=>{
  try {
    const {data: {countries}}= await axios.get(`${url}/countries`)
    return countries.map((country)=>country.name)
  } catch (error) {
    return error    
  }
}