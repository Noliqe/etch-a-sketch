const applySlider = document.querySelector('#applyGrid');
const grid = document.querySelector('#gridContainer');
const resetBtn = document.querySelector('#btn');
let slider = document.getElementById('myRange');
let output = document.getElementById('size');
const toggleEraser = document.querySelector('#toggleEraser');
const toggleRainbow = document.querySelector('#toggleRainbow');

let c = []; //check slider array
let e = 0; //check eraser
let f = 0; //check rainbow color

//When page is loaded start with 8x8 grid
document.addEventListener("DOMContentLoaded", function() {
    let rows = 8;
    let cols = 8;
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let board = document.createElement('div');
        board.classList.add('gridDiv');
        document.body.appendChild(board);
        grid.appendChild(board);
        board.setAttribute('style', 'aspect-ratio: 1;');
        if (f == 1) {
            board.addEventListener('mouseover', () => {
                board.style.backgroundColor = ("#" + ((1<<24)*Math.random() | 0).toString(16));
            });
        } else if (e == 1) {
            board.addEventListener('mouseover', () => {
                board.setAttribute('style', 'aspect-ratio: 1; background-color: white;');  
        })} else {
        stopToggleEraser()
        stopToggleRainbow()
        //Hover effect trail
        board.addEventListener('mouseover', () => {
            board.setAttribute('style', 'aspect-ratio: 1; background-color: blue;');
            return;
        });};
    }
    return;
});

//Default startGrid if array C is empty
function startGrid() {
    let rows = 8;
    let cols = 8;
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let board = document.createElement('div');
        board.classList.add('gridDiv');
        document.body.appendChild(board);
        grid.appendChild(board);
        board.setAttribute('style', 'aspect-ratio: 1;');
        if (f == 1) {
            board.addEventListener('mouseover', () => {
                board.style.backgroundColor = ("#" + ((1<<24)*Math.random() | 0).toString(16));
            });
        } else if (e == 1) {
            board.addEventListener('mouseover', () => {
                board.setAttribute('style', 'aspect-ratio: 1; background-color: white;');  
        })}  else {
            stopToggleEraser()
            stopToggleRainbow()
        //Hover effect trail
        board.addEventListener('mouseover', () => {
            board.setAttribute('style', 'aspect-ratio: 1; background-color: blue;');
            return;
        });};
    }
};


//Button event, ask how many rows and columns
resetBtn.addEventListener("click", (e) => {
    resetGrid();
    if (e == 0 || f == 0) {
        stopToggleEraser()
        stopToggleRainbow()
    }
});

//Event activates resetGrid
applySlider.addEventListener("click", (e) => {
    resetGrid();
    if (e == 0 || f == 0) {
        stopToggleEraser()
        stopToggleRainbow()
    }
});

//Reset current grid also fix bug at start when c is empty
function resetGrid() {
    if (c == '') {
    document
        .querySelectorAll(".gridDiv")
        .forEach((e) => e.parentNode.removeChild(e));
        startGrid();
        return;
    } else
    document
      .querySelectorAll(".gridDiv")
      .forEach((e) => e.parentNode.removeChild(e));
      sliderGrid();
}




//When page is loaded, sets text content to 8x8
document.addEventListener("DOMContentLoaded", function() {
    output.textContent = '8x8';
    
    //When slider is moved, stores value in array
    slider.oninput = function() {
        c = [];
        let a = this.value;
        output.textContent = a+'x'+a;
        c.push(this.value);
    }
});


//Sends slider input
function sliderGrid () {
    let rows = c;
    let cols = c;
    return(createGrid(rows, cols));
    
};


//Creates the grid
function createGrid(rows, cols) {
    document
    .querySelectorAll(".gridDiv")
    .forEach((e) => e.parentNode.removeChild(e));
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let board = document.createElement('div');
        board.classList.add('gridDiv');
        document.body.appendChild(board);
        grid.appendChild(board);
        board.setAttribute('style', 'aspect-ratio: 1;');
        if (f == 1) {
            board.addEventListener('mouseover', () => {
                board.style.backgroundColor = ("#" + ((1<<24)*Math.random() | 0).toString(16));
            });
        } else if (e == 1) {
            board.addEventListener('mouseover', () => {
                board.setAttribute('style', 'aspect-ratio: 1; background-color: white;');  
        })}  else {
            stopToggleEraser()
            stopToggleRainbow()
        //Hover effect trail
        board.addEventListener('mouseover', () => {
            board.setAttribute('style', 'aspect-ratio: 1; background-color: blue;');
            return;
        });};
    }
    return;
};

//Toggle eraser
toggleEraser.addEventListener('click', () => {
    if (e == '') {
    toggleEraser.setAttribute('style', 'background-color: rgba(44, 43, 43, 0.2);');
    stopToggleRainbow()
     if (c == '') {
        let rows = 8;
        let cols = 8;
    for (let i = 0; i < (rows * cols); i++) {
        
    let erase = document.getElementsByClassName('gridDiv')[i];
    erase.addEventListener('mouseover', () => {
        erase.style.backgroundColor = 'white';
        return(e = 1);
    });}} else {
        if (e == '') {
        stopToggleRainbow() 
        let rows = c;
        let cols = c;
        for (let i = 0; i < (rows * cols); i++) {
            let erase = document.getElementsByClassName('gridDiv')[i];
            erase.addEventListener('mouseover', () => {
                erase.style.backgroundColor = 'white';
                return(e = 1);
    })}}}} else {
        return(stopToggleEraser()) }
});

//Untoggle eraser
function stopToggleEraser () {
    if (e == 1) {
    toggleEraser.setAttribute('style', 'background-color: rgba(255, 0, 0, 0.2);');
     if (c == '') {
        let rows = 8;
        let cols = 8;
    for (let i = 0; i < (rows * cols); i++) {
        
    let erase = document.getElementsByClassName('gridDiv')[i];
    erase.addEventListener('mouseover', () => {
        erase.style.backgroundColor = 'blue';
        return(e = 0)
    });}} else {
        let rows = c;
        let cols = c;
        for (let i = 0; i < (rows * cols); i++) {
            
            let erase = document.getElementsByClassName('gridDiv')[i];
            erase.addEventListener('mouseover', () => {
                erase.style.backgroundColor = 'blue';
                return(e = 0) 
    })}}}
};

//Toggle Rainbow color
toggleRainbow.addEventListener('click', () => {
    if (f == '') {
    toggleRainbow.setAttribute('style', 'background-color: rgba(44, 43, 43, 0.2);');
    stopToggleEraser()
     if (c == '') {
        let rows = 8;
        let cols = 8;
    for (let i = 0; i < (rows * cols); i++) {
        
    let rainbow = document.getElementsByClassName('gridDiv')[i];
    rainbow.addEventListener('mouseover', () => {
        rainbow.style.backgroundColor = ("#" + ((1<<24)*Math.random() | 0).toString(16));
        return(f = 1);
    });}} else {
        if (f == '') {
        stopToggleEraser()
        let rows = c;
        let cols = c;
        for (let i = 0; i < (rows * cols); i++) {   
            let rainbow = document.getElementsByClassName('gridDiv')[i];
            rainbow.addEventListener('mouseover', () => {
                rainbow.style.backgroundColor = ("#" + ((1<<24)*Math.random() | 0).toString(16));
                return(f = 1);
    })}}}} else {
        return(stopToggleRainbow()) }
});

//Untoggle Rainbow color
function stopToggleRainbow () {
    if (f == 1) {
    toggleRainbow.setAttribute('style', 'background-color: rgba(255, 0, 0, 0.2);');
     if (c == '') {
        let rows = 8;
        let cols = 8;
    for (let i = 0; i < (rows * cols); i++) {
        
    let rainbow = document.getElementsByClassName('gridDiv')[i];
    rainbow.addEventListener('mouseover', () => {
        rainbow.style.backgroundColor = 'blue';
        return(f = 0)
    });}} else {
        let rows = c;
        let cols = c;
        for (let i = 0; i < (rows * cols); i++) {
            
            let rainbow = document.getElementsByClassName('gridDiv')[i];
            rainbow.addEventListener('mouseover', () => {
                rainbow.style.backgroundColor = 'blue';
                return(f = 0)
    })}}}
};
