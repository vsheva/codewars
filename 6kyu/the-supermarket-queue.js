// Description:
//     There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//
//     input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.
//     output
// The function should return an integer, the total time required.
//
//     Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)
//
// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times
//
// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.
//
// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
//     N.B. You should assume that all the test input will be valid, as specified above.
//
//     P.S. The situation in this kata can be likened to the more-computer-science-related
//     idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

//algo
//1) разбить массив на столбцы по количеству касс
//2) посчитать время в каждой кассе (столбце)
//3) сравнить и вывести максимальное время



// function queueTime(customers, n) {
//
//     customers.map((el, n)=>{
//       const loop=
//     })
// }

function queueTime(customers, n) {

    // Make an array containing n amount of elements,
    // n representing the number of tills,
    // and fill with zeroes
    let tills = new Array(n).fill(0);
    console.log("tills", tills) //tills [ 0, 0 ]

    // Iterate through the customers
    for (let time of customers) {

        // Find the till that has the least time
        let idx = tills.indexOf(Math.min(...tills));
        console.log("idx", idx) //0..1  ..  0..1

        // Add the time, representing the customer to
        // the till that has the least time
        tills[idx] += time;
        console.log("tills[idx]", tills[idx])
        console.log("till time", tills) //[2,0] ... [2,3]  ...[12,3] ...[12,5]
    }

    // Return the till that has the longest wait time
    // This is the required time to get all customers
    // through the que.
    return Math.max(...tills);
}

console.log(queueTime([2,3,10,2], 2))



