$(() => {
  /**
   * 弹窗显示隐藏
   */
  $(".close-icon,.modal-btn,.modal-bg").click(() => {
    $(".modal-mode").hide();
    oTopFun();
  });

  $(".xy-btn").click(e => {
    e.preventDefault();
    $(".code-modal").show();
    bodyFlex();
  });

  var oTop = 0;
  //弹窗定位禁止背景滚动
  var bodyFlex = function() {
    $("body")
      .css({ top: "-" + Number($(window).scrollTop()) + "px" })
      .addClass("bodyFlex");
  };
  // 弹窗定位还原
  var oTopFun = function() {
    oTop = -$("body").position().top;
    $("html,body")
      .removeClass("bodyFlex")
      .scrollTop(oTop);
  };

  /**
   * 密码眼睛控制
   */
  $(".pass-hide").click(function() {
    $(this).toggleClass("pass-show");
    if ($("#password").prop("type") === "password") {
      $("#password").prop("type", "text");
    } else {
      $("#password").prop("type", "password");
    }
  });

  //选择是否阅读
  $(".check-box").click(function() {
    $(this)
      .children("i")
      .toggleClass("form-icon-c");
    if ($("#checkbox").val() == 0) {
      $("#checkbox").val(1);
    } else {
      $("#checkbox").val(0);
    }
  });

  /**
   * 验证手机号码格式的正则表达式 （可以验证以12、 13、15、18、14、17 开头的手机号格式）
   */
  $(document).on("blur", "#tel", function() {
    var MOBILE = /^1[2,3,4,5,6,7,8,9][0-9]{9}$/;
    if (!MOBILE.test($(this).val())) {
      $(this)
        .parent()
        .addClass("error-info");
    } else {
      $(this)
        .parent()
        .removeClass("error-info");
    }
  });

  /**
   * 密码规则-必须包含字母、数字、特殊字符其中两种
   */

  $(document).on("blur", "#password", function() {
    var PASSWORD_CHECK = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\\\\(\\\\)])+$)([^(0-9a-zA-Z)]|[\\\\(\\\\)]|[a-zA-Z]|[0-9]){6,16}$/;
    if (!PASSWORD_CHECK.test($(this).val())) {
      $(this)
        .parent()
        .addClass("error-info");
    } else {
      $(this)
        .parent()
        .removeClass("error-info");
    }
  });
  //    public final static String PASSWORD_CHECK = "^((?=.*[a-zA-Z])(?=.*\\d)(?!.*[\\>|\\<])\\S{6,16}|[a-z0-9]{32})$";
});
