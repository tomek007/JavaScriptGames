document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid');
    const width = 8;
    const squres = [];

    const candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green'
    ];

    //Create Board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.setAttribute('draggable', true);
            square.setAttribute('id', i);
            let randomColor = Math.floor(Math.random() * candyColors.length);
            square.style.backgroundColor = candyColors[randomColor];
            grid.appendChild(square);
            squres.push(square);
        }
    }

    createBoard();

    //Drag the candies
    let colorBeingDragged;
    let colorBeingReplaced;
    let squareIdBeingDragged;
    let squareIdBeingReplaced;

    squres.forEach(square => square.addEventListener('dragstart', dragStart));
    squres.forEach(square => square.addEventListener('dragend', dragEnd));
    squres.forEach(square => square.addEventListener('dragover', dragOver));
    squres.forEach(square => square.addEventListener('dragenter', dragEnter));
    squres.forEach(square => square.addEventListener('dragleave', dragLeave));
    squres.forEach(square => square.addEventListener('drop', dragDrop));

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor;
        squareIdBeingDragged = parseInt(this.id);
        console.log(colorBeingDragged);
        console.log(this.id, 'dragStart');
    }

    function dragOver(e) {
        e.preventDefault();
        console.log(this.id, 'dragOver');
    }

    function dragEnter(e) {
        e.preventDefault();
        console.log(this.id, 'dragEnter');
    }

    function dragLeave() {
        console.log(this.id, 'dragLeave');
    }

    function dragDrop() {
        console.log(this.id, 'dragDrop');
        colorBeingReplaced = this.style.backgroundColor;
        console.log(colorBeingReplaced);
        squareIdBeingReplaced = parseInt(this.id);
        squres[squareIdBeingReplaced].style.backgroundColor = squres[squareIdBeingDragged].style.backgroundColor;
    }

    function dragEnd() {
        console.log(this.id, 'dragEnd');

        let validMoves = [
            squareIdBeingDragged - 1,
            squareIdBeingDragged - width,
            squareIdBeingDragged + 1,
            squareIdBeingDragged + width
        ]




    }

});