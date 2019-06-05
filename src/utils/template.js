export default ({ markup, helmet }) => {
	return `<!DOCTYPE html>
			<html ${helmet.htmlAttributes.toString()}>
				<head>
					${helmet.title.toString()}
					${helmet.meta.toString()}
					${helmet.link.toString()}
                    ${helmet.script.toString()}				
				</head>
				<body ${helmet.bodyAttributes.toString()}>
					<div id="root">${markup}</div>
					<!--<script src="/dist/client.js" defer></script>-->
				</body>
			</html>`;
};
