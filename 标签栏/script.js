function $(id){
	return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function() {
	var titles = $("tags").getElementsByTagName('li');
	var sections = $("tags-container").getElementsByTagName('section');

	if(titles.length != sections.length) return ;

	for(var i = 0, len = titles.length; i < len; i++) {
		titles[i].id = i;
		titles[i].onclick = function() {
			for(var j = 0,len = titles.length; j < len; j++) {
				titles[j].className = '';
				sections[j].style.display = 'none';
			}
			this.className = "active";
			sections[this.id].style.display = 'block';
		}
	}
}