import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css';
import one from '../component/image/IMG_1938.jpg';
import two from '../component/image/g3.jpg';
import three from '../component/image/imagetwo.png';
import four from '../component/image/imageone.png';
import five from '../component/image/v.jpg';
import six from '../component/image/vv.jpg';
import seven from '../component/image/vvv.jpg';
import eight from '../component/image/vvvv.jpg';
const MyImageGallery = () => {
  const images = [
    {
      original: one,
      thumbnail: two,
    },
    {
      original: two,
      thumbnail: three,
    },
    { original: three, thumbnail: four },
    { original: four, thumbnail: five },
    { original: six, thumbnail: seven },
    { original: seven, thumbnail: eight },
    { original: eight, thumbnail: one },
    // { original: two, thumbnail: 'thumbnail2.jpg' },
    // { original: two, thumbnail: 'thumbnail2.jpg' },
    // Add more images as needed
  ];
  return <ImageGallery items={images} />;
};

export default MyImageGallery;
