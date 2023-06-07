const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;//checks if res.statusCode exists. If it does not, it defaults to a status code of 500 (Internal Server Error)
    
    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
        //sends a JSON response to the client containing the error message and, if the NODE_ENV environment variable is set to "development", it also sends the stack trace.
        //A stack trace is a report that displays the function call hierarchy of an application at a given moment in time. It shows the sequence of functions that were called before an error occurred, starting from the point where the error occurred and going back to the root of the call stack
    })
};

module.exports = errorHandler;