# Express.js + MongoDB實現個人博客的後台

[![en](https://img.shields.io/badge/lang-en-brightgreen)](/README.md)

這項目存放著博客的代碼與開發日誌，開發個人博客的原因主要是想嘗試寫一個可公開的筆記用於記錄平常學到的知識點與實際作法，方便之後用到相關技術的時候可以<s>直接複製貼上</s>參考。
剛好最近學了`node.js`,`express.js`和相關的依賴庫，所以就趁還記得大部分的概念時實作一下。後台主要的功能有通過使用介面增刪查改每個Blog的內容，還有一些用戶認證、錯誤輸入的緩存、
從markdown轉到html元素的功能。

> 因為這是個人博客的後台，所以只供我自己使用記錄筆記，完成這後台項目後會嘗試實現公開的前端博客。

---

## 技術棧
* `node.js` w/ `express.js`
* `MongoDB` w/ `mongodb`
* html w/ `ejs`
* styling w/ pure `CSS`
* `CKEditor 5` for markdown content
* `multer` to store upload image

---

## 設計

博客的設計是由Figma完成的，詳細可以在這[連結](https://www.figma.com/file/HLHnjd30QOWMBZnXqELzzX/Backend-NodeJS?node-id=0%3A1)裡查看。

<img alt="design" src="https://user-images.githubusercontent.com/82365010/189623820-369c7630-bfb3-41aa-a3e3-4118b0191c4d.png">

---

## 開發日誌

每次更新此項目時都會在[這裏](/devlog.md)記錄項目變動以及更新內容. 盡量每次改動裡都有gif或png來更直觀的看到有什麼更新或變動。

---
