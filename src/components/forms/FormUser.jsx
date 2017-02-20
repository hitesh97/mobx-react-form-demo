import React from 'react';
import { observer } from 'mobx-react';

import MaterialTextField from '../inputs/MaterialTextField';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <div className="container material">
    <form>
      <h2>Star Wars Api (People)</h2>

      <MaterialTextField field={form.$('id')} />
      <MaterialTextField field={form.$('first_name')} />
      <MaterialTextField field={form.$('last_name')} />
      <FormControls form={form} />
    </form>
  </div>
));
