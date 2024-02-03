import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import localeString from './types/localeString';
import localeText from './types/localeText';
import localeMarkdown from './types/localeMarkdown';
import content from './content';
import project from './project';
import projectTag from './projectTag';
import testimonial from './testimonial';
import featuredTestimonials from './featuredTestimonials';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    localeString,
    localeText,
    localeMarkdown,
    content,
    featuredTestimonials,
    project,
    projectTag,
    testimonial,
  ]),
});
