//create a class that has each item that will be in a news listing.
/*1= id
  2= Type 
  3= Headline
  4= Date
  5= Author
  6= Description
  7= Image url*/
class NewsListing {
  constructor(
    id,
    type,
    headline,
    date,
    author,
    agency,
    description,
    imageUrl,
    
  ) {
    this.id = id;
    this.type = type;
    this.headline = headline;
    this.date = date;
    this.author= author;
    this.agency= agency;
    this.description = description;
    this.imageUrl = imageUrl;
   
  }

  toString() {
    return `Type: ${this.type} Headline: ${this.headline} Date: ${this.date}, Author:${this.author} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
  }
}
//export to use on other pages
export default NewsListing;
