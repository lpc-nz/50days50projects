const smallCups = document.querySelectorAll('.cup-small');
const liter = document.getElementById('liters');
const percentage = document.getElementById('percentage');

const remained = document.getElementById('remained');

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => hilightCup(index));
  updateBigCup();
});

// create function that when user click each cup, it will hilight background color
function hilightCup(index) {
  //Checking if the user click and click again
  //it will remove the full class

  if (
    smallCups[index].classList.contains('full') &&
    !smallCups[index].nextElementSibling.classList.contains('full')
  ) {
    index--;
  }
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;

  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liter.innerText = `${2 - (250 * fullCups) / 1000} L`;
  }
}
