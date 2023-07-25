window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json) => {
            json.sort(function(a, b) {
                return a.hoursInSpace < b.hoursInSpace;
            });

            let htmlBlock = document.getElementById('container');

            htmlBlock.innerHTML += `
            <h4>Number of Astronauts Displayed: ${json.length}</h4>
            `
            for (let i = 0; i < json.length; i++) {
                htmlBlock.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li id="status_${json[i].id}">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}"/>
                </div>
                `;
                if (json[i].active === true) {
                    document.getElementById(`status_${json[i].id}`).style.color = "green";
                } else{
                    document.getElementById(`status_${json[i].id}`).style.color = "red"
                }
            }
            
        });
    });
});