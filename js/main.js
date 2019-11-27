layui.use(['element', 'layer'], function () {
  var element = layui.element;
  var layer = layui.layer;

  //监听折叠
  element.on('collapse(test)', function (data) {
    layer.msg('展开状态：' + data.show);
  });
});

$("#btn1").click(function () {
  $("#mengceng1").toggle();
});
$("#btn2").click(function () {
  $("#mengceng2").toggle();
});
$("#btn3").click(function () {
  $("#mengceng3").toggle();
});
$("#btn4").click(function () {
  $("#mengceng4").toggle();
});
$("#btn5").click(function () {
  $("#mengceng5").toggle();
});
$("#btn6").click(function () {
  $("#mengceng6").toggle();
});
$("#btn7").click(function () {
  $("#mengceng7").toggle();
});
$("#btn8").click(function () {
  $("#mengceng8").toggle();
});
$("#btn9").click(function () {
  $("#mengceng9").toggle();
});
$("#btn10").click(function () {
  $("#mengceng10").toggle();
});