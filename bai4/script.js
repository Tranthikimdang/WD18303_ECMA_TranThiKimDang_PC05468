fetch('https://api.datausa.io/api/data?drilldowns=Nation&measures=Population')
  .then(response => response.json())
  .then(data => {
    const populationList = document.getElementById('populationList');
    let cons = 1;

    data.data.forEach(item => {
      const listItem = `
      <tr>
          <td>${cons++}</td> 
          <td>${item.Nation}</td>
          <td>${item.Year}</td>
          <td>${item.Population}</td>
      </tr>
    `;
      populationList.innerHTML += listItem;
    });
  });


