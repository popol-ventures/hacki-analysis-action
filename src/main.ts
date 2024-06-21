import * as core from '@actions/core'
import * as github from '@actions/github'

import { type AnalysisInput, triggerAnalysis } from './hacki'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const apiKey: string = core.getInput('HACKI_API_KEY')
    const apiUrl: string = core.getInput('HACKI_HOST_URL')
    const repo = github.context.repo.repo
    const owner = github.context.repo.owner
    const prId = github.context.payload.number

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`context: ${JSON.stringify(github.context, null, 2)}`)

    const analysisInput: AnalysisInput = {
      apiKey,
      apiUrl,
      repo,
      owner,
      prId
    }

    core.debug(`analysisInput: ${JSON.stringify(analysisInput, null, 2)}`)
    const analysisId = await triggerAnalysis(analysisInput)
    core.debug(`analysisId: ${analysisId}`)

    // Set outputs for other workflow steps to use
    core.setOutput('analysisId', analysisId)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
