class Activities {
    constructor(id, name, state, city, description, category, isFavorite, coordinates) {
      this.id = id;
      this.name = name;
      this.state = state;
      this.city = city;
      this.description = description;
      this.category = category;
      this.isFavorite = isFavorite;
      this.coordinates = coordinates;
    }
  
    get locationCoordinate() {
      return {
        latitude: this.coordinates.latitude,
        longitude: this.coordinates.longitude,
      };
    }
  }
  
  class Coordinates {
    constructor(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  
  export { Activities, Coordinates };
  