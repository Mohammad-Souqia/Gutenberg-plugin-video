const { RichText, MediaUpload, PlainText, Input } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;
var el = wp.element.createElement;



// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('card-block/main', {
	title: 'Card',
	icon: 'heart',
	category: 'common',
	attributes: {
		body: {
			type: 'array',
			source: 'children',
			selector: '.card__body'
		},
		VideoUrl: {
			attribute: 'url',
			
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */




	edit (attributes, className, setAttributes){

		
		//  function openEvent () {
			
		// 		return (
		// 			<div className="button-container">
		// 				<img type="url" value={attributes.VideoUrl}></img>
		// 				<Button
		// 					onClick={openEvent}
		// 					className ='button button-large'
		// 				>
		// 					Click
		// 				</Button>
		// 			</div>
		// 		);
		// };

		return (
			<div className="container">
				<PlainText
 					onChange={ media => setAttributes({ VideoUrl: media.url }) }
 					type="url"
					value={attributes.VideoUrl}
					
				/>

				<Button
					onClick={openEvent}
					className="button button-large"
				>
					Enter
				</Button>
				
			</div>
		);
	},

	save ({ attributes }){

		const cardImage = (src, alt) => {
			if (!src) return null;

			if (alt) {
				return (
					<img
						className="card__image"
						src={src}
						alt={alt}
					/>
				);
			}

			// No alt set, so let's hide it from screen readers
			return (
				<img
					className="card__image"
					src={src}
					alt=""
					aria-hidden="true"
				/>
			);
		};

		return (
			<div className="card">
				{cardImage(attributes.imageUrl, attributes.imageAlt)}
				<div className="card__content">
					<h3 className="card__title">{attributes.title}</h3>
					<div className="card__body">
						{attributes.body}
					</div>
				</div>
			</div>
		);
	}
});