export function getNavigatorLanguage() {
    let language = (navigator.languages && navigator.languages[0]) || navigator.language;
    if (language.length > 2) {
        language = language.split("-")[0];
        language = language.split("_")[0];
    }
    return language;
}