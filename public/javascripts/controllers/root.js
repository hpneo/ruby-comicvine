var AppController = Backbone.Controller.extend({
	routes: {
		'!/': 'root',
		'': 'root',
		'!/volumes/:id': 'volume',
		'!/volumes/:id/:issue': 'issue'
	},
	root: function(){
		
	},
	volume: function(id){
		$.getJSON('/volumes/'+id, function(data){
			var data = data.table;
			var template = JST['show']({ volume : data });
			$('#body').html(template);
			$(data.issues).each(function(index, item){
				$.getJSON('/volumes/'+id+'/'+item.table.issue_number, function(issue_data){
					issue_template = $(JST['issue_item']({ issue : issue_data.table }));
					issue_template.hide();
					$('#issue_collection').append(issue_template);
					issue_template.fadeIn('fast');
				});
			});
		});
	},
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