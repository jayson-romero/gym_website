
//from RapidIPI
export const exercisesOptions = {
   method: 'GET',
   headers: {
     'X-RapidAPI-Key': 'ea5675cce3mshed9dd2ef422b6aep1f483cjsn23705e990485',
     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
 };

 //feth data function
export const fetchData = async (url, options) => {

   const response = await fetch(url, options);
   const data = await response.json();

   return data;
} 