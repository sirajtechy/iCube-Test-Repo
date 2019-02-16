var divisionjson = [
	{
		"division": "Mens"
	},
	{
		"division": "Ladies"
	},
	{
		"division": "Kids"
	},
	{
		"division": "Boys"
	},
	{
		"division": "Girls"
	},
];
var sectionJson = [
	{
		"division": "Mens",
		"sections": ["Pants","Trousers","Full sleave","Half sleave","Inners","coolers","T shirts"]
	},
	{
		"division": "Ladies",
		"sections": ["Tops","Bottoms","Leg gings","Chudithar","Gagra","Patyala","Sarees"]
	},
	{
		"division": "Kids",
		"sections": ["Pants","Trousers","Coat suits","Shervani","Inners","coolers","T shirts"]
	},
	{
		"division": "Boys",
		"sections": ["Pants","Trousers","Casuals","Fprmals","Inners","coolers","Printed T shirts"]
	},
	{
		"division": "Girls",
		"sections": ["Sarees","Chudithar","Leg gings","Makeup set"]
	}
]

var divisionHTML = divisionjson.map( elem => `<option value="${elem.division}">${elem.division}</option>`);
$('#division-select').append(divisionHTML);

$('#division-select').on('change' , function(){
	var selectedDivision = sectionJson.find(elem => elem.division === $(this).val());
	var sectionHTML = selectedDivision.sections.map( elem => `<option value="${elem}">${elem}</option>` )
	$('#section-select').html("<option value=''></option>"+sectionHTML);
});

// $('#uom-select').multiselect();