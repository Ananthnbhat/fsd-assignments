<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<%@taglib prefix="botDetect" uri="https://captcha.com/java/jsp"%>


<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="utf-8">
      <title>Create an account</title>

      <link href="${contextPath}/resources/css/bootstrap.min.css" rel="stylesheet">
      <link href="${contextPath}/resources/css/common.css" rel="stylesheet">
  </head>

  <body>

    <div class="container">

        <form:form method="POST" modelAttribute="userForm" class="form-signin">
            <h2 class="form-signin-heading">Create your account</h2>
            <spring:bind path="username">
                <div class="form-group ${status.error ? 'has-error' : ''}">
                    <form:input type="text" path="username" class="form-control" placeholder="Username"
                                autofocus="true"></form:input>
                    <form:errors path="username"></form:errors>
                </div>
            </spring:bind>

            <spring:bind path="password">
                <div class="form-group ${status.error ? 'has-error' : ''}">
                    <form:input type="password" path="password" class="form-control" placeholder="Password"></form:input>
                    <form:errors path="password"></form:errors>
                </div>
            </spring:bind>

            <spring:bind path="passwordConfirm">
                <div class="form-group ${status.error ? 'has-error' : ''}">
                    <form:input type="password" path="passwordConfirm" class="form-control" placeholder="Confirm your password"></form:input>
                    <form:errors path="passwordConfirm"></form:errors>
                </div>
            </spring:bind>
            
            <spring:bind path="name">
                <div class="form-group ${status.error ? 'has-error' : ''}">
                    <form:input type="text" path="name" class="form-control" placeholder="Name" autofocus="true"></form:input>
                    <form:errors path="name"></form:errors>
                </div>
            </spring:bind>
            
            <spring:bind path="email">
                <div class="form-group ${status.error ? 'has-error' : ''}">
                    <form:input type="email" path="email" class="form-control" placeholder="Email" autofocus="true"></form:input>
                    <form:errors path="email"></form:errors>
                </div>
            </spring:bind>
            
            <br>
			<label for="captchaCode">Retype the characters from the
				picture:</label>


			<!-- Adding BotDetect Captcha to the page -->
			<botDetect:captcha id="basicExample" userInputID="captchaCode" />

			<div class="validationDiv">
				<input name="captchaCode" type="text" id="captchaCode" value="${basicExample.captchaCode}" /> 
				<span class="correct">${basicExample.captchaCorrect}</span>
				<span class="incorrect">${basicExample.captchaIncorrect}</span>
			</div>



            <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
             <button type="reset" class="btn btn-danger btn-lg btn-block"> Reset</button>
        </form:form>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="${contextPath}/resources/js/bootstrap.min.js"></script>
  </body>
</html>
