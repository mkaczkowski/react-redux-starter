import React from 'react';
import { LionessProvider } from '@lib/lioness';

export const getLioness = (translations = {}, lang = 'en') => storyFn => {
  return (
    <LionessProvider messages={translations} locale={lang}>
      {storyFn()}
    </LionessProvider>
  );
};

// const lioness = function(storyFn) {
//
//   const Story = storyFn;
//
//   return (
//     <LionessProvider messages={{}} locale="en">
//       <Story t={t} />
//     </LionessProvider>
//   );
// };
//
// export default lioness;
