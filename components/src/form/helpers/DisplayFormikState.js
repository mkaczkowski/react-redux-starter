// @flow
import * as React from 'react';
import type { FormikProps } from 'formik';

const DisplayFormikState = (props: FormikProps) =>
  props.debug || process.env.SHOW_FORM_VALUES === 'true' ? (
    <div style={{ margin: '1rem 0', background: '#cecfd1', padding: '.5rem' }}>
      <strong>FORM props:</strong>
      <div>
        <code>errors:</code> {JSON.stringify(props.errors, null, 2)}
      </div>
      <div>
        <code>values:</code> {JSON.stringify(props.values, null, 2)}
      </div>
      <div>
        <code>touched:</code> {JSON.stringify(props.touched, null, 2)}
      </div>
      <div>
        <code>isSubmitting:</code> {JSON.stringify(props.isSubmitting, null, 2)}
      </div>
    </div>
  ) : null;

export default DisplayFormikState;
