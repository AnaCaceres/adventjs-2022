export default function carryGifts(gifts: string[], maxWeight: number) {
  const giftBags: string[] = [];

  gifts = gifts.filter((gift) => gift.length <= maxWeight);

  gifts.forEach((gift) => {
    gift.length + giftBags[giftBags.length - 1]?.replace(/ /g, "").length <=
    maxWeight
      ? (giftBags[giftBags.length - 1] += ` ${gift}`)
      : (giftBags[giftBags.length] = gift);
  });

  return giftBags;
}
