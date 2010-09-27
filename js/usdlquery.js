
function display(usdlData,div,editable,callback) {
  if(usdlData==null||div==null) {
    return;
  }
  div.empty();

	var content = usdlData.find('guid').text();

	div.append(content);
}

function render(div) {
  return "<xml>yippi</xml>"
}
