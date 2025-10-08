<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%><%@taglib
	uri="http://java.sun.com/jsp/jstl/core" prefix="c"%><%@ page
	language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Confirmación de matrícula</title>
</head>
l
<body>

	<h1 class="Titulo">Datos de matrícula</h1>
	<section id="detallematricula">

		<p>
			<span class="dato">Alumno</span>
			<c:out value="${apellido} ${apellido2}, ${nombre}"></c:out>
		</p>
		<p>
			<span class="dato">Email</span>

		</p>
		<p>
			<span class="dato">Fecha de nacimiento</span>
			<fmt:formatDate pattern="dd-mm-yyyy" value="${fechanacimiento}" />
			<!-- Crea objeto de LocalDate para seleccionar un dia, mes y alo concreto -->
		</p>
		<p>
			<span class="dato">Dia de la semana que nacimiento</span>
			<c:out value="${diasemanana}"></c:out>
		</p>
		<p>
			<span class="dato">Provincia Nacimiento</span>
			<c:out value="${provincia}"></c:out>
		</p>
		<p>
			<span class="dato">Emancipado</span>
			<c:choose>
				<c:when test="${emancipado != null}">
					<c:choose>
						<c:when test="${emancipado.equals('S')}">
							<c:out value="SI"></c:out>
						</c:when>
						<c:otherwise>
							<c:out value="NO"></c:out>
						</c:otherwise>
					</c:choose>
				</c:when>
				<c:otherwise>
					<c:if value="Sin especificar"></c:if>

				</c:otherwise>
			</c:choose>
		</p>
		
		<p>
			<c:if></c:if>
		</p>
		
		

	</section>

</body>
</html>