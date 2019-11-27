// 复选框 设置为单选
function singleCheck(id){
  $("#"+id).find(":checkbox").each(function(){
      $(this).click(function(){
          if($(this).is(':checked')){
            $(this).attr('checked',true).siblings().attr('checked',false);
          }else{
            $(this).attr('checked',false).siblings().attr('checked',false);
          }
      });
  });
}