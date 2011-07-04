var AppController = Backbone.Controller.extend({
	routes: {
		'!/': 'root',
		'': 'root',
		'!/volumes/:id': 'volume',
		'!/volumes/:id/:issue': 'issue'
	},
	root: function(){
		
	},
	volume: function(id){},
	issue: function(id, issue){
		$.getJSON('/volumes/'+id+'/'+issue, function(data){
			var data = data.table;
			var template = JST['issue']({ issue : data });
			$('#body').html(template);
			$('#issue_info').hide();
			$('#issue_info').children().hide();
			$('body').css('background', "url('"+data.image.super_url+"')");
			$('#issue_info').fadeIn('slow');
			$('#issue_info').children().each(function(index, item){
				$(item).delay(1000*(index+1)).fadeIn('slow');
			});
			$('#issue_description a').each(function(index, item){
				$(item).attr('href', 'http://comicvine.com'+$(item).attr('href'));
			});
		});
	}
});