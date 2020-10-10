// Gogle Map Library
function GoogleMap(lat, lng) {
    this.lat = lat;
    this.lng = lat;
}

GoogleMap.prototype.render = function () {
    console.log(`Your location is at ${this.lat} and ${this.lng}`);
}

// Decorator
function GoogleMapDecorator(googleMap) {
    // Calculate distance
    googleMap.calculate = function (point) {
        const distance = '12 km';
        console.log(`Your distance is ${distance}`);
    }

    return googleMap;
}

const googleMap = new GoogleMap(10.24, 78.90); // my location

const mapDecorator = new GoogleMapDecorator(googleMap);

mapDecorator.render();
mapDecorator.calculate([12.34, 90.55]); // target