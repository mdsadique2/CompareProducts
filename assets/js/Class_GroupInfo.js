
var _lib = new Common();
var attributesCol = document.getElementsByClassName('attributesColumn')[0]; 

class GroupInfo {
	constructor (data, mainContainer, id) {
		this.data = data;
		this.subTitleBlock = '';
		this.mainContainer = mainContainer;
		this.id = id;
	}

	removeThis () {
		return this.id;
	}

	createValuesOfFeatureBlock (features, id) {
		var values = _lib.createElement('div', 'values');
		var className = 'featureKey';
		
		features.forEach( feature => {
			if (feature.properties !== undefined && feature.properties.isDifferent === true) {
				if (className.indexOf('isDifferentTrue') < 0) {
					className = className + ' isDifferentTrue';
				}
			} else {
				className = 'featureKey';
			}
			var elm = _lib.createElement('div', className);
			elm.innerText = feature.featureName;
			if (id) {
				elm.innerText = feature.values[id];
			}
			values.appendChild(elm);
		})
		return values;
	}


	createAttributesKeyTitleBlock () {
		var block = _lib.createElement('div', 'titleBlock');
		var title = _lib.createElement('div', 'title', 'Compare');
		this.subTitleBlock = _lib.createElement('div', 'subTitle', '2 selected');
		block.appendChild(title);
		block.appendChild(this.subTitleBlock);
		return block;
	}


	//create a group row of features
	createFeatureBlock (parentBlock, elm, id) {
		var featureBlock = _lib.createElement('div', 'featureBlock');
		var title = '';
		var values = '';

		if (!id) {
			title = _lib.createElement('div', 'title', elm.title);
			values = this.createValuesOfFeatureBlock(elm.features);

		} else {
			title = _lib.createElement('div', 'title');
			values = this.createValuesOfFeatureBlock(elm.features, id)
		}

		featureBlock.appendChild(title);
		featureBlock.appendChild(values);
		parentBlock.appendChild(featureBlock);
	}



	//creates a column of feature, and for each feature a feature block
	generateAttributesColumn () {
		var featuresList = this.data.products.featuresList
		var titleBlock = this.createAttributesKeyTitleBlock();
		attributesCol.appendChild(titleBlock);
		featuresList.forEach(elm => {
			this.createFeatureBlock(attributesCol, elm);
		})
		this.column = attributesCol;

	}


	addImageTitlePrice (container) {
		var compareSummary = this.data.products.compareSummary;
		var img = _lib.createElement('img', 'prodImage');
		img.setAttribute('src', compareSummary.images[this.id]);
		var pricing = compareSummary.productPricingSummary[this.id];

		var price = _lib.createElement('div', 'price');
		var finalPrice = _lib.createElement('div', 'finalPrice', 'Rs ' + pricing.finalPrice);
		var actualPrice = _lib.createElement('div', 'actualPrice', 'Rs ' + pricing.price);
		var discount = _lib.createElement('div', 'discount', pricing.totalDiscount+' % Off');

		price.appendChild(actualPrice);
		price.appendChild(discount);
		price.appendChild(finalPrice);


		container.appendChild(img);
		container.appendChild(price);

	}


	generateValuesColumn () {

		var column = _lib.createElement('div', 'column');

		var titleBlock = _lib.createElement('div', 'titleBlock');
		this.addImageTitlePrice(titleBlock);

		
		column.setAttribute('data-colId', this.id);
		column.appendChild(titleBlock);

		var featuresList = this.data.products.featuresList
		featuresList.forEach(elm => {
			this.createFeatureBlock(column, elm, this.id);
		});

		this.removeButton = _lib.createElement('button', 'removeButton', 'Remove');
		column.appendChild(this.removeButton);

		this.mainContainer.appendChild(column);
		this.column = column;
	}




}