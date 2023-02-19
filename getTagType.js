function getTagType(tagString){
	var expression01 = /<(".*?"|'.*?'|.*?|\n)*?>/gm;

	var matchs = tagString.match(expression01);
	var tag = matchs[0];
	var tagType = undefined;
	var expression02 = /^\s*[^\/]\//;
	var expression03 = /.\s*.\s*$/;
	var expression04 = /[^\s<>\/]+/;

	var tagName = expression04.exec(tag)[0].toLowerCase();

	var tagsAutoClose = ["area","base","br","col","embed","hr","img","image","input","link","meta","param","source","track","wbr"];

	tagType = expression02.test(tag) ? "close" : expression03.exec(tag)[0][0] == "/" ? " autoClose" : "Open";

	for(var index in tagsAutoClose){
		if(tagsAutoClose[index] == tagName){
			tagType = "autoClose";
		}
	}

	return tagType;
}

function testRegex(){
	console.log(getTagType(document.querySelector("#text").value));
}