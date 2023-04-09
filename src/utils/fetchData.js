

//from RapidIPI
export const exercisesOptions = {
   method: 'GET',
   headers: {
     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
     'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY
   },
 };

 //feth data function
export const fetchData = async (url, options) => {

   const response = await fetch(url, options);
   const data = await response.json();

   return data;
} 