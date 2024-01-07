
fetch('https://catfact.ninja/facts')
    .then(function (response) {
        let elemets;

        response.json().then(function (jsonData) {
            console.log(jsonData.data);

            elements = jsonData.data.map(function (item) {
                return `<li>${item.fact}</li>`;
            });
            document.writeln("<ol>" + elements.join("") + "</ol>");
        });
    })
    .catch(function (err) {
        console.log(err);
    });
