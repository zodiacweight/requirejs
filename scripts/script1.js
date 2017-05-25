var results = [];

function addResult(newResult) {
    results.push(newResult);
}
function updateScoreboard(vrb) {
    return vrb+"!";
}
//a little bit different way of doing it than the player module
module.exports = {
    addResult: addResult,
    updateScoreboard: updateScoreboard
};