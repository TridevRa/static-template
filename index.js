require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/widgets/Home",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Expand",
  "esri/layers/MapImageLayer",
  "esri/widgets/Legend"
], function(
  Map,
  MapView,
  Search,
  Home,
  BasemapGallery,
  Expand,
  MapImageLayer,
  Legend
) {
  var map = new Map({
    basemap: "topo-vector"
  });

  var layer = new MapImageLayer({
    url:
      "https://utility.arcgis.com/usrsvcs/appservices/dRjl1AOShnnGUKsK/rest/services/World/Traffic/MapServer"
  });

  map.add(layer);

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.71511, 34.09042],
    zoom: 9
  });

  var searchWidget = new Search({
    view: view
  });

  var exSearch = new Expand({
    view: view,
    content: searchWidget
  });

  var homeWidget = new Home({
    view: view
  });

  var gallery = new BasemapGallery({
    view: view
  });

  var exGallery = new Expand({
    view: view,
    content: gallery
  });

  var legend = new Legend({
    view: view
  });

  view.ui.add(exSearch, {
    position: "top-left",
    index: 2
  });
  view.ui.add(homeWidget, {
    position: "top-right"
  });
  view.ui.add(exGallery, {
    position: "top-right",
    index: 2
  });
  view.ui.add(legend, {
    position: "bottom-right"
  });
});
