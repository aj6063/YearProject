$(".alert").hide();
google.load("visualization", "1", {packages:["corechart"]});

var questionArray = [
	"What is the formula for the compound Chromium (III) oxide?",
	"What is the compound for N<sub>2</sub>H<sub>4</sub>?",
	"What is the molecular geometry for AX<sub>3</sub>?",
	"What is the bond angle for a Tetrahedral?",
	"How do you find the central atom if there are two singular atoms?",
	"What is ice?",
	"What is table sugar?",
	"What type of change occurs when melting an ice cube?",
	"What type of change occurs when burning wood?",
	"What type of change occurs when sugar dissolves in water?",
	"What is the symbol for Sulfur?",
	"What is the symbol for Iron?",
	"Is flammability a physical property of matter?",
	"Is malleability a physical property of matter?",
	"What is the scientific notation of 0.0058?",
	"What is the principal for adding significant digits?",
	"What is the principal for multiplying significant digits?",
	"What is the principal for dividing significant digits?",
	"What is the principal for subtracting signifant digits?",
	"What is the atlantic rule?",
	"What is the pacific rule?",
	"How do you calculate density of an object?",
	"How do you calculate volume of an object?",
	"What is 572.5 in scientific notation?",
	"[Using the periodic table] how many protons does the element S have?",
	"[Using the periodic table] what is the mass of the element Si?",
	"Which categories have the same value concerning an element?",
	"[Using the periodic table] what is the atomic number of Bromine?",
	"How is the atomic number of an element determined?",
	"When an atom is neutral, which two parts of an atom are equal to eachother?",
	"How is the atomic mass of an element determined?",
	"Why do some isotopes of the same element have different masses?",
	"Which is a characteristic of a metal?",
	"Which is a characteristic of a non-metal?",
	"How is an ion formed?",
	"How many valence electrons do elements in group one have?",
	"How many valence electrons do elements in the halogen family contain?",
	"What is the difference in electronegativity of a nonpolar covalent bond?",
	"What is the difference in electronegativity of a polar covalent bond?",
	"What is the difference in electronegativity of an ionic bond?",
	"Write the formula for a Magnesium ion?",
	"What is the symbol for phosphate ions?",
	"What is the name of ZnO (binary ionic compound)?",
	"Write the balanced formula for sodium bromide (binary ionic compound)?",
	"Write the balanced formula for calcium acetate (polyatomic ions)?",
	"Name the compound for (NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub>?",
	"Write the formula for trisulfur tetranitride (molecular compounds)?",
	"Name the acid HCL(aq)?",
	"Name the molecular compound NO<sub>2</sub>?"
];
var answerArray = [
	["Cr<sub>2</sub>O<sub>3</sub>", "Cr<sub>3</sub>O<sub>2</sub>", "O<sub>3</sub>Cr<sub>2</sub>", "O<sub>2</sub>Cr<sub>3</sub>"],
	["Tetranitrogen Dihydride", "Dinitrogen Tetrahydrogen", "Dinitrogen Tetrahydride", "Dihydrogen Tetranitride"],
	["Bent / Angular", "Trigonal Planar", "Tetrahedral", "Linear"],
	["109 degrees", "110 degrees", "110.5 degrees", "109.5 degrees"],
	["Higher oxidation number", "Lower oxidation number", "Higher electronegativity number", "Lower electronegativity number"],
	["Element", "Compound", "Mixture", "Atom"],
	["Element", "Compound", "Mixture", "Atom"],
	["Physical", "Chemical", "Emotional", "Ionic"],
	["Physical", "Chemical", "Emotional", "Ionic"],
	["Physical", "Chemical", "Emotional", "Ionic"],
	["Sl", "Su", "So", "S"],
	["Ir", "Fe", "I", "In"],
	["Yes", "No", "Maybe", "Sometimes"],
	["Yes", "No", "Maybe", "Sometimes"],
	["5.8 * 10<sup>-3</sup>", "58 * 10 <sup>-4</sup>", "5.8<sup>-3</sup>", "58<sup>-4</sup>"],
	["Round each number to the smallest amount of significant digits of any of the numbers that you are adding", "Round each number to the the largest number of significant digits of any of the numbers that you are adding", "Add all of the numbers together and then round that number", "Subtract all of the significant digits together and then round that number"],
	["Round the answer to the smallest amount of significant digits of any of the products", "Round the answer to the largest amount of signifant digits of any of the products", "Multiply all of the numbers together and round that number", "Divide all of the numbers and round that number"],
	["Round each number to the smallest amount of significant digits of any of the quotients", "Round the answer to the the largest number of significant digits of any of the quotients", "Round the answer to the smallest amount of significant digits of any of the quotients", "Multiply all of the significant digits together and round that number"],
	["Round the answer to the smallest amount of significant digits of any of the quotients", "Round each number to the smallest amount of signifant digits of any of the numbers that you are adding", "Round each number to the smallest amount of significant digits of any of the numbers that you are subtracting", "Subtract all of the significant digits together and round to that number"],
	["Absent decimal point; start counting at the right side with the first nonzero digit", "Present decimal point; start counting at the right side with the first nonzero digit", "Absent decimal point; start counting on the left side with the first nonzero digit", "Present decimal point; start counting on the left side with the first nonzero digit"],
	["Absent decimal point; start counting at the right side with the first nonzero digit", "Present decimal point; start counting at the right side with the first nonzero digit", "Absent decimal point; start counting on the left side with the first nonzero digit", "Present decimal point; start counting on the left side with the first nonzero digit"],
	["Volume / Mass", "Mass / Volume", "Volume * Mass", "Volume + Mass"],
	["Mass / Density", "Density / Mass", "Density * Mass", "Density + Mass"],
	["5.725 * 10<sup>2</sup>", "57.25 * 10<sup>3</sup>", "572.5 * 10<sup>-2</sup>", "57.25 * 10<sup>-3</sup>"],
	["16", "32", "0", "8"],
	["14", "28", "42", "56"],
	["# of protons, electrons and neutrons", "# of protons and neutrons", "Mass # and Atomic #", "# of protons, electrons and neutrons, and atomic #"],
	["40", "35", "120", "55"],
	["# of protons", "# of electrons", "# of neutrons", "Atomic Mass #"],
	["Protons and neutrons", "Protons and electrons", "Neutrons and electrons", "Mass # and atomic #"],
	["Total number of protons and neutrons", "Protons - neutrons", "Protons * neutrons", "Protons/neutrons"],
	["Different number of neutrons", "Different number of protons", "Different number of electrons", "Different atomic #"],
	["No luster, brittle solids", "Poor electron conductivity", "Malleable", "Flammable"],
	["High electronegativity", "Low electronegativity", "Conductive", "Lose electrons"],
	["Only if an atom loses an electron", "Only if an atom gains an electron", "If an atom gains or loses an electron", "If an atom doesn't change"],
	["1", "2", "3", "4"],
	["1", "8", "0", "7"],
	["Greater than .8", "Less than .8", ".8", "Greater than 1.8"],
	["Greater than or equal to .8", "Less than or equal to .8", "Greater than or equal to 1.8", "Greater than or equal to .8 and less than 1.8"],
	["Greater than or equal to .8", "Less than or equal to .8", "Greater than or equal to 1.8", "Greater than or equal to .8 and less than 1.8"],
	["Mg<sup>2-</sup>", "Mg<sup>1+</sup>", "Mg<sup>2+</sup>", "Mg<sup>3-</sup>"],
	["P<sup>3-</sup>", "P<sup>3</sup>", "PO<sub>4</sub><sup>3-</sup>", "PO"],
	["Zinc", "Zinc oxade", "Oxide", "Zinc oxide"],
	["NaBr<sup>2+</sup>", "SBr", "NaBr", "NABR"],
	["Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>", "Ca", "CaC", "CaCHO"],
	["Ammonium phosphite", "Ammonium phosphate", "Ammonium", "Nickel phosphate"],
	["S<sub>3</sub>", "N<sub>4</sub>", "S<sub>3</sub>N<sub>4</sub>", "S<sub>4</sub>N<sub>3</sub>"],
	["Hydrochloric acid", "Hydrochlorine acid", "Hydronic acid", "Hydrosapan acid"],
	["Nitrogen oxide", "Nitrogen dioxide", "Nitrogen oxade", "Oxide dinitrogen"],
];
var correctAnswers = [
	"Cr<sub>2</sub>O<sub>3</sub>",
	"Dinitrogen Tetrahydride", 
	"Trigonal Planar", 
	"109.5 degrees", 
	"Lower electronegativity number",
	"Compound",
	"Compound",
	"Physical",
	"Chemical",
	"Physical",
	"S",
	"Fe",
	"No",
	"Yes",
	"5.8 * 10<sup>-3</sup>",
	"Round each number to the smallest amount of significant digits of any of the numbers that you are adding",
	"Round the answer to the smallest amount of significant digits of any of the products",
	"Round the answer to the smallest amount of significant digits of any of the quotients",
	"Round each number to the smallest amount of significant digits of any of the numbers that you are subtracting",
	"Absent decimal point; start counting at the right side with the first nonzero digit",
	"Present decimal point; start counting on the left side with the first nonzero digit",
	"Mass / Volume",
	"Mass / Density",
	"5.725 * 10<sup>2</sup>",
	"16",
	"28",
	"# of protons, electrons and neutrons, and atomic #",
	"35",
	"# of protons",
	"Protons and electrons",
	"Total number of protons and neutrons",
	"Different number of neutrons",
	"Malleable",
	"High electronegativity",
	"If an atom gains or loses an electron",
	"1",
	"7",
	"Less than .8",
	"Greater than or equal to .8 and less than 1.8",
	"Greater than or equal to 1.8",
	"Mg<sup>2+</sup>",
	"PO<sub>4</sub><sup>3-</sup>",
	"Zinc oxide",
	"NaBr",
	"Ca(C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>)<sub>2</sub>",
	"Ammonium phosphate",
	"S<sub>3</sub>N<sub>4</sub>",
	"Hydrochloric acid",
	"Nitrogen dioxide",
]
var wrong =[];
var selectedAnswers= [];
var questionCounter = 0;
var correctCounter = 0;

$( document ).ready(function() {
displayQuestion();
displayAnswers();
displayQuestionNumber();
$("#scoreReport").hide();


});

var displayQuestion = function() {
	if (questionCounter<1){
		$("#pq").hide();
	} else if(questionCounter===48) {
		$("#nq").hide();
		$("#sq").show();
	} else {
		$("#pq").show();
	}
	document.getElementById("questionText").innerHTML = questionArray[questionCounter];
}

var displayAnswers = function() {
	$("input").removeAttr("checked");
	var answers = answerArray[questionCounter];
	for (var i = 0; i < answers.length; i++) {
		var answerText = answers[i];
		var choiceName = "choice" + (i+1);
		document.getElementById(choiceName).innerHTML = answerText;
	
	}

}

var displayQuestionNumber = function() {
	document.getElementById("questionIndicator").innerHTML = "Question" + " " + (questionCounter +1) + " / 49";
}
var prevQ = function(){
	questionCounter=questionCounter-1;
	document.getElementById("questionIndicator").innerHTML = "Question" + " " + (questionCounter+1) + " / 49";
	document.getElementById("questionText").innerHTML = questionArray[questionCounter];
	var answers = answerArray[questionCounter];
for (var i = 0; i < answers.length; i++) {
		var answerText = answers[i];
		var choiceName = "choice" + (i+1);
		document.getElementById(choiceName).innerHTML = answerText;
	}
}
var correctCounter=0;
var buttonClicked = function() {
	$(".alert").hide();
	var radioButtons = document.getElementsByClassName("radioButton");
	var checkedFlag = false;
	for (var i=0; i < radioButtons.length; i++) {
		var currentButton= radioButtons[i];
		if (currentButton.checked == true) {
			checkedFlag = true;
			var choiceName ="choice" + (i+1);
			var selection = document.getElementById(choiceName).innerHTML;
			selectedAnswers.push(selection);
			if (selection == correctAnswers[questionCounter]) {
				correctCounter++;
			}else{
			wrong.push(questionCounter+1);
			}
			break;
		}
	}
	if ( checkedFlag == false) {
		$(".alert").show();
		return;
	}

	questionCounter++;
	if (questionCounter >= questionArray.length) {
		submitForm();
		readGoogleData();
		return;
	}
	displayQuestion();
	displayAnswers();
	displayQuestionNumber();
}

var submitForm = function() {
	var urlbase = "https://docs.google.com/a/b4493c1508c8d17380b51f8e348a0cf9bad94cc4.googledrive.com/forms/d/176M-BcBTs-6sV5VIOiwjpQgeBLDxl2BqR1vuCuwyktk/formResponse";
	$.ajax({
		url: urlbase,
		data: {
			"entry.275135403": selectedAnswers[0],
			"entry.347952629": selectedAnswers[1],
			"entry.1336857143": selectedAnswers[2],
			"entry.174689747": selectedAnswers[3],
			"entry.1736035253": selectedAnswers[4],
			"entry.650371260": selectedAnswers[5],
			"entry.273444136": selectedAnswers[6],
			"entry.582562488": selectedAnswers[7],
			"entry.1221517761": selectedAnswers[8],
			"entry.1688455448": selectedAnswers[9],
			"entry.620696928": selectedAnswers[10],
			"entry.1175091930": selectedAnswers[11],
			"entry.1968216726": selectedAnswers[12],
			"entry.448964711": selectedAnswers[13],
			"entry.1500162438": selectedAnswers[14],
			"entry.1774828334": selectedAnswers[15],
			"entry.705071314": selectedAnswers[16],
			"entry.1373688861": selectedAnswers[17],
			"entry.977570803": selectedAnswers[18],
			"entry.717850132": selectedAnswers[19],
			"entry.1801582018": selectedAnswers[20],
			"entry.1415953681": selectedAnswers[21],
			"entry.1482960195": selectedAnswers[22],
			"entry.502273102": selectedAnswers[23],
			"entry.527686785": selectedAnswers[24],
			"entry.1856125005": selectedAnswers[25],
			"entry.1926164169": selectedAnswers[26],
			"entry.116959769": selectedAnswers[27],
			"entry.172313377": selectedAnswers[28],
			"entry.967400284": selectedAnswers[29],
			"entry.977346003": selectedAnswers[30],
			"entry.399293045": selectedAnswers[31],
			"entry.1699507049": selectedAnswers[32],
			"entry.240131396": selectedAnswers[33],
			"entry.1743944121": selectedAnswers[34],
			"entry.504624079": selectedAnswers[35],
			"entry.316152002": selectedAnswers[36],
			"entry.1198994028": selectedAnswers[37],
			"entry.1996950489": selectedAnswers[38],
			"entry.106586769": selectedAnswers[39],
			"entry.1654068842": selectedAnswers[40],
			"entry.438542093": selectedAnswers[41],
			"entry.1056788914": selectedAnswers[42],
			"entry.313947654": selectedAnswers[43],
			"entry.575923738": selectedAnswers[44],
			"entry.1880220176": selectedAnswers[45],
			"entry.198487827": selectedAnswers[46],
			"entry.523594565": selectedAnswers[47],
			"entry.1069214813": selectedAnswers[48],
		},
		type: "POST",
		dataType: "xml",
		success: function(data) {
}
});
}
$(function($){
        var addToAll = false;
        var gallery = false;
        var titlePosition = 'inside';
        $(addToAll ? 'img' : 'img.fancybox').each(function(){
            var $this = $(this);
            var title = $this.attr('title');
            var src = $this.attr('data-big') || $this.attr('src');
            var a = $('<a href="#" target="_blank" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        if (gallery)
            $('a.fancybox').attr('rel', 'fancyboxgallery');
        $('a.fancybox').fancybox({
            titlePosition: titlePosition
        });
    });
    $.noConflict();

    var readGoogleData = function(){
    	var sheeturl = "https://spreadsheets.google.com/feeds/list/19Dio5A-dcwTpDhR1dn3rewtlZvahvvCOwGCARnami0I/1/public/basic?alt=json";
    	$.ajax({
    		url: sheeturl,
    		success: function(data){
    			console.log(data);
    			var entries = data.feed.entry;
    			var fGrade = 0;
    			var dGrade = 0;
    			var cGrade = 0;
    			var bGrade = 0;
    			var aGrade = 0;
    			var rowGrade = 0;
    			var persongrade=correctCounter/questionArray.length;
    			for (var i = 0; i<entries.length; i++){
    				rowGrade=0;
    				var currentObject = entries[i];
    				var content = currentObject.content.$t;
    				content = content.split(",");
    				var itemToRead = "";
    				for (var k = 0; k<content.length; k++) {
    					var index = content[k].search(":")
    					itemToRead = content[k].substring(index+2, content[k].length);
    					if (itemToRead == correctAnswers[k]) {
    						rowGrade++;
    					}
    				}
    			
    				rowGrade = rowGrade / correctAnswers.length;
    				
    				var finalGrade=((rowGrade * 100).toFixed(2))
    				console.log(finalGrade)
    				$("#totalScoreDiv").html("Your score: " + ((persongrade * 100).toFixed(2)) +"%" + "  " + "You got the following questions incorrect:");
    				if (finalGrade<60.00){
    					fGrade++
    				}else if (finalGrade<70.00){
    					dGrade++
    				}else if (finalGrade<80.00){
    					cGrade++
    				}else if (finalGrade<90.00){
    					bGrade++
    				}else{
    					aGrade++
    				}
    			}
    				var dataTable = google.visualization.arrayToDataTable([
    					['Grade', 'Students'],
    					['F', fGrade],
    					['D', dGrade],
    					['C', cGrade],
    					['B', bGrade],
    					['A', aGrade],
    					]);
    				drawChart(dataTable);
    				
    			}
    	});
    	 }
var drawChart = function(dataTable) {
	$("#main").hide();
	$("#scoreReport").show();
     var options = {
          title: 'Student Performance',
          hAxis: {title: 'Grade Letter',  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Number of Students', minValue: 0},
          chartArea: {
          	backgroundColor: 'Aquamarine',
          }
        };

     var chart = new google.visualization.AreaChart(document.getElementById('bellChartDiv'));
        chart.draw(dataTable, options);
        console.log(wrong);
        for (var i=0; i<wrong.length;i++){
	var qwrong = wrong[i]
	var wq = document.createElement("div");
	wq.innerHTML = questionArray[wrong[i]-1];
	$(wq).addClass("text-center boldClass")
	$("#totalScoreDiv").append(wq)
	for (var k=0; k<4;k++){
	var op1 = document.createElement("div");
	$(op1).addClass("text-center");
	op1.innerHTML=answerArray[wrong[i]-1][k];
	$("#totalScoreDiv").append(op1)
	}
	}	
}