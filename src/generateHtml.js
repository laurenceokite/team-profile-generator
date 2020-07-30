function generateCards (employees) {
    let cardOutput = ``
    for (let index = 0; index < employees.length; index++) {
        cardOutput = cardOutput + `<div class="col s12 m6 l4">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${employees[index].getName()}</span>
                    <ul class="collection">
                        <li class="collection-item blue-grey darken-1">${employees[index].getRole()}</li>
                        <li class="collection-item blue-grey darken-1">ID: ${employees[index].getId()}</li>`
        if (employees[index].role === 'Manager') {
            cardOutput = cardOutput + `
                        <li class="collection-item blue-grey darken-1">Office No. ${employees[index].getOffice()}</li>
                    `
        }            
        if (employees[index].role === 'Engineer') {
            cardOutput = cardOutput + `
                        <li class="collection-item blue-grey darken-1 card-action" style="padding: 10px 20px;"><a href="https://github.com/${employees[index].getGithub()}">Github</a></li>
                    `
        }
        if (employees[index].role === 'Intern') {
            cardOutput = cardOutput + `
                        <li class="collection-item blue-grey darken-1">${employees[index].getSchool()}</li>
                    `
        }
        cardOutput = cardOutput + `</ul>
                                </div>
                                <div class="card-action">
                                    <a href="mailto:${employees[index].getEmail()}">${employees[index].getEmail()}</a>
                                </div>    
                            </div>
                        </div>`
    }
    return cardOutput;
}
function generateHtml (teamName, employees) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>
<body>
    <nav>
        <div class="nav-wrapper">
          <a style="padding-left: 10px;" href="#" class="brand-logo" >${teamName}<!-- Title --></a>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            ${generateCards(employees)}
        </div>
    </div>
</body>
</html>
    `

        
}

module.exports = generateHtml;