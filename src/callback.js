exports.handler = async (event) => {
    let htmlBodyStr = `<!DOCTYPE html>
<html>
    <head>
    <title>OAuth Callback</title>
    </head>
    <body id="divOutput">
    <script>
        var hash = window.location.hash.substr(1);
        var result = hash.split('&').reduce(function (res, item) {
            var parts = item.split('=');
            res[parts[0]] = parts[1];
            return res;
        }, {});
        document.getElementById("divOutput").innerHTML = JSON.stringify(result);
    </script>
    </body>
</html>
`;

    const response = {
        statusCode: 200,
        headers: {
            "content-type": "text/html"
        },
        body: htmlBodyStr
    };
    
    return response;
}
