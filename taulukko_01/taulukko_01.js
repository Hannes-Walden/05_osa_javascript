let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

/* Harjoitus 1: */
teamMembers.forEach(function(member)
{
    console.log(member);
});

/* Harjoitus 2: */
teamMembers.shift();
console.log(teamMembers);

/* Harjoitus 3: */
teamMembers.pop();
console.log(teamMembers);

/* Harjoitus 4: */
teamMembers.unshift('Aleksi');
console.log(teamMembers);

/* Harjoitus 5: */
teamMembers.push('Linda');
console.log(teamMembers);

/* Harjoitus 6: */
let newTeamMembers = teamMembers.slice(2);
console.log(newTeamMembers);

/* Harjoitus 7: */
let index = teamMembers.indexOf('Miikka');
console.log(index);

/* Harjoitus 8: */
let Index = teamMembers.indexOf('Jaakko');
console.log(index);

/* Harjoitus 9: */
teamMembers.splice(2,1, 'Karoliina', 'Bettina');
console.log(teamMembers);

/* Harjoitus 10: */
let updatedTeamMembers = [...teamMembers, 'Hemmo'];
console.log(updatedTeamMembers);

/* Harjoitus 11: */
let copiedTeamMembers = teamMembers.slice();
console.log(copiedTeamMembers);

/* Harjoitus 12: */
let oldMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];
let newMembers = ['Tiina', 'Daniel'];

let updatedTeam = oldMembers.concat(newMembers);

console.log(updatedTeam);

/* Harjoitus 13: */
const amount = teamMembers.filter(name => name === 'Jukka').length;
console.log('Jukka esiintyy ${amount} kertaa listassa teamMembers');

/* Harjoitus 14: */
let uppercaseTeamMembers = teamMembers.map(member => member.toUpperCase());
console.log(uppercaseTeamMembers);