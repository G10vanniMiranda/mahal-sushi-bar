import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Mahal Sushi Bar</h1>
      <p>Experimente o melhor da culinária japonesa com ingredientes frescos e ambiente acolhedor.</p>
      <Image
        src="/sushi.jpg"
        alt="Delicious sushi platter"
        width={600}
        height={400}
      />
    </div>
  );
}
