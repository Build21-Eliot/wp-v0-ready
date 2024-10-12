import { registerBlockType } from '@wordpress/blocks';
import block from './block/index';
import '@/styles.css';

registerBlockType('build21/wp-v0-ready', block);
