//create a class for each Destination
class Destination {
  constructor(id, stateId, name, cost, foundedYear, rating, imageUrl) {
    this.id = id;
    this.stateId = stateId;
    this.name = name;
    this.cost = cost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Cost: ${this.cost}, Rating: ${this.rating}`;
  }
}

export default Destination;
