var subscription_key = "da2fa8124191437dbb4d88a1f40d7621";   // our azure key
        var endpoint = "https://etechinstitutetextapi.cognitiveservices.azure.com/"; // our azure end point key
        var path = '/text/analytics/v2.1/languages';
        var apiUrl = endpoint + path;
        function callAzure() 
            {
            var inputText = document.getElementById("inputtext").value;
            const data = {
                'documents': [
                    { 'id': '1', 'text': inputText }
                ]
            };
            fetch(apiUrl, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': subscription_key
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            }).then((response) => response.json())
                .then((result) => {
                    document.getElementById("output").innerText = JSON.stringify(result.documents[0] && result.documents[0].detectedLanguages[0].name);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }