function searchingTrack()
{
    let input = document.getElementById("search_driver").value;
    input = input.replace(" ", "_").toLowerCase();

    getTrackData(input).then((dr)=>{
            const track = dr.MRData.CircuitTable.Circuits[0];

            const  {circuitName} = track;

            const trackLocation = dr.MRData.CircuitTable.Circuits[0].Location;

            const {locality, country} = trackLocation;
            
            document.getElementById("circuitName").innerHTML = `${circuitName}`;
            document.getElementById("locality").innerHTML = `Locality: ${locality}`;
            document.getElementById("country").innerHTML = `Country: ${country}`;
            
    }).catch(err => {
        console.error(err);
    });

};


async function getTrackData(input){

    const link = await fetch(`http://ergast.com/api/f1/circuits/${input}.json`);
    const response = await link.json();
    

    return response;
            
};