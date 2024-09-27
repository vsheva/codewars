function isPalindrome(x) {
    x = x.toLowerCase();
    for (let j = 0, i = x.length - 1; j < i; j++, i--) {
        if (x[i] !== x[j]) {
            return false
        }
    }
    return true
}
