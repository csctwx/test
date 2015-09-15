


		$(document).ready(function(){


			$('#activationsAvailableAddonsPhoneInsurance').on("click", function (e) {

					$("#activationsAvailableAddonspanelVoiceServices").hide();
					$("#activationsAvailableAddonspanelDataServices").hide();
					$("#activationsAvailableAddonspanelOtherServices").hide();
					$("#activationsAvailableAddonspanelPhoneInsurance").fadeIn();

					$("#activationsAvailableAddonspanelVoiceServices").addClass('collapse');
					$("#activationsAvailableAddonspanelDataServices").addClass('collapse');
					$("#activationsAvailableAddonspanelOtherServices").addClass('collapse');
					$("#activationsAvailableAddonspanelPhoneInsurance").removeClass('collapse');

					$("#activationsAvailableAddonsVoiceServices").removeClass("active");
					$("#activationsAvailableAddonsDataServices").removeClass("active");
					$("#activationsAvailableAddonsOtherServices").removeClass("active");
					$("#activationsAvailableAddonsPhoneInsurance").addClass("active");

					
			});


			$('#activationsAvailableAddonsOtherServices').on("click", function (e) {

					$("#activationsAvailableAddonspanelVoiceServices").hide();
					$("#activationsAvailableAddonspanelDataServices").hide();
					$("#activationsAvailableAddonspanelOtherServices").fadeIn();
					$("#activationsAvailableAddonspanelPhoneInsurance").hide();

					$("#activationsAvailableAddonspanelVoiceServices").addClass('collapse');
					$("#activationsAvailableAddonspanelDataServices").addClass('collapse');
					$("#activationsAvailableAddonspanelOtherServices").removeClass('collapse');
					$("#activationsAvailableAddonspanelPhoneInsurance").addClass('collapse');

					$("#activationsAvailableAddonsVoiceServices").removeClass("active");
					$("#activationsAvailableAddonsDataServices").removeClass("active");
					$("#activationsAvailableAddonsOtherServices").addClass("active");
					$("#activationsAvailableAddonsPhoneInsurance").removeClass("active");

					

			});


			$('#activationsAvailableAddonsDataServices').on("click", function (e) {

					$("#activationsAvailableAddonspanelVoiceServices").hide();
					$("#activationsAvailableAddonspanelDataServices").fadeIn();
					$("#activationsAvailableAddonspanelOtherServices").hide();
					$("#activationsAvailableAddonspanelPhoneInsurance").hide();

					$("#activationsAvailableAddonspanelVoiceServices").addClass('collapse');
					$("#activationsAvailableAddonspanelDataServices").removeClass('collapse');
					$("#activationsAvailableAddonspanelOtherServices").addClass('collapse');
					$("#activationsAvailableAddonspanelPhoneInsurance").addClass('collapse');

					$("#activationsAvailableAddonsVoiceServices").removeClass("active");
					$("#activationsAvailableAddonsDataServices").addClass("active");
					$("#activationsAvailableAddonsOtherServices").removeClass("active");
					$("#activationsAvailableAddonsPhoneInsurance").removeClass("active");

					

			});


			$('#activationsAvailableAddonsVoiceServices').on("click", function (e) {

					$("#activationsAvailableAddonspanelVoiceServices").fadeIn();
					$("#activationsAvailableAddonspanelDataServices").hide();
					$("#activationsAvailableAddonspanelOtherServices").hide();
					$("#activationsAvailableAddonspanelPhoneInsurance").hide();

					$("#activationsAvailableAddonspanelVoiceServices").removeClass('collapse');
					$("#activationsAvailableAddonspanelDataServices").addClass('collapse');
					$("#activationsAvailableAddonspanelOtherServices").addClass('collapse');
					$("#activationsAvailableAddonspanelPhoneInsurance").addClass('collapse');

					$("#activationsAvailableAddonsVoiceServices").addClass("active");
					$("#activationsAvailableAddonsDataServices").removeClass("active");
					$("#activationsAvailableAddonsOtherServices").removeClass("active");
					$("#activationsAvailableAddonsPhoneInsurance").removeClass("active");

					

			});



			$('#activationsSelectNewPlanPayGo').on("click", function (e) {


					$("#activationsSelectNewPlanMonthlyPanel").hide();
					$("#activationsSelectNewPlanDailyPanel").hide();
					$("#activationsSelectNewPlanPayGoPanel").fadeIn();


					$("#activationsSelectNewPlanMonthlyPanel").addClass('collapse');
					$("#activationsSelectNewPlanDailyPanel").addClass('collapse');
					$("#activationsSelectNewPlanPayGoPanel").removeClass('collapse');


					$("#activationsSelectNewPlanMonthly").removeClass("active");
					$("#activationsSelectNewPlanDaily").removeClass("active");
					$("#activationsSelectNewPlanPayGo").addClass("active");


					

			});




			$('#activationsSelectNewPlanDaily').on("click", function (e) {


					$("#activationsSelectNewPlanMonthlyPanel").hide();
					$("#activationsSelectNewPlanDailyPanel").fadeIn();
					$("#activationsSelectNewPlanPayGoPanel").hide();


					$("#activationsSelectNewPlanMonthlyPanel").addClass('collapse');
					$("#activationsSelectNewPlanDailyPanel").removeClass('collapse');
					$("#activationsSelectNewPlanPayGoPanel").addClass('collapse');


					$("#activationsSelectNewPlanMonthly").removeClass("active");
					$("#activationsSelectNewPlanDaily").addClass("active");
					$("#activationsSelectNewPlanPayGo").removeClass("active");


					$("#activationsSelectNewPlanMonthly").removeClass("underscored");
					$("#activationsSelectNewPlanDaily").addClass("underscored");
					$("#activationsSelectNewPlanPayGo").removeClass("underscored");

			});


			$('#activationsSelectNewPlanMonthly').on("click", function (e) {


					$("#activationsSelectNewPlanMonthlyPanel").fadeIn();
					$("#activationsSelectNewPlanDailyPanel").hide();
					$("#activationsSelectNewPlanPayGoPanel").hide();


					$("#activationsSelectNewPlanMonthlyPanel").removeClass('collapse');
					$("#activationsSelectNewPlanDailyPanel").addClass('collapse');
					$("#activationsSelectNewPlanPayGoPanel").addClass('collapse');


					$("#activationsSelectNewPlanMonthly").addClass("active");
					$("#activationsSelectNewPlanDaily").removeClass("active");
					$("#activationsSelectNewPlanPayGo").removeClass("active");


					
			});







		});




