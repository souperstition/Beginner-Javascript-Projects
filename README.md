# AN ASSORTMENT OF BEGINNER JAVASCRIPT PROJECTS

## CONTENTS
- [Timer](#basic-timer)
- [Maze](#maze)
- [Simple Carousel Layout](#simple-carousel-layout)
- [To Do List](#to-do-list)
- [Pokemon Sprite Generator](#pokemon-sprite-generator)

## Basic Timer 
[Live Demo](https://itsdani.me/portfolio/timer/index.html)

<div style="text-align: center; margin: 2rem auto">
<img src="https://itsdani.me/portfolio/screenshots/timer.png" style="max-width: 600px" />
</div>

This project was completed as part of the Modern Javascript Bootcamp course on Udemy. Although the code was written under heavy guidance by the instructor, I added my own customizations along the way. I added some heavy styling to make the final result more responsive. I also edited the behaviors of the timer itself; for example, to have it reset to a default time once reaching zero.

### Resources
- [The Modern Javascript Bootcamp Course 2022](https://www.udemy.com/course-dashboard-redirect/?course_id=2634490) by Colt Steele and Stephen Grider

## Maze
[Live Demo](https://itsdani.me/portfolio/maze/index.html)

<div style="text-align: center; margin: 2rem auto">
<img src="https://itsdani.me/portfolio/screenshots/maze.png" style="max-width: 600px" />
</div>

This was another project created under heavy guidance via the Modern Javascript Bootcamp course. It uses a library called Matter.js. The project itself has some shortcomings, such as finicky controls and the need to refresh the page to adjust the size of the maze if the browser window resizes. 

These shortcomings aside, I felt that this project was a great learning experience. As someone who prioritizes responsiveness in web design, I was glad to see a project that adapted to any browser size. The math involved in generating the maze was also fascinating and very enjoyable.

### Resources
- [The Modern Javascript Bootcamp Course 2022](https://www.udemy.com/course-dashboard-redirect/?course_id=2634490) by Colt Steele and Stephen Grider

## Simple Carousel Layout
[Live Demo](https://itsdani.me/portfolio/horizontal-scroll-layout/index.html)

<div style="text-align: center; margin: 2rem auto">
<img src="https://itsdani.me/portfolio/screenshots/carousel.png" style="max-width: 600px" />
</div>

This was one of my first attempts at a layout which branched out from HTML/CSS into incorporating javascript. Looking back, I would change many things about the implementation - I have since seen many carousel layouts that far surpass this one! I also know a lot more about DOM manipulation now and could redesign this in a much more efficient way. However, I am glad I took the time to attempt this layout. I learned a great deal about how to deal with window sizes and scroll actions.

### Resources
- Photo by [Ani Adigyozalyan](https://unsplash.com/@aniadigyozalyan) at [unsplash.com](https://unsplash.com/photos/hz3g5dxWS30)

## To Do List
[Live Demo](https://itsdani.me/portfolio/todo/index.html)

<div style="text-align: center; margin: 2rem auto">
<img src="https://itsdani.me/portfolio/screenshots/todo.png" style="max-width: 600px" />
</div>

While taking The Web Developer Bootcamp course on Udemy, a task was given to create a to do list app in javascript that could be used via the console. However, since I had already studied javascript, I decided to try making my own browser-based implementation. 

Some challenges:
- I wanted to be able to add an item to the list when pressing Enter and have it immediately show up in an (initially) empty UL element on the page. Rather than creating checkboxes, I used the unicode element &#x2B1C; for better customization. This was added to a pseudo-class in CSS for the li element.
- I wanted the items to change to a "done" state when clicked. This would involve using a different icon (&#x2705;) and changing the text color to a lighter gray. This was done by toggling the class via an event listener.
- I also wanted each item to have a &#x274C; button to delete the item when clicked. However, I didn't want the button to show up all the time, but rather when an edit button was clicked.
- The edit button text would change from "edit" to "done" indicating that the user could exit out of the edit state.

If I wanted to spend more time on this project, I could have used requests to store the list items, but since this was a beginner project I decided to stop here. One idea I had was to have a button that would print the list to a file if a user wanted to save it.

### Resources
- [The Web Developer Bootcamp Course 2022](https://www.udemy.com/course-dashboard-redirect/?course_id=625204) by Colt Steele 

## Pokemon Sprite Generator
[Live Demo](https://itsdani.me/portfolio/pokemon/index.html)

<div style="text-align: center; margin: 2rem auto">
<img src="https://itsdani.me/portfolio/screenshots/pokemon.png" style="max-width: 600px" />
</div>

This was another project that was done during the The Web Developer Bootcamp course, but it was heavily customized during the creation process. The version on udemy required only to have the sprites printed out for the first 150 pokemon. I wanted a bit more functionality.

- First, I created a toggle button that would close the full list of pokemon when clicked.
- I then added an input where a user could type in the ID of the pokemon they wanted to access.
- When a number is entered, a container would be displayed showing the name of the pokemon, its ID number, and its sprite. It also had a button to close the container.
- I also decided to alter the full list of pokemon allowing each one to be clicked. It would then open the aforementioned container showing that pokemon.
- The contents of the container would empty (and be repopulated, if applicable) if any of the conditions were met:
    - The user clicked the close button
    - The user clicked a different pokemon in the master list
    - The user typed a different ID into the input field
- Finally, some styles were added to customize the final result.

### Resources
- [The Web Developer Bootcamp Course 2022](https://www.udemy.com/course-dashboard-redirect/?course_id=625204) by Colt Steele 
- [PokeApi](https://pokeapi.co/)
- [PokeApi Sprites](https://github.com/PokeAPI/sprites)
