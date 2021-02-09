interface ButtonParams {
    text: string;
    color?: string;
}

export const getButton = ({text, color}: ButtonParams): HTMLElement => {
   const button = document.createElement('button');
   button.innerHTML = text;
   button.classList.add('widget-button');
   if (color) {
       button.style.backgroundColor = color;
   }
   return button;
}
