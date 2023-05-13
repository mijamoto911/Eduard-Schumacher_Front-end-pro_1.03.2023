const smileys = ['😀', '😉', '🥹', '🤨', '😡'];
const counters = Array(smileys.length).fill(0);
const resultsContainer = document.querySelector('#results');

function displayResults() {
    resultsContainer.innerHTML = '';

    for (let i = 0; i < smileys.length; i++) {
        const smileyElement = document.createElement('span');
        smileyElement.textContent = smileys[i];
        smileyElement.className = 'smiley';

        smileyElement.addEventListener('click', (function(index) {
            return function() {
                incrementCounter(index);
            }
        })(i));

        resultsContainer.appendChild(smileyElement);
        const counterElement = document.createElement('span');
        counterElement.textContent = counters[i];
        resultsContainer.appendChild(counterElement);
        resultsContainer.appendChild(document.createElement('br'));
    }
}

function incrementCounter(index) {
    counters[index]++;
    displayResults();
}

displayResults();