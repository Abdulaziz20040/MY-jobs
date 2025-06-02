import React from "react";

async function DetailsPage({
  params,
}: {
  params: Promise<{ cardDetails: string }>;
}) {
  const cardId = (await params).cardDetails;
  return <div>Id of card is {cardId}</div>;
}

export default DetailsPage;
