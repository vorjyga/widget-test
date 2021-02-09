import './index.scss';
import 'pikaday/css/pikaday.css'

import icon from './calendar.svg'
import Pikaday from 'pikaday'
import {getButton} from "./elements/button";
import {buttonText, text, departText, returnText, title} from "./locals/en";
import {getInput} from "./elements/input";
import {getText} from "./elements/text";
import {connectCalendar} from "./calendar";

function createBlock(className: string, elements: HTMLElement[], elName = 'div'): HTMLElement {
    const element = document.createElement(elName);
    element.classList.add(className);
    elements.forEach((el) => {
        element.insertAdjacentElement('beforeend', el);
    });
    return element;
}

function start() {
    const urlParams = new URLSearchParams(window.location.search);

    const button = getButton({
        text: buttonText,
        color: urlParams.get('btn'),
    });
    const departInput = getInput({
        placeholder: departText,
        icon,
        className: 'depart-date',
        id: 'depart'
    });
    const returnInput = getInput({
        className: 'return-date',
        icon,
        placeholder: returnText,
        id: 'return',
    });

    const titleEl = getText({
        text: urlParams.has('title') ? urlParams.get('title') : title,
        className: 'widget-title'
    });

    const textEl = getText({
        text: urlParams.has('text') ? urlParams.get('text') : text,
        className: 'widget-text'
    });

    const inputs = createBlock('widget-inputs', [departInput, returnInput]);
    const formEl = createBlock('widget-form', [inputs, button], 'form');
    formEl.setAttribute('autocomplete', 'off');
    const bodyEl = createBlock('widget-body', [textEl, formEl]);
    const mainEl = createBlock('widget-main', [titleEl, bodyEl]);

    if (urlParams.has('background')) {
        mainEl.style.backgroundColor = urlParams.get('background');
    }

    document.body.insertAdjacentElement("beforeend", mainEl);
    document.addEventListener('DOMContentLoaded', () => {
        const selectedDates = {
            from: '',
            to: '',
        }
        connectCalendar(selectedDates);

        formEl.addEventListener('submit', (event) => {
            event.preventDefault();
            alert(`${selectedDates.from} - ${selectedDates.to}`);
        })
    })

}

start();
