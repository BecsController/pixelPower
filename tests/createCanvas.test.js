const createCanvas = require('../createCanvas')

test('createCanvas returns canvas of specified size', () => {
  for (let i = 1; i < 5; i++) {
    const canvas = createCanvas(i)

    expect(canvas).toHaveLength(i)
    expect(canvas[0]).toHaveLength(i)
  }
})
