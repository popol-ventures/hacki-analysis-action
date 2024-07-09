import * as core from '@actions/core'

export type RepositoryOwner = {
  name: string
  type: string
}

export type Repository = {
  name: string
  owner: RepositoryOwner
}

export type AnalysisInput = {
  apiKey: string
  apiUrl: string
  pullRequestNumber: number
  branch: string
  repo: Repository
}

export type AnalysisResponse = {
  id: string
  status: string
  type: string
  updated_at: string
  pull_request_number: number
  completed_at: string | null
  conclusion: string | null
  scm_provider_run_id: string
  head_sha: string
  repo_id: string
  created_at: string
}

export async function triggerAnalysis(
  analysisInput: AnalysisInput
): Promise<AnalysisResponse> {
  // TODO(@roeeyn): Implement this
  core.debug(`api_key: ${analysisInput.apiKey.slice(-5)}`)
  core.debug(`branch: ${analysisInput.branch}`)
  core.debug(`prId: ${analysisInput.pullRequestNumber}`)
  //github
  core.debug(`repo name: ${analysisInput.repo.name}`)
  core.debug(`owner: ${analysisInput.repo.owner.name}`)
  core.debug(`owner type: ${analysisInput.repo.owner.type}`)
  core.debug(`api_url: ${analysisInput.apiUrl}`)

  const response = await fetch(
    `${analysisInput.apiUrl}/api/v1/analyzer/analysis`,
    {
      method: 'POST',
      body: JSON.stringify({
        api_key: analysisInput.apiKey,
        branch: analysisInput.branch,
        pull_request_number: analysisInput.pullRequestNumber,
        scm_provider: 'github',
        repo: {
          name: analysisInput.repo.name,
          owner: {
            name: analysisInput.repo.owner.name,
            type: analysisInput.repo.owner.type
          }
        }
      })
    }
  )

  core.debug(`response: ${response}`)

  const { analysis } = await response.json()

  return analysis as AnalysisResponse
}
