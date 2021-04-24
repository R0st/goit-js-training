// chatty events
// приемы thtottling u debouncing с lodash

// mousemove и  throttle
const coordsOutputRef=document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter =0;

function onMouseMove(event) {
  mouseMoveCbInvocationCounter+=1;

  coordsOutputRef.textContent=`
    Количество вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y: ${event.clientY}
    `;
}
