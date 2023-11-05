const Links = () => {
  const items = ["Homepage", "About Me", "Projects", "Skills", "Contact"];

  return (
    <div className="links">
      {items.map((item) => {
        return (
          <a key={item} href={`#${item}`}>
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
