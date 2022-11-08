exports.handler = async (event) => {
    // All log statements are written to CloudWatch
    console.info('received:', event);

    const response = {
        statusCode: 200,
        body: "Path: Doc/show!"
    };
    
    return response;
}
