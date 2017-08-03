var header = $('teensoft-header');
var header_element = $('teensoft-header_element');
var visible = new Han.visible({
	elementClass: 'teensoft-img',
	onChangeView : function(isWatching) {
		if(isWatching) {
			header.removeClass("teensoft-header_down");
			header_element.removeClass("teensoft-header_element_down");
		} else{
			header.addClass("teensoft-header_down");
			header_element.addClass("teensoft-header_element_down");
		}
	}
});