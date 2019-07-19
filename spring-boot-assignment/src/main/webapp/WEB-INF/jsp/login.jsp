<%@page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="botDetect" uri="https://captcha.com/java/jsp"%>

<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Log in with your account</title>

      <link href="${contextPath}/resources/css/bootstrap.min.css" rel="stylesheet">
      <link href="${contextPath}/resources/css/common.css" rel="stylesheet">
  </head>

  <body>

    <div class="container">
      <form method="POST" action="${contextPath}/login" class="form-signin">
        <h2 class="form-heading">Log in</h2>

        <div class="form-group ${error != null ? 'has-error' : ''}">
            <span class="alert alert-info">${message}${param.message[0]} <c:out value="${sessionScope.SPRING_SECURITY_LAST_EXCEPTION}"/></span>
            <input name="username" type="text" class="form-control" placeholder="Username"
                   autofocus="true"/>
            <input name="password" type="password" class="form-control" placeholder="Password"/>
            <span class="alert alert-danger"> <c:out value="${sessionScope.SPRING_SECURITY_LAST_EXCEPTION}"/></span>
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
            
            <br>

			<label for="captchaCode">Retype the characters from the
				picture:</label>


			<!-- Adding BotDetect Captcha to the page -->
			<botDetect:captcha id="basicExample" userInputID="captchaCode" />

			<div class="validationDiv">
				<input name="captchaCode" type="text" id="captchaCode"
					value="${basicExample.captchaCode}" /> <span class="correct">${basicExample.captchaCorrect}</span>
				<span class="incorrect">${basicExample.captchaIncorrect}</span>
			</div>
            
                            <div class="clearfix"></div>
                <br/>
                <label> Remember Me</label>
                <input type="checkbox" name="remember-me" />
                
                <br/><br/>
            

            <button class="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
            <button type="reset" class="btn btn-danger btn-lg btn-block"> Reset</button>
            <h4 class="text-center"><a href="${contextPath}/registration">Create an account</a></h4>
        </div>
      </form>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="${contextPath}/resources/js/bootstrap.min.js"></script>
  </body>
</html>
