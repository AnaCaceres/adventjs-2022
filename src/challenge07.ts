export default function getGiftsToRefill(store1: string[], store2: string[], store3: string[]) {
  let giftsInStores = [... new Set(store1.concat(store2, store3))];
  let giftsToBeRefilled = giftsInStores.filter(gift => {
    let giftStoresInventory = store1.includes(gift) ? 1 : 0;
    giftStoresInventory += store2.includes(gift) ? 1 : 0;
    giftStoresInventory += store3.includes(gift) ? 1 : 0;
    return giftStoresInventory < 2;
  })

  return giftsToBeRefilled;
}