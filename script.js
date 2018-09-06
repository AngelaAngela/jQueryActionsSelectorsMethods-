
function main(){


$("#grow-me").addClass(".big");

$("#shrink-me").removeClass(".big");


$("li").text(console.log);



const anchorTag = $(".link");
	anchorTag.attr('href', 'http://www.example.com').text('Somewhere');



$('#hide-me').css('display', 'none');

$('#show-me').css('display', 'block');

const name = $("input").val();
	$("h1").html(" welcome " + name);


}




$("#action").on("click", main);

