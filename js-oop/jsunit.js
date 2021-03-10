function assertEquals(expected, actual, successMessage) {
    if (expected !== actual) {
        throw new Error(`Error. Expected ${expected} is not equal to actual ${actual}`);
    }
    if (successMessage) {
        console.log(successMessage);
    }
}
