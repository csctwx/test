$(function(){
	$("#btn-open-info").click(function(){
		$("#btn-open-info").fadeOut();
		$("#scriber-info").slideDown();
	});
	$("#btn-close-info").click(function(){
		$("#btn-open-info").fadeIn();
		$("#scriber-info").slideUp();
	});		
	$(".dropdown").click(function(){
		$(".dropdown .dropdown-menu").toggle();
	});

	$(".personal-info  #accepted").change(function(){
		if($("#accepted").prop("checked") == true){
			$(".personal-info  input").prop("disabled", false);
			$(".personal-info  select").prop("disabled", false);
		}
		// else{
		// 	$(".personal-info  input").prop("disabled", true);
		// 	$(".personal-info  select").prop("disabled", true);
		// }
		
	});

	if($("#accepted").prop("checked") == true){
		$(".personal-info  input").prop("disabled", false);
		$(".personal-info  select").prop("disabled", false);
	}

	$(".plan-list > .list-group-item input").change(function(){
		$(".plan-list > .list-group-item").removeClass("checked");
		$(this).parent().toggleClass("checked");
	});

	$('#iccid-number:text').on('input', function(){ 
		if($("#next").prop("disabled") == true){
			$("#next").prop("disabled", false);
		}
		 
	});

  $('#phone:text').on('input', function(){ 
    if($("#check").prop("disabled") == true){
      $("#check").prop("disabled", false);
    }
     
  });

  $('.newplan:radio').on('click',function(){
    if($("#next").prop("disabled") == true){
      $("#next").prop("disabled", false);
    }
  });

	//Modal show
	$(".modal.auto-load").modal("show");
	
	// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor); 
	// var colHeight = $(".section_desktopContent > .col-xs-8").height();
	// if(isChrome){
	//   colHeight += 3;
	// }
	
	// $(".section_desktopContent > .col-xs-4").css({'height':(colHeight+'px')});

	//Bootstrap Tour
	var tour = new Tour({
          storage : false,
          template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-checkbox'><input type='checkbox'> Don't show again.</div><div class='popover-navigation'><button class='btn btn-default' data-role='end'>Close</button><button class='btn btn-default' data-role='next'>Next</button><button class='btn btn-default' data-role='prev'>Prev</button></div></div>"
      });
   
      tour.addSteps([
      	{
          element: "#info-3-2",
          placement: "bottom",
          title: "IMPORTANT",
          content: "It may take up to 15 minutes for payments or changes to display below. Please allow adequate time between transactions."
        },
        {
          element: "#info-3-3",
          placement: "bottom",
          title: "Next Payment",
          content: "Identifies the Total Dollar Amount for the Customer’s Monthly or Daily Price Plan and Recurring Add-Ons. This amount does not include One-Time Add-On Charges. "
        },
        {
          element: "#info-3-4",
          placement: "bottom",
          title: "Account Balance",
          content: "The dollar amount available on the Customer’s Account.  Certain payment transactions may take a few minutes to post. If the Customer just made a payment and it is not reflected in their Account Balance recheck in a few minutes."
        },
        {
          element: "#info-3-5",
          placement: "bottom",
          title: "Due by &lt;MRC date  or DRC date&gt;",
          content: "The dollar amount the Customer must pay by the date specified for their Price Plan and Recurring Add-On Charges to continue service without interruption.  This amount does not include One-Time Add-On Charges."
        },
        {
          element: "#btn-open-info",
          placement: "top",
          title: "Welcome to Sprint Retail Portal!",
          content: "Clicking the Chevron  button will expand or reduce the account information section. Additional information will be available when it is expanded."
        },
        {
          element: "#nav-icon",
          placement: "bottom",
          title: "Features",
          content: "Clicking the Menu icon will provide navigation options for performing customer account transactions or returnig to the customer account home page."
        },
        {
          element: "#info-3-8",
          placement: "top",
          title: "Future dated service change",
          content: "The customer has future dated services changes scheduled on their account."
        },
        {
          element: "#info-3-9",
          placement: "top",
          title: "Advance Payment",
          content: "The customer's next MRC has been paid in advance."
        }
   
      ]);
   
      // Initialize the tour
      tour.init();
   
      // Start the tour
      tour.start();

      //switch chevron glyphicon with collapse panel
      // $(".collapse-with-chevron").on("hide.bs.collapse", function(){
      //   var btn = $(this).siblings(".panel-heading").find(".panel-title a");
      //   btn.html('<span class="glyphicon glyphicon-chevron-right"></span>');
      // });
      // $(".collapse-with-chevron").on("show.bs.collapse", function(){
      //   var btn = $(this).siblings(".panel-heading").find(".panel-title a");
      //   btn.html('<span class="glyphicon glyphicon-chevron-down"></span>');
      // });
      
      $('.collapse-with-chevron').on('shown.bs.collapse hidden.bs.collapse', function (e) {
         $(e.target).prev('.panel-heading').find("span.glyphicon").toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
      });

      $('.sub-collapse-with-chevron').on('shown.bs.collapse hidden.bs.collapse', function (e) {
         $(this).parent('.panel-heading').find("span.glyphicon").toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
      });

      $('#newplan').on('shown.bs.collapse', function (e) {
         if($('#addons').hasClass('in')){
            $('#addons').collapse("hide");
         }
         
      });

      $('#addons').on('shown.bs.collapse', function (e) {
        if($('#newplan').hasClass('in')){
            $('#newplan').collapse("hide");
         }
      });
	
});