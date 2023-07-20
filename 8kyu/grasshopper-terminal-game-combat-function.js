// ❓ DESCRIPTION:
//    Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// ✅ SOLUTION:

function combat(health, damage) {
    return health > damage ? health - damage : 0;
}

console.log(combat(100, 5))