export default function carryGifts(gifts: string[], maxWeight: number) {
  const regex = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, "g");
  const giftBags = gifts.join(" ").match(regex) || [];

  return giftBags;
}
