import _fromPairs from 'lodash/fromPairs';

export function prepareTranslations(translations, language = 'en') {
  const translationsPairs = {};
  Object.keys(translations).forEach(key => {
    const value = translations[key];
    translationsPairs[key] = {
      msgid: key,
      msgstr: [value],
    };
  });

  return [
    language,
    {
      translations: {
        '': translationsPairs,
      },
    },
  ];
}

export async function convertTranslations(languages) {
  let result = await Promise.all(
    languages.map(async language => {
      const translations = await import(`./../../../../locales/${language}.json`);
      return prepareTranslations(translations, language);
    })
  );
  return _fromPairs(result);
}

export async function setupTranslations(languages) {
  const lang = languages || [document.documentElement.lang];
  return await convertTranslations(lang);
}
