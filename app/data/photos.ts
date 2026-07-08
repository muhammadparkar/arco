// Curated free-license Unsplash photography used for section backdrops.
// Not product photos (no exact-SKU images available) — atmosphere only.

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photos = {
  warehouse: u("1553413077-190dd305871c"), // pallet racking / logistics
  containerPort: u("1542838132-92c53300491e"), // shipping containers
  groceryAisle: u("1578916171728-46686eac8d58"), // supermarket shelf
  dairyFarm: u("1519996529931-28324d5a630e"), // dairy / milk
  spicesMarket: u("1523294587484-bae6cc870010"), // spices bazaar
  deliveryTruck: u("1615485500704-8e990f9900f7"), // delivery van/truck
  coffeeBeans: u("1595246140625-573b715d11dc"), // coffee beans
  freshProduce: u("1607013251379-e6eecfffe234"), // fresh groceries
  cannedGoods: u("1587049633312-d628ae50a8ae"), // stocked shelves
  teamMeeting: u("1509440159596-0249088772ff"), // trade / handshake
  nutella: "/nutella.jpg", // Nutella jar local asset
};
