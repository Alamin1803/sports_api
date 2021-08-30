
function stopWathc(){
    const input= document.getElementById('input');
    const inputvalue = input.value;
    input.value =''
   fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputvalue}`)
   .then(res=>res.json())
   .then(teamName=>getTeam(teamName.teams))
}

const getTeam=data=>{
    const container=document.getElementById('section');
    container.textContent= '';
    data.forEach(element => {
        console.log(element)
        const div= document.createElement('div');
        div.classList.add('divy');
        div.innerHTML= `<img src='${element.strTeamBadge}'
        <h1>Teams Name: ${element.strTeam}</h1>
        <h4>League: ${element.strLeague}</h4>
        <h4>Country name:${element.strCountry}</h4>

        `
        container.appendChild(div)
    });
}
