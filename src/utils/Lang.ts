/** traductions */

const locales = {
    fr: {
        title: "Titre",
    },
    en: {
        title: "Title",
    }
}

const getLang = (languageCode: string) => {
    switch (languageCode) {
        case "fr":
            return locales.fr;
            break;
        case "en":
            return locales.en;
            break;

        default:
            return locales.en;
            break;
    }
};

export const Lang = getLang(RNLocalize.getLocales()[0].languageCode);