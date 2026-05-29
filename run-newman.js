require("dotenv").config();
const newman = require("newman");

newman.run({
    collection: require('./postman/collection/Airport_Gap_API.postman_collection.json'),
    environment: require('./postman/environment/Airport_Gap.postman_environment.json'),
    reporters: ['cli', 'htmlextra'],
    reporter: {
        htmlextra: {
            export: 'reports/newman/'
        }
    },
    envVar: [
        {key: 'email', value: process.env.EMAIL},
        {key: 'password', value: process.env.PASSWORD}
    ]
}, function (err, summary) {

    if (err) {
        console.error("Newman run failed:", err);
        process.exit(1);
    }

    console.log("Collection run complete!");

    console.log(
        "Requests:",
        summary.run.stats.requests.total
    );

    console.log(
        "Failures:",
        summary.run.failures.length
    );
}
)