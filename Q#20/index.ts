/**
 * Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 */

let languages: string[] = ["Urdu", "Pushto", "Punjabi", "Sindhi"];

// Printing the list of Languages
for(let i =0; i< languages.length; i++){
    console.log(`${i+1}. ${languages[i]}`);
}