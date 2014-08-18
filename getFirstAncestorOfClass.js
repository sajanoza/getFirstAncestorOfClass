function getFirstAncestorOfClass(domObject,className){
	//console.log("chcecked object type is node object: "+domObject.tagName);
	if (typeof(className) != String){
		var error1 = new TypeError("className is invalid, string expected");
		throw error1;
		}
	if (domObject.nodeName == "undefined" || domObject.nodeName == null){
		var error2 = new TypeError("dom Node is nod DOM Object whith is expected");
		throw error2;
		}
	var checkedObject = domObject;
	while (checkedObject.className != className){
		//console.log ("checked object tag name: "+checkedObject.tagName);
		if (checkedObject.tagName == "BODY"){throw "There is no ancestor object of thet class name"}
		checkedObject = checkedObject.parentNode;
	}
	return checkedObject
}