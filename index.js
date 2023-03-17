// Model
const hamburgerMenuButtonAnimationKeyFrames = {
  opacity: 1,
  opacity: 0
};

const hamburgerMenuButtonAnimationKeyFramesReverse = {
  opacity: 0,
  opacity: 1
};

const hamburgerMenuButtonAnimationDuration = {
  duration: 200,
  fill: 'forwards',
  itterations: 1,
};


// View 
const moveSidebar = (dia) => {
  const sidebar = document.getElementById('sidebar');
  const hamburgerMenuButton = document.getElementById('hamburger-menu-button');

  if (dia === 'open') {
    sidebar.style.transform = 'translate(250px, 0px)'
    hamburgerMenuButton.animate(hamburgerMenuButton.style = hamburgerMenuButtonAnimationKeyFrames, hamburgerMenuButtonAnimationDuration);
  } else {
    sidebar.style.transform = 'translate(0px, 0px)'
    hamburgerMenuButton.animate(hamburgerMenuButton.style = hamburgerMenuButtonAnimationKeyFramesReverse, hamburgerMenuButtonAnimationDuration);
  }
};


// Control
const hamburgerClicked = () => {
  moveSidebar('open');
}; 

const sidebarCloseButtonClicked = () => {
  moveSidebar('close');
  console.log('helo')
};

