
function ImageShow({image}) {
  return (
      <div>
          <img src={ image.urls.small} aly ={image.alt_description} />
      </div>
  );
}

export default ImageShow;