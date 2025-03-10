# Overview

>An application that allows for users to create fitness workout tracks based on their personal music collection and exercise routines. These tracks include text-to-speech for exercise cues and allow for users to set which music should be set for specific intervals or based on the intensity of the interval. Includes a social aspect where users can share, download and rate routines from other users.
 
# The All-Mighty Styling Guide

## Names

### General Files

+ **names** of **git branches folders/files**, should be lowercase only.
+ multi-words to be **dashed-case**.
+ The exception to the rule is **js files used as Angular Controllers or Factories.**
    + Controllers should be **camelCased**.
    + Factories should be **UpperCamelCased**
    + see `File Structure > Angular` for more info.

```
/home/home.html
/members-only/members-only.html
/style/main.sass
/common/factories/SongGeneratorFactory.js
```

+ **tag, attribute, class,** and **id** names in **HTML files** should be lowercase only.
+ multi-words to be **dashed-case**.
+ corresponding **css type** files to be the same.

```
<panel>
<panel id="my-panel>
<side-menu class="menu dark-theme">
```
```
panel {
    float: none;
}
.side-menu {
    custom-attribute: 100;
}
```

### CSS/SCSS/SASS
+ Write all style sheets in **SASS**
> why? Sass is the largest superset of CSS and SCSS. You can do basic styling as you would with CSS/SCSS (just omit `;`'s and `{}`'s)
> or more complex scripting if needed. In a CSS/SCSS, complexity would be limited if you or another teammember needed it in the future.

### Angular
+ **Files intended as Factories or Controllers** should be **UpperCamelCased**.
+ **Resolves used as injectables** should be **lowerCamelCased**.
+ **Factory and Controller names** should be the same name as its filename.
+ **Factory** names should end with " **Factory** ".
+ **Controller** names should end with **Controller**.

```
/common/factories/SongGeneratorFactory.js
```

```
app.factory('SongGeneratorFactory')
app.controller('stateController')
```

## Javascript

+ always use semicolons when ending a statement.
+ try to avoid `switch` statements
> `switch` statements increses the chances of a buggy program, especially if a statement falls through.

#### Variables
+ variables intended for testing/temporary use should be prepended with an underscore. This way others won't mess with them!
```
$scope._test = "this is a test and I'll remove it later"
const _CONSTANT_VAR = "this has no bearing on the actual program"
```

### References
+ use `const` for all references (eg. packages).
```
const chalk = require('chalk');
```

+ prefer using `let` as local scoped variables instead of `var`. It's better memory management
```
var a = "outer"
function foo() {
    let a = "inner";
    return a;
}
console.log(foo()); //-> "inner"
console.log a //-> "outer"

### Arrow Functions
+ Try Arrow Functions for callbacks.
> Why? It creates a version of the function that executes in the context of this, which is usually what you want, and is a more concise syntax.

Follow basic best practices for Javascript

### Comments 
+ Try to prepend your comments with your initials.
```
// NP: This is a really great thing!
```


## Waffle.io

+ Comments should be utilized if extra detail is needed.
+ When looking at tickets, be sure to look at the comment symbol to see if there are comments.
    + simply click on the ticket to view comments.
+ Click on the balance scale to add a **size**, which is the velocity measurement that was discussed.
    + Try to get into this habit for the purposes of practicing/understanding the methodology.
    
## Github
+ notify a teammember of your choice to approve your pull request.
+ If you've been notified to approve one, either respond you will or notify someone else. Try to promptly reply
+ If everyone has defered, the pull-requester can approve. This should not be common.
