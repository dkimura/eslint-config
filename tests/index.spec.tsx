import path from 'path'

import { ESLint } from 'eslint'
import fg from 'fast-glob'

const cli = new ESLint()
const target = fg.sync(path.resolve(process.cwd(), './tests/example/**/*'))

const getErrors = async (targetPath: string) =>
  (await cli.lintFiles(targetPath)).reduce(
    (acc, { errorCount }) => acc + errorCount,
    0
  )

describe('Validate ESLint configs', () => {
  target.forEach((file) => {
    it(`load config ${file} in ESLint to validate all rules are correct`, async () => {
      expect(await getErrors(file)).toEqual(0)
    })
  })
})
