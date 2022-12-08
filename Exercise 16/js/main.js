const getSum = () => {
    const intOne = Number(document.getElementById("intOne").value);
    const intTwo = Number(document.getElementById("intTwo").value);

    let result;

    if (intOne === intTwo) {
        result = (intOne + intTwo) * 3;
    } else {
        result = intOne + intTwo;
    }

    document.getElementById("result").innerHTML = `The sum is ${result}.`;
}