/**
 * They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 */
var landmarks = {
    FaisalMosque: "Islamabad",
    MinarePakistan: "Lahore",
    MzareQuaid: "Karachi",
};
for (var landmark in landmarks) {
    console.log("".concat(landmark, " - Located in ").concat(landmarks[landmark]));
}
