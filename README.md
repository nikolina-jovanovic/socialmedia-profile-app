** Social media profile app **

This app is a part of some social media app. Here, user can type some post, change profile info (insert a profile photo from computer, change name,birth date, education, country,city),etc.

Sign Up form:
![sm-profile-app1](https://user-images.githubusercontent.com/85742865/133528821-878283ca-dde5-44bb-a2ef-c2c5c1e3e98c.png)

Home page:
![sm-profile-app3](https://user-images.githubusercontent.com/85742865/133528949-ace09f40-918a-451f-bbe2-04afec8e5b1b.png)

Posting a status:
![sm-profile-app4](https://user-images.githubusercontent.com/85742865/133528952-44cb26c4-c129-4934-8f71-4ab6adc58f30.png)

Clicking on "Profile":
![sm-profile-app5](https://user-images.githubusercontent.com/85742865/133529011-1a3b6d6d-4204-4209-ad82-d82aedb021e9.png)

Changing profile photo (importing from computer):
![sm-profile-app6](https://user-images.githubusercontent.com/85742865/133529060-c8fd3522-cd95-4eb6-a5d6-5ec23c005d47.png)

Editing user info:
![sm-profile-app7](https://user-images.githubusercontent.com/85742865/133529114-301ec866-5b9f-495e-af6a-5e34ecf7294a.png)

Showing info after saving changes:
![sm-profile-app8](https://user-images.githubusercontent.com/85742865/133529209-ebdc747b-81ac-472f-bb8f-2f0cd57e6bb4.png)



How it looks and how it works? 
First view when page loads is SignUp component. It contains four input fields (first name, last name, email and password). Down below are 'Sign Up' and 'Sign In' buttons. Sign In button doesn't work,and it is here for aesthetic reasons. Filling out form all inputs are required. Email should contain "@" and password lenght must be 8 characters or more. If user doesn't fill out form like it should be, an alert pops up with appropriate message. When clicking 'Sign Up' button validation is done,and if everything is filled correctly, SignUp component dissapears and appears HomePage component. But not right away, there is React Loader Spinner for 3 seconds to make things look more realistic. Here, user can see navigation bar - Home, Profile (with a small round profile photo) and on the right side Log Out. In the middle of a page there is a text field which logic is done in new component: Form. Form component contains Posts and Post components. Its job is to provide user abillity to type anything he/she wants and post it,just like a status. When user clicks 'post', their post appears down below and can be liked and disliked (simple counter). Let's go back to HomePage component. As we can see Profile in navigation bar, clicking on it pops up a modal box, MyProfile component. Here,we can see profile photo (by defauld), and button down below with an icon of a camera. Clicking on this button,we can add a new profile photo from our computer. After choosing, new button is added: Remove. We can remove our photo and go back to default one. On the right side,there are information about person. Name, last name and an email. Down, there is a 'Edit Profile' button. Clicking on it,user can change his/her first name,last name and add some aditional info: Birthday, country, city, education and hobbies. Of course, there is 'Save Changes' button or simple left arrow button to go back.

Clicking on 'Log Out' button, we go back to Sign Up component.

For making this app i used: React Hooks (useState), Ternary Operators for conditional rendering, React loader Spinner, Events: onClick, onChange
