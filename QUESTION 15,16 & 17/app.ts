//Q14
let guest_list : string[] = ['Shifa', 'Dua', 'Afrah', 'Ansa', 'Maheen'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] +  ',\nWe inivited you on dinner tomorrow,\nThank you\n');
// }



//Q15
let not_present : string = "Maheen";
let new_guest : string = "Sara Khan";
guest_list [4] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam ' + guest_list[i] +  ',\nWe inivited you on dinner tomorrow,\nThank you\n');
//}
//console.log(`Miss. ${not_present} will not coming tomorrow`)

//Q16
guest_list.unshift('Rehmat', 'Ayat', 'Iqra');
//for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Sir/Madam ' + guest_list[i] +  ',\nWe inivited you on dinner tomorrow, we found a big table so we decided to invite more 3 guest,\nThank you\n');
//}



//Q17
guest_list.unshift('Rehmat', 'Ayat', 'Iqra');
console.log('/n Unfortunately we can not arrange big table , Only two people allow,')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry sir/madam. ${remove_guest} you are not invited for dinner`);
}
for(let i=0; i<guest_list.length; i++){
  console.log('Respected Sir/Madam ' + guest_list[i] +  ',\nYes you are still invited on tomorrow dinner\nThank you\n');
}
guest_list.splice(0,2)
console.log(guest_list)
