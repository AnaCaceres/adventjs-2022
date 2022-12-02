function wrapping(gifts) {
    var wrappedGifts = gifts.map(function (gift) {
        var wrappingPaper = getWrappingPaper(gift.length);
        return "".concat(wrappingPaper, "\n*").concat(gift, "*\n").concat(wrappingPaper);
    });
    return wrappedGifts;
}
function getWrappingPaper(giftLength) {
    var giftDepth = 3;
    return Array(giftLength + giftDepth).join("*");
}
var gifts = ['book', 'game', 'socks'];
var wrapped = wrapping(gifts);
console.log(wrapped);
