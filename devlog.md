### 2022.10.10
[HTML, CSS, Express.js]

Create Blog Details Page
- Attach the blog id to every blog card when rendering the home page.
- Fetch the blog details when click in the blog title with route paraameters.
- Display the fetched data in the view, like title, date, and markdown content.
- Style the HTML contents(from markdown to HTML elements) for more customized style.

<details>
  <summary>showcase</summary>
  <img width="400" src="https://user-images.githubusercontent.com/82365010/194804837-269bb2aa-e3e5-4565-96ab-57f67445a5f1.png">
  <img width="400" src="https://user-images.githubusercontent.com/82365010/194804901-5da7e13e-fde6-4826-962a-c4858e43e537.png">

</details>

---

### 2022.10.09
[Express.js]

Create new Blog
- Able to pass the markdown content in CKEditor.
- As well as the image upload from CKEditor to Express server.
- Create the Blog Model for interacting the data in database.
- Insert Blog data from the form input.
- Display all the blogs in the home page.
- Render the blog list with all blogs array.

<details>
  <summary>showcase</summary>
  <img width="800" src="https://user-images.githubusercontent.com/82365010/194745834-3bc6ea86-2f5c-4495-be86-37a72354e2c4.gif">
</details>

Other that that
- Move the home route from auth route to blog route.
- Add images path to gitignore.

---

### 2022.10.05
[HTML, CSS]

New Blog Page
- Create a form for the blog contents.
- Embed CKEditor into the form for the markdown content.

<details>
  <summary>showcase</summary>
  <img width="600" src="https://user-images.githubusercontent.com/82365010/194112720-673fdc35-c835-451c-b26d-605e5dc2da66.png">
  <img width="600" src="https://user-images.githubusercontent.com/82365010/194112699-6bc3ad2b-b7f3-4501-ab2f-15b29583c48a.png">
</details>

---

### 2022.10.04
[HTML, JS]

Authentication for protecting private routes
- Create middlewares for checking the user identity as well as the privilege.
- Redirect unauthenticated user to access the protected routes.
- Logout function by destroying the session.

Logout Icon
- Hover and active effect to make it more interactive.

<details>
  <summary>showcase</summary>
  <img width="1430" src="https://user-images.githubusercontent.com/82365010/193709621-19571e84-0f8d-4717-b2cb-c3134dc74ef6.png">
</details>

---

### 2022.10.03
[Express.js]

Login Function
- Establish database connection to mongodb.
- Create session storage for later authen and input cache.
- Login validation and error message.
- Caching inputs if not able to login successfully.

<details>
  <summary>showcase</summary>
  <img with="1026" src="https://user-images.githubusercontent.com/82365010/193562265-ebb7a178-fa83-404f-ab53-67f1457f86a4.gif">
</details>

**TODO**
- Protect the routes for further actions on manipulating the blogs.
- The further actions must be authenticated, probably checking it w/ session/cookies.
- Create blog page and logic behind it.

---

### 2022.10.02
[HTML/CSS]

Home Page

> Contains the navigation bar for browsing, manage all the blogs as well as creating new blog.
- Created the navigation bar.
- The blog lists for all the blogs.

<details>
  <summary>showcase</summary>
  <img with="1024" src="https://user-images.githubusercontent.com/82365010/193461038-1872c7ef-6546-49b4-aa74-cbeb8b5d1dc2.gif">
</details>

**TODO**
- Login Function
- Create database

---

### 2022.10.01
[HTML/CSS]

Login Page
- Animated the sun moving the right top corner.
- Created the input field for username and password.

<details>
  <summary>showcase</summary>
  <img with="1024" alt="" src="https://user-images.githubusercontent.com/82365010/193397618-0a317bb8-9228-481d-aeb0-e71d795eb74f.gif">
</details>

---

### 2022.09.12
[HTML/CSS]

Welcome Page
- Animated the sunrise.

<details>
  <summary>showcase</summary>
<img width="901" alt="sunrise" src="https://user-images.githubusercontent.com/82365010/189623893-6142a79c-e42f-40ed-bdae-a80129712168.gif">
</details>

---

### 2022.09.08
[HTML/CSS]

Welcome Page
- Coded the Welcome Page and animated the boat and sea waves.

<details>
  <summary>showcase</summary>
<img width="901" alt="sea-waves" src="https://user-images.githubusercontent.com/82365010/189623590-7c3b21a2-3a5e-4bc4-9044-c31012738cfd.gif">
</details>

---

### 2022.09.05
[Design]

Created most of the layout of the backend
- Welcome Page
- Login Page
- Home Page
- Manage Post Page

Here's the [design](https://www.figma.com/file/HLHnjd30QOWMBZnXqELzzX/Backend-NodeJS?node-id=0%3A1).

<img width="901" alt="design" src="https://user-images.githubusercontent.com/82365010/189623820-369c7630-bfb3-41aa-a3e3-4118b0191c4d.png">

---
