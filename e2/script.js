// Sample data poem starter one 
const samplePoems = [
    "Poem: Layla and Majnun",
    "Excerpt in Arabic:",
    "أحبّك حبّاً لو تُحبّين مثله",
    "أصابك من وجدٍ عليّ جنونُ."
];

const feed = document.getElementById('feed');
const modal = document.getElementById('modal');
const uploadBtn = document.getElementById('upload-btn');
const postBtn = document.getElementById('post-btn');
const poemText = document.getElementById('poem-text');

// Display sample poems
function displayPoems() {
    samplePoems.forEach(poem => {
        const poemEl = document.createElement('div');
        poemEl.className = 'poem';
        poemEl.innerHTML = `<div class="poem-content">${poem}</div>`;
        feed.appendChild(poemEl);
    });
}

// Upload new poem
uploadBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

postBtn.addEventListener('click', () => {
    if (poemText.value.trim()) {
        const poemEl = document.createElement('div');
        poemEl.className = 'poem';
        poemEl.innerHTML = `<div class="poem-content">${poemText.value}</div>`;
        feed.prepend(poemEl);
        poemText.value = '';
        modal.style.display = 'none';
    }
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize
displayPoems();
