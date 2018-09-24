export async function generateRandomNumber () {
  // simulate an asynchronous operation
  return new Promise(resolve => setTimeout(resolve, 1000)).then(() =>
    Math.floor(Math.random() * 100)
  )
}
