function onChg(id) {
	axios.get("/board/"+id).then(function(res){
		document.querySelector("#id").value = res.data.id;
		document.querySelector("#title").value = res.data.title;
		document.querySelector("#comment").value = res.data.comment;
		document.querySelector("#writer").value = res.data.writer;
	}).catch(function(err){
		console.error(err);
	});
}

