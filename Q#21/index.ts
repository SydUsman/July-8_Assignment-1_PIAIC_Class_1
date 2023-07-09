/**
 * They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 */

const placeList: { [name: string]: string }= {
    FaisalMosque:"Islamabad",
    MinarePakistan:"Lahore",
    MzareQuaid:"Karachi",

}


  for (const index in placeList) {
    console.log(`${index} - Located in ${placeList[index]}`);
  }
  