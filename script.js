var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');
var codeResult = '<h1>Un peu de littérature</h1>\n'+
		'<p>\n'+
			'J\'aime beaucoup lire les <strong>romans policiers</strong>. Un de mes auteurs préférés est Sir <a href="https://fr.wikipedia.org/wiki/Arthur_Conan_Doyle" title="Article Wikipédia sur Arthur Conan Doyle">Arthur Conan Doyle</a>. Mon roman de prédilection est <a href="https://fr.wikipedia.org/wiki/Le_Chien_des_Baskerville">Le Chien des Baskerville</a>. \n'+
		'</p>\n'+
		'<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Houn-35.jpg/250px-Houn-35.jpg" >';
var htmlCodeInit = '';

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);