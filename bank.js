let balance = 0;
var trasactionHistory = [];

function getBalance() {

    window.alert("Current balance is : " + balance.toString());

}

function deposit() {

    let amount = window.prompt("Enter the amount to deposit");

    balance += Number(amount);

    trasactionHistory.push(`\n` + "Deposited : " + amount + getCurrentTime());

    getBalance();
}


function withdraw() {

    let amount = window.prompt("Enter the amount to withdraw");


        if (balance < amount) {

            window.alert("Insufficient balance. Re-Enter the value");
            withdraw();
        }else{

            balance -= Number(amount);

            trasactionHistory.push(`\n` + "Withdrawed : " + amount + getCurrentTime());

            window.alert(amount + " withdrawd from account!");
            getBalance();
 
        }
}

function viewTransactionHistory(){

    window.alert(`Transaction history:- \n ${trasactionHistory}`);

}

function getCurrentTime(){

    var currentDate = new Date();

    var dateTime = "\u00A0" +"\u00A0"+"\u00A0"+"\u00A0" + "(Date : " + currentDate.getDay() + '/' + currentDate.getMonth() + '/' + currentDate.getFullYear() + "\u00A0" + " Time : " + currentDate.getHours() + " : " + currentDate.getMinutes() + " : " + currentDate.getSeconds() +")";

    return dateTime;

}

function viewOptions() {

    while (true) {

        let choice = window.prompt("1.View Get Balance \n 2.Deposit Money \n 3.Withdraw Money \n 4.View Transaction History \n 0.Exit \n \n \n Enter your choice :");

        switch (choice) {

            case '1': getBalance(); break;
            case '2': deposit(); break;
            case '3': withdraw(); break;
            case '4': viewTransactionHistory(); break;
            case '0': break;
            default : window.alert("Invalid choice. Re-Enter the value");
            break;

        }

        if(choice == '0'){
            break;
        }
    }

    window.alert("Thank you for visiting");

}

viewOptions();