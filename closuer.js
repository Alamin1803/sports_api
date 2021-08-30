
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
        div.innerHTML= `<img src='${element.strTeamBadge}'
        <h2>Teamsname:${element.strTeam}</h2>
        <h2>league:${element.strLeague}</h2>
        <h2>Teamsname:${element.strCountry}</h2>

        `
        container.appendChild(div)
    });
}
