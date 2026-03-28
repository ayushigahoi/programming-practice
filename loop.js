let songs=[["darkhaust", "saiyan" ] , [ "end of begining","co2","dekha hi nhi"] ,["love", "arz kiya hai"]];
console.log(songs.length);

for(let i=0 ; i<songs.length; i++){
    console.log(i , songs[i]);
    for(let j=0 ; j<songs[i].length; j++ ){
        console.log(`j=${j} , ${ songs[i][j] } ` );
    }

}



