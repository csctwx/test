<%@ include file="/WEB-INF/jsp/commons/xhtml-header.jsp"%>
<div class="row">
	<div class="col-xs-12 col-md-8">
		<div class="panel panel-default">
			<div class="panel-heading text-center">
				<div class="panel-title">Manage Saved Payment Method</div>
			</div>
			<div class="panel-body text-center">
				<!-- <div class="row bottom10">
					<div class="col-xs-12 text-left">
						<h4>
							<strong>Existing RPV: ${cardAlias}</strong>
						</h4>
					</div>
				</div> -->
				<div class="row bottom">
					<div class="col-xs-6 text-left">
						<strong>Name on Card:</strong>
					</div>
					<div class="col-xs-3 text-left">${cardNameOn}</div>
				</div>
				<br />
				<div class="row bottom">
					<div class="col-xs-6 text-left">
						<strong>Card nickname:</strong>
					</div>
					<div class="col-xs-3 text-left">${cardAlias}</div>
				</div>
				<br />
				<div class="row bottom">
					<div class="row top10 col-xs-6 text-left">
						<strong>Billing Address</strong>
					</div>
					<div class="col-xs-6 text-left">
						<div class="row ">
							<div class="col-xs-10 text-left">${cardAddr1}</div>
						</div>
						<c:if test="${not empty cardAddr2}">
							<div class="row ">
								<div class="col-xs-10 text-left">${cardAddr2}&nbsp;</div>
							</div>
						</c:if>
						<div class="row ">
							<div class="col-xs-10 text-left">${cardCity}, ${cardState} ${cardZip}</div>
						</div>
					</div>
				</div>
				<br/>
				<div class="row bottom10 top10">
					<div class="col-xs-6 col-md-offset-6 col-md-3 text-left">
						<a class="btn btn-default btn-block"
							href="./my-account-rpv-delete">Delete</a>
					</div>
				</div>
				<br/>
			</div>
		</div>
	</div>
	<hr />
	<div class="col-xs-12 col-md-4">
		<div class="panel panel-default">
			<!-- <div class="panel-heading text-center">
				<div class="panel-title">Autopay</div>
			</div> -->
			<strong>Auto Pay</strong>
			<c:if test="${not autopayEnabled}">
				<div class="panel-body">
					<div class="alert alert-success">
						<div class="row">
							<div class="col-xs-12">
								<p>

									<span class="glyphicon glyphicon-credit-card"
										aria-hidden="true"> </span> This is the easiest way to pay for
									your monthly charges! By enrolling you authorize Sprint to
									automatically charge your monthly recurring charges, plus any
									applicable taxes to your registered payment method every month
									on your Monthly Service Date.
								</p>
							</div>
						</div>
					</div>
					<c:if test="${rpvActive}">
						<div class="row">
							<div class="col-xs-12 text-left">
								<form:form action="${autopayConfirmUrl}">
									<button type="submit" value="Enroll" class="btn btn-primary btn-block">Enroll
										in autopay!</button>
								</form:form>
							</div>
						</div>
					</c:if>
					<c:if test="${not rpvActive}">
						<div class="row bottom">
							<div class="col-xs-12 text-left">Add a card today to enroll
								in autopay</div>
						</div>
					</c:if>
				</div>
			</c:if>
			<c:if test="${autopayEnabled}">
				<div class="panel-body text-center">
					<div class="alert alert-success">
						<div class="row">
							<div class="col-xs-12 text-left">
								<p>
									<span class="glyphicon glyphicon-credit-card"
										aria-hidden="true"> </span> You are currently enrolled in
									autopay!
								</p>
								<p>You card will be charged your monthly recurring charges,
									plus any applicable taxes.</p>
							</div>
						</div>
					</div>
					<div class="row bottom10 top10">
						<div class="col-xs-12 text-left">
							<form:form action="${autopayConfirmUrl}">
								<button type="submit" value="Cancel" class="btn btn-default btn-block">Cancel
									Autopay</button>
							</form:form>
						</div>
					</div>
				</div>
			</c:if>
		</div>
	</div>
</div>
<%@ include file="/WEB-INF/jsp/commons/xhtml-footer.jsp"%>

