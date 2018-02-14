"use strict";

var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "projection": "miller",

  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e"
  },

  "areasSettings": {
    "unlistedAreasColor": "#15A892"
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Leticia",
      "latitude": -4.2099,
      "longitude": -69.940
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "San Andrés",
      "latitude": 12.5469,
      "longitude": -81.7117
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Santa Marta",
      "latitude": 11.2476,
      "longitude": -74.1748
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Barranquilla",
      "latitude": 10.9527,
      "longitude": -74.9467
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Medellín",
      "latitude": 6.2441,
      "longitude": -75.5850
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Neiva",
      "latitude": 2.9312,
      "longitude": -75.2847
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Nueva York",
      "latitude": 40.6857,
      "longitude": -73.9066
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Miami",
      "latitude": 25.7941,
      "longitude": -80.2157
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Chicago",
      "latitude": 41.8426,
      "longitude":  -87.7100
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Indiana",
      "latitude": 41.0252,
      "longitude": -86.531
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Winscounsin",
      "latitude": 45.3557,
      "longitude": -90.5224
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "La Guajira",
      "latitude": 12.2107,
      "longitude": -71.2857
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Orlando",
      "latitude": 28.5231,
      "longitude": -81.3739
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Villavicencio",
      "latitude": 4.1466,
      "longitude": -73.6368
    }]
  }
} );

// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // get map object
  var map = event.chart;

  // go through all of the images
  for ( var x in map.dataProvider.images ) {
    // get MapImage object
    var image = map.dataProvider.images[ x ];

    // check if it has corresponding HTML element
    if ( "undefined" == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );

    // reposition the element accoridng to coordinates
    var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
    image.externalElement.style.top = xy.y + "px";
    image.externalElement.style.left = xy.x + "px";
  }
}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( "div" );
  holder.className = "map-marker";
  holder.title = image.title;
  holder.style.position = "absolute";

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += " map-clickable";
  }

  // create dot
  var dot = document.createElement( "div" );
  dot.className = "dot";
  holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( "div" );
  pulse.className = "pulse";
  holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}
