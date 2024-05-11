function ps(){
    console.log("\n--- Successfully Your Account Created ---\n");
}

function nn(){
     an = prompt("• Enter the AC number -  ");
     cp = prompt("• Enter the Confirm Password - ");
}

function nl(){
    if(cp == savepass && name == sname){
        console.log("\nLogin Successful...👍\n\n" );
        console.log("          Welcome  🙏 \t"+ sname   );
    } 
    else {
        console.log("Try again");
        nn();
        nl();
    }
}

function deposit(){
    let d = prompt("• Deposit Amount - ");
    d = Number.parseInt(d);
    balance += d;
    console.log("Amount Added 💰👍");
    console.log("Deposited:", d);
    console.log("Remaining Balance:", balance);
    
}

function withdraw(){
    console.log("\n• Options -");
    console.log(" 1. To Withdraw");
    console.log(" 2. Exit");
    let wd = prompt("Choose Option - ");
    if (wd == 1){
        let money = prompt("Enter the Amount - ");
        money = Number.parseInt(money);
        if (money > balance) {
            console.log("Insufficient funds. Cannot withdraw.");
        } 
        else {
            balance -= money;
            console.log("Withdrawn:", money);
            console.log("Remaining Balance:", balance);
            console.log(withdraw());
        }
    } 
    else if(wd == 2){
        console.log("Exited...");
        console.log(nn());
        console.log(nl());
    }
}

let balance = 0;
console.log("       🏦 Welcome To PRV Bank 🏦 \n");
let an = prompt("• Enter the AC number -  ");
let save = an;
let name = prompt("• Enter your Name -  ");
let sname = name;
let np = prompt("• Enter the New Password - ");
np = Number.parseInt(np);
let cp = prompt("• Re-enter the Confirm Password - ");
let savepass = cp;

if (np == cp){
    ps();
    nn();
    nl();
    console.log("\n ❌ Account have Insufficient balance..😕");
    deposit();
    withdraw();
} else {
    while (np !== cp){
        console.log(" ⚠️ Invalid Confirm Password  ");
        np = prompt("• Enter the New Password - ");
        np = Number.parseInt(np);
        cp = prompt("• Re-enter the Confirm Password - ");
        if (np == cp){
            ps();
            nn();
            nl();
            console.log("\n ❌ Account have Insufficient balance..😕");
            deposit();
            withdraw();
        }
    }
}
