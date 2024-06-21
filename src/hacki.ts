import * as core from '@actions/core'

export type AnalysisInput = {
    apiKey: string
    apiUrl: string
    repo: string
    owner: string
    prId: number
}

export async function triggerAnalysis(
    analysisInput: AnalysisInput
): Promise<string> {
    // TODO(@roeeyn): Implement this
    core.debug(`api_key: ${analysisInput.apiKey.slice(-5)}`)
    core.debug(`api_url: ${analysisInput.apiUrl}`)
    core.debug(`repo: ${analysisInput.repo}`)
    core.debug(`owner: ${analysisInput.owner}`)
    core.debug(`prId: ${analysisInput.prId}`)
    return 'hardcoded analysis id'
}
