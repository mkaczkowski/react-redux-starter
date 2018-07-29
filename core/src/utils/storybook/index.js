import _pick from 'lodash/pick';

export function showConfirmAlert(data) {
  const r = confirm(`${data.header.props.message}\n${data.description.props.message}`);
  r ? data.handleOk() : data.handleCancel();
}

export function convertStories(pickedStories, storyBook, stories, omitStories?: Array<string>) {
  Object.keys(storyBook).forEach(storyKey => {
    if (!omitStories || !omitStories.includes(storyKey)) stories.add(storyKey, () => storyBook[storyKey]);
  });

  return _pick(storyBook, pickedStories);
}
