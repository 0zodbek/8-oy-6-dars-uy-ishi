"use strict";
///////////////// 1-masala ///////////////////////////
// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
// ];
// function fetchSequentially(urls: string[]) {
//     let promise = Promise.resolve();
//     urls.forEach((url) => {
//         promise = promise
//             .then(() => {
//                 console.log(`Fetching from URL: ${url}`);
//                 return fetch(url);
//             })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Result:", data);
//             })
//             .catch((error) => {
//                 console.error("Error:", error.message);
//             });
//     });
//     return promise;
// }
// fetchSequentially(urls);
//////////////////////////// 2-masala ///////////////////////////
// const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/posts";
// function fetchData() {
//     console.log("Fetching data...");
//     Promise.all([
//         fetch(url1).then((response) => response.json()),
//         fetch(url2).then((response) => response.json()),
//     ])
//         .then((results) => {
//             console.log("Fetched data:");
//             console.log(results);
//         })
//         .catch((error) => {
//             console.error("Error fetching data:", error.message);
//         });
// }
// fetchData();
//////////////////////// 3-masala ////////////////////
// const url3 = "https://jsonplaceholder.typicode.com/photos";
// const url4 = "https://jsonplaceholder.typicode.com/todos";
// const url5 = "https://jsonplaceholder.typicode.com/comments";
// function fetchFastest() {
//     console.log("Fetching the fastest response...");
//     Promise.race([
//         fetch(url3).then((response) => response.json()),
//         fetch(url4).then((response) => response.json()),
//         fetch(url5).then((response) => response.json()),
//     ])
//         .then((result) => {
//             console.log("First completed request result:", result);
//         })
//         .catch((error) => {
//             console.error("Error:", error.message);
//         });
// }
// fetchFastest();
//////////////////////// 4-masala ////////////////////
// const fetchUrlsSequentially = async () => {
//     for (const url of urls) {
//         try {
//             console.log(`Fetching from URL: ${url}`);
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`HTTP Error: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log(`Result:`, data);
//         } catch (error) {
//             console.error(`Failed to fetch from URL: ${url}, Error: ${error.message}`);
//         }
//     }
// };
// fetchUrlsSequentially();
////////////////////// 5-masala /////////////////////
// const fetchParallel = async () => {
//     try {
//         const [usersResponse, postsResponse] = await Promise.all([
//             fetch(url1),
//             fetch(url2),
//         ]);
//         if (!usersResponse.ok || !postsResponse.ok) {
//             throw new Error("HTTP Error: One or more requests failed");
//         }
//         const users = await usersResponse.json();
//         const posts = await postsResponse.json();
//         console.log("Fetched data:");
//         console.log([users, posts]);
//     } catch (error) {
//         console.error("Xatolik yuz berdi, ma’lumotni yuklab bo‘lmadi.");
//     }
// };
// fetchParallel();
////////////////////// 6-masala ///////////////////////
// async function fetchFirstSuccessful() {
//   const urls = ["https://jsonplaceholder.typicode.com/photos", "https://jsonplaceholder.typicode.com/todos", "https://jsonplaceholder.typicode.com/comments"];
//   for (const url of urls) {
//     try {
//       const response = await fetch(url); 
//       if (response.ok) {
//         const data = await response.json(); 
//         console.log("First successful request result:", data);
//         return; 
//       }
//     } catch (error) {
//       console.error(`Error fetching from ${url}:`, error.message); 
//     }
//   }
//   console.log("Barcha so‘rovlar xato bilan tugadi.");
// }
// fetchFirstSuccessful();
////////////////////////// 7-masala ///////////////////
// function wrapData<T>(data: T): { status: string; data: T } {
//     return {
//         status: "success",
//         data: data,
//     };
// }
// const wrapString = wrapData("Hello, world!");
// console.log(wrapString);
// const wrapNumber = wrapData(42);
// console.log(wrapNumber);
// const wrapObject = wrapData({ id: 1, name: "JOHN" });
// console.log(wrapObject);
////////////////////// 8-masala ///////////////////////
// function findCommonElements<T>(array1: T[], array2: T[]): T[] {
//     return array1.filter((item) => array2.includes(item));
// }
// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [3, 4, 5, 6];
// const commonNumbers = findCommonElements(numbers1, numbers2);
// console.log("Common numbers:", commonNumbers);
// const strings1 = ["apple", "banana", "cherry"];
// const strings2 = ["banana", "cherry", "date"];
// const commonStrings = findCommonElements(strings1, strings2);
// console.log("Common strings:", commonStrings);
////////////////////////// 9-masala ////////////////////
// class Storage<T> {
//     private items: T[] = [];
//     addItem(item: T): void {
//         this.items.push(item);
//     }
//     removeItem(item: T): void {
//         const index = this.items.indexOf(item);
//         if (index !== -1) {
//             this.items.splice(index, 1);
//         }
//     }
//     getItems(): T[] {
//         return [...this.items];
//     }
// }
// const stringStorage = new Storage<string>();
// stringStorage.addItem("apple");
// stringStorage.addItem("banana");
// stringStorage.removeItem("apple");
// console.log(stringStorage.getItems());
// const numberStorage = new Storage<number>();
// numberStorage.addItem(42);
// numberStorage.addItem(7);
// numberStorage.removeItem(7);
// console.log(numberStorage.getItems());
