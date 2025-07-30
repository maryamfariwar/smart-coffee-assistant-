function startCoffeeAssistant(){

//login and access part ://

let username=prompt(`Enter you name (admin or user)`); 
let password=prompt(`enter you password (1234)`);

  if ((username === "admin" || username === "user") && password === "1234") {
 
    let role = username === "admin" ? "admin" : "user" ;
    let securityLevel = role === "admin" ? "high" : "low";
  
    alert(`Login successful! Welcome, ${role.toUpperCase()} (security: ${securityLevel})`);


  // coffee order: //
   let name= prompt(`What is your name ?`);
   let age= parseInt(prompt(`How old are you ?`));
   let coffeeType=prompt(`What kind of coffee whould you like(latte, espresso, cappuccino)`).toLowerCase();
   let quantity= parseInt(prompt(`How many cups do you want?`));

   let pricePerCup= 0;
   if( coffeeType=== "latte"){
    pricePerCup= 3.5;
   }else if (coffeeType === "espresso"){
    pricePerCup = 2.5;
   }else if (coffeeType === "cappuccino"){
    pricePerCup = 4.0;
   }else{
    alert( "invalid coffee type have been selected !");
    return;
   }
   let originalTotal=pricePerCup * quantity;
   let discount=( age <18 || age>60 ) ? originalTotal * 0.10 : 0;
   let discountedTotal= originalTotal-discount;

// bill//
   let splitCount= parseInt(prompt(`How many people are splitting the bill ?( 1, 2, or 3)`));
   let tipPercent= parseInt(prompt(`Enter tip percentage (0, 5, 10, 0r 15 )`));

   let tipAmount= (discountedTotal * tipPercent)/100;
   let totalWithTip= discountedTotal + tipAmount;
   let perPerson= totalWithTip/splitCount;


   alert(`Hi ${name}!\n`+
    `You ordered ${quantity} ${coffeeType}(s).\n`+
    `Original Total : $${originalTotal.toFixed(2)}\n`+
    `Discount: $${discount.toFixed(2)}\n`+
    `Tip: $${tipAmount.toFixed(2)}\n`+
    `Total with tip: $${totalWithTip.toFixed(2)}\n`+
    `Split between ${splitCount} People: $${ perPerson.toFixed(2)} each`);
    }else{
      alert( `Login Failed :), Invalid username or password ! `);
    }

  }
document.getElementById("startButton").addEventListener("click", function() {
  startCoffeeAssistant();
});
  










   









 
