const {test, expect} = require('@playwright/test')

test("My First Test", async function ({page}) {
  
  expect(1).toBe(1)

})

test.skip("Second Test", async function ({page}) {
  
  expect(2).toBe(4)

})

test("Third Test", async function ({page}) {
  
  expect(2.0).toBe(2.0)
  expect(true).toBeTruthy()
  
})

test.skip("Fourth Test", async function ({page}) {
  
  expect("Pikachu").toContain("Pika1")
  
})

test("Fifth Test", async function ({page}) {
  
  expect(false).toBeFalsy()
  
})

test("Sixth Test", async function ({page}) {
  
  expect("kishmeergha".includes("kish")).toBeTruthy()
  
})

test("Seventh Test", async function ({page}) {
  
  expect("kishmeergha".includes("bish")).toBeTruthy()
  
})