$(function () {
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

  //  首页
  // 检查类型
  singleCheck("baseInfoCheckType")

  // 单位类型
  singleCheck("baseInfoCompanyType")

  //消防许可及验收备案
  //(消防许可及验收备案)建筑施工类型 */
  singleCheck("keepOnRecordBuildType")

  //(消防许可及验收备案)是否公共聚集场所 */
  singleCheck("keepOnRecordIsGather")

  //(消防许可及验收备案)是否相符
  singleCheck("keepOnRecordIsCoincide")

  //消防安全管理
  //(消防安全管理)消防安全制度
  singleCheck("fireSafetyFireSystem")

  //(消防安全管理)灭火和应急疏散预案
  singleCheck("fireSafetyEmerPlan")

  //(消防安全管理)员工消防安全培训
  singleCheck("fireSafetySafeTrain")

  //(消防安全管理)消防安全管理人是否确定
  singleCheck("fireSafetySafeManage")

  //(消防安全管理)防火检查、巡查是否有记录
  singleCheck("fireSafetyFireCheck")

  //(消防安全管理)消防设施维护是否有记录
  singleCheck("fireSafetyFireRepair")

  //(消防安全管理)消防演练是否有记录
  singleCheck("fireSafetyFirePerform")

  //(消防安全管理)消防档案是否有记录
  singleCheck("fireSafetyFireDoc")

  //(消防安全管理)消防重点部位是否确定
  singleCheck("fireSafetyFirePoInteger")

  //(消防安全管理)疏散任务的人员是否确定
  singleCheck("fireSafetyFireMan")

  //(建筑防火)易燃易爆危险品是否同一建筑
  singleCheck("buildFireDangerObject")

  //(建筑防火)生产、存储、经营其他物品场所是否同一建筑
  singleCheck("buildFireOtherObject")

  //(建筑防火)人员密集逃生障碍物是否影响
  singleCheck("buildFireHasObstacle")

  //(安全疏散)避难层是否有
  singleCheck("evacuateRefuge")

  //(安全疏散)应急广播是否有
  singleCheck("evacuateBroadcast")

  //(消防控制室)消防控制室是否有
  singleCheck("controlRoomHasClassroom")

  //(消防控制室)值班记录是否有
  singleCheck("controlRoomHanLog")

  //(消防控制室)消防联动控制设备运行情况是否正常 
  singleCheck("controlRoomRunningStatus")

  //(火灾自动报警系统)火灾自动报警系统是否有
  singleCheck("fireAlarmSystemHasSystem")

  //(消防给水设施)消防给水设施是否有 
  singleCheck("waterSupplyHasSystem")

  //(消防给水设施)消防水池是否有
  singleCheck("waterSupplyPool")

  //(消防给水设施)消防水箱是否有
  singleCheck("waterSupplyBox")

  //(消防给水设施)消防水泵是否有
  singleCheck("waterSupplyPump")

  //(消防给水设施)室内消火栓是否有
  singleCheck("waterSupplyIndoorHydrant")

  //(消防给水设施)室外消火栓是否有
  singleCheck("waterSupplyOutdoorHydrant")

  //(消防给水设施)水泵接合器是否有
  singleCheck("waterSupplyAdapter")

  //(消防给水设施)稳压设施是否有
  singleCheck("waterSupplyVoltage")

  //(自动灭火系统)自动灭火系统是否有
  singleCheck("outfireHasSystem")

  //(自动灭火系统)其他自动灭火系统是否有
  singleCheck("outfireHasOtherSystem")

  //(其他设施器材)防火门是否有
  singleCheck("otherDeviceDoor")

  //(其他设施器材)防火卷帘是否有
  singleCheck("otherDeviceShutter")

  //(其他设施器材)防排烟设施是否有
  singleCheck("otherDeviceSmoke")

  //(其他设施器材)灭火器是否有
  singleCheck("otherDeviceExtinguish")

  //(其他消防安全管理)电器产品的线路定期维护、检测是否有记录
  singleCheck("otherManageElectric")

  //(其他消防安全管理)燃气用具的管路定期维护、检测是否有记录
  singleCheck("otherManageGas")

  //(其他消防安全管理)违反规定使用明火作为是否存在
  singleCheck("otherManageUseFire")

  //(其他消防安全管理)违反消防安全规定进入生产、储存易燃易爆危险品场所是否存在
  singleCheck("enterDangerEnterDanger")

  //(其他消防安全管理)违反有关消防技术标准和管理规定生产、储存、运输、销售、使用、销毁易燃易爆危险品是否存在
  singleCheck("enterDangerUserDanger")

  //var unitSignBase64 = "";

  // $("#btnSignature").click(function() {
  //   $.signature(function (orgValue) {
  //     // value is not null when signatured
  //     if (orgValue) {
  //       var img=' <img id="imgSignature" class="signature-img" src="'+orgValue+'" />'
  //       unitSignBase64 = img;
  //       $('#btnSignature').html(img);
  //     }
  //   });
  // });

});

