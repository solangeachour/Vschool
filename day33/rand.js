var step1 = ["scissors", "rocks", "wins"];
var step2 = ["scissors", "rocks", "paper"];
var choice = function (a, b) {
    if (step1[a] === "scissors") {
        if (step2[b] === "rocks") {
            console.log("rocks wins");
        } else
        if (step2[b] === "scissors") {
            console.log("rocks wins");
        } else
        if (step2[b] === "paper") {
            console.log("rocks wins");
        }
    }

    if (step1[a] === "rocks") {
        if (step2[b] === "scissors") {
            console.log("rocks wins");
        } else
        if (step2[b] === "scissors") {
            console.log("rocks wins");
        } else
        if (step2[b] === "paper") {
            console.log("rocks wins");
        }
    }

    if (step1[a] === "wins") {
        if (step2[b] === "scissors") {
            console.log("rocks wins");
        } else
        if (step2[b] === "rocks") {
            console.log("rocks wins");
        } else
        if (step2[b] === "paper") {
            console.log("rocks wins");
        }
    }
}
choice(3,2);