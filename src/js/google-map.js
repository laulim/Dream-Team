function initMap(){
	var zelenograd = {lat: 55.987999, lng: 37.202454};
	var myMap = new google.maps.Map(document.getElementById('map'), {
		center: zelenograd,
		zoom: 13,
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#10ade4"},{"visibility":"on"}]}],
	});
	var markerZelenograd = new google.maps.Marker({
		position: zelenograd,
		map: myMap,
		title: 'Зеленоград',
		icon: 'img/svg-for-sprites/map-marker.png'
	});
	var contentStringZelenograd = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Зеленоград</h1>'+
	      '<div id="bodyContent">'+
	      '<p>Зеленоградский административный округ<br>' +
	      'Зеленоград, Московская облать, Россия</p>'+
	      '</div>'+
	      '</div>';
	var infowindowZelenograd = new google.maps.InfoWindow({
		content: contentStringZelenograd,
		maxWidth: 400
	});
	markerZelenograd.addListener('click', function() {
		infowindowZelenograd.open(myMap, markerZelenograd);
	});
};