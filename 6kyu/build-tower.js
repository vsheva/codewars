// ❓ DESCRIPTION:
//     Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]

// ✅

function buildPyramidTower(floors) {
    const tower = [];
    const width = 2 * floors - 1;

    for (let i = 0; i < floors; i++) {
        const spaces = " ".repeat((width - (2 * i)) / 2);
        const blocks = "*".repeat(2 * i + 1);
        tower.push(spaces + blocks + spaces);
    }

    return tower;
}





