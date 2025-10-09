let a1 = [3,2,1];
let a2 = [1,2];
let total = 0;

const devolver = (a1, a2, total) =>{

    if(a1.length<a2.length){
        let dif= a2.lenght-a1.length;
        console.log(dif);
        for(let i= 0; i<dif; i++){
            a1.push(1);   
        }
        console.log(a1);
    }else if(a1.length>a2.length){
        let dif= a1.length-a2.length;
        console.log(dif);
        for(let i= 0; i<dif; i++){
            a2.push(1);
        }
        console.log(a2);
    }else{
        
        for(let i= 0; i<a1.length; i++){
            total = total + a1[i]+a2[i];
        }
        console.log(total);
    }
}

devolver(a1, a2, total);
