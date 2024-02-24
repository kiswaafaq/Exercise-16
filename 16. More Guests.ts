let guest_list: string[] = ['Kiswa','Uzma','Ajia'];

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Ms.' + guest_list[i] + ',\n\n\n It is our pleasure to invite you to our party. \n\n Thankyou!\n\n');

// }
let absent_Guest: string = 'Ajia';
let new_guest: string = 'Afaq';
guest_list[0] = new_guest;

for(let i=0; i<guest_list.length; i++){

console.log('Dear Ms.' + guest_list[i] + ',\n\n\n It is our pleasure to invite you to our party. \n\n Thankyou!\n\n');

}
console.log(`Ms. ${absent_Guest} is not coming to the party.`);
console.log('Good news! We have found a bi table so we are inviting more friends.');
guest_list.unshift('Ali');
guest_list.splice(2,0,'Imran Khan');
guest_list.push('Nawaz');

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Ms.' + guest_list[i] + ',\n\n\n It is our pleasure to invite you to our party. \n\n Thankyou!\n\n');
    
    }

