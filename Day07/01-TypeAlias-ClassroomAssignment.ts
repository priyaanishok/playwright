
/*Classroom activity on union type :
 ------------------------------------


- Create a function that accepts only specific payment methods.


- Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".


- Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment method is chosen.


- Call the function with "UPI" and "CreditCard" as arguments.
*/

type PaymentMethod = "UPI" | "CreditCard" | "PayPal";

function makePayment(userChoice : PaymentMethod) {
    console.log("Payment chosen by the user:", userChoice);
}

makePayment("UPI");
makePayment("CreditCard");
makePayment("PayPal");
//makePayment("DebitCard"); //Argument of type '"DebitCard"' is not assignable to parameter of type 'PaymentMethod'.