export default function wrapping(gifts: string[]) {
  let wrappedGifts: string[] = gifts.map((gift: string) => {
    let wrappingPaper: string = getWrappingPaper(gift.length);
    return `${wrappingPaper}\n*${gift}*\n${wrappingPaper}`;
  }) 
  return wrappedGifts;
}

function getWrappingPaper(giftLength: number){
  let giftDepth: number = 3
  return Array(giftLength + giftDepth).join("*");
}
