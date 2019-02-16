
var DefaultSetup = {
	init: function () {
		this.activeTab = $('.elem-active');
		this.selectedTabName = this.activeTab.data('tabname');
		this.selectedTabContent = "";
		this.defaultTemplate = '<div class="container-fluid"><div class="row"><div class="col-md-12 bg-dark text-center"><h2 class="padd-default">Not yet created</h2></div></div></div>';
	},
	setData: function () {
		this.init();
		$('.content-heading').html(this.activeTab.text());
		this.wrapContent();
		this.BindEvents();
	},
	wrapContent: function () {
		this.selectedTabContent = $('.' + this.selectedTabName).html() || "";
		this.selectedTabContent === "" ?
			$('.main-content').html(this.defaultTemplate) :
			$('.main-content').html(this.selectedTabContent);
	},
	BindEvents: function () {
		if (this.selectedTabName === "tabContent") {
			$('.main-content .tab-page-tab-label').on('click', function () {
				$('.main-content .tab-page-Tab-header').attr('checked', false);
				$(this).siblings('.tab-page-Tab-header').attr('checked', true);
			});
		}

		if (this.selectedTabName === "loginPageContent") {
			$('.main-content .btn-clear').on('click', function () {
				$('input , select').val('');
			});

			$('.main-content .btn-submit').on('click', function () {
				if ($('.main-content .username').val() === 'admin' && $('.main-content .password').val() === 'admin') {
					alert('successfully logged in');
					$('.main-content .btn-clear').trigger('click');
				}
				else{
					alert('Invalid username or password');
				}
			});
		}
	}
}

$('.sidebar .elem').on('click', function () {

	if (!($(this).hasClass('elem-active'))) {

		$(this).siblings('.elem-active').removeClass('elem-active');
		$(this).addClass('elem-active');
		DefaultSetup.setData();
	}
});

DefaultSetup.setData();