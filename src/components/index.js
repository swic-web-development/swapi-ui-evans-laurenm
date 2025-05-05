fetch('https://www.swapi.tech/api/people/4/')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
