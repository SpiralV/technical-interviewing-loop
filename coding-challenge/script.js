const { default: axios } = require("axios")
nameArray = []
profPic = []

axios.get('https://randomuser.me/api/?inc=name,picture&results=2')
    .then((response) => {
        let winRAR = response.data.results
        // nameArray.forEach(response.data.results.name)
        // need for each loop to loop through the results and pull out the names i cant figure it out
        nameArray.push(winRAR[0])
        // profPic.push(response.data.results)
        profPic.push(winRAR[1])
        console.log(nameArray, profPic)
    })


//   profile photo, name