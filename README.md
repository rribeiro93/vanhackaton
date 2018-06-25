# Vanhack Fair Project App - Restaurants near you

## Installation - Server
```
git clone https://github.com/rribeiro93/vanhackaton-server.git
cd vanhackaton-server
npm install
node server.js
```
After downloaded, you need the google maps key, you can get here: [Google Maps API](https://cloud.google.com/maps-platform/).
After that, insert the key in line 2 of the file api/index.js and restart the server.

## Installation - Client
```
git clone https://github.com/rribeiro93/vanhackaton.git
cd vanhackaton
npm install
ng serve
```

Open the url in your browser, enable the location, see your address and a list of restaurants near you within a radius of 1000m.
