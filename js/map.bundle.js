ymaps.ready((function(){var e=new ymaps.Map("map-1",{center:[25.093081,55.179838],zoom:14},{searchControlProvider:"yandex#search"});let o=new ymaps.Placemark([25.093081,55.179838],{iconContent:"Find out the address",hintContent:"Drag the label and click to find out the address"},{balloonPanelMaxMapArea:0,draggable:"true",preset:"islands#blueStretchyIcon",openEmptyBalloon:!0});o.events.add("balloonopen",(function(e){o.properties.set("balloonContent","Loading data..."),setTimeout((function(){ymaps.geocode(o.geometry.getCoordinates(),{results:1}).then((function(e){var t=e.geoObjects.get(0)?e.geoObjects.get(0).properties.get("name"):"The address could not be determined.";o.properties.set("balloonContent",t)}))}),1500)})),e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.geoObjects.add(o)}));