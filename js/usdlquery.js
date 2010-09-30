
function display(usdlData,content,editable,callback) {
  if(usdlData==null||content==null) {
    return;
  }
  content.empty();
	var guid = usdlData.find('guid').text();
	var namespace = usdlData.find('namespace').text();
	var name = usdlData.find('name').text();

	content.append("<div id='content'> USDL Plugin  </div>");
	content.append(
			"<div class=\"ele\"> <div class=\"etit\">Guid:</div><div id='guid' class=\"eval\">" +guid+ "</div></div>"+
			"<div class=b> NameSpace: <div id='namesp'>"+namespace+  "</div></div>"+
			"<div class=c> Name: <div id='name'>"+name+"</div> </div>"
			);
			

	$("#guid").dblclick( function() {
		var x	= $("#guid").text();
		$("#guid").empty();
		
		$("#guid").append("<input id=\"text\" type=\"text\" value=\""+x+"\"/>");
	});
	$("body").click( function(evt) {
		if($("#text").length>0) {
			if(evt.target.id != "text") {
				var y = $('#text').val();
				$('#guid').empty();
				$('#guid').append(y);
			}
		}
	});
}

function render(content) {
  return "<xml></xml>";
}


