// Header.js
import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./Slider.css";

const Header = () => {
  const rawHtml = `
  
	<style>
			body {
				font-family: Roboto, sans-serif;
				background-color: #2B2B2B;
				margin: 0;
			}
			/*body,
			a {
				color: transparent;
			}*/
			/*[hidden],
			button,
			canvas,
			img,
			input[type^=text],
			select,
			svg,
			template {
				display: none;
			}*/
			html,
			body {
				height: 100%;
			}
			html {
				font-size: 15px;
				line-height: 20px;
			}
			body {
				font-size: 1.000rem;
				line-height: 1.333rem;
				margin: 0;
			}
			.ripple {
				width: 16.000rem;
				height: 16.000rem;
				position: absolute;
				top: -3.333rem;
				left: 25%;
				margin: 0;
			}
			.ripple img {
				display: block;
				width: 16.000rem;
				height: 16.000rem;
			}
			.loading {
				font-size: 1.000rem;
				line-height: 1.000rem;
				font-family: sans-serif;
				font-weight: 400;
				color: ##2b2b2b;
				position: absolute;
				top: 4.133rem;
				left: 25%;
				margin: 0;
			}
			.quote p {
				font-family: "PT Serif", serif;
				font-weight: 400;
			}
			.intro h1 {
				font-family: "Roboto Condensed", sans-serif;
				font-weight: 700;
				text-transform: uppercase;
			}
			.intro span {
				font-family: "Roboto", sans-serif;
				font-weight: 400;
				text-transform: none;
			}
			.footer p {
				font-family: "Roboto", sans-serif;
				font-weight: 700;
			}
			@media only screen {
				html {
					font-size: 12px;
				}
			}
			@media only screen and (max-width:40em) {
				html {
					font-size: 12px;
				}
			}
			@media only screen and (min-width:40.063em) {
				html {
					font-size: 12px;
				}
			}
			@media only screen and (min-width:40.063em) and (max-width:64em) {
				html {
					font-size: 15px;
				}
			}
			@media only screen and (min-width:64.063em) {
				html {
					font-size: 15px;
				}
			}
			@media only screen and (min-width:64.063em) and (max-width:90em) {
				html {
					font-size: 15px;
				}
			}
			@media only screen and (min-width:90.063em) {
				html {
					font-size: 15px;
				}
			}
			@media only screen and (min-width:90.063em) and (max-width:120em) {
				html {
					font-size: 18px;
				}
			}
			@media only screen and (min-width:120.063em) {
				html {
					font-size: 18px;
				}
			}
			/*!
			 * @see {@link https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.css}
			 */
			.github-fork-ribbon{width:12.1em;height:12.1em;position:fixed;overflow:hidden;top:0;right:0;z-index:9999;pointer-events:none;font-size:13px;text-decoration:none;text-indent:-999999px;}.github-fork-ribbon.fixed{position:fixed;}.github-fork-ribbon:before,.github-fork-ribbon:after{position:absolute;display:block;width:15.38em;height:1.54em;top:3.23em;right:-3.23em;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.github-fork-ribbon:before{content:"";padding:.38em 0;background-color:#a00;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,0.15)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.15));background-image:-o-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.15));background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.15));-webkit-box-shadow:0 .15em .23em 0 rgba(0,0,0,0.5);box-shadow:0 .15em .23em 0 rgba(0,0,0,0.5);pointer-events:auto;}.github-fork-ribbon:after{content:attr(data-ribbon);color:#fff;font:700 1em "Helvetica Neue",Helvetica,Arial,sans-serif;line-height:1.54em;text-decoration:none;text-shadow:0 -.08em rgba(0,0,0,0.5);text-align:center;text-indent:0;padding:.15em 0;margin:.15em 0;border-width:.08em 0;border-style:dotted;border-color:#fff;border-color:rgba(255,255,255,0.7);}.github-fork-ribbon.left-top,.github-fork-ribbon.left-bottom{right:auto;left:0;}.github-fork-ribbon.left-bottom,.github-fork-ribbon.right-bottom{top:auto;bottom:0;}.github-fork-ribbon.left-top:before,.github-fork-ribbon.left-top:after,.github-fork-ribbon.left-bottom:before,.github-fork-ribbon.left-bottom:after{right:auto;left:-3.23em;}.github-fork-ribbon.left-bottom:before,.github-fork-ribbon.left-bottom:after,.github-fork-ribbon.right-bottom:before,.github-fork-ribbon.right-bottom:after{top:auto;bottom:3.23em;}.github-fork-ribbon.left-top:before,.github-fork-ribbon.left-top:after,.github-fork-ribbon.right-bottom:before,.github-fork-ribbon.right-bottom:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}
		</style>
		<noscript>
			<link rel="stylesheet" href="https://englishextra.github.io/libs/john-locke/css/bundle.min.css" />
		</noscript>
		<script>
			var imagesPreloaded=false;(function(m){m="[object Array]"===Object.prototype.toString.apply(m)?m:[m];var t=function(){return (imagesPreloaded=true);},f=function(){return (imagesPreloaded=false);},c=[];for(var i=0,l=m.length;i<l;i++){c[i]=new Image();c[i].onabort=f;c[i].onerror=f;c[i].onload=t;c[i].src=m[i];}}([
"https://englishextra.github.io/libs/john-locke/img/dots-8x8.png",
"https://englishextra.github.io/libs/john-locke/img/hand-200x96.png",
"https://englishextra.github.io/libs/john-locke/img/hero-960x1080.jpg",
"https://englishextra.github.io/libs/john-locke/img/john-locke-500x645.png",
"https://englishextra.github.io/libs/john-locke/img/matreshka-192x360.png",
"https://englishextra.github.io/libs/john-locke/img/monolith-960x1080.jpg",
"https://englishextra.github.io/libs/john-locke/img/notebook-320x462.png",
"https://englishextra.github.io/libs/john-locke/img/pen-96x1141.png",
"https://englishextra.github.io/libs/john-locke/img/ripple-200x200.svg",
"https://englishextra.github.io/libs/john-locke/img/start-360x360.svg"
]));
		</script>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

	</head>
	<body>
		<!-- images are hidden with display none in html and revealed with display block in css -->
		<!-- canvas and source image width and height should be of the same aspect ratio, not neccessarily size -->
		<!-- source svg for canvas painting should have width and height attributes -->
		<!-- images are finally scaled in css -->
		<!-- svg as image with svg-nosmil-img class if not supported is replaced with the data-fallback-src -->
		<!-- animated svg as image with svg-smil-img class if not supported is replaced with the data-fallback-src -->
		<!-- https://haltersweb.github.io/Accessibility/svg.html --><svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" focusable="false">
			<defs>
				<symbol id="logo" viewBox="0 0 108 108" enable-background="new 0 0 108 108">
					<circle fill="#2b2b2b" cx="54" cy="54" r="54"></circle><path fill="#191919" d="M64.5,79.1c-0.8,0-1.6-0.2-2.4-0.4c-3.5-1.2-5-3.9-4.2-7.5c0.6-2.9,1.7-5.4,2.7-8c0.8-1.8,1.5-3.4,2.3-5.3c0.5-1.2,1-2.5,1.5-3.8l0,0c-0.5,0.5-0.9,0.9-1.4,1.4c-1.2,1.2-2.4,2.5-3.6,3.8c-2,2.1-4,4.3-6.1,6.4c-1.5,1.5-3.3,3.2-5.6,4.2c-1.3,0.6-2.7,0.9-3.9,0.5c-2.3-0.6-3.5-2.4-3.3-5c0.2-2.1,0.8-4.2,1.8-6.4c0.9-1.9,1.8-3.9,2.7-5.9c0.5-0.9,0.9-2,1.4-2.9l1-2.4c1.2-2.7,2.5-5.5,3.8-8.3c0.3-0.8,0.6-1.7,0.8-2.5c0.1-0.3,0.1-0.6,0.3-0.9c-0.1,0.2-0.3,0.3-0.4,0.6c-1.6,2.3-3.1,4.5-4.8,6.8c-0.4,0.8-1,1.4-1.5,2.1c-1.2,1.6-2.5,3.4-3.8,5.3c-0.8,1-1.8,1.8-2.8,2.5c-1,0.6-2.3,0.8-3.3,0.3c-1.1-0.4-2-1.5-2.4-2.7c-0.6-1.9,0-3.9,0.8-5.3c0.6-1.3,1.3-2.6,2-3.9c0.6-1,1.2-2.3,1.8-3.3c0.6-1.2,1.2-2.4,1-3.8c0-0.8-0.4-1.5-1-2c-0.3-0.3-0.8-0.3-1.3,0c-1.4,0.6-2.3,1.7-3,2.7c-0.6,0.8-1.4,1-2.1,0.6c-0.4-0.3-0.8-0.8-0.9-1c-0.2-0.5,0-0.9,0.3-1.4c1.4-2.1,3-3.4,5-4.2c2.3-0.9,4.5,0,6,2.3c1,1.6,1.2,3.4,0.8,5.3c-0.6,1.6-1.2,3.3-2,4.8c-0.4,0.9-0.9,2-1.3,2.8c-0.4,0.9-0.9,2-1.3,2.9c-0.3,0.6-0.3,1.2-0.5,2v0.1c0,0,0,0.1,0.2,0.3c0.2,0,0.2-0.1,0.3-0.1c0.3-0.3,0.5-0.5,0.8-0.8c0.8-0.8,1.4-1.5,2-2.3c1-1.7,2.3-3.3,3.3-4.8c0.9-1.5,2-2.8,2.9-4.3c1.2-1.7,2.2-3.2,3.5-4.5c1.1-1.2,2.1-1.8,3.1-2.1c1-0.1,2,0.1,2.9,0.8c0.9,0.8,1.4,1.8,1.5,2.9c0.1,1.5,0,2.8-0.6,4.3l-0.3,0.9c-0.9,2.5-2,5.1-3,7.7c-0.9,2.1-2,4.2-2.9,6.4c-0.9,2.1-1.9,4.2-2.8,6.4c-0.4,1.2-0.9,2.6-1.2,3.8c-0.2,0.3-0.2,0.8-0.3,1.1c0,0.1,0,0.1,0,0.3c0.3-0.2,0.6-0.3,0.9-0.6c2.1-1.5,3.9-3.4,5.7-5.4c2.7-3,5.7-6.3,8.7-9.3c1-1.2,2.4-2.1,3.7-2.6c1.4-0.6,2.7-0.4,3.8,0.2c1.1,0.6,1.8,1.7,2.1,3s0,2.7-0.1,3.6c-0.6,2.4-1.5,4.8-2.4,6.9c-0.3,0.6-0.4,1.2-0.8,1.8c-1.2,3-2.1,5.4-3,7.7c-0.2,0.4-0.2,0.9-0.3,1.3c0,0.3-0.1,0.5-0.1,0.8h0.1c0.5,0,1.1,0,1.4-0.1c1.6-0.6,3-2,4.3-3.2c0.9-0.9,1.8-1.8,2.7-2.6l0.2-0.1c0.9-0.9,1.8-0.9,2.8,0c0.8,0.6,1.4,1.2,2,1.8c0.4,0.4,0.6,0.9,0.6,1.3S78.5,71,78,71.3l-0.3,0.3c-2.4,2.4-4.8,4.8-7.9,6.5C67.5,78.6,66,79.1,64.5,79.1z"></path>
				</symbol>
				<symbol id="arrow" viewBox="0 0 120 72" enable-background="new 0 0 120 72">
					<path fill="#2b2b2b" d="M12.4,0.9c-0.1,0.2-0.1,0.3-0.2,0.5c-0.4-0.9-2-1-2.5,0.2C9.6,1.9,9.5,2.2,9.4,2.4C8.6,2.6,8.1,3.7,8.7,4.5C7,9,5.4,13.5,3.7,18c-0.6,1.5-1.3,3-1.9,4.6c-0.1,0.2-0.1,0.5,0,0.7c-0.6,1.5-1.1,3.1-1.7,4.6c-0.4,1,0.5,1.6,1.3,1.6c0,0.2,0,0.3-0.1,0.5c0,0,0,0,0,0l0,0c0,0.1,0,0.2,0,0.3c-0.1,0.5,0.2,0.9,0.5,1.1c0,0,0,0.1,0,0.1c-0.5,1.7,2,2.3,2.6,0.7c1.2-3.3,2.3-6.6,3.5-9.9c0.3-0.3,0.4-0.4,0.8-1.4c0.1-0.3,0.1-0.6-0.1-0.8c0.7-2,1.4-4,2.1-6.1C15,32.2,28.3,47.5,44.9,56.4c4.3,2.3,8.8,4.2,13.4,5.6c18.3,9.6,41.4,14.2,60.3,4.9c0.7-0.3,0.2-1.5-0.5-1.2c-3.3,1.4-6.6,2.4-10,3c4-1.3,7.9-3.3,11.6-6.2c0.9-0.7,0.1-1.8-0.7-2c0.7-0.9-0.3-2.4-1.5-1.7c-2.4,1.4-4.9,2.5-7.5,3.4c-10.7,1.7-21.7,2.3-32.4,1.2c-2.2-0.4-4.4-0.9-6.6-1.5C65.6,60,60.7,57.5,56,54.7c-9.4-5.7-18.5-12.4-26.1-20.2c-1.2-1.2-2.3-2.5-3.4-3.8c-3-4.4-5.7-9-7.9-13.9c3.1,2.9,6.3,5.6,9.7,8.1c0.7,0.5,1.6,0,1.9-0.7c1.1,0.4,2.1-1.3,1.3-2.3c-0.9-1-1.7-2-2.6-3.1c0.5-0.5,0.7-1.2,0.1-1.9c-1-1-2-2-3.1-2.9c-4.2-4.1-7.9-8.6-11.2-13.6C14.2-0.3,12.8-0.1,12.4,0.9z M93.1,68.5c6.8,0,13.5-1.4,19.8-4.4c0.1,0,0.2,0,0.4-0.1C107,67.6,100.2,68.8,93.1,68.5z M13.9,4.7C13.9,4.6,14,4.4,14,4.2c0.3,0.4,0.6,0.8,0.9,1.3C14.6,5.2,14.2,5,13.9,4.7z M51.7,54.8c-1-0.5-2.1-1-3.1-1.6c-1.8-1.3-3.5-2.7-5.2-4.1C46.1,51.2,48.9,53,51.7,54.8z M33.4,45.6c-9.7-8.2-17.1-19-20.2-31.2c0.3,0.5,0.6,1.1,0.9,1.6C17.3,27.6,24.3,37.7,33.4,45.6z M24.4,31.9c1.3,1.9,2.6,3.7,4,5.4c-2-2.3-3.8-4.7-5.4-7.2C23.5,30.7,23.9,31.3,24.4,31.9z"></path>
				</symbol>
				<symbol id="phone" viewBox="0 0 256 512" enable-background="new 0 0 256 512">
					<path fill="#393939" d="M209.5,512c0,0,46.5,0,46.5-46.5V46.5C256,0,209.5,0,209.5,0H46.5C46.5,0,0,0,0,46.5v418.9C0,512,46.5,512,46.5,512H209.5z M128,492.6c-12.8,0-23.3-10.4-23.3-23.2c0-12.8,10.4-23.2,23.3-23.2c12.8,0,23.3,10.4,23.3,23.2S140.8,492.6,128,492.6z M93.1,28.4c0-2.9,1.4-5.1,3.1-5.1h63.6c1.7,0,3.1,2.3,3.1,5.1v1.4c0,2.9-1.4,5.1-3.1,5.1H96.2c-1.7,0-3.1-2.3-3.1-5.1C93.1,29.7,93.1,28.4,93.1,28.4z M23.3,58.1h209.5v371.8H23.3V58.1z"></path>
				</symbol>
				<symbol id="signature" viewBox="0 0 600 244" enable-background="new 0 0 600 244">
					<path fill="#E6E6E6" d="M102.2,170.8c-9.8-28.8-7.7-62.3,4.7-89.9c10.2-22.6,31.5-43.7,50.5-59.4c13.3-11,27.6-16,44.7-14.6c0.7-2.3,1.4-4.6,2.1-6.8c-10.8,0.7-20.1,14.6-25.5,22.1c-33.3,46.2-46.1,102.7-72.9,152.2c-12.7,23.4-54.6,82.8-88.7,57.3c-15.9-11.8-3.3-34.3,8.3-43.7c25.1-20.1,59.9-28.6,87.5-45.1c5.5-3.3-2.4-6.5-6.3-4.2c-29,17.3-63.9,26.3-90.4,47.4c-11.8,9.6-21.1,27.8-13.4,42.6c13.9,26.9,51.3,12.7,69.3-0.6c52.7-38.7,66.4-113,94.2-168.2c8.1-16.1,17.1-32.5,29.2-45.9c2.1-2.3,4.7-4.9,7.4-6.5c1.8-1,1.7-0.6,0.5-0.5c4.1-0.2,8.1-6.4,2.1-6.8c-42.9-3.3-72,30.5-96.5,61.4c-23.9,30.1-28.5,75.9-16.4,111.8C94.1,177.6,103.6,175,102.2,170.8L102.2,170.8 M179.8,160c1.5-13.8,7.3-54.7,26.2-54.3c15.3,0.3,5.4,23.7,2,30.2c-4.3,8.1-17.9,28.7-29.2,22.2c-3-1.7-11.7,2.5-7.5,4.9c14.2,8.1,30.3-5.3,38.6-16c7.5-9.6,22.1-32.6,9.6-43.7c-12.9-11.4-30.4,2.9-36.7,13.9c-7.5,13-10.9,29.1-12.5,43.8C169.7,165.3,179.4,163.6,179.8,160 M292.7,80.2c9.9-8.1,19.2-18.3,23.2-30.6c4.8-14.9-9.8-22.4-22.1-18.9c-18.7,5.4-32.3,27.5-41.1,43.1c-6.9,12.3-11.3,26.2-15.2,39.7c-2.1,7.4-3.1,24.4-10.3,29c2.5,0.6,5,1.3,7.5,1.9c3.8-7.1,8.2-13.9,13-20.4c1-1.3,13.7-14.7,12.8-11c-0.8,3.5-3.1,7-4.7,10.2c-6.8,14-0.5,18.8,13.9,15.4c5.9-1.4,4.4-6.7-1.4-5.3c-16.8,4,14.2-28.4-4.1-28.2c-17.9,0.2-31.3,25.5-38.5,38.9c-2.3,4.3,5.8,3,7.5,1.9c7.2-4.7,8.7-13.8,10.7-21.5c5.3-20.6,11.7-40.4,22.8-58.7c5.4-8.9,12.2-16.9,19.9-23.9c13.9-12.7,23.7,0.5,17.7,13.9c-4,8.9-12,16.6-19.5,22.7C280.6,81.7,290.1,82.3,292.7,80.2L292.7,80.2 M285.2,111.8c1.7-1.3,6.9-4.5,8-4.6c1.3-0.1,0,6-0.2,6.8c-2.7,9.6-8.5,18.5-13.6,26.9c3.1-0.2,6.1-0.5,9.2-0.7c3-5.9,6.3-11.7,9.8-17.3c2.7-4.3,5.5-8.4,8.7-12.2c1.4-1.7,2.9-3.2,4.6-4.6c1.3-0.7,1-0.8-0.8-0.1c0.8,0.5,1.2,1.4,1.5,2.3c1.7,5.1-8.5,13.4-10.7,17.8c-4.8,9.5,11.3,12.2,17,13.2c2.7,0.5,11.2-3.9,6-4.8c-4.4-0.8-15.8-1.9-13.8-8.9c1.2-4.1,5.4-7.6,7.9-10.9c4.4-5.8,4.2-14.9-5.4-13.6c-9.9,1.3-16.2,10.6-21.4,18.2c-4.9,7.1-9.2,14.7-13,22.4c-1.3,2.5,7.9,1.5,9.2-0.7c2.5-4.1,24.9-36.8,10.3-38.4c-7.4-0.8-15.2,4.1-21,8.3C273.4,113.7,283,113.4,285.2,111.8L285.2,111.8 M393.6,84.2c15.2,1,31.7-1.8,45.8-7.4c21.4-8.5,51-29,53.3-54.3c1.6-17.2-26-0.7-30,3c-11.2,10.3-18.4,22.6-24.4,36.4c-8.7,19.8-20,38.6-33.1,55.8c-8.5,11.2-26.4,34.7-42.7,26.8c-0.7-3.6,0.8-4.4,4.5-2.4c4.9,1.4,7.9,6.8,9.9,11c1.7,3.6,2.4,7.4,4.3,10.9c8.2,15.2,26,25.8,41.2,32.8c16.3,7.5,35,10.4,52.1,4c20.7-7.8,26.8-31.6,28-51.3c0.3-4.8-9.4-3.3-9.7,0.8c-1.6,25.1-11.3,49.3-40.3,47.2c-19.6-1.5-39.3-12.9-53.3-26.2c-11.6-11.1-12.1-31.4-28.9-36.2c-6.8-1.9-25.9,3.1-17.5,12.8c11.3,13.1,33.3-0.2,42.5-8.5c24.1-21.9,41.1-51.7,54.1-81.2c6.1-13.9,15.4-28.1,29.1-35.6c7.7-4.2,3.1,6.5,1.7,9.5c-4.7,10.2-12.9,19-21.4,26.1c-16.2,13.5-40.7,20.6-61.8,19.1C392.5,77.2,387.1,83.7,393.6,84.2L393.6,84.2 M435.5,140.1c1.6-6.7,13.4-46.3,22.2-39.7c6.7,5.1,1.6,18.8-1,24.7c-3.6,8.4-11.6,21.7-21.5,14c-2.3-1.8-11,1.9-9,3.5c11.1,8.6,25.1,2.1,33.1-7.5c6.5-7.8,16.3-26.9,8.6-36.7c-8.5-10.9-23.6,1.1-28.7,9.1c-6.5,10.2-10.4,22.4-13.2,34.1C425.3,144.4,434.8,142.9,435.5,140.1 M507.4,104.3c0.1-5,0.3-14.1-4.4-17.3c-10.2-6.9-19.1,9.9-23.4,16.2c-5.1,7.5-13.5,17.2-12.3,26.9c1.4,11,21.2,9,28.2,8.4c5.3-0.4,7.4-7.4,0.9-6.9c-4.3,0.3-19.4,2.6-19.6-4.9c-0.1-6.1,5.3-12.7,8.5-17.5c2.2-3.3,4.5-6.6,6.8-9.9c1.6-2.3,3.2-4.8,5.3-6.7c-2-0.8-2.5-0.7-1.6,0.3c0.3,0.5,0.5,1,0.6,1.5c1.2,3.3,1.3,7.2,1.2,10.7C497.7,110,507.4,108.5,507.4,104.3L507.4,104.3 M569.1,75.8c9.5-7.5,21.7-17.6,24.8-29.8c2.8-11-14.6-11.5-20.8-9c-19.4,7.9-30.9,29.8-40.3,47c-6.1,11.1-11.5,22.7-16.5,34.3c-1.3,2.9-4.3,15.2-7.8,16.1c-5.8,1.4-4.5,6.1,1.3,4.6c5.4-1.3,8.6-4.3,10.8-9.3c7.7-17.2,15-34.4,24-51c5.8-10.7,12.6-21,21-29.8c3.8-4,19-14.3,18.7-1.6c-0.2,10.2-15.5,21.2-22.9,27.1C557.2,77.7,566.8,77.7,569.1,75.8L569.1,75.8 M540.4,89.5c3.5-3.2,8.3-2.5,5.9,3.3c-2.1,5-7.5,9.4-11.5,12.8c-4.8,4.1-10.1,7.7-15.5,11c-1.7,1-2.5,3.5-0.6,4.7c20.9,13.3,47.2,9.8,65.3-6.2c4.9-4.3,17.6-17.2,12.4-25.1c-3.8-5.9-12.6-4.8-18.2-2.7c-19.8,7.4-31.6,36.8-12.6,51.7c9.2,7.2,40.8,1.7,33.3-14.3c-1.9-4-11.3-1.2-9.6,2.6c2.1,4.6-1.6,7-5.7,8.2c-7.6,2.2-13.6-3.1-16.3-9.7c-5.2-12.9,2-29.4,15.5-33.2c7-2,4.3,5.7,2.6,8.9c-6.1,11.4-18.8,19.5-31.4,21.2c-9.3,1.2-20.1-1.8-27.9-6.8c-0.2,1.6-0.4,3.1-0.6,4.7c11.6-7.1,28.3-17.6,31.4-31.8c3.8-17.2-19.3-6.7-24.5-2C528.1,90.9,537.4,92.2,540.4,89.5L540.4,89.5z"></path>
				</symbol>
				<symbol id="swipeup" viewBox="0 0 120 120" enable-background="new 0 0 120 120">
					<path fill="#DDF03B" d="M17.351,30.487c-1.732-3.02-3.35-6.171-4.843-9.45c-0.436-0.959-1.52-1.328-2.434-0.788c-3.111,1.843-6.187,3.85-9.213,6.02c-0.648,0.466-0.933,0.983-0.846,1.828c0.089,0.846,0.699,1.153,1.409,1.32c1.761,0.41,3.522,0.819,5.283,1.23c-5.056,22.236-4.31,45.479,2.24,67.417c0.388,1.309,1.951,2.229,3.095,1.848c1.143-0.383,1.886-2.007,1.515-3.258C7.254,75.533,6.534,53.153,11.403,31.74c1.369,0.319,2.738,0.638,4.107,0.957c0.713,0.166,1.384,0.174,1.816-0.439C17.756,31.645,17.722,31.135,17.351,30.487z"></path><path fill="#DDF03B" d="M111.67,46.175c-5.78-6.181-32.83-16.193-33.979-16.616c-0.695-0.256-1.43-0.385-2.182-0.385c-3.112,0-6.174,2.234-7.281,5.311c-0.167,0.466-0.432,1.708-0.496,3.061c-0.742-0.211-1.506-0.318-2.276-0.318c-3.531,0-6.715,2.258-7.923,5.617c-0.665,1.848-0.682,3.827-0.063,5.662c-3.498-0.119-6.491,1.869-7.665,5.136c-0.771,2.14-0.646,4.421,0.348,6.425l-21.296-6.983c-1.139-0.419-2.304-0.633-3.462-0.633c-3.653,0-6.686,2.118-7.913,5.529c-1.643,4.574,0.766,9.369,5.642,11.165l36.528,12.57c0.166,1.108,0.57,2.848,1.536,5.239c2.563,6.336,11.746,12.891,22.674,12.891c2.167,0,4.329-0.261,6.428-0.774C104.74,95.54,113,88.208,117.911,74.552C123.113,60.083,117.68,52.6,111.67,46.175z M114.515,73.3c-4.505,12.528-11.769,18.965-25.075,22.216c-1.822,0.445-3.699,0.672-5.58,0.672c-9.286,0-17.265-5.512-19.33-10.62c-0.389-0.962-0.67-1.786-0.87-2.471l11.93,4.104c0.946,0.323,1.971-0.187,2.291-1.144c0.32-0.957-0.183-1.995-1.13-2.32L24.32,65.694c-2.998-1.103-4.414-3.762-3.444-6.463c0.947-2.632,3.678-3.834,6.805-2.689l32.103,10.53c0.877,0.288,1.837-0.144,2.21-1.002c0.373-0.86,0.043-1.864-0.762-2.329l-4.782-2.746c-0.088-0.05-0.179-0.093-0.275-0.127c-1.247-0.458-2.238-1.323-2.792-2.433c-0.546-1.096-0.612-2.353-0.185-3.54c0.626-1.739,2.07-2.736,3.964-2.736c0.662,0,1.339,0.126,2.014,0.374l3.387,1.247c0.002,0.001,0.006,0.001,0.008,0.002c0.938,0.346,1.974-0.144,2.315-1.094c0.341-0.949-0.142-1.998-1.079-2.343c-1.209-0.445-2.174-1.341-2.718-2.521c-0.543-1.181-0.601-2.505-0.161-3.728c0.69-1.92,2.51-3.211,4.529-3.211c0.56,0,1.114,0.1,1.648,0.296l7.356,2.71c0.933,0.344,1.974-0.143,2.315-1.092s-0.142-1.999-1.079-2.344l-4.322-1.592c-0.084-0.808-0.039-2.319,0.251-3.127c0.708-1.965,3.103-3.376,4.832-2.738c7.601,2.8,28.275,11.078,32.592,15.694C114.704,54.74,119.021,60.766,114.515,73.3z"></path>
				</symbol>
				<symbol id="mousewheeldown" viewBox="0 0 120 120" enable-background="new 0 0 120 120">
					<path fill="#DDF03B" d="M71.122,7.6c10.592,0,19.331,8.667,19.331,19.467v54.667C90.453,98.667,76.815,112.4,60,112.4S29.547,98.667,29.547,81.733V27.067C29.547,16.4,38.153,7.6,48.878,7.6H71.122 M71.122,0H48.878C34.049,0,22,12.133,22,27.067v54.667C22,102.8,38.948,120,60,120l0,0c21.052,0,38-17.2,38-38.267V27.067C98,12.133,85.951,0,71.122,0L71.122,0z"></path><path fill="#DDF03B" d="M60,62.5c-0.3,0-0.7-0.1-1-0.3L50.2,56c-0.8-0.5-1-1.6-0.4-2.4c0.5-0.8,1.6-1,2.4-0.4l7.8,5.5l7.8-5.5c0.8-0.5,1.8-0.4,2.4,0.4c0.5,0.8,0.4,1.8-0.4,2.4L61,62.2C60.7,62.4,60.3,62.5,60,62.5z"></path><path fill="#DDF03B" d="M60.1,75.8c-0.3,0-0.7-0.1-1-0.3l-8.8-6.2c-0.8-0.5-1-1.6-0.4-2.4c0.5-0.8,1.6-1,2.4-0.4l7.8,5.5l7.8-5.5c0.8-0.5,1.8-0.4,2.4,0.4c0.5,0.8,0.4,1.8-0.4,2.4l-8.8,6.2C60.8,75.7,60.5,75.8,60.1,75.8z"></path><path fill="#DDF03B" d="M60,88.8c-0.3,0-0.7-0.1-1-0.3l-8.8-6.2c-0.8-0.5-1-1.6-0.4-2.4c0.6-0.8,1.6-1,2.4-0.4L60,85l7.8-5.5c0.8-0.5,1.8-0.4,2.4,0.4c0.5,0.8,0.4,1.8-0.4,2.4L61,88.5C60.7,88.7,60.3,88.8,60,88.8z"></path><path fill="#DDF03B" d="M60,46.3c-1.9,0-3.4-1.5-3.4-3.4v-7.5c0-1.9,1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4v7.5C63.4,44.8,61.9,46.3,60,46.3z"></path>
				</symbol>
				<symbol id="ui-icon-Share" viewBox="0 0 96 96">
					<path d="M65.128,53.997c0.442,0.286,0.843,0.622,1.201,1.006c0.358,0.384,0.661,0.804,0.908,1.259c0.247,0.456,0.436,0.938,0.566,1.446C67.934,58.216,68,58.729,68,59.25c0,0.859-0.167,1.667-0.498,2.422c-0.332,0.756-0.782,1.417-1.347,1.982c-0.566,0.566-1.228,1.016-1.982,1.347c-0.755,0.332-1.563,0.498-2.422,0.498c-1.198,0-2.304-0.318-3.321-0.957c-1.498,1.132-3.142,1.992-4.932,2.578C51.708,67.707,49.875,68,48,68s-3.708-0.293-5.498-0.878c-1.791-0.587-3.434-1.446-4.932-2.578c-1.016,0.638-2.122,0.957-3.32,0.957c-0.859,0-1.667-0.167-2.422-0.498c-0.756-0.332-1.417-0.782-1.983-1.347c-0.566-0.566-1.016-1.228-1.347-1.982C28.166,60.917,28,60.109,28,59.25c0-0.521,0.065-1.035,0.196-1.543c0.131-0.508,0.319-0.989,0.567-1.446c0.248-0.456,0.55-0.876,0.908-1.259s0.758-0.719,1.201-1.007c-0.131-0.586-0.224-1.168-0.283-1.748c-0.059-0.58-0.088-1.161-0.088-1.747c0-1.797,0.271-3.538,0.811-5.224c0.541-1.686,1.302-3.248,2.285-4.688s2.164-2.712,3.545-3.818c1.381-1.107,2.917-1.979,4.609-2.618c0.013-0.847,0.186-1.644,0.517-2.392c0.332-0.749,0.782-1.399,1.347-1.953c0.566-0.553,1.228-0.993,1.983-1.318C46.353,28.163,47.154,28,48,28s1.647,0.163,2.403,0.488c0.756,0.326,1.416,0.765,1.983,1.318c0.567,0.553,1.016,1.204,1.347,1.953s0.504,1.546,0.517,2.392c1.692,0.638,3.229,1.511,4.609,2.618c1.38,1.107,2.562,2.379,3.545,3.818s1.744,3.002,2.285,4.688c0.54,1.686,0.811,3.427,0.811,5.224c0,0.586-0.029,1.169-0.088,1.748C65.353,52.827,65.258,53.41,65.128,53.997z M48,30.5c-0.521,0-1.008,0.097-1.465,0.293c-0.456,0.196-0.853,0.462-1.191,0.801s-0.606,0.736-0.801,1.192c-0.196,0.455-0.293,0.943-0.293,1.464s0.097,1.008,0.293,1.465c0.196,0.457,0.463,0.853,0.801,1.192c0.338,0.338,0.736,0.606,1.191,0.801C46.991,37.903,47.479,38,48,38s1.008-0.097,1.465-0.293c0.456-0.196,0.853-0.463,1.191-0.801c0.338-0.338,0.606-0.736,0.801-1.192c0.196-0.456,0.293-0.943,0.293-1.465c0-0.522-0.097-1.009-0.293-1.465c-0.196-0.457-0.463-0.853-0.801-1.192c-0.338-0.338-0.736-0.606-1.191-0.801C49.008,30.597,48.521,30.5,48,30.5z M30.5,59.25c0,0.521,0.097,1.008,0.293,1.465c0.196,0.457,0.462,0.853,0.801,1.191s0.736,0.606,1.192,0.801C33.241,62.902,33.729,63,34.25,63s1.008-0.097,1.465-0.293c0.457-0.196,0.853-0.463,1.192-0.801c0.338-0.338,0.606-0.736,0.801-1.191C37.903,60.259,38,59.771,38,59.25s-0.097-1.008-0.293-1.465c-0.196-0.456-0.463-0.853-0.801-1.191c-0.338-0.338-0.736-0.606-1.192-0.801c-0.455-0.196-0.943-0.293-1.464-0.293s-1.009,0.097-1.465,0.293c-0.457,0.196-0.853,0.463-1.192,0.801c-0.338,0.338-0.606,0.736-0.801,1.191C30.597,58.241,30.5,58.729,30.5,59.25z M48,65.5c1.536,0,3.037-0.232,4.502-0.693c1.465-0.463,2.829-1.137,4.092-2.021c-0.352-0.522-0.622-1.084-0.811-1.689c-0.188-0.606-0.283-1.221-0.283-1.846c0-0.859,0.167-1.667,0.498-2.422c0.332-0.756,0.782-1.416,1.347-1.983c0.567-0.567,1.228-1.016,1.983-1.347C60.083,53.167,60.891,53,61.75,53c0.169,0,0.339,0.007,0.507,0.019c0.168,0.013,0.339,0.033,0.508,0.059C62.922,52.219,63,51.359,63,50.5c0-1.523-0.218-2.992-0.654-4.404c-0.436-1.412-1.054-2.721-1.856-3.926c-0.801-1.204-1.771-2.279-2.91-3.222c-1.139-0.943-2.412-1.709-3.818-2.295c-0.234,0.573-0.55,1.097-0.948,1.572c-0.397,0.476-0.849,0.882-1.358,1.221c-0.507,0.338-1.054,0.598-1.641,0.782C49.231,40.408,48.625,40.5,48,40.5s-1.231-0.092-1.816-0.273c-0.587-0.183-1.132-0.443-1.641-0.782c-0.508-0.338-0.961-0.746-1.358-1.221c-0.397-0.476-0.713-0.999-0.948-1.573c-1.407,0.586-2.678,1.352-3.818,2.295c-1.139,0.943-2.109,2.018-2.91,3.222c-0.801,1.204-1.419,2.513-1.856,3.926C33.219,47.508,33,48.977,33,50.5c0,0.859,0.078,1.719,0.234,2.578c0.938-0.157,1.846-0.104,2.724,0.157s1.654,0.681,2.324,1.259c0.671,0.579,1.208,1.279,1.611,2.099c0.405,0.821,0.607,1.706,0.607,2.657c0,0.625-0.094,1.241-0.283,1.846c-0.188,0.606-0.459,1.169-0.811,1.689c1.263,0.886,2.627,1.559,4.092,2.021C44.963,65.268,46.464,65.5,48,65.5z M61.75,63c0.522,0,1.008-0.097,1.465-0.293c0.457-0.196,0.853-0.463,1.191-0.801c0.337-0.338,0.606-0.736,0.801-1.191c0.195-0.456,0.293-0.944,0.293-1.465s-0.097-1.008-0.293-1.465c-0.196-0.457-0.462-0.853-0.801-1.191s-0.736-0.606-1.191-0.801c-0.456-0.196-0.943-0.293-1.465-0.293c-0.521,0-1.008,0.097-1.465,0.293c-0.457,0.196-0.853,0.463-1.191,0.801c-0.338,0.338-0.606,0.736-0.801,1.191C58.098,58.241,58,58.729,58,59.25s0.097,1.008,0.293,1.465c0.196,0.457,0.463,0.853,0.801,1.191c0.338,0.337,0.736,0.606,1.191,0.801C60.741,62.902,61.229,63,61.75,63z"></path>
				</symbol>
				<symbol id="ui-icon-Like" viewBox="0 0 96 96">
					<path d="M64.25,43c0.508,0,0.99,0.098,1.445,0.293s0.856,0.462,1.201,0.801s0.615,0.736,0.811,1.191S68,46.229,68,46.75c0,0.417-0.065,0.814-0.195,1.191l-5,15c-0.13,0.378-0.313,0.726-0.547,1.045c-0.234,0.319-0.508,0.589-0.82,0.811s-0.654,0.394-1.025,0.518S59.654,65.5,59.25,65.5h-10c-2.331,0-4.577-0.449-6.738-1.348c-0.938-0.378-1.878-0.664-2.822-0.859S37.766,63,36.75,63H28V45.5h8.145c0.846,0,1.644-0.156,2.393-0.469s1.423-0.768,2.021-1.367l12.148-12.129c0.326-0.326,0.651-0.579,0.977-0.762s0.723-0.273,1.191-0.273c0.43,0,0.833,0.081,1.211,0.244s0.71,0.387,0.996,0.674s0.511,0.618,0.674,0.996S58,33.195,58,33.625c0,1.055-0.117,2.061-0.352,3.018s-0.579,1.904-1.035,2.842c-0.26,0.56-0.482,1.13-0.664,1.709S55.643,42.375,55.578,43H64.25z M59.25,63c0.26,0,0.501-0.078,0.723-0.234s0.378-0.365,0.469-0.625c0.065-0.182,0.186-0.534,0.361-1.055s0.387-1.149,0.635-1.885s0.521-1.543,0.82-2.422s0.599-1.768,0.898-2.666s0.589-1.774,0.869-2.627c0.28-0.853,0.531-1.621,0.752-2.305s0.397-1.243,0.527-1.68S65.5,46.815,65.5,46.75c0-0.339-0.124-0.632-0.371-0.879S64.589,45.5,64.25,45.5H53c0-0.69,0.016-1.331,0.049-1.924s0.098-1.169,0.195-1.729s0.238-1.12,0.42-1.68s0.423-1.152,0.723-1.777c0.365-0.755,0.641-1.527,0.83-2.314s0.283-1.605,0.283-2.451c0-0.182-0.059-0.332-0.176-0.449S55.057,33,54.875,33c-0.078,0-0.146,0.029-0.205,0.088l-0.166,0.166L42.336,45.441c-0.417,0.417-0.863,0.781-1.338,1.094s-0.98,0.579-1.514,0.801C38.443,47.779,37.329,48,36.145,48H30.5v12.5h6.25c2.318,0,4.564,0.449,6.738,1.348C45.363,62.616,47.284,63,49.25,63H59.25z"></path>
				</symbol>
			</defs>
		</svg>
<div id="container" class="wrapper">
			<div class="hero animated duration-3s bounceInLeft"></div>
					<div class="monolith animated duration-3s bounceInRight">
<div class="countdown-container">
  <div class="countdown">
    <span id="days" class="count-item">00</span>
    <span class="count-label">Days</span>
  </div>
  <div class="countdown">
    <span id="hours" class="count-item">00</span>
    <span class="count-label">Hours</span>
  </div>
  <div class="countdown">
    <span id="minutes" class="count-item">00</span>
    <span class="count-label">Minutes</span>
  </div>
  <div class="countdown">
    <span id="seconds" class="count-item">00</span>
    <span class="count-label">Seconds</span>
  </div>
</div>

					</div>
			
					<div id="scene" class="scene" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
				<div class="layer" data-depth="0.40">
					<canvas data-src="https://englishextra.github.io/libs/john-locke/img/matreshka-192x360.png" width="192" height="360" class="matreshka animated duration-3s bounceInUp"></canvas>
				</div>
				<div class="layer" data-depth="0.60">
					<canvas data-src="https://englishextra.github.io/libs/john-locke/img/notebook-320x462.png" width="320" height="462" class="notebook animated duration-3s bounceInUp"></canvas>
				</div>
			</div>
			<div class="intro animated duration-5s bounceInLeft" role="navigation" aria-label="Site">
				<h1>
<a href="javascript:void(0);" rel="contents" title="Содержание">
  <span class="highlighted-title">CRAXE</span><br />AUTOMOBILE<br />SYMPOSIUM 2025<br />
  <span>Innovations Driving Tomorrow</span>
</a>
				</h1>
			</div>
			<div class="quote animated bounceInDown">
				<p>"Mastering the art of progress means embracing the power of innovation." <br />- Automobile Industry Visionaries</p>
			</div>

			<div class="footer animated duration-3s bounceInDown">
			<p>
				<a
				href="javascript:void(0);"
				onclick="var a='mailto',b=':',c='englishextra2',k='%40',q='yahoo',s='.',v='com';this.href=a+b+c+k+q+s+v;"
				>&#169;&#160;2025&#160;Automobile Symposium</a
				>
			</p>
			</div>

		</div>
		<div class="college-name-container animated duration-3s bounceInUp">
    <h2 class="college-name">VELAMMAL ENGINEERING COLLEGE</h2>
</div>

		<div class="loading animated duration-5s">Gearing up for the Future...</div>
<a class="github-fork-ribbon left-bottom" 
   href="https://github.com/englishextra/englishextra.github.io" 
   target="_blank" 
   rel="noopener noreferrer" 
   title="Fork me on GitHub" 
   data-ribbon="Fork me on GitHub">
   Fork me on GitHub
</a>

<a class="github-fork-ribbon left-bottom" 
   href="https://forms.gle/VSZrSWneZ38nwHDe9" 
   target="_blank" 
   rel="noopener noreferrer" 
   title="Register Now" 
   data-ribbon="Register now!">
   Register Now
</a>

		
`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </>
  );
};

export default Header;
