//Mean cost algorithm using weighted graph
type Route = {
  city: City;
  cost: number;
};

class City {
  name: string;
  routes: Route[];

  constructor(name: string) {
    this.name = name;
    this.routes = [];
  }

  addRoute(city: City, cost: number) {
    let route: Route = { city, cost };
    this.routes.push(route);
  }
}

const atlanta = new City("Atlanta");
const boston = new City("Boston");
const denver = new City("Denver");
const chicago = new City("Chicago");
const elPaso = new City("ElPaso");

atlanta.addRoute(boston, 100);
atlanta.addRoute(denver, 160);
boston.addRoute(chicago, 120);
boston.addRoute(denver, 180);
chicago.addRoute(elPaso, 80);
denver.addRoute(chicago, 40);

function shortestPathAlgorithm(departure: City, destination: City) {
  let cheapestCostTable: any = {};
  let cheapestStopoverTable: any = {};
  let unvisitedCites: City[] = [];
  let visitedCites: any = {};

  cheapestCostTable[departure.name] = 0;

  let currentCity: City | null = departure;
  while (currentCity !== null) {
    visitedCites[currentCity.name] = true;

    const index = unvisitedCites.indexOf(currentCity);
    if (index > -1) unvisitedCites.splice(index, 1);

    for (let route of currentCity.routes) {
      // boston
      if (!visitedCites[route.city.name]) {
        unvisitedCites.push(route.city);
      }
      let totalCost = cheapestCostTable[currentCity.name] + route.cost;

      if (
        !cheapestCostTable[route.city.name] ||
        cheapestCostTable[route.city.name] > totalCost
      ) {
        cheapestCostTable[route.city.name] = totalCost;
        cheapestStopoverTable[route.city.name] = currentCity.name;
      }
    }

    let currentCost = unvisitedCites[0]
      ? cheapestCostTable[unvisitedCites[0].name]
      : null;
    if (currentCost !== null) {
      for (let city of unvisitedCites) {
        if (currentCost >= cheapestCostTable[city.name]) {
          currentCost = cheapestCostTable[city.name];
          currentCity = city;
        }
      }
    } else {
      currentCity = null;
    }
  }

  let shortestPath: string[] = [];
  let currentCityName = destination.name;

  while (currentCityName !== departure.name) {
    shortestPath.push(currentCityName);
    currentCityName = cheapestStopoverTable[currentCityName];
  }

  shortestPath.push(departure.name);
  return shortestPath.reverse();
}

console.log(shortestPathAlgorithm(atlanta, elPaso));
