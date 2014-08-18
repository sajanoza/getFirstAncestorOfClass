##getFirstAncestorOfClass

It search document begins from input domObject and goes up until it find uppder node of input className and returns that object.
If it will not find object of that class name until it get to "body" it throw an Error.

Parameters:
domObject
className

Return:
domObject

Errors:
1. TypeError : "className is invalid string expected";
2. TypeError : "dom Node is nod DOM Object whith is expected";
3. Error: "There is no ancestor object of thet class name";

Example:

<div class="searched" id="ok">
	<div>
		<div id ="base">
		</div>
	</div>
</div>
<script>
var div1 = document.getElementById ('base');
var div2 = getFirstAncestorOfClass(div1,'searched');
alert(div2.id);

//output: "ok"

