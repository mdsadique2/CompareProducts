(function(){

	var data = {"products":{"featuresList":[{"features":[{"featureName":"Size","values":{"TVSF2WYXTKAR7RAF":"108 cm (43)","TVSF2WYUE4PWNJKM":"80 cm (32)","TVSE8FMZ9AQMEGC6":"102 cm (40)","TVSF3J7HUJF5XUBT":"138.71 cm (55)"}},{"featureName":"Screen Type","values":{"TVSF2WYXTKAR7RAF":"LED","TVSF2WYUE4PWNJKM":"LED","TVSE8FMZ9AQMEGC6":"QLED","TVSF3J7HUJF5XUBT":"LED"}},{"featureName":"HD Technology & Resolution","values":{"TVSF2WYXTKAR7RAF":"Full HD, 1920 x 1080 Pixels","TVSF2WYUE4PWNJKM":"HD Ready, 1366 x 768 Pixels","TVSE8FMZ9AQMEGC6":"Full HD, 1920 x 1080","TVSF3J7HUJF5XUBT":"Ultra HD (4K), 3840 x 2160 Pixels"}},{"featureName":"3D","properties":{"isDifferent":false},"values":{"TVSF2WYXTKAR7RAF":"No","TVSF2WYUE4PWNJKM":"No","TVSE8FMZ9AQMEGC6":"No","TVSF3J7HUJF5XUBT":"No"}}],"title":"Display"},{"features":[{"featureName":"Smart TV","values":{"TVSF2WYXTKAR7RAF":"Yes","TVSF2WYUE4PWNJKM":"Yes","TVSE8FMZ9AQMEGC6":"Yes","TVSF3J7HUJF5XUBT":"Yes"}},{"featureName":"Curve TV","values":{"TVSF2WYXTKAR7RAF":"Yes","TVSF2WYUE4PWNJKM":"No","TVSE8FMZ9AQMEGC6":"No","TVSF3J7HUJF5XUBT":"No"}},{"featureName":"Touchscreen","values":{"TVSF2WYXTKAR7RAF":"Yes","TVSF2WYUE4PWNJKM":"No","TVSE8FMZ9AQMEGC6":"No","TVSF3J7HUJF5XUBT":"No"}},{"featureName":"Motion Sensor","values":{"TVSF2WYXTKAR7RAF":"No","TVSF2WYUE4PWNJKM":"No","TVSE8FMZ9AQMEGC6":"No","TVSF3J7HUJF5XUBT":"No"}},{"featureName":"Launch Year","values":{"TVSF2WYXTKAR7RAF":"2018","TVSF2WYUE4PWNJKM":"2018","TVSE8FMZ9AQMEGC6":"2015","TVSF3J7HUJF5XUBT":"2018"}}],"title":"General Features"},{"features":[{"featureName":"Built In Wi-Fi","properties":{"isDifferent":true},"values":{"TVSF2WYXTKAR7RAF":"Yes","TVSF2WYUE4PWNJKM":"Yes","TVSE8FMZ9AQMEGC6":"Yes","TVSF3J7HUJF5XUBT":"Yes"}},{"featureName":"3G Dongle Plug and Play","properties":{"isDifferent":false},"values":{"TVSF2WYXTKAR7RAF":"No","TVSF2WYUE4PWNJKM":"No","TVSE8FMZ9AQMEGC6":"No","TVSF3J7HUJF5XUBT":"No"}},{"featureName":"Ethernet (RJ45)","properties":{"isDifferent":true},"values":{"TVSF2WYXTKAR7RAF":"1","TVSF2WYUE4PWNJKM":"1","TVSE8FMZ9AQMEGC6":"0","TVSF3J7HUJF5XUBT":"1"}},{"featureName":"Wireless Ready","properties":{"isDifferent":true},"values":{"TVSF2WYXTKAR7RAF":"Yes","TVSF2WYUE4PWNJKM":"Yes","TVSE8FMZ9AQMEGC6":"Yes","TVSF3J7HUJF5XUBT":"Yes"}}],"title":"Internet Features"}],"compareSummary":{"images":{"TVSF2WYXTKAR7RAF":"https://rukminim1.flixcart.com/image/1000/1000/jefzonk0/television/r/a/f/mi-l43m5-ai-original-imaf34hgjzc4xr62.jpeg?q=100","TVSF2WYUE4PWNJKM":"https://rukminim1.flixcart.com/image/1000/1000/jefzonk0/television/j/k/m/mi-l32m5-ai-original-imaf34hfqb2fekxx.jpeg?q=100","TVSE8FMZ9AQMEGC6":"https://rukminim1.flixcart.com/image/1000/1000/jj367bk0/television/g/c/6/vu-40d6575-original-imaf6qqy4vfneabe.jpeg?q=100","TVSF3J7HUJF5XUBT":"https://rukminim1.flixcart.com/image/1000/1000/jgffp8w0/television/u/b/t/iffalcon-55k2a-original-imaf4z2mn6xrxk5f.jpeg?q=100"},"titles":{"TVSF2WYXTKAR7RAF":{"subtitle":null,"title":"Mi LED Smart TV 4A 108 cm (43)"},"TVSF2WYUE4PWNJKM":{"subtitle":null,"title":"Mi LED Smart TV 4A 80 cm (32)"},"TVSE8FMZ9AQMEGC6":{"subtitle":"40D6575","title":"Vu 102cm (40 inch) Full HD LED TV"},"TVSF3J7HUJF5XUBT":{"subtitle":"55K2A","title":"iFFALCON K2A 138.71cm (55 inch) Ultra HD (4K) LED Smart TV"}},"productPricingSummary":{"TVSF2WYXTKAR7RAF":{"finalPrice":"22999.00","price":"25999.00","totalDiscount":11},"TVSF2WYUE4PWNJKM":{"finalPrice":"13999.00","price":"15999.00","totalDiscount":14},"TVSE8FMZ9AQMEGC6":{"finalPrice":"16999.00","price":"11999.00","totalDiscount":11},"TVSF3J7HUJF5XUBT":{"finalPrice":"26999.00","price":"23999.00","totalDiscount":13}}}}}

	var getTotalOptions = function (apiData) {
		var optionList = [];
		var obj = apiData.products.compareSummary.titles;
		for (var k in obj) {
			optionList.push(k)
		}
		return optionList;
	}

	// reference of initial containers where list is rendered
	var mainContainer = document.getElementsByClassName('mainContainer')[0];
	var selectContainer = document.getElementsByClassName('selectContainer')[0];
	var addButton = document.getElementsByClassName('addButton')[0];
	var attributesCol = document.getElementsByClassName('attributesColumn')[0]; 


	var columnRef = [];
	var optionsDisplayed = [];
	var totalOptions = [];
	var refColumn = null;


	function addProduct (evt, select) {
		var val = select.value;
		
		if (optionsDisplayed.length === 0) {
			refColumn = new GroupInfo(data, mainContainer);
			refColumn.generateAttributesColumn();
		}

		if (optionsDisplayed.indexOf(val) > -1) {
			alert('already added; select another');
			return;
		}

		if (optionsDisplayed.length === 3) {
			alert('Only 3 allowed at max, remove and add');
			return;
		}

		var curIndex = optionsDisplayed.length
		columnRef[curIndex] = new GroupInfo(data, mainContainer, val);
		columnRef[curIndex].generateValuesColumn();
		optionsDisplayed.push(val);
	}


	function removeProduct (id) {
		var index = optionsDisplayed.indexOf(id);
		optionsDisplayed.splice(index, 1);
		mainContainer.removeChild(columnRef[index].column);
		columnRef.splice(index, 1);	

		if (optionsDisplayed.length === 0) {
			refColumn.column.innerHTML = '';
		}
	}


	
	function init () {
		var commonFn = new Common();
		totalOptions = getTotalOptions(data);
		
		var select = commonFn.createSingleSelect(totalOptions, totalOptions[0]);
		selectContainer.appendChild(select);

		addButton.addEventListener('click', (event) => {
			addProduct(event, select)
		})

		mainContainer.addEventListener('click', (event) => {
			if (event.target.className.indexOf('removeButton') > -1 ) {
				removeProduct(event.target.parentNode.getAttribute('data-colid'));
			}
		})


	}
	init();
})()


