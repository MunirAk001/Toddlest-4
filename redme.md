# Synchronous, Asynchronous, Promises, Try/Catch, Async/Await, Fetch/Request

This repository contains code examples and explanations for topics related to synchronous and asynchronous JavaScript, promises, error handling using try/catch, async/await, and making fetch requests.

## Synchronous vs. Asynchronous

In JavaScript, synchronous code is executed in sequence - each statement waits for the previous statement to finish. Asynchronous code, on the other hand, allows multiple things to happen at the same time.

## Promises

Promises are used to handle asynchronous operations in JavaScript. They are a cleaner way to handle callbacks. A promise represents a value (or the reason it’s not available) that may be available now, or in the future, or never.

## Try/Catch

The try...catch statement marks a block of statements to try, and specifies a response should an exception be thrown.

## Async/Await

The async and await keywords in JavaScript are used to write asynchronous code that looks synchronous. async defines an asynchronous function and returns an AsyncFunction object. The await keyword is used to wait for a promise to settle.

Example:
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


## Fetch/Request

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

Example:
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
  


This is a basic explanation and example to get started understanding these topics in JavaScript. Feel free to explore the code examples provided in this repository for a deeper understanding.

استفاده از کلیدواژه "new Promise" در جاوااسکریپت به منظور ایجاد یک promise جدید به صورت دستی اشاره دارد. Promise یک الگوی برنامه‌نویسی است که به برنامه‌نویسان اجازه می‌دهد برنامه‌هایی را که بر اساس وقت‌گیر بودن یا فعالیت‌های ناهمگام (مانند درخواست‌های شبکه) می‌باشند به صورت بهتر و مدیریت‌پذیرتر پیاده‌سازی کنند.

با وجود شیوه ساخت promise بصورت مستقیم با "new Promise"، برنامه نویسان می‌توانند کدهای ناهمگام را به شکلی که بیشتر مطابق مدیریت پذیری و خوانا برای کدها باشد، پیاده‌سازی کنند. 

سینتکس "new Promise" در جاوا اسکریپت به شکل زیر است:

const myPromise = new Promise((resolve, reject) => {
  // کدی که کارهای async انجام می‌دهد
  // اگر کار موفقیت آمیز انجام شود:
  resolve("موفقیت‌آمیز!");
  // اگر کار با خطا روبرو شود:
  // reject("متن خطا");
});


در این مثال، ما یک promise جدید ایجاد می‌کنیم که ایجاد یک فعالیت ناهمگام مانند درخواست شبکه را شبیه‌سازی می‌کند. وقتی فعالیت به پایان می‌رسد، ما می‌توانیم از "resolve" برای اعلام موفقیت و بازگشت اطلاعات و یا از "reject" برای اعلام خطا استفاده کنیم.

به طور خلاصه، "new Promise" در جاوااسکریپت به برنامه‌نویسان اجازه می‌دهد که promise جدیدی را ایجاد کرده و فعالیت‌های ناهمگام را به شکل منظم و مدیریت‌پذیری پیاده‌سازی کنند.