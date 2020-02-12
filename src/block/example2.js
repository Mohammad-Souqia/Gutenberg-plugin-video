/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
const { RichText, MediaUpload, PlainText } = wp.editor;
const { Button } = wp.components;
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

//  Import CSS.
import './editor.scss';
import './style.scss';



registerBlockType( 'cgb/block-my-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: ( 'VRIKS-Video' ), // Block title.
	icon: 'format-video', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes: {
		inputUrl: {
			attribute: 'url',
			selector: 'card__video'
		}
	},

	edit ( props )  {
		// let getVideo = props.attributes.inputUrl;
		const getVideo = (openEvent) => {
			if(propbs.attributes.inputUrl) {
				return{
					
				}
			}
		}
		return (
			<div className={ props.className }>				
				<div class="b">
					<p>VRIKS URL</p>
					<p>
						Füge einen Link zu dem Inhalt ein, den du auf deiner Website anzeigen möchtest.
					</p>
					<form class="forms">
						<input type="url"name="url" render={ ({ open }) => getVideo(open) } placeholder="Enter URL"></input>
						<button name="submit" >Einbetten</button>
					</form>
				</div>
			</div>
			
		);
	},
	
	
	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	

	
	save: ( props ) => {
		return (
		
				<div className={ props.className }>
					
					<p>— Hello from the frontend.</p>
					<p>ffasdsad
					</p>
					<p>
						
					</p>
				</div>

		);
	},
	
} );
