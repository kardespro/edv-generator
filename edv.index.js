const prefix = "EDV GENERATOR"
 const cfg = require("./edv.config.json");
 /* * * Generate Fiscal ID * */
 function generate_fiscal_id(length) { var result = ''; var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; var charactersLength = characters.length; for ( var i = 0; i < length; i++ ) { result += characters.charAt(Math.floor(Math.random() * charactersLength)); } return result; }
 /* * * @<>.generate_fiscal_id(12) // Fiskal ID 12 Reqemden Ibaret Oldugu Ucun * */
 let generated = [] generated.push() // Bu Ozelligi Yaxinda Getirecem 
console.clear(100) 
console.log("</></></></></></></></></></>");
 console.log(`[${prefix}] Kod Yaradılır .... `); 
console.log("</></></></></></></></></></>"); 
console.log(`Ədv Geri Al Kodun Yaradıldı : Kodun ${generate_fiscal_id(12)}`); 
console.log(` </></></></></></></></></></></></></></> Kodu Yoxlamaq Üçün : Web : https://edvgerial.kapitalbank.az/az/dashboard Android : Abb , BirBank , UBank </></></></></></></></></></></></></></> `); 
console.log("</></></></></></></></></></>"); 
