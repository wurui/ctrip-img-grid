define([],function(){
  return {
    init:function($mod){
    	var currentIndex=0,
			TO,
			checkHeight=function(){
				if(document.body.scrollHeight - win.height() -win.scrollTop() < 200){
						//console.log('got')
						$mod.OXRefresh({ 
							"list":{
								$index: ++currentIndex,
								$limit:16
							}
						})
					}
			},
			win=$(window).on('scroll',function() {
				TO && clearTimeout(TO);
				TO=setTimeout(checkHeight,200)
				
			});
			checkHeight();

    }
  }
})
