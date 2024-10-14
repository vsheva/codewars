function isLucky(n) {
    //your code here
    n=n.toString();
    let sum=0
    for(let i=0;i<n.length;i++) {
        sum+=n[i]
    }
    return sum%9===0

}
