import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

export default () => (
  <AvForm>
    <AvField name="datetime" label="DateTime" type="datetime" />
    <AvField name="datetimeProp" label="DateTime (validate prop)" type="text" validate={{ datetime: true }} />
    <Button color="primary">Submit</Button>
  </AvForm>
);
