// ❓ DESCRIPTION:
//     You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//
// Our deck (is preloaded):
//
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// ✅ Solution:

// function defineSuit(card) {
//     switch (card.slice(-1)) {
//         case '♣':
//             return "clubs";
//         case '♦':
//             return "diamonds";
//         case '♥':
//             return "hearts";
//         case '♠':
//             return "spades";
//     }
// }

function defineSuit(card) {

    console.log(card.slice(-1))

    return {
         '♣': "clubs",
         '♦':"diamonds",
         '♥': "hearts",
         '♠': "spades",
    }[card.slice(-1)]
}

console.log(defineSuit("3♣"))


// function defineSuit(card) {
//     return {
//         '♣' : 'clubs',
//         '♦' : 'diamonds',
//         '♥' : 'hearts',
//         '♠' : 'spades'
//     }[card.substr(-1)]

// function defineSuit(card) {
//     if(card.includes('♥')) return 'hearts'
//     if(card.includes('♦')) return 'diamonds'
//     if(card.includes('♣')) return 'clubs'
//     if(card.includes('♠')) return 'spades'
// }