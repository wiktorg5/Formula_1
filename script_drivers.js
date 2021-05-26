
function searchingDriver()
{
    let input = document.getElementById("search_driver").value;

    getDriverData(input).then((dr)=>{
            const drive = dr.MRData.DriverTable.Drivers[0];

            const {permanentNumber: number, code: cod, dateOfBirth: birth, givenName: name, familyName: surname,nationality } = drive;
            
            document.getElementById("birth").innerHTML = `Date of birth: ${birth}`;
            document.getElementById("cod").innerHTML = `Code: ${cod}`;
            document.getElementById("number").innerHTML = `Number: ${number}`;
            document.getElementById("driver_name").innerHTML = `${name} ${surname}`;
            document.getElementById("nationality").innerHTML = `Nationality: ${nationality}`;
    }).catch(err => {
        console.error(err);
    });

};


async function getDriverData(input){

    const link = await fetch(`http://ergast.com/api/f1/drivers/${input}.json`);
    const response = await link.json();
    

    return response;
            
};


