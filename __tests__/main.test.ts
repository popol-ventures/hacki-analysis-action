/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * These should be run as if the action was called from a workflow.
 * Specifically, the inputs listed in `action.yml` should be set as environment
 * variables following the pattern `INPUT_<INPUT_NAME>`.
 */

// import * as core from "@actions/core";
// import * as github from '@actions/github'
// import * as main from "../src/main";
// import { triggerAnalysis } from '../src/hacki'

// Mock the action's main function
// const runMock = jest.spyOn(main, 'run')

jest.mock('@actions/github')

// Mock the GitHub Actions core library
// let debugMock: jest.SpiedFunction<typeof core.debug>
// let errorMock: jest.SpiedFunction<typeof core.error>
// let getInputMock: jest.SpiedFunction<typeof core.getInput>
// let setFailedMock: jest.SpiedFunction<typeof core.setFailed>
// let setOutputMock: jest.SpiedFunction<typeof core.setOutput>

describe('action', () => {
    beforeEach(() => {
        // TODO(@roeeyn): Implement this
    })

    it('sets the analysis id output', async () => {
        // TODO(@roeeyn): Implement this
        expect(true).toBe(true)
    })

    it('sets a failed status', async () => {
        // TODO(@roeeyn): Implement this
        expect(true).toBe(true)
    })
})
