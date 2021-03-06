javascript: (function(){ 

	var states = { 
     1 : "Alabama",
     2 : "Alaska",
     3 : "American Samoa",
     4 : "Arizona",
     5 : "Arkansas",
     6 : "Armed Forces Africa",
     7 : "Armed Forces Americas",
     8 : "Armed Forces Canada",
     9 : "Armed Forces Europe",
     10 : "Armed Forces Middle East",
     11 : "Armed Forces Pacific",
     12 : "California",
     13 : "Colorado",
     14 : "Connecticut",
     15 : "Delaware",
     16 : "District of Columbia",
     17 : "Federated States Of Micronesia",
     18 : "Florida",
     19 : "Georgia",
     20 : "Guam",
     21 : "Hawaii",
     22 : "Idaho",
     23 : "Illinois",
     24 : "Indiana",
     25 : "Iowa",
     26 : "Kansas",
     27 : "Kentucky",
     28 : "Louisiana",
     29 : "Maine",
     30 : "Marshall Islands",
     31 : "Maryland",
     32 : "Massachusetts",
     33 : "Michigan",
     34 : "Minnesota",
     35 : "Mississippi",
     36 : "Missouri",
     37 : "Montana",
     38 : "Nebraska",
     39 : "Nevada",
     40 : "New Hampshire",
     41 : "New Jersey",
     42 : "New Mexico",
     43 : "New York",
     44 : "North Carolina",
     45 : "North Dakota",
     46 : "Northern Mariana Islands",
     47 : "Ohio",
     48 : "Oklahoma",
     49 : "Oregon",
     50 : "Palau",
     51 : "Pennsylvania",
     52 : "Puerto Rico",
     53 : "Rhode Island",
     54 : "South Carolina",
     55 : "South Dakota",
     56 : "Tennessee",
     57 : "Texas",
     58 : "Utah",
     59 : "Vermont",
     60 : "Virgin Islands",
     61 : "Virginia",
     62 : "Washington",
     63 : "West Virginia",
     64 : "Wisconsin",
     65 : "Wyoming"
 };
	function getNumber(stateName) {
	    for(var key in states) {
	        if(states.hasOwnProperty(key)) {
	              if(states[key] == stateName) return key;
	        }
	    }
	    return "Not found";
	}


	var billingZipcode = document.getElementById('order-billing_address_postcode').value;

	var client = new XMLHttpRequest();
	client.open("GET", "http://zip.elevenbasetwo.com/v2/US/" + billingZipcode, true);
	client.onreadystatechange = function() {
		if(client.readyState == 4) {
			var billingOutput = client.responseText;
			eval('var billingObj='+billingOutput);
			document.getElementById('order-billing_address_city').value = billingObj.city;
			document.getElementById('order-billing_address_region_id').value = getNumber(billingObj.state);

		};
	};
  client.send();
 })();
