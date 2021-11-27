const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop Through Empties
 for (const empty of empties) {
    empty.addEventListener('dargover', dragOver);
    empty.addEventListener('dargenter', dragEnter);
    empty.addEventListener('dargleave', dragLeave);
    empty.addEventListener('drop', dragDrop); 
 }

// Functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}
function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
