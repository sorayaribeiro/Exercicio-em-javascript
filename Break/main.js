//para a execução do loop

let nome = "Matheus";

for(let i = 0; i < 10; i =i + 1){

    

    if(i == 3){
        nome = "João";
    }
    if(i == 5 && nome == "joão"){
        console.log("O nome é joão");
        break;
    }
    console.log(i);
}