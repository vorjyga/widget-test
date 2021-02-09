interface InputParams {
    placeholder: string;
    icon: string;
    className: string;
    id: string;
}


export const getInput = ({placeholder, className, icon, id}: InputParams): HTMLElement => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('id', id)
    input.setAttribute('autocomplete', 'off')
    input.classList.add('widget-input');

    const iconEl = document.createElement('img');
    iconEl.setAttribute('src', icon);
    iconEl.setAttribute('alt', 'calendar');
    iconEl.classList.add('widget-calendar-icon');

    const wrapper = document.createElement('div');
    wrapper.classList.add('widget-input-wrapper');
    if (className) {
        wrapper.classList.add(className)
    }
    wrapper.insertAdjacentElement("afterbegin", input);
    wrapper.insertAdjacentElement("beforeend", iconEl);

    return wrapper;
}
