function recoverSecret(triplets) {
    let letters = new Set();
    triplets.forEach(triplet => triplet.forEach(letter => letters.add(letter)));
    letters = Array.from(letters);
    const findIndex = (letter) => letters.indexOf(letter);
    const matrix = letters.map(() => Array(letters.length).fill(false));
    triplets.forEach(triplet => {
        const [a, b, c] = triplet;
        matrix[findIndex(a)][findIndex(b)] = true;
        matrix[findIndex(b)][findIndex(c)] = true;
        matrix[findIndex(a)][findIndex(c)] = true;
        });
    let visited = new Set();
    let result = '';
    const visit = (letter) => {
        if (visited.has(letter)) {
            return;
        }
        visited.add(letter);
        for (let i = 0; i < letters.length; i++) {
            if (matrix[findIndex(letter)][i]) {
                visit(letters[i]);
            }
        }
        result = letter + result;
    };
    letters.forEach(letter => visit(letter));
    return result;
}
  //by aziz ammar