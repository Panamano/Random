function speak(before, after) {
    if(before && typeof before === "function") {
        before();
    }
    console.log("Mowa...");
    if(after && typeof after === "function") {
        after();
    }
}
// asdasdasda