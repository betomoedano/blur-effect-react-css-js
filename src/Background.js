function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Background() {
  const spheres = new Array(15).fill("").map((i) => getRandomColor());
  return (
    <div className="background">
      {spheres.map((s, index) => (
        <div key={index} style={{ backgroundColor: s }} className="sphere" />
      ))}
    </div>
  );
}
