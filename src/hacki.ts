import * as core from "@actions/core";

export type RepositoryOwner = {
	name: string;
	type: string;
};

export type Repository = {
	name: string;
	owner: RepositoryOwner;
};

export type AnalysisInput = {
	apiKey: string;
	apiUrl: string;
	pullRequestId: number;
	repo: Repository;
};

export async function triggerAnalysis(
	analysisInput: AnalysisInput,
): Promise<string> {
	// TODO(@roeeyn): Implement this
	core.debug(`api_key: ${analysisInput.apiKey.slice(-5)}`);
	core.debug(`api_url: ${analysisInput.apiUrl}`);
	core.debug(`repo: ${analysisInput.repo.name}`);
	core.debug(`owner: ${analysisInput.repo.owner.name}`);
	core.debug(`owner type: ${analysisInput.repo.owner.type}`);
	core.debug(`prId: ${analysisInput.pullRequestId}`);
	return "hardcoded analysis id";
}
