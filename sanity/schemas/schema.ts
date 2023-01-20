import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import localeString from './types/localeString';
import localeText from './types/localeText';
import project from './project';
import testimonial from './testimonial';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([localeString, localeText, project, testimonial]),
});
