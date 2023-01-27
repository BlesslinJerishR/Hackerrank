// Bit

function kangaroo(x1, v1, x2, v2) {
    return v2 < v1 && (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
}

// Test run:
console.log(kangaroo(0, 2, 5, 3));