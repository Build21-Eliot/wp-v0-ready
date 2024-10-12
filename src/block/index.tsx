import { BlockConfiguration } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import save from './save';

const block: BlockConfiguration = {
  title: __('WP V0 Ready', 'build21'),
  description: __('A custom block that supports Vercel V0 components.', 'build21'),
  category: 'widgets',
  icon: 'smiley',
  edit,
  save,
  attributes: {},
};

export default block;
