const getPlanets = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsResults = await result.json();
  return planetsResults.results;
};

export default getPlanets;
