function myfunction(){
    let gold = document.getElementById("gold").value;
    let silver = document.getElementById("silver").value;
    let naqdi = document.getElementById("naqdi").value;
    let fgold = gold*120000;
    let fsilver = silver*1500;
    let amt = fgold+fsilver+naqdi;
    let cond = 1500*7.5;
    if(amt < cond){
        document.getElementById("show").innerText = "No zakat on this kind of amount";  
    } else{
        let zakat = amt/40;
    document.getElementById("show").innerText = zakat;
        
    }
}