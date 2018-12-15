define([],function(){
  return {
    init:function($mod){
    	var $list=$('.list',$mod);
    	var count=$list.children().length;
    	
    	if(count >= 16){
    		var currentIndex=0,
			TO,
			checkHeight=function(){
				if(document.body.scrollHeight - win.height() -win.scrollTop() < 200){
						//console.log('got')
						try{
							$list.OXRefresh({ 
								"ui-imglist":{
									$index: ++currentIndex,
									$limit:16
								}
							})

						}catch(e){
							
						}
											}
			},
			win=$(window).on('scroll',function() {
				TO && clearTimeout(TO);
				TO=setTimeout(checkHeight,200)
				
			});
			

			
			checkHeight();
		}
			

    }
  }
})
