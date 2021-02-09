interface TextParams {
    text: string;
    className: string;
}

export const getText = ({className, text}: TextParams): HTMLElement => {
    const textEl = document.createElement('div');
    textEl.innerText = text;
    textEl.classList.add(className);
    return textEl;
}
