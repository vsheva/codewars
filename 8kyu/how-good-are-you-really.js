//https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
    let peersScore=yourPoints
for (let i of classPoints) {
    peersScore+=i;
}
let average = peersScore/(classPoints.length+1);
return yourPoints>=average
}
