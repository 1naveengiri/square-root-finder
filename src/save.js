/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes, setAttributes }) {
	let num_sq = Math.sqrt( attributes.message );
	return (
		<p { ...useBlockProps.save() }>
			{ 'Square root of '+ attributes.message +' is ' + num_sq }
		</p>
	);

	// let num_sq = Math.sqrt( attributes.message );

	// return (
	// 	<>
	// 	<h3> Square root finder </h3>
	// 	<TextControl
	// 		label={ __( 'Enter the Number', 'gutenpride' ) }
	// 		value={ attributes.message }
	// 		onChange={ ( val ) => setAttributes( { message: val } ) }
	// 		type="number"
	// 	/>
	// 	</>
	// );
}
