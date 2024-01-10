
const results = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keps"]
};
function makeList(arr) {
    const failureItems = [];

    for (const element of arr) {
        failureItems.push(`<li class='text-warning'>${element}</li>`);
    }

    return failureItems;
}

const failuresList = makeList(results.success);

console.log(failuresList.join("\n"));
