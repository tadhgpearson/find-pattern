var findPattern = require("./index.js");
var test = require("tape");

test("Provided input", function(assert){
	assert.plan(8);
	assert.equal(findPattern("ababababab"), "ab");
	assert.equal(findPattern("accaccaccacc"), "acc");
	assert.equal(findPattern("1233211233211"), "123321");
	assert.equal(findPattern("0001000100"), "0001");
	assert.equal(findPattern("1234567"), "1234567");
	assert.equal(findPattern("ababdbabb"), "ababdbabb");
	assert.equal(findPattern("ababcabab"), "ababc");
	assert.equal(findPattern("aaaabaa"), "aaaab");
});

test("Edge cases", function(assert){
	assert.plan(8);
	assert.equal(findPattern(""), "");
	assert.equal(findPattern("a"), "a");
	assert.equal(findPattern("aa"), "a");
	assert.equal(findPattern("asdf"), "asdf");
	assert.equal(findPattern("asdfa"), "asdf");
	assert.equal(findPattern("asdfaa"), "asdfa");
	assert.equal(findPattern("  "), " ");
	assert.equal(findPattern("Harum dolor aut vel nostrum ut laboriosam quo officiis. Non tempora ipsum animi voluptatem et. Atque assumenda voluptatem saepe impedit. Harum dolor aut vel nostrum ut laboriosam quo officiis. Non tempora ipsum animi voluptatem et. Atque assumenda voluptatem saepe impedit. Harum dolor aut vel nostrum ut laboriosam quo officiis. Non tempora ipsum animi "), "Harum dolor aut vel nostrum ut laboriosam quo officiis. Non tempora ipsum animi voluptatem et. Atque assumenda voluptatem saepe impedit. ");
});