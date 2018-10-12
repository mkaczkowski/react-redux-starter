function replacePlaceholders(text, { year, title }) {
  //prettier-ignore
  return text ? text
        .split('{{year}}')
        .join(year)
        .split('{{title}}')
        .join(title) : '';
}

export { replacePlaceholders };
