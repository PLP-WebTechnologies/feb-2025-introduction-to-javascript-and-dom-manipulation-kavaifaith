// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeableText = document.getElementById('changeable-text');
    
    changeTextBtn.addEventListener('click', function() {
        changeableText.textContent = 'The text has been changed successfully!';
    });
    
    // 2. Modify CSS styles via JavaScript
    const styleDemo = document.getElementById('style-demo');
    const toggleStyleBtn = document.getElementById('toggle-style-btn');
    
    // Hover effect
    styleDemo.addEventListener('mouseover', function() {
        this.style.color = 'red';
        this.style.fontWeight = 'bold';
    });
    
    styleDemo.addEventListener('mouseout', function() {
        this.style.color = '';
        this.style.fontWeight = '';
    });
    
    // Button click effect
    let isToggled = false;
    toggleStyleBtn.addEventListener('click', function() {
        if (isToggled) {
            styleDemo.style.backgroundColor = '';
            styleDemo.style.padding = '';
        } else {
            styleDemo.style.backgroundColor = 'lightblue';
            styleDemo.style.padding = '10px';
        }
        isToggled = !isToggled;
    });
    
    // 3. Add or remove elements
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const elementContainer = document.getElementById('element-container');
    let elementCounter = 1;
    
    addElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = `New element #${elementCounter++}`;
        newElement.className = 'dynamic-element';
        elementContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        const elements = elementContainer.getElementsByClassName('dynamic-element');
        if (elements.length > 0) {
            elementContainer.removeChild(elements[elements.length - 1]);
            elementCounter--;
        }
    });
});