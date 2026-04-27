function parseJSON(jsonString) {
    try {
        const result = JSON.parse(jsonString);
        console.log("Parsed successfully:", result);
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log("SyntaxError: Invalid JSON format.");
        } else {
            console.log("Unexpected error:", error.message);
        }
    }
}

// Example with invalid JSON
const invalidJSON = '{ "name": "John", age: 30 }'; // Missing quotes around age

parseJSON(invalidJSON);