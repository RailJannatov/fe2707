async function getShipName() {
  const res = await fetch("https://northwind.vercel.app/api/orders");
  if (!res.ok) {
    throw new Error("Failed to fetch ship name");
    // notFound();
  }
  const data = await res.json();
  return data;
}

export default async function About() {
  const shipNames = await getShipName();

  return (
    <div>
      This is About page
      <div>
        {shipNames.map((name: any, index: number) => {
          return <div key={index}>{name.shipName}</div>;
        })}
      </div>
    </div>
  );
}
