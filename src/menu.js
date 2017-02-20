import { observable } from 'mobx';

export default observable({
  user: true,
  markdown: false,
  nestedFields: false,
  registerMaterial: false,
  registerSimple: false,
  companyWidgets: false,
  companySimple: false,
});
