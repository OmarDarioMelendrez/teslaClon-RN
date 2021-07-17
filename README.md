# Tesla clon app

This is an exercise to improve the form in what I make the layout of react-native applications.

## Installation
To install and run this proyect just type and execute
```bash
npm install
```

## Usage
```bash
npm start
```


### Screenshot

![](./images/screenshot.png)


## My process

### Built with

- React Native
- CSS properties
- Flexbox
- Javascript
- Ecmascript 6+

### What I learned

In this project I learned about properties that are not standardized in browsers by means of --webkit --moz --ms styles.
And to customize an input of type range thanks to these.
How to select DOM elements via [data-attributes].
I was also able to practice my JS knowledge using Ecmascript 6+ functionalities.

```html
<div class="slider-container">
  <h4 class="theme-title">THEME</h4>
  <input type="range" name="slider" min="1" max="3" value="1" id="slider" />
</div>
```
```css
#slider::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    cursor: pointer;
}
```
```js
calculate(){
    let [num1, operation, num2] = this.operand.split(" ");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    const typeOperation = {
        "+" :  num1 + num2, 
        "-" :  num1 - num2, 
        "/" :  num1 / num2, 
        "x" :  num1 * num2, 
    }
    this.operand = `${typeOperation[operation]}`;
}

```

### Continued development

I did realize this project to practice my skills and use all what I am learning, actually.
In my next projects I go to implement my knowledge in Node.js too, to make a site with persistence of information they.



### Useful resources

- [CSS-Tricks](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) - This article helped me to understand how to do for styling the input of the calculator.


## Author

- Website : [Omar Dario Melendrez](https://omardario.online)



## Acknowledgments

Like ever I Acknowledgments to my family for support me in my long hours when I dont exist because I am learning or coding with so much will.

