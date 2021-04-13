import path from 'path'

import fg from 'fast-glob'
import { ESLint } from 'eslint'

const cli = new ESLint()
const target = fg.sync(path.resolve(process.cwd(), './tests/example/**/*.tsx'))

const getErrors = (targetPath: string) => cli.lintFiles(targetPath)

describe('Validate ESLint configs', () => {
  target.forEach((file) => {
    it(`load config ${file} in ESLint to validate all rules are correct`, async () => {
      expect(await getErrors(file)).toEqual([])
    })
  })
})
