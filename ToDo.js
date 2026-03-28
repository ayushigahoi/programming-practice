let todo=[];

 let req = prompt("please enter the task");

 while(true){
    if(req=="quit"){
        console.log("you quit !");
        break;
    }

    if(req=="list"){
        
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }

    else if(req=="add"){
        let task=prompt("please enter the task you want to add in a list");
        todo.push(task);
        console.log("task added");
    }

    else if(req=="delete"){
        let index =prompt("enter the task index you want to delete");
        todo.splice(index,1);
        console.log("task deleted !")
    }
     req= prompt(" please enter the task");
 }


