/**
 * PRINT MENI
 */
var menuContainer = document.getElementById('menu-container');

document.querySelector('.icon').addEventListener('click', slidePrintMenu);
// document.querySelector('.icon').addEventListener('touchstart', slidePrintMenu);

function slidePrintMenu() {
  menuContainer.classList.toggle('show');
  document.querySelector('.icon').classList.toggle('active');

}


/**
 * ACTIVATE PRINT STYLE
 */

document.querySelector('.btn-print').addEventListener('click', printStyle);
// document.querySelector('.btn-print').addEventListener('touchstart', printStyle);

function printStyle() {
  document.body.classList.toggle('print');
  document.querySelector('.btn-print').classList.toggle('active');
}