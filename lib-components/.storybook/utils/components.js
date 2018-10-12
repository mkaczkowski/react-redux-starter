import React from 'react';

export function getComponentsLists(compStories) {
  let result = [];
  Object.keys(compStories).forEach(componentKey => {
    const componentStory = compStories[componentKey];
    const components = Object.values(componentStory);
    result.push(components);
  });
  return result;
}

export function prepareStoryFromComponents(componentLists) {
  return (
    <div>
      {componentLists.map((compList, index1) => (
        <React.Fragment key={index1}>
          {compList.map((comp, index2) => (
            <span style={{ margin: 15 }} key={index2}>
              {comp}
            </span>
          ))}
          <hr style={{ margin: 10 }} />
        </React.Fragment>
      ))}
    </div>
  );
}

export function prepareLpStoryFromComponents(componentLists) {
  return (
    <React.Fragment>
      {getComponentsLists(componentLists).map((compList, index) => {
        const component = compList[0];
        return React.cloneElement(component, [{ key: index }]);
      })}
    </React.Fragment>
  );
}
