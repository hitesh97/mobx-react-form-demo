import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import _ from 'lodash';

import MobxReactFormDevTools from 'mobx-react-form-devtools';
// import MobxReactFormDevTools from '../../devtools/lib'; // load from build
// import MobxReactFormDevTools from '../../devtools/src'; // load from source

const selected = menu => _.keys(_.pickBy(menu, _.identity))[0];

const switchTo = action(menu => (e) => {
  e.preventDefault();
  _.map(menu, ($val, $key) => _.set(menu, $key, false));
  _.set(menu, e.target.value, true);
  MobxReactFormDevTools.select(e.target.value);
});

export default observer(({ menu }) => (
  <div className="menu clearfix">
    <a
      href="https://www.npmjs.com/package/mobx-react-form"
      className="right"
      data-tip="NPM"
    > <i className="fa fa-archive" />
    </a>
    <a
      href="https://github.com/foxhound87/mobx-react-form"
      className="right"
      data-tip="GitHub"
    > <i className="fa fa-github" />
    </a>
    <span className="left label">SELECT DEMO:</span>
    <span className="left">
      <select name="menu" onChange={switchTo(menu)} defaultValue={selected(menu)}>
        <option value="user">User</option>
        <option value="registerMaterial">Register (Material UI)</option>
        <option value="registerSimple">Register (Simple)</option>
        <option value="companyWidgets">Company (React Widgets)</option>
        <option value="companySimple">Company (Simple)</option>
        <option value="nestedFields">Nested Fields</option>
        <option value="markdown">Markdown</option>
      </select>
    </span>
  </div>
));
