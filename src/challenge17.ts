export default function carryGifts(gifts: string[], maxWeight: number) {
  const giftBags: string[] = [];

  gifts.forEach((gift) => {
    if (gift.length + giftBags[giftBags.length - 1]?.length <= maxWeight) {
      giftBags[giftBags.length - 1] += ` ${gift}`;
    } else if (gift.length <= maxWeight) {
      giftBags.push(gift);
    }
  });

  return giftBags;
}
