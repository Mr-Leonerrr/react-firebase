const Variables = () => {
  const greet = "Hola Mundo";
  const image = "https://picsum.photos/300";
  const alt_text = "Esto es una imagen de picsum";

  return (
    <>
      <h2>{greet}</h2>
      <img id="cool-image" src={image} alt={alt_text} />
    </>
  );
};

export default Variables;
