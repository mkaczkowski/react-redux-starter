import { getContext, wrapDisplayName } from 'recompose';
import { forceUpdatedComponent } from './forceUpdatedComponent';

/**
 * Provides the given component with translator functions
 * as props.
 */
export default function withTranslators(WrappedComponent) {
  const forceUpdatedWrappedComponent = forceUpdatedComponent(WrappedComponent);
  const withTranslators = getContext({ locale: () => {}, t: () => {}, tcnp: () => {}, transformInput: () => {} })(
    forceUpdatedWrappedComponent
  );
  withTranslators.displayName = wrapDisplayName(WrappedComponent, 'withTranslators');
  return withTranslators;
}
