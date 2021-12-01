import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n").map(Number)

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let count = 0

  input.forEach(((value, index) => {
    if (index>0 && input[index] > input[index-1]) {
      count++;
    }
  }))

  return count
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let count = 0

  const sums = input.map((_, index, input) => input[index] + (input[index + 1] ?? 0) + (input[index + 2] ?? 0))

  sums.forEach(((value, index) => {
    if (index>0 && sums[index] > sums[index-1]) {
      count++;
    }
  }))

  return count
}

run({
  part1: { // 1759
    tests: [
      {
        input: `
          199
          200
          208
          210
          200
          207
          240
          269
          260
          263
        `,
        expected: 7,
      },
    ],
    solution: part1,
  },
  part2: { // 1805
    tests: [
      {
        input: `
          199
          200
          208
          210
          200
          207
          240
          269
          260
          263
        `,
        expected: 5,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
})
