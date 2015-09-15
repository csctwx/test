// author: enarviv
jQuery(function ($) {


			$('#activationsSelectNewPlanCollapsiblePanelTitle').on("click", function (e) {



				if ($("#activationsSelectNewPlanCollapsiblePanelBody").hasClass('collapse')) {

					$("#activationsSelectNewPlanCollapsiblePanelBody").slideDown();
					$("#activationsSelectNewPlanCollapsiblePanelBody").removeClass('collapse');
					$("#activationsSelectNewPlanCollapsiblePanelIcon").addClass('glyphicon-chevron-down');
					$("#activationsSelectNewPlanCollapsiblePanelIcon").removeClass('glyphicon-chevron-right');

				    }
				    else {

					$("#activationsSelectNewPlanCollapsiblePanelBody").slideUp();
					$("#activationsSelectNewPlanCollapsiblePanelBody").addClass('collapse');
					$("#activationsSelectNewPlanCollapsiblePanelIcon").addClass('glyphicon-chevron-right');
					$("#activationsSelectNewPlanCollapsiblePanelIcon").removeClass('glyphicon-chevron-down');

				    }


			});



			$('#activationsAvailableAddonsCollapsiblePanelTitle').on("click", function (e) {



				if ($("#activationsAvailableAddonsCollapsiblePanelBody").hasClass('collapse')) {

					$("#activationsAvailableAddonsCollapsiblePanelBody").slideDown();
					$("#activationsAvailableAddonsCollapsiblePanelBody").removeClass('collapse');
					$("#activationsAvailableAddonsCollapsiblePanelIcon").addClass('glyphicon-chevron-down');
					$("#activationsAvailableAddonsCollapsiblePanelIcon").removeClass('glyphicon-chevron-right');

				    }
				    else {

					$("#activationsAvailableAddonsCollapsiblePanelBody").slideUp();
					$("#activationsAvailableAddonsCollapsiblePanelBody").addClass('collapse');
					$("#activationsAvailableAddonsCollapsiblePanelIcon").addClass('glyphicon-chevron-right');
					$("#activationsAvailableAddonsCollapsiblePanelIcon").removeClass('glyphicon-chevron-down');

				    }


			});




			    });

