var locale = (navigator.language || navigator.userLanguage || 'en_us').split('-')[0]
console.log("mensaje");
if (locale == 'es') {
    document.location.href = 'https://www.sneakybaron.gg/es/';
}
