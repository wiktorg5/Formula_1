function searchingTeam()
{
    let input = document.getElementById("search_driver").value;
    input = input.toLowerCase();

    getTeamData(input).then((dr)=>{
            const team = dr.MRData.ConstructorTable.Constructors[0];

            const  { name, nationality} = team;
            
            document.getElementById("name").innerHTML = `${name}`;
            document.getElementById("nationality").innerHTML = `Nationality: ${nationality}`;
            
    }).catch(err => {
        console.error(err);
    });

};


async function getTeamData(input){

    const link = await fetch(`http://ergast.com/api/f1/constructors/${input}.json`);
    const response = await link.json();
    

    return response;
            
};