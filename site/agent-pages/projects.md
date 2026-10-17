# Projects - AI Engineering from Scratch

Canonical page: https://aiengineeringfromscratch.com/projects

PROJECTS · SIMPLE TO ADVANCED



# Build things people actually use.


Each project turns course lessons into a working artifact: a report generator, a memory server, a task queue, an agent. You build it stage by stage, a grader checks every stage, and a tutor walks you through it.





[Start the first project](https://aiengineeringfromscratch.com/projects#ladder)
[Submit your project](https://aiengineeringfromscratch.com/projects#submit)






HOW IT WORKS

## Three commands, one project

Choose Python, Rust, TypeScript, or Go for the job. Core tests run offline; optional framework labs list their dependencies.




- 
01

### Create your workspace


Copy the starter files. Each stub gives you the exact signature to implement.


python3 scripts/project_test.py research-report-agent --init my-report-agent




- 
02

### Run the grader


Build one stage at a time. The grader checks your work and every earlier stage.


python3 scripts/project_test.py research-report-agent --stage 1 --path my-report-agent




- 
03

### Learn with the tutor


Want guidance? In Claude Code, work through each stage with hints and feedback.


/build-project research-report-agent









THE LADDER

## Pick your level

Five levels. Each adds one new kind of engineering. New projects join a level as they are written or submitted.





Pick by role
Show planned












COMMUNITY



## Built something useful? Add it to the ladder.


Community projects use the same layout as core ones: a project.json, stages with a lesson, a starter, and tests, plus a reference solution. They appear here with your GitHub handle.




- Produces a real artifact, not a chat demo

- Every stage has tests that pass offline, with no API key

- Independent evaluation fixtures and clear limits on what the score proves

- Original implementations with links to official specs and research





After copying, set id in projects/my-project/project.json to my-project before running the grader.


cp -r projects/_template projects/my-project
python3 scripts/project_test.py my-project \
--all --solution --strict


[Read the submission guide](https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/projects/SUBMITTING.md)

[Curriculum index](https://aiengineeringfromscratch.com/llms.txt) | [API and MCP docs](https://aiengineeringfromscratch.com/docs)
