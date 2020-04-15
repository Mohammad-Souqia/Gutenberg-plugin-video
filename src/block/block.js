
// Import our CSS files
import './style.scss';
import './editor.scss';

(function (blocks, editor, components, i18n, element) {
	var __ = i18n.__
	var el = element.createElement
	var registerBlockType = blocks.registerBlockType
	
  
	

	registerBlockType('vizzi/video-embed', { // The name of our block. Must be a string with prefix. Example: my-plugin/my-custom-block.
	  title: __('Video'), // The title of our block.
	  description: __('A custom block for displaying Videos.'), // The description of our block.
	  icon: 'format-video', // Dashicon icon for our block. Custom icons can be added using inline SVGs.
	  category: 'common', // The category of the block.
	  supports: {
		align: true,
		alignWide: true
	  },
	  attributes: { // Necessary for saving block content.
		title: {
			type: 'string',
			source: 'text',
			selector: '.video_input',
		},
		height:{
			type: 'string',
			source: 'text',
			selector: '.video_input',
		},
		width:{
			type: 'string',
			source: 'text',
			selector: '.video_input',
		},
		url: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: '.video_input',
			//default: [],
		},
		alignment: {
		  type: 'string',
		  default: 'center'
		}
	  },
  
	  edit: function (props) {
		return(
			el('div',{
				id: "divbody"
			}, 
		
			el('form', {
				id: "videoForm",
				class: "videoForm",
				onSubmit:	
					function 
					setInputValue(event){					
						var checkEmpty = document.getElementById("url_input");
						var videoURL = document.getElementById("url_input").value;		
						var videoWidth = document.getElementById("width_input").value;
						var videoHeight = document.getElementById("height_input").value;
						var validURL = "//"; //here we can set the correct vizzi path to video, so that media from other sources is not allowed 
						var index = videoURL.indexOf(validURL);		
				
						if(videoURL != "" && index != -1 && checkEmpty != ""){ 
							props.setAttributes({url: videoURL});
							props.setAttributes({width: videoWidth});
							props.setAttributes({height: videoHeight});
							event.preventDefault();
							alert("Video was submited.");
						}else{
							alert("Please provide a valid URL.");
							videoURL = "";
							event.preventDefault();
						}
					},
				onReset:
					function 
					resetInput(event){
						var src_input = document.getElementById("url_input"),
						width_input = document.getElementById("width_input"),
						height_input = document.getElementById("height_input");

						if(src_input.value != ""){
							src_input.value = "";
							height_input.value = "";
							width_input.value = "";
							props.setAttributes({url: emptyContent});
							props.setAttributes({width: emptyContent});
							props.setAttributes({height: emptyContent});
							event.preventDefault();
						}else{
							alert("No link was provided!")
						}
					}
			},
				el('h3',{}, "Video"),
				el('input', {class:"video_input", id:"url_input", placeholder:"Insert Video URL to embed"}),
				el('input', {class:"video_input", id:"width_input", placeholder:"Insert Video Width"}),<br></br>,
				el('input', {class:"video_input", id:"height_input", placeholder:"Insert Video Height"}),<br></br>,
				<br></br>,
				<br></br>,
				el('button', {class:"id_submit", id:"id_submit", type: "submit"}, "Embed"),
				el('button', {class:"id_reset", id:"id_reset", type:"reset"}, "Reset")
			)
		)
				
	)
	  },
  
	  save: function (props) {
		
		var	video_Source = props.attributes.url,
		video_Width = props.attributes.width,
		video_Height = props.attributes.height;

		if(video_Source != undefined){
			if(video_Source.indexOf(".mp4") != -1){ //check if file is .mp4 type
				return(
				
					<figure className={ props.className }>
						<div className={ props.className }>
							
							{/* <h1>Source .mp4 - {video_Title}</h1> */}
							{/* <video id="my-player" class="video-js regular-player vjs-default-skin vjs-big-play-centered" style="margin-bottom: 20px;" width="700" height="500" preload="metadata" controls crossorigin="anonymous" muted>
								<source src= {video_Source} type="video/mp4"></source>			
							</video> */}
							<iframe src={video_Source} width={video_Width} height={video_Height} frameborder="0" allowfullscreen></iframe>
							
						</div>
					</figure>	
				)
			}
			else if(video_Source.indexOf(".m3u8") != -1){ //check if file is .m3u8 type
				return(
					<figure className={ props.className }>
						<div className={ props.className }>
						
							{/* <h1>Source .m3u8 - {video_Title}</h1> */}
							{/* <video id="my-player" class="video-js regular-player vjs-default-skin vjs-big-play-centered" style="margin-bottom: 20px;" width="700" height="500" preload="metadata" width="" controls crossorigin="anonymous" muted>
								<source src= {video_Source} type="application/x-mpegURL"></source>			
							</video> */}
							<iframe src={video_Source} width={video_Width} height={video_Height} frameborder="0" allowfullscreen></iframe>
							
						</div>	
					</figure>
								
				)
			}
			else if(video_Source.indexOf(".mpd") != -1){//check if file is .mpd file
				return(
					<figure className={ props.className }>
						<div className={ props.className }>
							{/* <h1>Source .mpd - {video_Title}</h1> */}
							{/* <video id="my-player" class="video-js regular-player vjs-default-skin vjs-big-play-centered" style="margin-bottom: 20px;" width="700" height="500" preload="metadata" controls crossorigin="anonymous" muted>
								<source src={video_Source} type="application/dash+xml"></source>
							</video> */}
							<iframe src={video_Source} width={video_Width} height={video_Height} frameborder="0" allowfullscreen></iframe>
						</div>
					</figure>

				)
			}
			else if(video_Source.indexOf(".webm") != -1){ //check if file is .webm type
				return(
					<figure className={ props.className }>
						<div className={ props.className }>
							{/* <h1>Source .webm - {video_Title}</h1> */}
							{/* <video id="my-player" class="video-js regular-player vjs-default-skin vjs-big-play-centered" style="margin-bottom: 20px;" width="700" height="500" preload="metadata" width="" controls crossorigin="anonymous" muted>
								<source src={video_Source} type="video/webm"></source>
							</video> */}
							<iframe src={video_Source} width={video_Width} height={video_Height} frameborder="0" allowfullscreen></iframe>
						</div>
					</figure>
				)
			} 
			else if(video_Source.indexOf(".ogv") != -1){ //check if file is .ogv type
				return(
					<figure className={ props.className }>
						<div className={ props.className }>
							{/* <h1>Source youtube - {video_Title}</h1> */}
							{/* <video id="my-player" class="video-js regular-player vjs-default-skin vjs-big-play-centered" style="margin-bottom: 20px;"  preload="metadata" width="700" height="500" controls crossorigin="anonymous" muted>
								<source src={video_Source} type="video/ogg"></source>
							</video> */}
							<iframe src={video_Source} width={video_Width} height={video_Height} frameborder="0" allowfullscreen></iframe>
						</div>
					</figure>
				)
			}
			else if(video_Source.indexOf("www.youtube.com/") != -1 && video_Source.indexOf("www.youtube.com/embed") != 1){ //check if is youtube media
				return(
					<figure className={ props.className }>
						<div className={ props.className }>
							{/* <h1>Source youtube - {video_Title}</h1> */}

							{/*<video id="my-player" class="video-js regular-player vjs-default-skin vjs-big-play-centered" style="margin-bottom: 20px;" width={video_Width} height={video_Height} preload="metadata" width="" controls crossorigin="anonymous" muted>
								<source src={video_Source} type="video/youtube"></source>
							</video>*/}

							<iframe src={video_Source} width={video_Width} height={video_Height} frameborder="0" allowfullscreen></iframe>
						</div>
					</figure>
				)
			}
			

			else if(video_Source.indexOf("player.twitch.tv/") != -1){ //check if is twitch media
				return(
					<figure className={ props.className }>
						<div className={ props.className }>
							{/* <h1>Source Twitch - {video_Title}</h1> */}
							{/*<video id="my-player" class="video-js regular-player vjs-default-skin vjs-big-play-centered" style="margin-bottom: 20px;" preload="metadata" width="" controls crossorigin="anonymous" muted>
								<source src={videoSRC} type="video/youtube"></source>
							</video>*/}
							<iframe src={video_Source} width={video_Width} height={video_Height} frameborder="0" allowfullscreen></iframe>
						</div>
					</figure>
				)
			}
		}				
	  }
	})
  })(
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element
  )
