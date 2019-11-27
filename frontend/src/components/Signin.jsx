<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
	<div class="kt-container  kt-grid__item kt-grid__item--fluid">
		<div class="kt-portlet">
	        <div class="kt-portlet__body kt-portlet__body--fit">
		        <div class="kt-wizard-v3" id="kt_wizard_v3" data-ktwizard-state="first">
                    <div class="kt-wizard-v3__nav">
                        <div class="kt-wizard-v3__nav-line"></div>

                        <div class="kt-wizard-v3__nav-items kt-wizard-v3__nav-items--clickable">
                            <div class="kt-wizard-v3__nav-item" data-ktwizard-type="step" data-ktwizard-state="current">
                                <span>1</span>
                                <i class="fa fa-check"></i>
                                <div class="kt-wizard-v3__nav-label">Create Account</div>
                            </div>
                            <div class="kt-wizard-v3__nav-item" data-ktwizard-type="step" data-ktwizard-state="pending">
                                <span>2</span>
                                <i class="fa fa-check"></i>
                                <div class="kt-wizard-v3__nav-label">Setup Profile</div>
                            </div>
                            <div class="kt-wizard-v3__nav-item" data-ktwizard-type="step" data-ktwizard-state="pending">
                                <span>3</span>
                                <i class="fa fa-check"></i>
                                <div class="kt-wizard-v3__nav-label">Join streaming plateform account</div>
                            </div>
                        </div>
                    </div>

			<form class="kt-form" id="kt_form" novalidate="novalidate">
				<div class="kt-wizard-v3__content" data-ktwizard-type="step-content" data-ktwizard-state="current">
					<div class="kt-heading kt-heading--md">Create New Account</div>
					<div class="kt-separator kt-separator--height-xs"></div>

					<div class="kt-form__section kt-form__section--first">
						<div class="form-group">
							<label>Username:</label>
							<input type="text" class="form-control" name="username" placeholder="Enter username" value="" aria-describedby="username-error" aria-invalid="false" />
							<span class="form-text text-muted">Please enter your username</span>
						</div>
						<div class="form-group">
							<label>Email address:</label>
							<input type="email" class="form-control" name="email" placeholder="Enter email" value="" />
							<span class="form-text text-muted">We'll never share your email with anyone else</span>
						</div>
						<div class="form-group">
							<label>Password:</label>
							<input type="password" class="form-control" name="password" placeholder="Enter password" value="" />
							<span class="form-text text-muted">Enter your password. Min 6 characters long.</span>
						</div>
					</div>
				</div>

				<div class="kt-wizard-v3__content" data-ktwizard-type="step-content">
                    <div class="kt-form__section kt-form__section--first">
						<div class="kt-heading kt-heading--md">Setup Your Profile</div>

                        <div class="row">
                            <div class="col-xl-6">
                                <div class="form-group">

                                    <div class="kt-avatar kt-avatar--outline" id="kt_user_avatar">
                                        <div class="kt-avatar__holder" style="background-image: url('/keen/themes/keen/theme/demo5/dist/assets/media/users/300_13.jpg');"></div>
                                        <label class="kt-avatar__upload" data-toggle="kt-tooltip" title="" data-original-title="Change avatar">
                                            <i class="fa fa-pen"></i>
                                            <input type="file" name="profile_avatar" accept="image/*" />
                                        </label>
                                        <span class="kt-avatar__cancel" data-toggle="kt-tooltip" title="" data-original-title="Cancel avatar">
                                            <i class="fa fa-times"></i>
                                        </span>
                                    </div>

                                    <span class="form-text text-muted">Appected file formats: .png, .jpg, .jpeg</span>
                                </div>
                            </div>
                        </div>

						<div class="row">
							<div class="col-lg-12">
								<div class="form-group">
									<label>First name: </label>
									<input type="text" class="form-control" name="name" placeholder="Enter your first name" value="" />
									<span class="form-text text-muted">Please enter your first name</span>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-lg-12">
								<div class="form-group">
									<label>Name: </label>
									<input type="text" class="form-control" name="name" placeholder="Enter your name" value="Tim Cooper" />
									<span class="form-text text-muted">Please enter your name</span>
								</div>
							</div>
						</div>
                    </div>
                </div>

                <div class="kt-wizard-v3__content" data-ktwizard-type="step-content">
                        <div class="kt-heading kt-heading--md">Join streaming plateform account</div>
                        <div class="kt-separator kt-separator--height-xs"></div>
                        <div class="kt-form__section kt-form__section--first">
                        <div class="kt-widget-4">
                            <div class="kt-widget-4__items">
                                <div class="kt-widget-4__item">
                                    <div class="kt-widget-4__item-content">
                                        <div class="kt-widget-4__item-section">
                                            <div class="kt-widget-4__item-pic">
                                                <img class="" src="/keen/themes/keen/theme/demo5/dist/assets/media/product-logos/logo1.png" alt="" />
                                            </div>
                                            <div class="kt-widget-4__item-info">
                                                <a href="#">
                                                    <div class="kt-widget-4__item-username">Spotify</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="kt-widget-4__item">
                                    <div class="kt-widget-4__item-content">
                                        <div class="kt-widget-4__item-section">
                                            <div class="kt-widget-4__item-pic">
                                                <img class="" src="/keen/themes/keen/theme/demo5/dist/assets/media/product-logos/logo2.png" alt="" />
                                            </div>
                                            <div class="kt-widget-4__item-info">
                                                <a href="#">
                                                    <div class="kt-widget-4__item-username">Deezer</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
				
                    <div class="kt-form__actions">
                        <div class="btn btn-outline-brand btn-md btn-tall btn-wide btn-bold btn-upper" data-ktwizard-type="action-prev">
                            Previous
                        </div>
                        <div class="btn btn-brand btn-md btn-tall btn-wide btn-bold btn-upper" data-ktwizard-type="action-submit">
                            Submit
                        </div>
                        <div class="btn btn-brand btn-md btn-tall btn-wide btn-bold btn-upper" data-ktwizard-type="action-next">
                            Next Step
                        </div>
				        </div>
			        </form>
		        </div>
	        </div>
        </div>
	</div>
</div>