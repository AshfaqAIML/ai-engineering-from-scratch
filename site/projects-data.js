window.AIFS_PROJECTS = {
  "generated": "2026-10-17",
  "repo": "https://github.com/rohitg00/ai-engineering-from-scratch",
  "levels": [
    {
      "level": 1,
      "name": "Starter",
      "summary": "One program, one clear input and output. No model needed to pass the tests."
    },
    {
      "level": 2,
      "name": "Builder",
      "summary": "A pipeline of three or more parts with a typed contract between them."
    },
    {
      "level": 3,
      "name": "Engineer",
      "summary": "State, budgets, retries, traces, and one measured eval number."
    },
    {
      "level": 4,
      "name": "Systems",
      "summary": "Isolation, concurrency, protocols, many tools, long-running work."
    },
    {
      "level": 5,
      "name": "Frontier",
      "summary": "Compare agent systems, trace failures, and measure reproducible experiments."
    }
  ],
  "projects": [
    {
      "id": "bookmark-path-organizer",
      "title": "Bookmark Path Organizer",
      "tagline": "Make a useful reading path from saved links.",
      "summary": "Help a reader recover a useful collection from an exported bookmark pile. Normalize URLs conservatively, merge exact duplicates, score user-defined topics from saved titles and notes, and export an editable reading path as HTML and JSON.",
      "level": 1,
      "languages": [
        "TypeScript"
      ],
      "source": "core",
      "prerequisiteProjects": [],
      "status": "ready",
      "hours": 8,
      "youWillBuild": "A standalone reading-path page and bookmarks.json with retained original URLs",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "languageWhy": {
        "TypeScript": "Typed local transformations and portable browser interfaces run with Node standard libraries."
      },
      "figures": true,
      "overviewFigure": "pj-bookmark-path-organizer-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-import-hierarchy",
          "title": "Import bookmarks with their original hierarchy",
          "summary": "importBookmarks(input: unknown): Bookmark[]",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-bookmark-path-organizer-1",
          "concepts": [
            "Import bookmarks with their original hierarchy"
          ],
          "number": 1,
          "doc": "projects/bookmark-path-organizer/stages/01-import-hierarchy/docs/en.md",
          "contentUrl": "project-content/bookmark-path-organizer/stages/01-import-hierarchy/docs/en.md",
          "tests": "projects/bookmark-path-organizer/stages/01-import-hierarchy/tests",
          "figures": [
            "pj-bookmark-path-organizer-1"
          ]
        },
        {
          "id": "02-explain-duplicates",
          "title": "Normalize links and explain duplicate groups",
          "summary": "normalizeURL(value: string): string; groupDuplicates(items: Bookmark[]): Group[]",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-bookmark-path-organizer-2",
          "concepts": [
            "Normalize links and explain duplicate groups"
          ],
          "number": 2,
          "doc": "projects/bookmark-path-organizer/stages/02-explain-duplicates/docs/en.md",
          "contentUrl": "project-content/bookmark-path-organizer/stages/02-explain-duplicates/docs/en.md",
          "tests": "projects/bookmark-path-organizer/stages/02-explain-duplicates/tests",
          "figures": [
            "pj-bookmark-path-organizer-2"
          ]
        },
        {
          "id": "03-rank-reading-path",
          "title": "Rank topics and assemble a reading path",
          "summary": "readingPath(groups: Group[], topics: Record<string,string[]>): Reading[]",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-bookmark-path-organizer-3",
          "concepts": [
            "Rank topics and assemble a reading path"
          ],
          "number": 3,
          "doc": "projects/bookmark-path-organizer/stages/03-rank-reading-path/docs/en.md",
          "contentUrl": "project-content/bookmark-path-organizer/stages/03-rank-reading-path/docs/en.md",
          "tests": "projects/bookmark-path-organizer/stages/03-rank-reading-path/tests",
          "figures": [
            "pj-bookmark-path-organizer-3"
          ]
        },
        {
          "id": "04-export-progress",
          "title": "Export an editable collection and progress file",
          "summary": "applyProgress(items: Reading[], value?: unknown): {items: Reading[]; progress: Progress}; renderCollection(items: Reading[], progress: Progress): string",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-bookmark-path-organizer-4",
          "concepts": [
            "Export an editable collection and progress file"
          ],
          "number": 4,
          "doc": "projects/bookmark-path-organizer/stages/04-export-progress/docs/en.md",
          "contentUrl": "project-content/bookmark-path-organizer/stages/04-export-progress/docs/en.md",
          "tests": "projects/bookmark-path-organizer/stages/04-export-progress/tests",
          "figures": [
            "pj-bookmark-path-organizer-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/bookmark-path-organizer",
      "readme": "projects/bookmark-path-organizer/README.md",
      "contentBase": "project-content/bookmark-path-organizer",
      "manifestHash": "225acf22c3809abdfc962f956f9874cc3d8d1b19404c13c467860c9aa5f97f17",
      "figureScripts": [
        "figures/projects/bookmark-path-organizer.js"
      ]
    },
    {
      "id": "csv-repair-workbench",
      "title": "CSV Repair Workbench",
      "level": 1,
      "languages": [
        "Python"
      ],
      "source": "core",
      "tagline": "Fix messy tables without losing the original cells.",
      "summary": "Help a spreadsheet owner repair inconsistent labels, dates and missing values through an explicit sequence of transformations. Preview every changed cell, keep ambiguous cases for review, and export a cleaned CSV with a reusable transformation recipe and HTML comparison.",
      "prerequisiteProjects": [],
      "status": "ready",
      "hours": 8,
      "prerequisites": [
        "Python 3.10+; lists, dictionaries and functions"
      ],
      "skills": [
        "Profile columns and retain original cells",
        "Propose explicit normalization rules",
        "Preview changes and review ambiguous values",
        "Export a reusable repair recipe and cleaned table"
      ],
      "youWillBuild": "cleaned.csv, recipe.json and a cell-level HTML before/after report",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "overviewFigure": "pj-csv-repair-workbench-1",
      "figures": true,
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-profile",
          "title": "Profile columns and retain original cells",
          "summary": "Retain exact source cells while counting missing and distinct values.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "CSV parsing",
            "provenance"
          ],
          "figure": "pj-csv-repair-workbench-1",
          "number": 1,
          "doc": "projects/csv-repair-workbench/stages/01-profile/docs/en.md",
          "contentUrl": "project-content/csv-repair-workbench/stages/01-profile/docs/en.md",
          "tests": "projects/csv-repair-workbench/stages/01-profile/tests",
          "figures": [
            "pj-csv-repair-workbench-1"
          ]
        },
        {
          "id": "02-rules",
          "title": "Propose explicit normalization rules",
          "summary": "Build an explicit ordered recipe from supplied policy.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "normalization",
            "ordered rules"
          ],
          "figure": "pj-csv-repair-workbench-2",
          "number": 2,
          "doc": "projects/csv-repair-workbench/stages/02-rules/docs/en.md",
          "contentUrl": "project-content/csv-repair-workbench/stages/02-rules/docs/en.md",
          "tests": "projects/csv-repair-workbench/stages/02-rules/tests",
          "figures": [
            "pj-csv-repair-workbench-2"
          ]
        },
        {
          "id": "03-preview",
          "title": "Preview changes and review ambiguous values",
          "summary": "Show every changed cell and quarantine uncertain dates.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "ambiguity",
            "cell diff"
          ],
          "figure": "pj-csv-repair-workbench-3",
          "number": 3,
          "doc": "projects/csv-repair-workbench/stages/03-preview/docs/en.md",
          "contentUrl": "project-content/csv-repair-workbench/stages/03-preview/docs/en.md",
          "tests": "projects/csv-repair-workbench/stages/03-preview/tests",
          "figures": [
            "pj-csv-repair-workbench-3"
          ]
        },
        {
          "id": "04-export",
          "title": "Export a reusable repair recipe and cleaned table",
          "summary": "Replay the recipe and validate human cell decisions.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "review receipts",
            "CSV export"
          ],
          "figure": "pj-csv-repair-workbench-4",
          "number": 4,
          "doc": "projects/csv-repair-workbench/stages/04-export/docs/en.md",
          "contentUrl": "project-content/csv-repair-workbench/stages/04-export/docs/en.md",
          "tests": "projects/csv-repair-workbench/stages/04-export/tests",
          "figures": [
            "pj-csv-repair-workbench-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/csv-repair-workbench",
      "readme": "projects/csv-repair-workbench/README.md",
      "contentBase": "project-content/csv-repair-workbench",
      "manifestHash": "4fa6288f8ae6afce7bd2d55b5da0e0fe42e27a1a4d4716e137e78fdb9fd41d00",
      "figureScripts": [
        "figures/projects/csv-repair-workbench.js"
      ]
    },
    {
      "id": "dataset-split-auditor",
      "title": "Dataset Split Auditor",
      "level": 1,
      "levelName": "Starter",
      "tagline": "A dataset gate that names the records responsible for content and incident leakage.",
      "summary": "A dataset gate that names the records responsible for content and incident leakage. Pass {train,test} records to the CLI, or {records} with --split 0.25 --seed experiment-1. Add --check in CI to return exit2 when the split is unusable.",
      "youWillBuild": "A dataset gate that names the records responsible for content and incident leakage.",
      "usefulFor": [
        "Pass {train,test} records to the CLI, or {records} with --split 0.25 --seed experiment-1. Add --check in CI to return exit2 when the split is unusable."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "The standard library makes parsing, scoring, and failure handling visible without hiding the mechanism behind a framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Fingerprint normalized records",
        "Audit duplicate and group leakage",
        "Split groups with stable hashing",
        "Report split size and leakage together"
      ],
      "prerequisites": [
        "Python 3.10+",
        "lists, sets, dictionaries, Unicode normalization and hash functions."
      ],
      "figures": true,
      "overviewFigure": "pj-dataset-split-auditor-1",
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "split-audit.json",
          "--html",
          "split-audit.html"
        ]
      },
      "stages": [
        {
          "id": "01-fingerprint-records",
          "title": "Fingerprint normalized records",
          "summary": "Create stable SHA-256 fingerprints for text after NFKC normalization, case folding, and whitespace collapse..",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "fingerprints",
            "Unicode normalization"
          ],
          "figure": "pj-dataset-split-auditor-1",
          "number": 1,
          "doc": "projects/dataset-split-auditor/stages/01-fingerprint-records/docs/en.md",
          "contentUrl": "project-content/dataset-split-auditor/stages/01-fingerprint-records/docs/en.md",
          "tests": "projects/dataset-split-auditor/stages/01-fingerprint-records/tests",
          "figures": [
            "pj-dataset-split-auditor-1"
          ]
        },
        {
          "id": "02-audit-leakage",
          "title": "Audit duplicate and group leakage",
          "summary": "Validate ids, text, and groups, then report intersections across train and test..",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "data leakage",
            "groups",
            "evidence"
          ],
          "figure": "pj-dataset-split-auditor-2",
          "number": 2,
          "doc": "projects/dataset-split-auditor/stages/02-audit-leakage/docs/en.md",
          "contentUrl": "project-content/dataset-split-auditor/stages/02-audit-leakage/docs/en.md",
          "tests": "projects/dataset-split-auditor/stages/02-audit-leakage/tests",
          "figures": [
            "pj-dataset-split-auditor-2"
          ]
        },
        {
          "id": "03-split-groups",
          "title": "Split groups with stable hashing",
          "summary": "Return train and test arrays with no group overlap.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "deterministic splitting",
            "group isolation"
          ],
          "figure": "pj-dataset-split-auditor-3",
          "number": 3,
          "doc": "projects/dataset-split-auditor/stages/03-split-groups/docs/en.md",
          "contentUrl": "project-content/dataset-split-auditor/stages/03-split-groups/docs/en.md",
          "tests": "projects/dataset-split-auditor/stages/03-split-groups/tests",
          "figures": [
            "pj-dataset-split-auditor-3"
          ]
        },
        {
          "id": "04-report-distribution",
          "title": "Report split size and leakage together",
          "summary": "Produce a JSON audit with partition sizes, group counts, and a usable flag requiring both nonempty partitions and no leakage..",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "evaluation readiness",
            "dataset audit"
          ],
          "figure": "pj-dataset-split-auditor-4",
          "number": 4,
          "doc": "projects/dataset-split-auditor/stages/04-report-distribution/docs/en.md",
          "contentUrl": "project-content/dataset-split-auditor/stages/04-report-distribution/docs/en.md",
          "tests": "projects/dataset-split-auditor/stages/04-report-distribution/tests",
          "figures": [
            "pj-dataset-split-auditor-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/dataset-split-auditor",
      "readme": "projects/dataset-split-auditor/README.md",
      "contentBase": "project-content/dataset-split-auditor",
      "manifestHash": "045556da89c410d016d456b5afbee838c1abbadd7cca2362efcbb7aaff2672b5",
      "figureScripts": [
        "figures/projects/dataset-split-auditor.js"
      ]
    },
    {
      "id": "download-folder-sort-desk",
      "title": "Download Folder Sort Desk",
      "level": 1,
      "languages": [
        "Python"
      ],
      "source": "core",
      "tagline": "Turn a crowded folder into a reviewable filing plan.",
      "summary": "Help someone organize local downloads by combining file metadata, content hashes and an explainable category score. Generate collision-free destination proposals and duplicate groups, then export an HTML review desk and a JSON move plan that another file manager can consume.",
      "prerequisiteProjects": [],
      "status": "ready",
      "hours": 8,
      "prerequisites": [
        "Python 3.10+; lists, dictionaries and functions"
      ],
      "skills": [
        "Inventory files and compute content identities",
        "Score categories from visible file features",
        "Plan destinations and surface naming conflicts",
        "Export a reviewed filing plan for a file manager"
      ],
      "youWillBuild": "A searchable HTML filing plan, duplicate groups and moves.json",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "overviewFigure": "pj-download-folder-sort-desk-1",
      "figures": true,
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-inventory",
          "title": "Inventory files and compute content identities",
          "summary": "Hash bytes and retain root-relative file identities.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "content identity",
            "filesystem traversal"
          ],
          "figure": "pj-download-folder-sort-desk-1",
          "number": 1,
          "doc": "projects/download-folder-sort-desk/stages/01-inventory/docs/en.md",
          "contentUrl": "project-content/download-folder-sort-desk/stages/01-inventory/docs/en.md",
          "tests": "projects/download-folder-sort-desk/stages/01-inventory/tests",
          "figures": [
            "pj-download-folder-sort-desk-1"
          ]
        },
        {
          "id": "02-score",
          "title": "Score categories from visible file features",
          "summary": "Explain categories from extension and filename evidence.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "scoring",
            "tie breaking"
          ],
          "figure": "pj-download-folder-sort-desk-2",
          "number": 2,
          "doc": "projects/download-folder-sort-desk/stages/02-score/docs/en.md",
          "contentUrl": "project-content/download-folder-sort-desk/stages/02-score/docs/en.md",
          "tests": "projects/download-folder-sort-desk/stages/02-score/tests",
          "figures": [
            "pj-download-folder-sort-desk-2"
          ]
        },
        {
          "id": "03-destinations",
          "title": "Plan destinations and surface naming conflicts",
          "summary": "Reserve each destination before planning the next file.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "collision handling",
            "duplicate groups"
          ],
          "figure": "pj-download-folder-sort-desk-3",
          "number": 3,
          "doc": "projects/download-folder-sort-desk/stages/03-destinations/docs/en.md",
          "contentUrl": "project-content/download-folder-sort-desk/stages/03-destinations/docs/en.md",
          "tests": "projects/download-folder-sort-desk/stages/03-destinations/tests",
          "figures": [
            "pj-download-folder-sort-desk-3"
          ]
        },
        {
          "id": "04-review",
          "title": "Export a reviewed filing plan for a file manager",
          "summary": "Check source identities before consuming selected moves.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "approval",
            "stale data"
          ],
          "figure": "pj-download-folder-sort-desk-4",
          "number": 4,
          "doc": "projects/download-folder-sort-desk/stages/04-review/docs/en.md",
          "contentUrl": "project-content/download-folder-sort-desk/stages/04-review/docs/en.md",
          "tests": "projects/download-folder-sort-desk/stages/04-review/tests",
          "figures": [
            "pj-download-folder-sort-desk-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/download-folder-sort-desk",
      "readme": "projects/download-folder-sort-desk/README.md",
      "contentBase": "project-content/download-folder-sort-desk",
      "manifestHash": "6b81c68ca4d02b4c9638f7b33243330ce8181d3e2c23f391500cd64290b14f32",
      "figureScripts": [
        "figures/projects/download-folder-sort-desk.js"
      ]
    },
    {
      "id": "glossary-hovercard-publisher",
      "title": "Glossary Hovercard Publisher",
      "tagline": "Explain unfamiliar terms inside the page people are reading.",
      "summary": "Help an educator add contextual definitions to existing lesson HTML using a reviewed glossary and longest-phrase matching. Preserve code and links, support keyboard-accessible definitions, and export a standalone annotated lesson with a reusable glossary file.",
      "level": 1,
      "languages": [
        "TypeScript"
      ],
      "source": "core",
      "prerequisiteProjects": [],
      "status": "ready",
      "hours": 8,
      "youWillBuild": "An annotated HTML lesson, glossary.json and a term-coverage report",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "languageWhy": {
        "TypeScript": "Typed local transformations and portable browser interfaces run with Node standard libraries."
      },
      "figures": true,
      "overviewFigure": "pj-glossary-hovercard-publisher-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-validate-glossary",
          "title": "Validate terms, aliases and original definitions",
          "summary": "validateGlossary(value: unknown): Term[]",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-glossary-hovercard-publisher-1",
          "concepts": [
            "Validate terms, aliases and original definitions"
          ],
          "number": 1,
          "doc": "projects/glossary-hovercard-publisher/stages/01-validate-glossary/docs/en.md",
          "contentUrl": "project-content/glossary-hovercard-publisher/stages/01-validate-glossary/docs/en.md",
          "tests": "projects/glossary-hovercard-publisher/stages/01-validate-glossary/tests",
          "figures": [
            "pj-glossary-hovercard-publisher-1"
          ]
        },
        {
          "id": "02-match-text",
          "title": "Match phrases inside eligible text nodes",
          "summary": "matchTerms(text: string, terms: Term[]): Match[]",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-glossary-hovercard-publisher-2",
          "concepts": [
            "Match phrases inside eligible text nodes"
          ],
          "number": 2,
          "doc": "projects/glossary-hovercard-publisher/stages/02-match-text/docs/en.md",
          "contentUrl": "project-content/glossary-hovercard-publisher/stages/02-match-text/docs/en.md",
          "tests": "projects/glossary-hovercard-publisher/stages/02-match-text/tests",
          "figures": [
            "pj-glossary-hovercard-publisher-2"
          ]
        },
        {
          "id": "03-accessible-definitions",
          "title": "Render accessible definitions in context",
          "summary": "annotateLesson(html: string, terms: Term[]): {html: string; coverage: Coverage[]}",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-glossary-hovercard-publisher-3",
          "concepts": [
            "Render accessible definitions in context"
          ],
          "number": 3,
          "doc": "projects/glossary-hovercard-publisher/stages/03-accessible-definitions/docs/en.md",
          "contentUrl": "project-content/glossary-hovercard-publisher/stages/03-accessible-definitions/docs/en.md",
          "tests": "projects/glossary-hovercard-publisher/stages/03-accessible-definitions/tests",
          "figures": [
            "pj-glossary-hovercard-publisher-3"
          ]
        },
        {
          "id": "04-publish-bundle",
          "title": "Export the lesson and reusable glossary bundle",
          "summary": "publishGlossary(lesson: string, terms: Term[]): {html: string; glossary: Term[]; coverage: Coverage[]}",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-glossary-hovercard-publisher-4",
          "concepts": [
            "Export the lesson and reusable glossary bundle"
          ],
          "number": 4,
          "doc": "projects/glossary-hovercard-publisher/stages/04-publish-bundle/docs/en.md",
          "contentUrl": "project-content/glossary-hovercard-publisher/stages/04-publish-bundle/docs/en.md",
          "tests": "projects/glossary-hovercard-publisher/stages/04-publish-bundle/tests",
          "figures": [
            "pj-glossary-hovercard-publisher-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/glossary-hovercard-publisher",
      "readme": "projects/glossary-hovercard-publisher/README.md",
      "contentBase": "project-content/glossary-hovercard-publisher",
      "manifestHash": "b2dc3acc74e0fa57e63d8ce9e910ebcc96651e8135ff0cc2aff8d654a1e6ca25",
      "figureScripts": [
        "figures/projects/glossary-hovercard-publisher.js"
      ]
    },
    {
      "id": "json-schema-output-guard",
      "title": "JSON Schema Output Guard",
      "level": 1,
      "levelName": "Starter",
      "tagline": "A schema preflight and bounded-repair receipt for model output contracts.",
      "summary": "A schema preflight and bounded-repair receipt for model output contracts. Call guard(raw,schema) at the application boundary, or repair(generate,schema,maxAttempts) where generate receives structured Issue[] and a one-based attempt number.",
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Parse the untrusted boundary",
        "Walk a schema recursively",
        "Reject ambiguous and unsupported contracts",
        "Repair with a finite budget"
      ],
      "prerequisites": [
        "Node 22.18+ and Python 3 for the grader",
        "TypeScript unions, recursive functions, JSON and async callbacks."
      ],
      "youWillBuild": "A schema preflight and bounded-repair receipt for model output contracts.",
      "usefulFor": [
        "Call guard(raw,schema) at the application boundary, or repair(generate,schema,maxAttempts) where generate receives structured Issue[] and a one-based attempt number."
      ],
      "demo": {
        "cwd": "solution",
        "command": [
          "node",
          "cli.ts",
          "--schema",
          "samples/schema.json",
          "--attempts",
          "samples/attempts.json",
          "--output",
          "guard.json",
          "--html",
          "guard.html"
        ]
      },
      "stages": [
        {
          "id": "01-parse-json",
          "title": "Parse the untrusted boundary",
          "summary": "A model response is a byte string. Parse the entire string as JSON, reject markdown wrappers and trailing text, and cap its UTF-8 byte size before parsing. Accept JSON primitives as well as objects: the schema, not the parser, determines whether a primitive is useful. Do not remove text until it happens to parse because that hides the actual output contract.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "TypeScript keeps unknown data separate from typed application values.",
          "concepts": [
            "parseJSON"
          ],
          "difficulty": "starter",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-json-schema-output-guard-1",
          "number": 1,
          "doc": "projects/json-schema-output-guard/stages/01-parse-json/docs/en.md",
          "contentUrl": "project-content/json-schema-output-guard/stages/01-parse-json/docs/en.md",
          "tests": "projects/json-schema-output-guard/stages/01-parse-json/tests",
          "figures": [
            "pj-json-schema-output-guard-1"
          ]
        },
        {
          "id": "02-validate-types",
          "title": "Walk a schema recursively",
          "summary": "Implement object, array and primitive validation. Required properties are checked with own-property semantics. An inherited property does not satisfy the contract. Treat integer as a refinement of number, reject non-finite numbers, and preserve a path for every failure. Bound recursive descent at depth 32 so a schema and value cannot consume the stack indefinitely.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Recursive union types describe the schema subset without importing a validator.",
          "concepts": [
            "validate"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-json-schema-output-guard-2",
          "number": 2,
          "doc": "projects/json-schema-output-guard/stages/02-validate-types/docs/en.md",
          "contentUrl": "project-content/json-schema-output-guard/stages/02-validate-types/docs/en.md",
          "tests": "projects/json-schema-output-guard/stages/02-validate-types/tests",
          "figures": [
            "pj-json-schema-output-guard-2"
          ]
        },
        {
          "id": "03-constraints",
          "title": "Reject ambiguous and unsupported contracts",
          "summary": "Add numeric bounds, enum membership, minimum Unicode string length, array bounds, and closed objects. Escape slash and tilde inside property paths. A keyword outside this educational subset is a configuration error, not silent success. This implementation intentionally does not claim complete JSON Schema conformance: references, formats and combinators require additional work.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Typed issue objects make error reporting stable across the CLI and retry loop.",
          "concepts": [
            "validate",
            "guard"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-json-schema-output-guard-3",
          "number": 3,
          "doc": "projects/json-schema-output-guard/stages/03-constraints/docs/en.md",
          "contentUrl": "project-content/json-schema-output-guard/stages/03-constraints/docs/en.md",
          "tests": "projects/json-schema-output-guard/stages/03-constraints/tests",
          "figures": [
            "pj-json-schema-output-guard-3"
          ]
        },
        {
          "id": "04-bounded-repair",
          "title": "Repair with a finite budget",
          "summary": "Feed only structured validation feedback into a generation callback. Count each call before interpreting its output. Stop immediately after acceptance and return an explicit exhausted state after the final rejected attempt. Provider failures propagate instead of being disguised as schema failures. The trace records each attempt so a successful third response does not conceal two earlier contract violations.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Async function types allow deterministic fake generation and a later provider adapter.",
          "concepts": [
            "repair"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts",
            "{tests}/integration.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-json-schema-output-guard-4",
          "number": 4,
          "doc": "projects/json-schema-output-guard/stages/04-bounded-repair/docs/en.md",
          "contentUrl": "project-content/json-schema-output-guard/stages/04-bounded-repair/docs/en.md",
          "tests": "projects/json-schema-output-guard/stages/04-bounded-repair/tests",
          "figures": [
            "pj-json-schema-output-guard-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/json-schema-output-guard",
      "readme": "projects/json-schema-output-guard/README.md",
      "contentBase": "project-content/json-schema-output-guard",
      "manifestHash": "4ccf8aad435e8d55c5ec5d07468ef7daa75b0220deca5110d52a1acf52bb8a65",
      "figureScripts": [
        "figures/projects/json-schema-output-guard.js"
      ]
    },
    {
      "id": "prompt-regression-tester",
      "title": "Prompt Regression Tester",
      "level": 1,
      "levelName": "Starter",
      "tagline": "Compare prompt revisions on recorded responses with explicit checks, paired regressions, and a reproducible release gate.",
      "summary": "Compare prompt revisions on recorded responses with explicit checks, paired regressions, and a reproducible release gate.",
      "youWillBuild": "A prompt-change review kit that identifies exactly which user commitments broke.",
      "usefulFor": [
        "A prompt-change review kit that identifies exactly which user commitments broke.",
        "The supplied recordings are authored fixtures."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "The standard library makes parsing, scoring, and failure handling visible without hiding the mechanism behind a framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate cases before scoring",
        "Score recorded outputs without a model",
        "Compare the same cases across revisions",
        "Gate releases on explicit tolerances"
      ],
      "prerequisites": [
        {
          "title": "Structured outputs",
          "path": "phases/11-llm-engineering/03-structured-outputs"
        },
        {
          "title": "Model evaluation",
          "path": "phases/02-ml-fundamentals/09-model-evaluation"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-prompt-regression-tester-1",
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-validate-cases",
          "title": "Validate cases before scoring",
          "summary": "Validate unique case ids, prompts, and supported checks: contains, excludes, and json..",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "evaluation contract",
            "schema validation"
          ],
          "figure": "pj-prompt-regression-tester-1",
          "number": 1,
          "doc": "projects/prompt-regression-tester/stages/01-validate-cases/docs/en.md",
          "contentUrl": "project-content/prompt-regression-tester/stages/01-validate-cases/docs/en.md",
          "tests": "projects/prompt-regression-tester/stages/01-validate-cases/tests",
          "figures": [
            "pj-prompt-regression-tester-1"
          ]
        },
        {
          "id": "02-score-recordings",
          "title": "Score recorded outputs without a model",
          "summary": "Score contains, excludes, and valid JSON checks.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "replay",
            "assertions",
            "failure evidence"
          ],
          "figure": "pj-prompt-regression-tester-2",
          "number": 2,
          "doc": "projects/prompt-regression-tester/stages/02-score-recordings/docs/en.md",
          "contentUrl": "project-content/prompt-regression-tester/stages/02-score-recordings/docs/en.md",
          "tests": "projects/prompt-regression-tester/stages/02-score-recordings/tests",
          "figures": [
            "pj-prompt-regression-tester-2"
          ]
        },
        {
          "id": "03-pair-revisions",
          "title": "Compare the same cases across revisions",
          "summary": "Return paired case outcomes and counts for regressions and improvements..",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "paired comparison",
            "regression detection"
          ],
          "figure": "pj-prompt-regression-tester-3",
          "number": 3,
          "doc": "projects/prompt-regression-tester/stages/03-pair-revisions/docs/en.md",
          "contentUrl": "project-content/prompt-regression-tester/stages/03-pair-revisions/docs/en.md",
          "tests": "projects/prompt-regression-tester/stages/03-pair-revisions/tests",
          "figures": [
            "pj-prompt-regression-tester-3"
          ]
        },
        {
          "id": "04-gate-releases",
          "title": "Gate releases on explicit tolerances",
          "summary": "Apply a finite minimum pass fraction and integer regression budget to a comparison report..",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "release gates",
            "budgets",
            "empty evidence"
          ],
          "figure": "pj-prompt-regression-tester-4",
          "number": 4,
          "doc": "projects/prompt-regression-tester/stages/04-gate-releases/docs/en.md",
          "contentUrl": "project-content/prompt-regression-tester/stages/04-gate-releases/docs/en.md",
          "tests": "projects/prompt-regression-tester/stages/04-gate-releases/tests",
          "figures": [
            "pj-prompt-regression-tester-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/prompt-regression-tester",
      "readme": "projects/prompt-regression-tester/README.md",
      "contentBase": "project-content/prompt-regression-tester",
      "manifestHash": "5191914036c931b01e7ec571a5c0a0d8f425e477d1ac177a152333587434cdf9",
      "figureScripts": [
        "figures/projects/prompt-regression-tester.js"
      ]
    },
    {
      "id": "semantic-notes-search",
      "title": "Semantic Notes Search",
      "level": 1,
      "levelName": "Starter",
      "tagline": "Search your markdown notes with Unicode normalization, explicit aliases and inspectable lexical scores.",
      "summary": "Search local notes with explicit synonym expansion and normalized TF-IDF scores. Explain every match rather than hiding retrieval in a hosted embedding service.",
      "youWillBuild": "Local notes search explaining each match and showing when aliases help or harm.",
      "usefulFor": [
        "Local notes search explaining each match and showing when aliases help or harm.",
        "This is an explainable lexical TF-IDF baseline with explicit aliases, not a learned embedding model."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "The standard library makes parsing, scoring, and failure handling visible without hiding the mechanism behind a framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Normalize notes without losing identity",
        "Weight terms by document rarity",
        "Rank queries with a stable tie rule",
        "Measure retrieval before adding embeddings"
      ],
      "prerequisites": [
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        },
        {
          "title": "Retrieval augmented generation",
          "path": "phases/11-llm-engineering/06-rag"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-semantic-notes-search-1",
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-normalize-notes",
          "title": "Normalize notes without losing identity",
          "summary": "Return canonical Unicode word tokens.",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "Unicode",
            "tokenization",
            "synonyms"
          ],
          "figure": "pj-semantic-notes-search-1",
          "number": 1,
          "doc": "projects/semantic-notes-search/stages/01-normalize-notes/docs/en.md",
          "contentUrl": "project-content/semantic-notes-search/stages/01-normalize-notes/docs/en.md",
          "tests": "projects/semantic-notes-search/stages/01-normalize-notes/tests",
          "figures": [
            "pj-semantic-notes-search-1"
          ]
        },
        {
          "id": "02-weight-the-index",
          "title": "Weight terms by document rarity",
          "summary": "Build an index from a mapping of ids to strings.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "TF-IDF",
            "normalization",
            "document frequency"
          ],
          "figure": "pj-semantic-notes-search-2",
          "number": 2,
          "doc": "projects/semantic-notes-search/stages/02-weight-the-index/docs/en.md",
          "contentUrl": "project-content/semantic-notes-search/stages/02-weight-the-index/docs/en.md",
          "tests": "projects/semantic-notes-search/stages/02-weight-the-index/tests",
          "figures": [
            "pj-semantic-notes-search-2"
          ]
        },
        {
          "id": "03-rank-queries",
          "title": "Rank queries with a stable tie rule",
          "summary": "Return at most k objects with id, score, and matched terms.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "cosine similarity",
            "top k",
            "stable ranking"
          ],
          "figure": "pj-semantic-notes-search-3",
          "number": 3,
          "doc": "projects/semantic-notes-search/stages/03-rank-queries/docs/en.md",
          "contentUrl": "project-content/semantic-notes-search/stages/03-rank-queries/docs/en.md",
          "tests": "projects/semantic-notes-search/stages/03-rank-queries/tests",
          "figures": [
            "pj-semantic-notes-search-3"
          ]
        },
        {
          "id": "04-measure-recall",
          "title": "Measure retrieval before adding embeddings",
          "summary": "Evaluate labeled query-to-id cases and report hits, total, and recall.",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "recall",
            "evaluation fixtures",
            "error analysis"
          ],
          "figure": "pj-semantic-notes-search-4",
          "number": 4,
          "doc": "projects/semantic-notes-search/stages/04-measure-recall/docs/en.md",
          "contentUrl": "project-content/semantic-notes-search/stages/04-measure-recall/docs/en.md",
          "tests": "projects/semantic-notes-search/stages/04-measure-recall/tests",
          "figures": [
            "pj-semantic-notes-search-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/semantic-notes-search",
      "readme": "projects/semantic-notes-search/README.md",
      "contentBase": "project-content/semantic-notes-search",
      "manifestHash": "6c9bbea9804000ac2bb9c05301e3c145d77146b88818b650ba4e7b3ed260e30d",
      "figureScripts": [
        "figures/projects/semantic-notes-search.js"
      ]
    },
    {
      "id": "skill-validator",
      "title": "SKILL.md Validator and Loader",
      "level": 1,
      "levelName": "Starter",
      "tagline": "Validate skill metadata and load only the context the task needs.",
      "summary": "Build a bounded Agent Skills loader with a deliberately small frontmatter grammar, strict metadata validation, safe reference paths, and progressive disclosure. The supported YAML subset is explicit; unsupported forms fail instead of being guessed.",
      "usefulFor": [
        "A compatibility linter explaining why a skill works in one agent but fails in another.",
        "The parser accepts plain single-line values and JSON-compatible quoted strings."
      ],
      "youWillBuild": "A compatibility linter explaining why a skill works in one agent but fails in another.",
      "hours": 8,
      "languages": [
        "Rust"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Parse an explicit frontmatter subset",
        "Validate names and descriptions",
        "Contain resource paths",
        "Load context within a character budget"
      ],
      "prerequisites": [
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        },
        {
          "title": "Structured outputs",
          "path": "phases/11-llm-engineering/03-structured-outputs"
        }
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-parse-an-explicit-frontmatter-subset",
          "title": "Parse an explicit frontmatter subset",
          "summary": "Split only a leading --- block.",
          "hours": 2,
          "language": "rust",
          "difficulty": "starter",
          "concepts": [
            "Header boundary",
            "Key split",
            "Duplicate gate",
            "Body retained"
          ],
          "number": 1,
          "doc": "projects/skill-validator/stages/01-parse-an-explicit-frontmatter-subset/docs/en.md",
          "contentUrl": "project-content/skill-validator/stages/01-parse-an-explicit-frontmatter-subset/docs/en.md",
          "tests": "projects/skill-validator/stages/01-parse-an-explicit-frontmatter-subset/tests",
          "figures": [
            "pj-skill-validator-1"
          ]
        },
        {
          "id": "02-validate-names-and-descriptions",
          "title": "Validate names and descriptions",
          "summary": "The loader accepts only lowercase names of 1 to 64 bytes with single interior hyphens, no leading digit restriction, and a nonblank description up to 1024 characters.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Read fields",
            "Name grammar",
            "Folder identity",
            "Typed skill"
          ],
          "number": 2,
          "doc": "projects/skill-validator/stages/02-validate-names-and-descriptions/docs/en.md",
          "contentUrl": "project-content/skill-validator/stages/02-validate-names-and-descriptions/docs/en.md",
          "tests": "projects/skill-validator/stages/02-validate-names-and-descriptions/tests",
          "figures": [
            "pj-skill-validator-2"
          ]
        },
        {
          "id": "03-contain-resource-paths",
          "title": "Contain resource paths",
          "summary": "Resolve resource names relative to a skill root.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Relative input",
            "Component gate",
            "Canonicalize",
            "Containment"
          ],
          "number": 3,
          "doc": "projects/skill-validator/stages/03-contain-resource-paths/docs/en.md",
          "contentUrl": "project-content/skill-validator/stages/03-contain-resource-paths/docs/en.md",
          "tests": "projects/skill-validator/stages/03-contain-resource-paths/tests",
          "figures": [
            "pj-skill-validator-3"
          ]
        },
        {
          "id": "04-load-context-within-a-character-budget",
          "title": "Load context within a character budget",
          "summary": "Discovery returns name and description.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Discover metadata",
            "Choose activation",
            "Count characters",
            "Complete or reject"
          ],
          "number": 4,
          "doc": "projects/skill-validator/stages/04-load-context-within-a-character-budget/docs/en.md",
          "contentUrl": "project-content/skill-validator/stages/04-load-context-within-a-character-budget/docs/en.md",
          "tests": "projects/skill-validator/stages/04-load-context-within-a-character-budget/tests",
          "figures": [
            "pj-skill-validator-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/skill-validator",
      "readme": "projects/skill-validator/README.md",
      "contentBase": "project-content/skill-validator",
      "manifestHash": "075f9efa345f6ccc12013f90fbd71f8091a435b112dd637a328c186ed8f9d4c3",
      "figureScripts": [
        "figures/projects/skill-validator.js"
      ]
    },
    {
      "id": "tiny-coding-agent",
      "title": "Tiny Coding Agent",
      "level": 1,
      "levelName": "Starter",
      "tagline": "Build a bounded coding loop that applies exact patches to a disposable workspace and runs its real tests through an allowlisted tool contract.",
      "summary": "Build a bounded coding loop that applies exact patches to a disposable workspace and runs its real tests through an allowlisted tool contract.",
      "youWillBuild": "A repair agent that exposes the patch/test evidence trail and refuses unsupported success claims.",
      "usefulFor": [
        "A repair agent that exposes the patch/test evidence trail and refuses unsupported success claims.",
        "The CLI copies a trusted Python workspace to a new destination, then runs its tests as local code."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "The standard library makes parsing, scoring, and failure handling visible without hiding the mechanism behind a framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Confine file tools to a workspace",
        "Apply exact patches with preconditions",
        "Run real tests through one allowed command",
        "Stop the coding loop on evidence or budget"
      ],
      "prerequisites": [
        {
          "title": "The agent loop",
          "path": "phases/14-agent-engineering/01-the-agent-loop"
        },
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-tiny-coding-agent-1",
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-confine-paths",
          "title": "Confine file tools to a workspace",
          "summary": "Resolve existing relative file paths under a workspace and reject traversal, absolute paths, symlink escapes, and nonfiles.",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "path containment",
            "tool boundaries"
          ],
          "figure": "pj-tiny-coding-agent-1",
          "number": 1,
          "doc": "projects/tiny-coding-agent/stages/01-confine-paths/docs/en.md",
          "contentUrl": "project-content/tiny-coding-agent/stages/01-confine-paths/docs/en.md",
          "tests": "projects/tiny-coding-agent/stages/01-confine-paths/tests",
          "figures": [
            "pj-tiny-coding-agent-1"
          ]
        },
        {
          "id": "02-apply-exact-patches",
          "title": "Apply exact patches with preconditions",
          "summary": "Replace one exact occurrence and preserve the file on missing or ambiguous matches.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "patch preconditions",
            "atomic writes"
          ],
          "figure": "pj-tiny-coding-agent-2",
          "number": 2,
          "doc": "projects/tiny-coding-agent/stages/02-apply-exact-patches/docs/en.md",
          "contentUrl": "project-content/tiny-coding-agent/stages/02-apply-exact-patches/docs/en.md",
          "tests": "projects/tiny-coding-agent/stages/02-apply-exact-patches/tests",
          "figures": [
            "pj-tiny-coding-agent-2"
          ]
        },
        {
          "id": "03-run-real-tests",
          "title": "Run real tests through one allowed command",
          "summary": "Run unittest discovery in the workspace and report passed, tests, output, and a terminal state.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "subprocess",
            "timeouts",
            "test evidence"
          ],
          "figure": "pj-tiny-coding-agent-3",
          "number": 3,
          "doc": "projects/tiny-coding-agent/stages/03-run-real-tests/docs/en.md",
          "contentUrl": "project-content/tiny-coding-agent/stages/03-run-real-tests/docs/en.md",
          "tests": "projects/tiny-coding-agent/stages/03-run-real-tests/tests",
          "figures": [
            "pj-tiny-coding-agent-3"
          ]
        },
        {
          "id": "04-bound-the-loop",
          "title": "Stop the coding loop on evidence or budget",
          "summary": "Consume patch and test actions, record results, and return completed, failed, or budget_exhausted.",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "agent loop",
            "allowlisted tools",
            "terminal states"
          ],
          "figure": "pj-tiny-coding-agent-4",
          "number": 4,
          "doc": "projects/tiny-coding-agent/stages/04-bound-the-loop/docs/en.md",
          "contentUrl": "project-content/tiny-coding-agent/stages/04-bound-the-loop/docs/en.md",
          "tests": "projects/tiny-coding-agent/stages/04-bound-the-loop/tests",
          "figures": [
            "pj-tiny-coding-agent-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/tiny-coding-agent",
      "readme": "projects/tiny-coding-agent/README.md",
      "contentBase": "project-content/tiny-coding-agent",
      "manifestHash": "f1561798c616ba7e6b8ecd37c91c13abbde215d0d8a303b3adf79edb1a85e498",
      "figureScripts": [
        "figures/projects/tiny-coding-agent.js"
      ]
    },
    {
      "id": "token-counter-and-cost-meter",
      "title": "Token Counter and Cost Meter",
      "level": 1,
      "levelName": "Starter",
      "tagline": "Account for usage and budgets with integer arithmetic.",
      "summary": "Build an explicit approximate tokenizer, exact recorded-usage accounting, rate-card cost calculation and budget admission. Estimates are labeled and never presented as provider tokenizer counts. Prices are fixture inputs rather than claims about current provider pricing.",
      "usefulFor": [
        "Usage reconciliation explaining why real billing differs from preflight estimates.",
        "Rates are explicit fixture inputs in integer nano-dollars per token, not current provider prices."
      ],
      "youWillBuild": "Usage reconciliation explaining why real billing differs from preflight estimates.",
      "hours": 8,
      "languages": [
        "Rust"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Estimate text with a documented bound",
        "Validate recorded usage",
        "Price with checked integers",
        "Admit work against a ledger"
      ],
      "prerequisites": [
        {
          "title": "Tokenizers",
          "path": "phases/10-llms-from-scratch/01-tokenizers"
        },
        {
          "title": "Verification gates",
          "path": "phases/14-agent-engineering/38-verification-gates"
        }
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-estimate-text-with-a-documented-bound",
          "title": "Estimate text with a documented bound",
          "summary": "Count Unicode scalar values and use a configurable characters-per-token ratio with ceiling division.",
          "hours": 2,
          "language": "rust",
          "difficulty": "starter",
          "concepts": [
            "Count scalars",
            "Read ratio",
            "Ceiling division",
            "Label estimate"
          ],
          "number": 1,
          "doc": "projects/token-counter-and-cost-meter/stages/01-estimate-text-with-a-documented-bound/docs/en.md",
          "contentUrl": "project-content/token-counter-and-cost-meter/stages/01-estimate-text-with-a-documented-bound/docs/en.md",
          "tests": "projects/token-counter-and-cost-meter/stages/01-estimate-text-with-a-documented-bound/tests",
          "figures": [
            "pj-token-counter-and-cost-meter-1"
          ]
        },
        {
          "id": "02-validate-recorded-usage",
          "title": "Validate recorded usage",
          "summary": "Cached input is a subset of input, never an extra token category to add twice.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Parse counters",
            "Check unsigned",
            "Cached subset",
            "Usage record"
          ],
          "number": 2,
          "doc": "projects/token-counter-and-cost-meter/stages/02-validate-recorded-usage/docs/en.md",
          "contentUrl": "project-content/token-counter-and-cost-meter/stages/02-validate-recorded-usage/docs/en.md",
          "tests": "projects/token-counter-and-cost-meter/stages/02-validate-recorded-usage/tests",
          "figures": [
            "pj-token-counter-and-cost-meter-2"
          ]
        },
        {
          "id": "03-price-with-checked-integers",
          "title": "Price with checked integers",
          "summary": "The fixture rate card uses nano-dollars per token.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Uncached charge",
            "Cache charge",
            "Output charge",
            "Checked sum"
          ],
          "number": 3,
          "doc": "projects/token-counter-and-cost-meter/stages/03-price-with-checked-integers/docs/en.md",
          "contentUrl": "project-content/token-counter-and-cost-meter/stages/03-price-with-checked-integers/docs/en.md",
          "tests": "projects/token-counter-and-cost-meter/stages/03-price-with-checked-integers/tests",
          "figures": [
            "pj-token-counter-and-cost-meter-3"
          ]
        },
        {
          "id": "04-admit-work-against-a-ledger",
          "title": "Admit work against a ledger",
          "summary": "Reserve a quoted amount only if spent plus quote is within the configured limit.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Read ledger",
            "Checked addition",
            "Compare limit",
            "Commit reservation"
          ],
          "number": 4,
          "doc": "projects/token-counter-and-cost-meter/stages/04-admit-work-against-a-ledger/docs/en.md",
          "contentUrl": "project-content/token-counter-and-cost-meter/stages/04-admit-work-against-a-ledger/docs/en.md",
          "tests": "projects/token-counter-and-cost-meter/stages/04-admit-work-against-a-ledger/tests",
          "figures": [
            "pj-token-counter-and-cost-meter-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/token-counter-and-cost-meter",
      "readme": "projects/token-counter-and-cost-meter/README.md",
      "contentBase": "project-content/token-counter-and-cost-meter",
      "manifestHash": "063246c44714cd739244ad24d8815127eda7dfd8d1b1ea70354ad50253cf8f11",
      "figureScripts": [
        "figures/projects/token-counter-and-cost-meter.js"
      ]
    },
    {
      "id": "vocabulary-autocomplete-pad",
      "title": "Vocabulary Autocomplete Pad",
      "tagline": "Build suggestions that explain which words they learned from.",
      "summary": "Help a writer reuse their own terminology with a small local autocomplete model built from token counts, prefixes and short word histories. Show the evidence behind each suggestion and export an interactive writing pad plus a portable vocabulary model for another editor.",
      "level": 1,
      "languages": [
        "TypeScript"
      ],
      "source": "core",
      "prerequisiteProjects": [],
      "status": "ready",
      "hours": 8,
      "youWillBuild": "A local autocomplete writing page and vocabulary-model.json",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "languageWhy": {
        "TypeScript": "Typed local transformations and portable browser interfaces run with Node standard libraries."
      },
      "figures": true,
      "overviewFigure": "pj-vocabulary-autocomplete-pad-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-count-histories",
          "title": "Tokenize a corpus and count word histories",
          "summary": "tokenize(text: string): string[]; train(corpus: unknown): Model",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-vocabulary-autocomplete-pad-1",
          "concepts": [
            "Tokenize a corpus and count word histories"
          ],
          "number": 1,
          "doc": "projects/vocabulary-autocomplete-pad/stages/01-count-histories/docs/en.md",
          "contentUrl": "project-content/vocabulary-autocomplete-pad/stages/01-count-histories/docs/en.md",
          "tests": "projects/vocabulary-autocomplete-pad/stages/01-count-histories/tests",
          "figures": [
            "pj-vocabulary-autocomplete-pad-1"
          ]
        },
        {
          "id": "02-rank-candidates",
          "title": "Rank prefix and next-word candidates",
          "summary": "suggest(model: Model, prefix: string, history?: string[], limit?: number): Suggestion[]",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-vocabulary-autocomplete-pad-2",
          "concepts": [
            "Rank prefix and next-word candidates"
          ],
          "number": 2,
          "doc": "projects/vocabulary-autocomplete-pad/stages/02-rank-candidates/docs/en.md",
          "contentUrl": "project-content/vocabulary-autocomplete-pad/stages/02-rank-candidates/docs/en.md",
          "tests": "projects/vocabulary-autocomplete-pad/stages/02-rank-candidates/tests",
          "figures": [
            "pj-vocabulary-autocomplete-pad-2"
          ]
        },
        {
          "id": "03-accept-suggestions",
          "title": "Accept suggestions in a writing pad",
          "summary": "completeText(model: Model, text: string, limit?: number): {prefix:string;history:string[];suggestions:Suggestion[]}; acceptSuggestion(text:string,prefix:string,word:string):string",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-vocabulary-autocomplete-pad-3",
          "concepts": [
            "Accept suggestions in a writing pad"
          ],
          "number": 3,
          "doc": "projects/vocabulary-autocomplete-pad/stages/03-accept-suggestions/docs/en.md",
          "contentUrl": "project-content/vocabulary-autocomplete-pad/stages/03-accept-suggestions/docs/en.md",
          "tests": "projects/vocabulary-autocomplete-pad/stages/03-accept-suggestions/tests",
          "figures": [
            "pj-vocabulary-autocomplete-pad-3"
          ]
        },
        {
          "id": "04-portable-model",
          "title": "Export the learned model and editor function",
          "summary": "importModel(value: unknown): Model; renderPad(model: Model, initial?: string): string",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-vocabulary-autocomplete-pad-4",
          "concepts": [
            "Export the learned model and editor function"
          ],
          "number": 4,
          "doc": "projects/vocabulary-autocomplete-pad/stages/04-portable-model/docs/en.md",
          "contentUrl": "project-content/vocabulary-autocomplete-pad/stages/04-portable-model/docs/en.md",
          "tests": "projects/vocabulary-autocomplete-pad/stages/04-portable-model/tests",
          "figures": [
            "pj-vocabulary-autocomplete-pad-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/vocabulary-autocomplete-pad",
      "readme": "projects/vocabulary-autocomplete-pad/README.md",
      "contentBase": "project-content/vocabulary-autocomplete-pad",
      "manifestHash": "0c305f7369fc019a5126578cde62cf29b64de89a60ac88523bead85c9959c8df",
      "figureScripts": [
        "figures/projects/vocabulary-autocomplete-pad.js"
      ]
    },
    {
      "id": "api-tutorial-runner",
      "title": "API Tutorial Runner",
      "tagline": "Check that an API tutorial still works from its first request to its final result.",
      "summary": "Help a documentation author verify a sequence of HTTP examples. Parse explicit request blocks, substitute only declared variables from prior responses, and run against a local fixture or an opted-in test endpoint. Produce a source-linked report that exposes stale examples and lets an assistant propose a reviewed correction.",
      "level": 2,
      "languages": [
        "TypeScript"
      ],
      "source": "core",
      "prerequisiteProjects": [
        "json-schema-output-guard"
      ],
      "status": "ready",
      "hours": 8,
      "youWillBuild": "Replayable request manifest, JUnit results and annotated tutorial HTML",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "languageWhy": {
        "TypeScript": "Typed local transformations and portable browser interfaces run with Node standard libraries."
      },
      "figures": true,
      "overviewFigure": "pj-api-tutorial-runner-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-extract-requests",
          "title": "Extract explicit requests from an authored tutorial",
          "summary": "extractRequests(markdown:string):RequestStep[]",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-api-tutorial-runner-1",
          "concepts": [
            "Extract explicit requests from an authored tutorial"
          ],
          "number": 1,
          "doc": "projects/api-tutorial-runner/stages/01-extract-requests/docs/en.md",
          "contentUrl": "project-content/api-tutorial-runner/stages/01-extract-requests/docs/en.md",
          "tests": "projects/api-tutorial-runner/stages/01-extract-requests/tests",
          "figures": [
            "pj-api-tutorial-runner-1"
          ]
        },
        {
          "id": "02-typed-variables",
          "title": "Resolve typed variables across steps",
          "summary": "resolveValue(value:unknown,variables:Record<string,string|number|boolean>):unknown; captureVariables(body,declarations,previous?):Record<string,string|number|boolean>",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-api-tutorial-runner-2",
          "concepts": [
            "Resolve typed variables across steps"
          ],
          "number": 2,
          "doc": "projects/api-tutorial-runner/stages/02-typed-variables/docs/en.md",
          "contentUrl": "project-content/api-tutorial-runner/stages/02-typed-variables/docs/en.md",
          "tests": "projects/api-tutorial-runner/stages/02-typed-variables/tests",
          "figures": [
            "pj-api-tutorial-runner-2"
          ]
        },
        {
          "id": "03-bounded-http",
          "title": "Run bounded requests against a test service",
          "summary": "runTutorial(steps:RequestStep[],baseURL:string,options?):Promise<Receipt[]>",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-api-tutorial-runner-3",
          "concepts": [
            "Run bounded requests against a test service"
          ],
          "number": 3,
          "doc": "projects/api-tutorial-runner/stages/03-bounded-http/docs/en.md",
          "contentUrl": "project-content/api-tutorial-runner/stages/03-bounded-http/docs/en.md",
          "tests": "projects/api-tutorial-runner/stages/03-bounded-http/tests",
          "figures": [
            "pj-api-tutorial-runner-3"
          ]
        },
        {
          "id": "04-source-linked-report",
          "title": "Export source-linked failures and correction proposals",
          "summary": "exportResults(steps,receipts):{junit,html,corrections}; acceptedCorrections(receipts,value):{id,line,proposal}[]",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-api-tutorial-runner-4",
          "concepts": [
            "Export source-linked failures and correction proposals"
          ],
          "number": 4,
          "doc": "projects/api-tutorial-runner/stages/04-source-linked-report/docs/en.md",
          "contentUrl": "project-content/api-tutorial-runner/stages/04-source-linked-report/docs/en.md",
          "tests": "projects/api-tutorial-runner/stages/04-source-linked-report/tests",
          "figures": [
            "pj-api-tutorial-runner-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/api-tutorial-runner",
      "readme": "projects/api-tutorial-runner/README.md",
      "contentBase": "project-content/api-tutorial-runner",
      "manifestHash": "03b7b6f23788c26ab22a61e0bbc23efd6f8721a811083e3a0b9df70fe27db428",
      "figureScripts": [
        "figures/projects/api-tutorial-runner.js"
      ]
    },
    {
      "id": "calendar-focus-planner",
      "title": "Calendar Focus Planner",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Find real free time in a calendar, place prioritized tasks, and explain which tasks do not fit.",
      "summary": "Find real free time in a calendar, place prioritized tasks, and explain which tasks do not fit.",
      "youWillBuild": "An inspectable HTML plan, machine-readable schedule, and portable ICS proposals for manual import.",
      "usefulFor": [
        "Use your own input to produce a reviewable artifact another application can consume."
      ],
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "languageWhy": {
        "TypeScript": "Standard-library parsing, explicit contracts and portable artifacts keep the mechanism visible."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Read explicit calendar intervals",
        "Merge overlaps before finding gaps",
        "Schedule priorities without pretending everything fits",
        "Export a reviewable calendar proposal"
      ],
      "prerequisites": [
        {
          "title": "Development environment",
          "path": "phases/00-setup-and-tooling/01-dev-environment"
        },
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-calendar-focus-planner-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.ics",
          "tasks.json",
          "2026-10-14",
          "output",
          "10"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-read-calendar",
          "title": "Read explicit calendar intervals",
          "summary": "parseCalendar(text)",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "concepts": [
            "Read explicit calendar intervals"
          ],
          "figure": "pj-calendar-focus-planner-1",
          "number": 1,
          "doc": "projects/calendar-focus-planner/stages/01-read-calendar/docs/en.md",
          "contentUrl": "project-content/calendar-focus-planner/stages/01-read-calendar/docs/en.md",
          "tests": "projects/calendar-focus-planner/stages/01-read-calendar/tests",
          "figures": [
            "pj-calendar-focus-planner-1"
          ]
        },
        {
          "id": "02-compute-free-time",
          "title": "Merge overlaps before finding gaps",
          "summary": "availableSlots(events, window, bufferMinutes=0)",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "concepts": [
            "Merge overlaps before finding gaps"
          ],
          "figure": "pj-calendar-focus-planner-2",
          "number": 2,
          "doc": "projects/calendar-focus-planner/stages/02-compute-free-time/docs/en.md",
          "contentUrl": "project-content/calendar-focus-planner/stages/02-compute-free-time/docs/en.md",
          "tests": "projects/calendar-focus-planner/stages/02-compute-free-time/tests",
          "figures": [
            "pj-calendar-focus-planner-2"
          ]
        },
        {
          "id": "03-place-tasks",
          "title": "Schedule priorities without pretending everything fits",
          "summary": "schedule(tasks, events, window, bufferMinutes=0)",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "concepts": [
            "Schedule priorities without pretending everything fits"
          ],
          "figure": "pj-calendar-focus-planner-3",
          "number": 3,
          "doc": "projects/calendar-focus-planner/stages/03-place-tasks/docs/en.md",
          "contentUrl": "project-content/calendar-focus-planner/stages/03-place-tasks/docs/en.md",
          "tests": "projects/calendar-focus-planner/stages/03-place-tasks/tests",
          "figures": [
            "pj-calendar-focus-planner-3"
          ]
        },
        {
          "id": "04-export-proposals",
          "title": "Export a reviewable calendar proposal",
          "summary": "exportCalendar(plan, createdAt); renderPlan(plan)",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "concepts": [
            "Export a reviewable calendar proposal"
          ],
          "figure": "pj-calendar-focus-planner-4",
          "number": 4,
          "doc": "projects/calendar-focus-planner/stages/04-export-proposals/docs/en.md",
          "contentUrl": "project-content/calendar-focus-planner/stages/04-export-proposals/docs/en.md",
          "tests": "projects/calendar-focus-planner/stages/04-export-proposals/tests",
          "figures": [
            "pj-calendar-focus-planner-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Build and verify",
          "caption": "Actual starter failure and reference grader output; reference passes do not earn a learner certificate."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Use the finished artifact",
          "caption": "Recorded real input, computed output and the resulting portable report."
        }
      ],
      "path": "projects/calendar-focus-planner",
      "readme": "projects/calendar-focus-planner/README.md",
      "contentBase": "project-content/calendar-focus-planner",
      "manifestHash": "60501ab4bd5ee8ae45d3b666d629395abbe8ebd5c2bdfaa5cf3b415074af7e64",
      "figureScripts": [
        "figures/projects/calendar-focus-planner.js"
      ]
    },
    {
      "id": "catalog-record-linker",
      "title": "Catalog Record Linker",
      "level": 2,
      "languages": [
        "Python"
      ],
      "source": "core",
      "tagline": "Reconcile two catalogs without silently merging different things.",
      "summary": "Help a librarian or organizer reconcile inconsistent item records from two CSV exports. Generate candidate pairs using normalized fields and token similarity, collect explicit match decisions, and export a source-preserving crosswalk and reviewed merged catalog.",
      "prerequisiteProjects": [
        "csv-repair-workbench"
      ],
      "status": "ready",
      "hours": 8,
      "prerequisites": [
        "Python 3.10+; lists, dictionaries and functions"
      ],
      "skills": [
        "Import two catalogs with stable source identifiers",
        "Generate candidate pairs and explain similarity",
        "Review matches and resolve conflicting fields",
        "Export the crosswalk and merged catalog"
      ],
      "youWillBuild": "An HTML pair-review queue, crosswalk.csv and merged-catalog.json",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "overviewFigure": "pj-catalog-record-linker-1",
      "figures": true,
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-import",
          "title": "Import two catalogs with stable source identifiers",
          "summary": "Retain stable IDs and original catalog fields.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "CSV",
            "source identity"
          ],
          "figure": "pj-catalog-record-linker-1",
          "number": 1,
          "doc": "projects/catalog-record-linker/stages/01-import/docs/en.md",
          "contentUrl": "project-content/catalog-record-linker/stages/01-import/docs/en.md",
          "tests": "projects/catalog-record-linker/stages/01-import/tests",
          "figures": [
            "pj-catalog-record-linker-1"
          ]
        },
        {
          "id": "02-candidates",
          "title": "Generate candidate pairs and explain similarity",
          "summary": "Rank explainable pairs with weighted token overlap.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "Jaccard similarity",
            "blocking threshold"
          ],
          "figure": "pj-catalog-record-linker-2",
          "number": 2,
          "doc": "projects/catalog-record-linker/stages/02-candidates/docs/en.md",
          "contentUrl": "project-content/catalog-record-linker/stages/02-candidates/docs/en.md",
          "tests": "projects/catalog-record-linker/stages/02-candidates/tests",
          "figures": [
            "pj-catalog-record-linker-2"
          ]
        },
        {
          "id": "03-decisions",
          "title": "Review matches and resolve conflicting fields",
          "summary": "Require explicit one-to-one links and field resolutions.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "entity reconciliation",
            "review"
          ],
          "figure": "pj-catalog-record-linker-3",
          "number": 3,
          "doc": "projects/catalog-record-linker/stages/03-decisions/docs/en.md",
          "contentUrl": "project-content/catalog-record-linker/stages/03-decisions/docs/en.md",
          "tests": "projects/catalog-record-linker/stages/03-decisions/tests",
          "figures": [
            "pj-catalog-record-linker-3"
          ]
        },
        {
          "id": "04-export",
          "title": "Export the crosswalk and merged catalog",
          "summary": "Export a source-preserving crosswalk and reviewed entities.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "integration contract",
            "fingerprints"
          ],
          "figure": "pj-catalog-record-linker-4",
          "number": 4,
          "doc": "projects/catalog-record-linker/stages/04-export/docs/en.md",
          "contentUrl": "project-content/catalog-record-linker/stages/04-export/docs/en.md",
          "tests": "projects/catalog-record-linker/stages/04-export/tests",
          "figures": [
            "pj-catalog-record-linker-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/catalog-record-linker",
      "readme": "projects/catalog-record-linker/README.md",
      "contentBase": "project-content/catalog-record-linker",
      "manifestHash": "c341fd93723c27a0b5f15373aec2f9413e74bdc448308144dba1ed6b3f259fec",
      "figureScripts": [
        "figures/projects/catalog-record-linker.js"
      ]
    },
    {
      "id": "changelog-writer-from-git",
      "title": "Changelog Writer From Git",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Turn conventional commit records into a stable release note.",
      "summary": "Read a real Git revision range, preserve migration footers and revert references, then export reproducible Markdown with a source receipt.",
      "usefulFor": [
        "Read a real Git revision range, preserve migration footers and revert references, then export reproducible Markdown with a source receipt.",
        "Pipe portable JSON receipts into your own review or publishing workflow."
      ],
      "youWillBuild": "Read a real Git revision range, preserve migration footers and revert references, then export reproducible Markdown with a source receipt.",
      "hours": 8,
      "languages": [
        "Go"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Read an immutable Git export",
        "Classify conventional subjects",
        "Group commits with stable ordering",
        "Render bounded release notes"
      ],
      "prerequisites": [
        {
          "title": "Development environment",
          "path": "phases/00-setup-and-tooling/01-dev-environment"
        },
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        }
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "go",
          "run",
          "."
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-read-an-immutable-git-export",
          "title": "Read an immutable Git export",
          "summary": "Consume one hash and subject per tab-separated line, rejecting duplicate hashes, malformed hexadecimal IDs and empty subjects.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "Read snapshot",
            "Validate hash",
            "Unique commit",
            "Preserve subject"
          ],
          "number": 1,
          "doc": "projects/changelog-writer-from-git/stages/01-read-an-immutable-git-export/docs/en.md",
          "contentUrl": "project-content/changelog-writer-from-git/stages/01-read-an-immutable-git-export/docs/en.md",
          "tests": "projects/changelog-writer-from-git/stages/01-read-an-immutable-git-export/tests",
          "figures": [
            "pj-changelog-writer-from-git-1"
          ]
        },
        {
          "id": "02-classify-conventional-subjects",
          "title": "Classify conventional subjects",
          "summary": "Parse type, optional scope and optional breaking marker from the first colon-space boundary.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "First grammar",
            "Optional scope",
            "Breaking marker",
            "Retained description"
          ],
          "number": 2,
          "doc": "projects/changelog-writer-from-git/stages/02-classify-conventional-subjects/docs/en.md",
          "contentUrl": "project-content/changelog-writer-from-git/stages/02-classify-conventional-subjects/docs/en.md",
          "tests": "projects/changelog-writer-from-git/stages/02-classify-conventional-subjects/tests",
          "figures": [
            "pj-changelog-writer-from-git-2"
          ]
        },
        {
          "id": "03-group-commits-with-stable-ordering",
          "title": "Group commits with stable ordering",
          "summary": "Map breaking changes to their own section before feature and fix groups.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Classify",
            "Breaking precedence",
            "Group map",
            "Stable hash order"
          ],
          "number": 3,
          "doc": "projects/changelog-writer-from-git/stages/03-group-commits-with-stable-ordering/docs/en.md",
          "contentUrl": "project-content/changelog-writer-from-git/stages/03-group-commits-with-stable-ordering/docs/en.md",
          "tests": "projects/changelog-writer-from-git/stages/03-group-commits-with-stable-ordering/tests",
          "figures": [
            "pj-changelog-writer-from-git-3"
          ]
        },
        {
          "id": "04-render-bounded-release-notes",
          "title": "Render bounded release notes",
          "summary": "Validate a release label, enforce a maximum commit count and emit sections in a fixed order.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Release label",
            "Commit budget",
            "Escape content",
            "Fixed section order"
          ],
          "number": 4,
          "doc": "projects/changelog-writer-from-git/stages/04-render-bounded-release-notes/docs/en.md",
          "contentUrl": "project-content/changelog-writer-from-git/stages/04-render-bounded-release-notes/docs/en.md",
          "tests": "projects/changelog-writer-from-git/stages/04-render-bounded-release-notes/tests",
          "figures": [
            "pj-changelog-writer-from-git-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "figures": true,
      "overviewFigure": "pj-changelog-writer-from-git-1",
      "path": "projects/changelog-writer-from-git",
      "readme": "projects/changelog-writer-from-git/README.md",
      "contentBase": "project-content/changelog-writer-from-git",
      "manifestHash": "76564889ff6de44f04f617bc62060fc55c27700b8a0365461e729ba7b8c5d76f",
      "figureScripts": [
        "figures/projects/changelog-writer-from-git.js"
      ]
    },
    {
      "id": "chart-storyboard-builder",
      "title": "Chart Storyboard Builder",
      "level": 2,
      "languages": [
        "Python"
      ],
      "source": "core",
      "tagline": "Turn a table into a visual explanation people can inspect.",
      "summary": "Help a community organizer explain a small dataset by selecting explicit aggregations and chart forms from column roles. Tie each annotation to the plotted values, expose missing data and axis choices, and export an SVG chart sequence with HTML and machine-readable chart specifications.",
      "prerequisiteProjects": [
        "csv-sql-question-workbench"
      ],
      "status": "ready",
      "hours": 8,
      "prerequisites": [
        "Python 3.10+; lists, dictionaries and functions"
      ],
      "skills": [
        "Profile columns and declare their roles and units",
        "Compute aggregates and choose a chart grammar",
        "Attach annotations to the actual plotted values",
        "Export an accessible visual storyboard and data receipt"
      ],
      "youWillBuild": "SVG charts, a standalone HTML storyboard and chart-specs.json",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "overviewFigure": "pj-chart-storyboard-builder-1",
      "figures": true,
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-roles",
          "title": "Profile columns and declare their roles and units",
          "summary": "Declare column meanings and keep blanks separate from zero.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "column roles",
            "finite numbers"
          ],
          "figure": "pj-chart-storyboard-builder-1",
          "number": 1,
          "doc": "projects/chart-storyboard-builder/stages/01-roles/docs/en.md",
          "contentUrl": "project-content/chart-storyboard-builder/stages/01-roles/docs/en.md",
          "tests": "projects/chart-storyboard-builder/stages/01-roles/tests",
          "figures": [
            "pj-chart-storyboard-builder-1"
          ]
        },
        {
          "id": "02-aggregate",
          "title": "Compute aggregates and choose a chart grammar",
          "summary": "Compute the plotted data and expose missing periods.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "aggregation",
            "chart grammar"
          ],
          "figure": "pj-chart-storyboard-builder-2",
          "number": 2,
          "doc": "projects/chart-storyboard-builder/stages/02-aggregate/docs/en.md",
          "contentUrl": "project-content/chart-storyboard-builder/stages/02-aggregate/docs/en.md",
          "tests": "projects/chart-storyboard-builder/stages/02-aggregate/tests",
          "figures": [
            "pj-chart-storyboard-builder-2"
          ]
        },
        {
          "id": "03-annotations",
          "title": "Attach annotations to the actual plotted values",
          "summary": "Anchor every annotation to a computed point.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "grounded annotations",
            "provenance"
          ],
          "figure": "pj-chart-storyboard-builder-3",
          "number": 3,
          "doc": "projects/chart-storyboard-builder/stages/03-annotations/docs/en.md",
          "contentUrl": "project-content/chart-storyboard-builder/stages/03-annotations/docs/en.md",
          "tests": "projects/chart-storyboard-builder/stages/03-annotations/tests",
          "figures": [
            "pj-chart-storyboard-builder-3"
          ]
        },
        {
          "id": "04-publish",
          "title": "Export an accessible visual storyboard and data receipt",
          "summary": "Produce portable SVG charts and machine-readable receipts.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "SVG",
            "accessible charts"
          ],
          "figure": "pj-chart-storyboard-builder-4",
          "number": 4,
          "doc": "projects/chart-storyboard-builder/stages/04-publish/docs/en.md",
          "contentUrl": "project-content/chart-storyboard-builder/stages/04-publish/docs/en.md",
          "tests": "projects/chart-storyboard-builder/stages/04-publish/tests",
          "figures": [
            "pj-chart-storyboard-builder-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/chart-storyboard-builder",
      "readme": "projects/chart-storyboard-builder/README.md",
      "contentBase": "project-content/chart-storyboard-builder",
      "manifestHash": "4b313350020f444ed6e3c9b1d0c0b09b36976b2725b637a30caf18627fa5a1ed",
      "figureScripts": [
        "figures/projects/chart-storyboard-builder.js"
      ]
    },
    {
      "id": "configuration-drift-explainer",
      "title": "Configuration Drift Explainer",
      "tagline": "Explain why two environments resolve the same setting differently.",
      "summary": "Help a developer compare declared defaults, environment overrides and observed JSON configuration. Preserve precedence and redaction rules, expose shadowed values, and attach every explanation to its source file or variable name. Export a drift report that an assistant can consume without receiving secret values.",
      "level": 2,
      "source": "core",
      "status": "ready",
      "hours": 8,
      "languages": [
        "Go"
      ],
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "Redacted configuration diff and precedence evidence JSON",
      "prerequisiteProjects": [
        "json-schema-output-guard"
      ],
      "demo": {
        "command": [
          "go",
          "run",
          "."
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-load-layers",
          "title": "Load named configuration layers",
          "summary": "Reject ambiguous configuration before comparing environments.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "bounded JSON",
            "scalar values",
            "source identity"
          ],
          "timeout": 120,
          "figure": "pj-configuration-drift-explainer-1",
          "number": 1,
          "doc": "projects/configuration-drift-explainer/stages/01-load-layers/docs/en.md",
          "contentUrl": "project-content/configuration-drift-explainer/stages/01-load-layers/docs/en.md",
          "tests": "projects/configuration-drift-explainer/stages/01-load-layers/tests",
          "figures": [
            "pj-configuration-drift-explainer-1"
          ]
        },
        {
          "id": "02-resolve-provenance",
          "title": "Resolve precedence with provenance",
          "summary": "Keep every shadowed setting while choosing the last declared value.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "last-write precedence",
            "history",
            "determinism"
          ],
          "timeout": 120,
          "figure": "pj-configuration-drift-explainer-2",
          "number": 2,
          "doc": "projects/configuration-drift-explainer/stages/02-resolve-provenance/docs/en.md",
          "contentUrl": "project-content/configuration-drift-explainer/stages/02-resolve-provenance/docs/en.md",
          "tests": "projects/configuration-drift-explainer/stages/02-resolve-provenance/tests",
          "figures": [
            "pj-configuration-drift-explainer-2"
          ]
        },
        {
          "id": "03-compare-effective-values",
          "title": "Compare effective values",
          "summary": "Distinguish equal, changed, missing and unexpected keys.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "presence",
            "redaction",
            "stable ordering"
          ],
          "timeout": 120,
          "figure": "pj-configuration-drift-explainer-3",
          "number": 3,
          "doc": "projects/configuration-drift-explainer/stages/03-compare-effective-values/docs/en.md",
          "contentUrl": "project-content/configuration-drift-explainer/stages/03-compare-effective-values/docs/en.md",
          "tests": "projects/configuration-drift-explainer/stages/03-compare-effective-values/tests",
          "figures": [
            "pj-configuration-drift-explainer-3"
          ]
        },
        {
          "id": "04-export-ci-evidence",
          "title": "Export redacted CI evidence",
          "summary": "Produce a report an assistant can consume without receiving secret values.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "JSON artifact",
            "CI exit status",
            "consumer contract"
          ],
          "timeout": 120,
          "figure": "pj-configuration-drift-explainer-4",
          "number": 4,
          "doc": "projects/configuration-drift-explainer/stages/04-export-ci-evidence/docs/en.md",
          "contentUrl": "project-content/configuration-drift-explainer/stages/04-export-ci-evidence/docs/en.md",
          "tests": "projects/configuration-drift-explainer/stages/04-export-ci-evidence/tests",
          "figures": [
            "pj-configuration-drift-explainer-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded local command output. See the README for input and scope."
        }
      ],
      "path": "projects/configuration-drift-explainer",
      "readme": "projects/configuration-drift-explainer/README.md",
      "contentBase": "project-content/configuration-drift-explainer",
      "manifestHash": "66f460160089c0805e95d61dbabea312ccdfef84d2b73fd0bb13543c1ff8f76a",
      "figureScripts": [
        "figures/projects/configuration-drift-explainer.js"
      ]
    },
    {
      "id": "csv-sql-question-workbench",
      "title": "CSV Question Workbench",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Ask a CSV a question, inspect the executed SQL, and keep a reproducible read-only answer receipt.",
      "summary": "Ask a CSV a question, inspect the executed SQL, and keep a reproducible read-only answer receipt.",
      "youWillBuild": "A self-contained HTML result table and JSON receipt containing the exact SQL and source fingerprint.",
      "usefulFor": [
        "Use your own input to produce a reviewable artifact another application can consume."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "Standard-library parsing, explicit contracts and portable artifacts keep the mechanism visible."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Import a table without guessing away errors",
        "Translate a small question into an inspectable plan",
        "Execute a proposal inside a read-only boundary",
        "Publish an answer another developer can reproduce"
      ],
      "prerequisites": [
        {
          "title": "Development environment",
          "path": "phases/00-setup-and-tooling/01-dev-environment"
        },
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        },
        {
          "title": "Structured outputs",
          "path": "phases/11-llm-engineering/03-structured-outputs"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-csv-sql-question-workbench-1",
      "demo": {
        "command": [
          "python3",
          "cli.py",
          "sample.csv",
          "--question",
          "sum units by region",
          "--output",
          "output/report.html"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-import-table",
          "title": "Import a table without guessing away errors",
          "summary": "load_csv(text, max_rows=10000)",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "concepts": [
            "Import a table without guessing away errors"
          ],
          "figure": "pj-csv-sql-question-workbench-1",
          "number": 1,
          "doc": "projects/csv-sql-question-workbench/stages/01-import-table/docs/en.md",
          "contentUrl": "project-content/csv-sql-question-workbench/stages/01-import-table/docs/en.md",
          "tests": "projects/csv-sql-question-workbench/stages/01-import-table/tests",
          "figures": [
            "pj-csv-sql-question-workbench-1"
          ]
        },
        {
          "id": "02-plan-question",
          "title": "Translate a small question into an inspectable plan",
          "summary": "plan_question(question, data)",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "concepts": [
            "Translate a small question into an inspectable plan"
          ],
          "figure": "pj-csv-sql-question-workbench-2",
          "number": 2,
          "doc": "projects/csv-sql-question-workbench/stages/02-plan-question/docs/en.md",
          "contentUrl": "project-content/csv-sql-question-workbench/stages/02-plan-question/docs/en.md",
          "tests": "projects/csv-sql-question-workbench/stages/02-plan-question/tests",
          "figures": [
            "pj-csv-sql-question-workbench-2"
          ]
        },
        {
          "id": "03-enforce-read-boundary",
          "title": "Execute a proposal inside a read-only boundary",
          "summary": "run_query(data, sql, max_rows=100, max_steps=100000)",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "concepts": [
            "Execute a proposal inside a read-only boundary"
          ],
          "figure": "pj-csv-sql-question-workbench-3",
          "number": 3,
          "doc": "projects/csv-sql-question-workbench/stages/03-enforce-read-boundary/docs/en.md",
          "contentUrl": "project-content/csv-sql-question-workbench/stages/03-enforce-read-boundary/docs/en.md",
          "tests": "projects/csv-sql-question-workbench/stages/03-enforce-read-boundary/tests",
          "figures": [
            "pj-csv-sql-question-workbench-3"
          ]
        },
        {
          "id": "04-publish-receipt",
          "title": "Publish an answer another developer can reproduce",
          "summary": "render_report(report)",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "concepts": [
            "Publish an answer another developer can reproduce"
          ],
          "figure": "pj-csv-sql-question-workbench-4",
          "number": 4,
          "doc": "projects/csv-sql-question-workbench/stages/04-publish-receipt/docs/en.md",
          "contentUrl": "project-content/csv-sql-question-workbench/stages/04-publish-receipt/docs/en.md",
          "tests": "projects/csv-sql-question-workbench/stages/04-publish-receipt/tests",
          "figures": [
            "pj-csv-sql-question-workbench-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Build and verify",
          "caption": "Actual starter failure and reference grader output; reference passes do not earn a learner certificate."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Use the finished artifact",
          "caption": "Recorded real input, computed output and the resulting portable report."
        }
      ],
      "path": "projects/csv-sql-question-workbench",
      "readme": "projects/csv-sql-question-workbench/README.md",
      "contentBase": "project-content/csv-sql-question-workbench",
      "manifestHash": "f7b00661ac9f7a354285ea37cd79786d9ac70746c0208598a24c0066df8dd037",
      "figureScripts": [
        "figures/projects/csv-sql-question-workbench.js"
      ]
    },
    {
      "title": "Dataset Contract Gate",
      "tagline": "Quarantine invalid records and fail ingestion on explicit dataset rules.",
      "level": 2,
      "summary": "Define a small versioned data contract, check field types and bounds, find every row in duplicate groups, and export accepted records separately from quarantine. A CLI exit code gates ingestion while a source-line report explains failures.",
      "languageWhy": {
        "Python": "Standard dictionaries, numeric checks and JSONL IO make cross-row validation easy to inspect."
      },
      "prerequisiteProjects": [
        "dataset-split-auditor",
        "json-schema-output-guard"
      ],
      "id": "dataset-contract-gate",
      "languages": [
        "Python"
      ],
      "source": "core",
      "status": "ready",
      "hours": 8,
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "prerequisites": [
        "Python 3.12+; dictionaries, lists and command-line IO"
      ],
      "youWillBuild": "accepted.jsonl, quarantine.jsonl, receipt.json and review.html",
      "skills": [
        "Validate an explicit quality contract",
        "Check each record without coercion",
        "Find all rows in a duplicate group",
        "Export partitions and enforce the dataset gate"
      ],
      "figures": true,
      "overviewFigure": "pj-dataset-contract-gate-1",
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.jsonl",
          "--contract",
          "samples/contract.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-validate-contract",
          "title": "Validate an explicit quality contract",
          "summary": "Require version=1 and a nonempty fields object.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "validate an explicit quality contract"
          ],
          "figure": "pj-dataset-contract-gate-1",
          "number": 1,
          "doc": "projects/dataset-contract-gate/stages/01-validate-contract/docs/en.md",
          "contentUrl": "project-content/dataset-contract-gate/stages/01-validate-contract/docs/en.md",
          "tests": "projects/dataset-contract-gate/stages/01-validate-contract/tests",
          "figures": [
            "pj-dataset-contract-gate-1"
          ]
        },
        {
          "id": "02-check-records",
          "title": "Check each record without coercion",
          "summary": "Consume a validated contract.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "check each record without coercion"
          ],
          "figure": "pj-dataset-contract-gate-2",
          "number": 2,
          "doc": "projects/dataset-contract-gate/stages/02-check-records/docs/en.md",
          "contentUrl": "project-content/dataset-contract-gate/stages/02-check-records/docs/en.md",
          "tests": "projects/dataset-contract-gate/stages/02-check-records/tests",
          "figures": [
            "pj-dataset-contract-gate-2"
          ]
        },
        {
          "id": "03-check-uniqueness",
          "title": "Find all rows in a duplicate group",
          "summary": "For each unique column, index valid typed values to one-based input row numbers.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "find all rows in a duplicate group"
          ],
          "figure": "pj-dataset-contract-gate-3",
          "number": 3,
          "doc": "projects/dataset-contract-gate/stages/03-check-uniqueness/docs/en.md",
          "contentUrl": "project-content/dataset-contract-gate/stages/03-check-uniqueness/docs/en.md",
          "tests": "projects/dataset-contract-gate/stages/03-check-uniqueness/tests",
          "figures": [
            "pj-dataset-contract-gate-3"
          ]
        },
        {
          "id": "04-quarantine-and-gate",
          "title": "Export partitions and enforce the dataset gate",
          "summary": "Return schema_version=1, passed, counts, dataset_issues, duplicates, accepted and quarantine.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "export partitions and enforce the dataset gate"
          ],
          "figure": "pj-dataset-contract-gate-4",
          "number": 4,
          "doc": "projects/dataset-contract-gate/stages/04-quarantine-and-gate/docs/en.md",
          "contentUrl": "project-content/dataset-contract-gate/stages/04-quarantine-and-gate/docs/en.md",
          "tests": "projects/dataset-contract-gate/stages/04-quarantine-and-gate/tests",
          "figures": [
            "pj-dataset-contract-gate-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/dataset-contract-gate",
      "readme": "projects/dataset-contract-gate/README.md",
      "contentBase": "project-content/dataset-contract-gate",
      "manifestHash": "58c0a8c94a78cdaecb4455e78cf8c758a5fc8a1648a74b11c0b3d308a6bc438b",
      "figureScripts": [
        "figures/projects/dataset-contract-gate.js"
      ]
    },
    {
      "id": "diagram-reading-companion",
      "title": "Diagram Reading Companion",
      "tagline": "Give a diagram an inspectable reading order and explanation.",
      "summary": "Help an educator turn an authored SVG diagram and an explicit node-edge manifest into a keyboard-navigable explanation. Check that referenced nodes exist, expose branches and cycles, let the author review the reading order, and export an accessible HTML walkthrough plus graph JSON.",
      "level": 2,
      "languages": [
        "TypeScript"
      ],
      "source": "core",
      "prerequisiteProjects": [
        "glossary-hovercard-publisher"
      ],
      "status": "ready",
      "hours": 8,
      "youWillBuild": "A navigable HTML diagram walkthrough and a reviewed graph manifest",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "languageWhy": {
        "TypeScript": "Typed local transformations and portable browser interfaces run with Node standard libraries."
      },
      "figures": true,
      "overviewFigure": "pj-diagram-reading-companion-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-load-diagram",
          "title": "Load an SVG and validate declared nodes and edges",
          "summary": "loadDiagram(svg: string, value: unknown): {svg:string;graph:Graph}",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-diagram-reading-companion-1",
          "concepts": [
            "Load an SVG and validate declared nodes and edges"
          ],
          "number": 1,
          "doc": "projects/diagram-reading-companion/stages/01-load-diagram/docs/en.md",
          "contentUrl": "project-content/diagram-reading-companion/stages/01-load-diagram/docs/en.md",
          "tests": "projects/diagram-reading-companion/stages/01-load-diagram/tests",
          "figures": [
            "pj-diagram-reading-companion-1"
          ]
        },
        {
          "id": "02-analyze-graph",
          "title": "Compute branches, cycles and candidate reading order",
          "summary": "analyzeGraph(graph: Graph): Analysis",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-diagram-reading-companion-2",
          "concepts": [
            "Compute branches, cycles and candidate reading order"
          ],
          "number": 2,
          "doc": "projects/diagram-reading-companion/stages/02-analyze-graph/docs/en.md",
          "contentUrl": "project-content/diagram-reading-companion/stages/02-analyze-graph/docs/en.md",
          "tests": "projects/diagram-reading-companion/stages/02-analyze-graph/tests",
          "figures": [
            "pj-diagram-reading-companion-2"
          ]
        },
        {
          "id": "03-review-explanations",
          "title": "Review explanations and reading order",
          "summary": "reviewGraph(graph: Graph, value?: unknown): {schemaVersion:1;graph:Graph;order:string[];reviewed:boolean}",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-diagram-reading-companion-3",
          "concepts": [
            "Review explanations and reading order"
          ],
          "number": 3,
          "doc": "projects/diagram-reading-companion/stages/03-review-explanations/docs/en.md",
          "contentUrl": "project-content/diagram-reading-companion/stages/03-review-explanations/docs/en.md",
          "tests": "projects/diagram-reading-companion/stages/03-review-explanations/tests",
          "figures": [
            "pj-diagram-reading-companion-3"
          ]
        },
        {
          "id": "04-export-walkthrough",
          "title": "Export the navigable walkthrough and graph data",
          "summary": "renderWalkthrough(svg:string, review:ReturnType<typeof reviewGraph>):string",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-diagram-reading-companion-4",
          "concepts": [
            "Export the navigable walkthrough and graph data"
          ],
          "number": 4,
          "doc": "projects/diagram-reading-companion/stages/04-export-walkthrough/docs/en.md",
          "contentUrl": "project-content/diagram-reading-companion/stages/04-export-walkthrough/docs/en.md",
          "tests": "projects/diagram-reading-companion/stages/04-export-walkthrough/tests",
          "figures": [
            "pj-diagram-reading-companion-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/diagram-reading-companion",
      "readme": "projects/diagram-reading-companion/README.md",
      "contentBase": "project-content/diagram-reading-companion",
      "manifestHash": "7281fd309c78e9fc6300f8c9eb66b1ff74db3232c8ac5d14bc4271d38e3d3936",
      "figureScripts": [
        "figures/projects/diagram-reading-companion.js"
      ]
    },
    {
      "id": "document-extraction-desk",
      "title": "Document Extraction Review Desk",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Extract structured fields from a text document, inspect exact source spans, and approve ambiguous values before export.",
      "summary": "Extract structured fields from a text document, inspect exact source spans, and approve ambiguous values before export.",
      "youWillBuild": "A local HTML review desk that downloads source-bound approval decisions and an approved JSON value map.",
      "usefulFor": [
        "Use your own input to produce a reviewable artifact another application can consume."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "Standard-library parsing, explicit contracts and portable artifacts keep the mechanism visible."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Define the fields before extracting values",
        "Extract candidates without losing their evidence",
        "Bind approval to one document version",
        "Show evidence and export reviewed values"
      ],
      "prerequisites": [
        {
          "title": "Development environment",
          "path": "phases/00-setup-and-tooling/01-dev-environment"
        },
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-document-extraction-desk-1",
      "demo": {
        "command": [
          "python3",
          "cli.py",
          "sample.txt",
          "--schema",
          "schema.json",
          "--output",
          "output/review.html"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-define-fields",
          "title": "Define the fields before extracting values",
          "summary": "validate_schema(schema)",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "concepts": [
            "Define the fields before extracting values"
          ],
          "figure": "pj-document-extraction-desk-1",
          "number": 1,
          "doc": "projects/document-extraction-desk/stages/01-define-fields/docs/en.md",
          "contentUrl": "project-content/document-extraction-desk/stages/01-define-fields/docs/en.md",
          "tests": "projects/document-extraction-desk/stages/01-define-fields/tests",
          "figures": [
            "pj-document-extraction-desk-1"
          ]
        },
        {
          "id": "02-retain-source-spans",
          "title": "Extract candidates without losing their evidence",
          "summary": "extract_candidates(text, schema)",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "concepts": [
            "Extract candidates without losing their evidence"
          ],
          "figure": "pj-document-extraction-desk-2",
          "number": 2,
          "doc": "projects/document-extraction-desk/stages/02-retain-source-spans/docs/en.md",
          "contentUrl": "project-content/document-extraction-desk/stages/02-retain-source-spans/docs/en.md",
          "tests": "projects/document-extraction-desk/stages/02-retain-source-spans/tests",
          "figures": [
            "pj-document-extraction-desk-2"
          ]
        },
        {
          "id": "03-review-and-approve",
          "title": "Bind approval to one document version",
          "summary": "typed_value(quote, kind); review_document(text, schema, candidates, decisions=None)",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "concepts": [
            "Bind approval to one document version"
          ],
          "figure": "pj-document-extraction-desk-3",
          "number": 3,
          "doc": "projects/document-extraction-desk/stages/03-review-and-approve/docs/en.md",
          "contentUrl": "project-content/document-extraction-desk/stages/03-review-and-approve/docs/en.md",
          "tests": "projects/document-extraction-desk/stages/03-review-and-approve/tests",
          "figures": [
            "pj-document-extraction-desk-3"
          ]
        },
        {
          "id": "04-export-review-desk",
          "title": "Show evidence and export reviewed values",
          "summary": "render_review(report)",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "concepts": [
            "Show evidence and export reviewed values"
          ],
          "figure": "pj-document-extraction-desk-4",
          "number": 4,
          "doc": "projects/document-extraction-desk/stages/04-export-review-desk/docs/en.md",
          "contentUrl": "project-content/document-extraction-desk/stages/04-export-review-desk/docs/en.md",
          "tests": "projects/document-extraction-desk/stages/04-export-review-desk/tests",
          "figures": [
            "pj-document-extraction-desk-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Build and verify",
          "caption": "Actual starter failure and reference grader output; reference passes do not earn a learner certificate."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Use the finished artifact",
          "caption": "Recorded real input, computed output and the resulting portable report."
        }
      ],
      "path": "projects/document-extraction-desk",
      "readme": "projects/document-extraction-desk/README.md",
      "contentBase": "project-content/document-extraction-desk",
      "manifestHash": "3fe4bafdb17cca62de488b693d5b4fda03c48fa2b44a4fa5239749148f14d41a",
      "figureScripts": [
        "figures/projects/document-extraction-desk.js"
      ]
    },
    {
      "id": "doc-qa-with-citations",
      "title": "Document QA With Citations and LangChain",
      "level": 2,
      "levelName": "Builder",
      "tagline": "A citation receipt that separates exact source support from relevance to the question.",
      "summary": "A citation receipt that separates exact source support from relevance to the question. Import query(directory, question, model). A model callback returns JSON {source:chunk_id,quote:exact_text}. --response accepts a recorded response and applies the same gate.",
      "hours": 8,
      "languages": [
        "Python"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "A citation receipt that separates exact source support from relevance to the question.",
      "usefulFor": [
        "Import query(directory, question, model). A model callback returns JSON {source:chunk_id,quote:exact_text}. --response accepts a recorded response and applies the same gate."
      ],
      "skills": [
        "Load local documents with stable provenance",
        "Rank chunks with an inspectable keyword score",
        "Accept only answers grounded in retrieved spans",
        "Use a framework splitter without losing offsets"
      ],
      "prerequisites": [
        "Python 3.10+",
        "pathlib, strings, offsets, dictionaries and callback functions. Optional LangChain dependencies are pinned separately."
      ],
      "figures": true,
      "overviewFigure": "pj-doc-qa-with-citations-1",
      "languageWhy": {
        "Python": "Stdlib data structures, explicit algorithms and deterministic local tests."
      },
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/docs",
          "When does cache expire?",
          "--output",
          "answer.json",
          "--html",
          "answer.html"
        ]
      },
      "stages": [
        {
          "id": "01-documents",
          "title": "Load local documents with stable provenance",
          "summary": "The second overlapping chunk of abcdef starts at offset 3 when size=4 and overlap=1.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "starter",
          "figure": "pj-doc-qa-with-citations-1",
          "concepts": [
            "load",
            "local",
            "documents",
            "with"
          ],
          "number": 1,
          "doc": "projects/doc-qa-with-citations/stages/01-documents/docs/en.md",
          "contentUrl": "project-content/doc-qa-with-citations/stages/01-documents/docs/en.md",
          "tests": "projects/doc-qa-with-citations/stages/01-documents/tests",
          "figures": [
            "pj-doc-qa-with-citations-1"
          ]
        },
        {
          "id": "02-retrieval",
          "title": "Rank chunks with an inspectable keyword score",
          "summary": "A socket query selects the socket chunk, while an unknown term abstains.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-doc-qa-with-citations-2",
          "concepts": [
            "rank",
            "chunks",
            "with",
            "an"
          ],
          "number": 2,
          "doc": "projects/doc-qa-with-citations/stages/02-retrieval/docs/en.md",
          "contentUrl": "project-content/doc-qa-with-citations/stages/02-retrieval/docs/en.md",
          "tests": "projects/doc-qa-with-citations/stages/02-retrieval/tests",
          "figures": [
            "pj-doc-qa-with-citations-2"
          ]
        },
        {
          "id": "03-answer",
          "title": "Accept only answers grounded in retrieved spans",
          "summary": "A model response containing words absent from its cited chunk is rejected.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-doc-qa-with-citations-3",
          "concepts": [
            "accept",
            "only",
            "answers",
            "grounded"
          ],
          "number": 3,
          "doc": "projects/doc-qa-with-citations/stages/03-answer/docs/en.md",
          "contentUrl": "project-content/doc-qa-with-citations/stages/03-answer/docs/en.md",
          "tests": "projects/doc-qa-with-citations/stages/03-answer/tests",
          "figures": [
            "pj-doc-qa-with-citations-3"
          ]
        },
        {
          "id": "04-adapter",
          "title": "Use a framework splitter without losing offsets",
          "summary": "Framework chunks are converted to the same source-span contract used by the baseline.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "stretch",
          "figure": "pj-doc-qa-with-citations-4",
          "concepts": [
            "use",
            "a",
            "framework",
            "splitter"
          ],
          "runners": [
            {
              "language": "python"
            },
            {
              "language": "python",
              "optional": true,
              "requires": [
                "python:langchain_text_splitters"
              ],
              "argv": [
                "{python}",
                "-m",
                "unittest",
                "discover",
                "-s",
                "{stage}/tests-framework",
                "-p",
                "test_framework.py"
              ]
            }
          ],
          "number": 4,
          "doc": "projects/doc-qa-with-citations/stages/04-adapter/docs/en.md",
          "contentUrl": "project-content/doc-qa-with-citations/stages/04-adapter/docs/en.md",
          "tests": "projects/doc-qa-with-citations/stages/04-adapter/tests",
          "figures": [
            "pj-doc-qa-with-citations-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        },
        {
          "gif": "media/framework.gif",
          "poster": "media/framework.png",
          "title": "Verify the real SDK",
          "caption": "Actual optional SDK tests with installed dependencies and deterministic local models. No live cloud or model provider calls."
        }
      ],
      "path": "projects/doc-qa-with-citations",
      "readme": "projects/doc-qa-with-citations/README.md",
      "contentBase": "project-content/doc-qa-with-citations",
      "manifestHash": "1c9776e9245e90def628816caf3e6db5dd89dc49a6edf9540d11ee1d47c8abf7",
      "figureScripts": [
        "figures/projects/doc-qa-with-citations.js"
      ]
    },
    {
      "id": "feedback-theme-board",
      "title": "Feedback Theme Board",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Group product feedback with inspectable phrase evidence, count distinct sources, and export local issue drafts.",
      "summary": "Group product feedback with inspectable phrase evidence, count distinct sources, and export local issue drafts.",
      "youWillBuild": "A portable evidence board, JSON summary and unsent Markdown investigation drafts.",
      "usefulFor": [
        "Use your own input to produce a reviewable artifact another application can consume."
      ],
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "languageWhy": {
        "TypeScript": "Standard-library parsing, explicit contracts and portable artifacts keep the mechanism visible."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Import feedback with stable identities",
        "Match phrases while preserving original spans",
        "Count evidence without inflating source support",
        "Publish evidence and reviewable investigation drafts"
      ],
      "prerequisites": [
        {
          "title": "Development environment",
          "path": "phases/00-setup-and-tooling/01-dev-environment"
        },
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-feedback-theme-board-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.jsonl",
          "themes.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-import-feedback",
          "title": "Import feedback with stable identities",
          "summary": "parseFeedback(text); validateThemes(value)",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "concepts": [
            "Import feedback with stable identities"
          ],
          "figure": "pj-feedback-theme-board-1",
          "number": 1,
          "doc": "projects/feedback-theme-board/stages/01-import-feedback/docs/en.md",
          "contentUrl": "project-content/feedback-theme-board/stages/01-import-feedback/docs/en.md",
          "tests": "projects/feedback-theme-board/stages/01-import-feedback/tests",
          "figures": [
            "pj-feedback-theme-board-1"
          ]
        },
        {
          "id": "02-match-evidence",
          "title": "Match phrases while preserving original spans",
          "summary": "findEvidence(row, phrase)",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "concepts": [
            "Match phrases while preserving original spans"
          ],
          "figure": "pj-feedback-theme-board-2",
          "number": 2,
          "doc": "projects/feedback-theme-board/stages/02-match-evidence/docs/en.md",
          "contentUrl": "project-content/feedback-theme-board/stages/02-match-evidence/docs/en.md",
          "tests": "projects/feedback-theme-board/stages/02-match-evidence/tests",
          "figures": [
            "pj-feedback-theme-board-2"
          ]
        },
        {
          "id": "03-count-without-inflation",
          "title": "Count evidence without inflating source support",
          "summary": "buildBoard(rows, themes)",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "concepts": [
            "Count evidence without inflating source support"
          ],
          "figure": "pj-feedback-theme-board-3",
          "number": 3,
          "doc": "projects/feedback-theme-board/stages/03-count-without-inflation/docs/en.md",
          "contentUrl": "project-content/feedback-theme-board/stages/03-count-without-inflation/docs/en.md",
          "tests": "projects/feedback-theme-board/stages/03-count-without-inflation/tests",
          "figures": [
            "pj-feedback-theme-board-3"
          ]
        },
        {
          "id": "04-publish-and-integrate",
          "title": "Publish evidence and reviewable investigation drafts",
          "summary": "draftIssue(theme); renderBoard(board)",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "concepts": [
            "Publish evidence and reviewable investigation drafts"
          ],
          "figure": "pj-feedback-theme-board-4",
          "number": 4,
          "doc": "projects/feedback-theme-board/stages/04-publish-and-integrate/docs/en.md",
          "contentUrl": "project-content/feedback-theme-board/stages/04-publish-and-integrate/docs/en.md",
          "tests": "projects/feedback-theme-board/stages/04-publish-and-integrate/tests",
          "figures": [
            "pj-feedback-theme-board-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Build and verify",
          "caption": "Actual starter failure and reference grader output; reference passes do not earn a learner certificate."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Use the finished artifact",
          "caption": "Recorded real input, computed output and the resulting portable report."
        }
      ],
      "path": "projects/feedback-theme-board",
      "readme": "projects/feedback-theme-board/README.md",
      "contentBase": "project-content/feedback-theme-board",
      "manifestHash": "6776f2643beed8345392b78b690b31cdaa29162013eebddec693ded1976b9535",
      "figureScripts": [
        "figures/projects/feedback-theme-board.js"
      ]
    },
    {
      "id": "field-notes-map-builder",
      "title": "Field Notes Map Builder",
      "tagline": "Turn location-tagged observations into a map another tool can use.",
      "summary": "Help a community mapping group explore observations supplied as coordinates, notes and optional photos. Validate locations, group nearby records using an explicit distance rule, preserve original observations during review, and export GeoJSON with a standalone map and observation table.",
      "level": 2,
      "languages": [
        "TypeScript"
      ],
      "source": "core",
      "prerequisiteProjects": [
        "csv-repair-workbench"
      ],
      "status": "ready",
      "hours": 8,
      "youWillBuild": "A GeoJSON FeatureCollection, a standalone HTML map and reviewed observation groups",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "languageWhy": {
        "TypeScript": "Typed local transformations and portable browser interfaces run with Node standard libraries."
      },
      "figures": true,
      "overviewFigure": "pj-field-notes-map-builder-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-import-observations",
          "title": "Import coordinates, timestamps and evidence",
          "summary": "importObservations(value: unknown): Observation[]",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-field-notes-map-builder-1",
          "concepts": [
            "Import coordinates, timestamps and evidence"
          ],
          "number": 1,
          "doc": "projects/field-notes-map-builder/stages/01-import-observations/docs/en.md",
          "contentUrl": "project-content/field-notes-map-builder/stages/01-import-observations/docs/en.md",
          "tests": "projects/field-notes-map-builder/stages/01-import-observations/tests",
          "figures": [
            "pj-field-notes-map-builder-1"
          ]
        },
        {
          "id": "02-distance-groups",
          "title": "Compute distances and explain nearby groups",
          "summary": "distanceMeters(a,b): number; groupNearby(items:Observation[],radiusMeters:number):Groups",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-field-notes-map-builder-2",
          "concepts": [
            "Compute distances and explain nearby groups"
          ],
          "number": 2,
          "doc": "projects/field-notes-map-builder/stages/02-distance-groups/docs/en.md",
          "contentUrl": "project-content/field-notes-map-builder/stages/02-distance-groups/docs/en.md",
          "tests": "projects/field-notes-map-builder/stages/02-distance-groups/tests",
          "figures": [
            "pj-field-notes-map-builder-2"
          ]
        },
        {
          "id": "03-review-groups",
          "title": "Review groups without merging observations",
          "summary": "reviewGroups(groups:Groups,value?:unknown):{schemaVersion:1;groups;decisions}",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-field-notes-map-builder-3",
          "concepts": [
            "Review groups without merging observations"
          ],
          "number": 3,
          "doc": "projects/field-notes-map-builder/stages/03-review-groups/docs/en.md",
          "contentUrl": "project-content/field-notes-map-builder/stages/03-review-groups/docs/en.md",
          "tests": "projects/field-notes-map-builder/stages/03-review-groups/tests",
          "figures": [
            "pj-field-notes-map-builder-3"
          ]
        },
        {
          "id": "04-export-geojson",
          "title": "Export GeoJSON and a portable map report",
          "summary": "exportGeoJSON(items:Observation[],review):{type:string;features:any[]}; renderMap(items,groups,review):string",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-field-notes-map-builder-4",
          "concepts": [
            "Export GeoJSON and a portable map report"
          ],
          "number": 4,
          "doc": "projects/field-notes-map-builder/stages/04-export-geojson/docs/en.md",
          "contentUrl": "project-content/field-notes-map-builder/stages/04-export-geojson/docs/en.md",
          "tests": "projects/field-notes-map-builder/stages/04-export-geojson/tests",
          "figures": [
            "pj-field-notes-map-builder-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/field-notes-map-builder",
      "readme": "projects/field-notes-map-builder/README.md",
      "contentBase": "project-content/field-notes-map-builder",
      "manifestHash": "b933255d536741049e968d46dfd50b4fea7dd51e0bb5cc32a5c6fa395291ea25",
      "figureScripts": [
        "figures/projects/field-notes-map-builder.js"
      ]
    },
    {
      "id": "inbox-triage-desk",
      "title": "Inbox Triage Desk",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Turn exported email into an evidence-backed review queue and unsent reply drafts.",
      "summary": "Turn exported email into an evidence-backed review queue and unsent reply drafts.",
      "youWillBuild": "An HTML review desk, triage.json, and downloadable unsent .eml drafts.",
      "usefulFor": [
        "A directory of exported .eml messages. Only plain-text bodies are classified; HTML-only messages remain visible for manual review."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "Python ships MIME parsing, structured email generation and portable document export in its standard library."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Read MIME without losing message identity",
        "Group references and explain the queue",
        "Create an unsent draft with a source quote",
        "Export an auditable inbox desk"
      ],
      "prerequisites": [
        "Read and write dictionaries and lists in Python.",
        "Understand a function returning a value or raising ValueError.",
        "Know that email headers and a MIME body are different data structures."
      ],
      "figures": true,
      "overviewFigure": "pj-inbox-triage-desk-1",
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-parse-messages",
          "title": "Read MIME without losing message identity",
          "summary": "Parse exported messages and preserve their exact plain-text evidence.",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Python ships MIME parsing, structured email generation and portable document export in its standard library.",
          "concepts": [
            "MIME",
            "message identity",
            "input bounds"
          ],
          "figure": "pj-inbox-triage-desk-1",
          "number": 1,
          "doc": "projects/inbox-triage-desk/stages/01-parse-messages/docs/en.md",
          "contentUrl": "project-content/inbox-triage-desk/stages/01-parse-messages/docs/en.md",
          "tests": "projects/inbox-triage-desk/stages/01-parse-messages/tests",
          "figures": [
            "pj-inbox-triage-desk-1"
          ]
        },
        {
          "id": "02-group-and-triage",
          "title": "Group references and explain the queue",
          "summary": "Use message references for threads and explicit phrases for triage.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Python ships MIME parsing, structured email generation and portable document export in its standard library.",
          "concepts": [
            "union find",
            "rule conflicts",
            "evidence spans"
          ],
          "figure": "pj-inbox-triage-desk-2",
          "number": 2,
          "doc": "projects/inbox-triage-desk/stages/02-group-and-triage/docs/en.md",
          "contentUrl": "project-content/inbox-triage-desk/stages/02-group-and-triage/docs/en.md",
          "tests": "projects/inbox-triage-desk/stages/02-group-and-triage/tests",
          "figures": [
            "pj-inbox-triage-desk-2"
          ]
        },
        {
          "id": "03-draft-for-review",
          "title": "Create an unsent draft with a source quote",
          "summary": "Generate reviewable email drafts without inventing commitments.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Python ships MIME parsing, structured email generation and portable document export in its standard library.",
          "concepts": [
            "email serialization",
            "evidence validation",
            "provider proposals"
          ],
          "figure": "pj-inbox-triage-desk-3",
          "number": 3,
          "doc": "projects/inbox-triage-desk/stages/03-draft-for-review/docs/en.md",
          "contentUrl": "project-content/inbox-triage-desk/stages/03-draft-for-review/docs/en.md",
          "tests": "projects/inbox-triage-desk/stages/03-draft-for-review/tests",
          "figures": [
            "pj-inbox-triage-desk-3"
          ]
        },
        {
          "id": "04-export-the-desk",
          "title": "Export an auditable inbox desk",
          "summary": "Write portable HTML, JSON and draft files from the same review records.",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Python ships MIME parsing, structured email generation and portable document export in its standard library.",
          "concepts": [
            "HTML escaping",
            "stable filenames",
            "portable artifacts"
          ],
          "figure": "pj-inbox-triage-desk-4",
          "number": 4,
          "doc": "projects/inbox-triage-desk/stages/04-export-the-desk/docs/en.md",
          "contentUrl": "project-content/inbox-triage-desk/stages/04-export-the-desk/docs/en.md",
          "tests": "projects/inbox-triage-desk/stages/04-export-the-desk/tests",
          "figures": [
            "pj-inbox-triage-desk-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Build and grade",
          "caption": "A fresh starter fails; the complete original solution passes all four stages."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the application output",
          "caption": "Actual output from authored offline fixtures. See the README for provider and evidence boundaries."
        }
      ],
      "path": "projects/inbox-triage-desk",
      "readme": "projects/inbox-triage-desk/README.md",
      "contentBase": "project-content/inbox-triage-desk",
      "manifestHash": "efe43623fac97315fd5486537ac2693d53e67d32ee58e8f47b00808cccb8c85c",
      "figureScripts": [
        "figures/projects/inbox-triage-desk.js"
      ]
    },
    {
      "id": "postmortem-writer",
      "title": "Incident Postmortem Writer",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Turn incident events into a timeline with evidence-backed claims.",
      "summary": "Turn your JSONL incident logs and review decisions into an HTML evidence desk, exact-quote checks, owned actions and a source-bound approval receipt.",
      "usefulFor": [
        "Turn your JSONL incident logs and review decisions into an HTML evidence desk, exact-quote checks, owned actions and a source-bound approval receipt.",
        "Pipe portable JSON receipts into your own review or publishing workflow."
      ],
      "youWillBuild": "Turn your JSONL incident logs and review decisions into an HTML evidence desk, exact-quote checks, owned actions and a source-bound approval receipt.",
      "hours": 8,
      "languages": [
        "Go"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Parse an incident event ledger",
        "Build a stable bounded timeline",
        "Require evidence for each claim",
        "Publish a deterministic incident packet"
      ],
      "prerequisites": [
        {
          "title": "Development environment",
          "path": "phases/00-setup-and-tooling/01-dev-environment"
        },
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        }
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "go",
          "run",
          "."
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-parse-an-incident-event-ledger",
          "title": "Parse an incident event ledger",
          "summary": "Use one tab-separated record per event: stable ID, nonnegative second, event kind and message.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "Split record",
            "Parse time",
            "Unique identity",
            "Validated ledger"
          ],
          "number": 1,
          "doc": "projects/postmortem-writer/stages/01-parse-an-incident-event-ledger/docs/en.md",
          "contentUrl": "project-content/postmortem-writer/stages/01-parse-an-incident-event-ledger/docs/en.md",
          "tests": "projects/postmortem-writer/stages/01-parse-an-incident-event-ledger/tests",
          "figures": [
            "pj-postmortem-writer-1"
          ]
        },
        {
          "id": "02-build-a-stable-bounded-timeline",
          "title": "Build a stable bounded timeline",
          "summary": "Sort a copy by elapsed seconds and then ID to make tied timestamps deterministic.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Copy ledger",
            "Horizon gate",
            "Time sort",
            "ID tie break"
          ],
          "number": 2,
          "doc": "projects/postmortem-writer/stages/02-build-a-stable-bounded-timeline/docs/en.md",
          "contentUrl": "project-content/postmortem-writer/stages/02-build-a-stable-bounded-timeline/docs/en.md",
          "tests": "projects/postmortem-writer/stages/02-build-a-stable-bounded-timeline/tests",
          "figures": [
            "pj-postmortem-writer-2"
          ]
        },
        {
          "id": "03-require-evidence-for-each-claim",
          "title": "Require evidence for each claim",
          "summary": "A claim needs nonblank text and at least one distinct known event ID.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Claim text",
            "Evidence list",
            "Known IDs",
            "Provenance gate"
          ],
          "number": 3,
          "doc": "projects/postmortem-writer/stages/03-require-evidence-for-each-claim/docs/en.md",
          "contentUrl": "project-content/postmortem-writer/stages/03-require-evidence-for-each-claim/docs/en.md",
          "tests": "projects/postmortem-writer/stages/03-require-evidence-for-each-claim/tests",
          "figures": [
            "pj-postmortem-writer-3"
          ]
        },
        {
          "id": "04-publish-a-deterministic-incident-packet",
          "title": "Publish a deterministic incident packet",
          "summary": "Render the validated timeline and claims with quoted message text and explicit references.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Validate claims",
            "Bound output",
            "Order evidence",
            "Publish packet"
          ],
          "number": 4,
          "doc": "projects/postmortem-writer/stages/04-publish-a-deterministic-incident-packet/docs/en.md",
          "contentUrl": "project-content/postmortem-writer/stages/04-publish-a-deterministic-incident-packet/docs/en.md",
          "tests": "projects/postmortem-writer/stages/04-publish-a-deterministic-incident-packet/tests",
          "figures": [
            "pj-postmortem-writer-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "figures": true,
      "overviewFigure": "pj-postmortem-writer-1",
      "path": "projects/postmortem-writer",
      "readme": "projects/postmortem-writer/README.md",
      "contentBase": "project-content/postmortem-writer",
      "manifestHash": "a4eb64c1957c18ce242ed1640a02439289ce4a42828e16a0eec9e3fb2357fc4d",
      "figureScripts": [
        "figures/projects/postmortem-writer.js"
      ]
    },
    {
      "id": "infrastructure-plan-explainer",
      "title": "Infrastructure Plan Explainer",
      "level": 2,
      "languages": [
        "Python"
      ],
      "source": "core",
      "tagline": "Explain replacements, unknown values and dependencies before an infrastructure change.",
      "summary": "Read a saved Terraform plan JSON for a developer reviewing a proposed change. Preserve unknown and sensitive-value markers, separate replacement from in-place updates, and trace declared dependencies. Produce a review brief whose explanations link to exact plan addresses; never apply the plan.",
      "prerequisiteProjects": [
        "json-schema-output-guard"
      ],
      "status": "ready",
      "hours": 8,
      "prerequisites": [
        "Python 3.10+; lists, dictionaries and functions"
      ],
      "skills": [
        "Load a versioned plan without exposing sensitive values",
        "Classify create, update, replace and delete actions",
        "Trace declared dependencies and unknown outcomes",
        "Export address-linked review explanations"
      ],
      "youWillBuild": "Markdown change brief and JSON resource-impact graph",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "overviewFigure": "pj-infrastructure-plan-explainer-1",
      "figures": true,
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-load",
          "title": "Load a versioned plan without exposing sensitive values",
          "summary": "Retain unknown and sensitive markers while dropping raw plan fields.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "Terraform JSON",
            "recursive redaction"
          ],
          "figure": "pj-infrastructure-plan-explainer-1",
          "number": 1,
          "doc": "projects/infrastructure-plan-explainer/stages/01-load/docs/en.md",
          "contentUrl": "project-content/infrastructure-plan-explainer/stages/01-load/docs/en.md",
          "tests": "projects/infrastructure-plan-explainer/stages/01-load/tests",
          "figures": [
            "pj-infrastructure-plan-explainer-1"
          ]
        },
        {
          "id": "02-actions",
          "title": "Classify create, update, replace and delete actions",
          "summary": "Separate replacements from ordinary updates.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "action sequences",
            "replacement order"
          ],
          "figure": "pj-infrastructure-plan-explainer-2",
          "number": 2,
          "doc": "projects/infrastructure-plan-explainer/stages/02-actions/docs/en.md",
          "contentUrl": "project-content/infrastructure-plan-explainer/stages/02-actions/docs/en.md",
          "tests": "projects/infrastructure-plan-explainer/stages/02-actions/tests",
          "figures": [
            "pj-infrastructure-plan-explainer-2"
          ]
        },
        {
          "id": "03-dependencies",
          "title": "Trace declared dependencies and unknown outcomes",
          "summary": "Trace references to concrete plan addresses.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "graph edges",
            "unknown outcomes"
          ],
          "figure": "pj-infrastructure-plan-explainer-3",
          "number": 3,
          "doc": "projects/infrastructure-plan-explainer/stages/03-dependencies/docs/en.md",
          "contentUrl": "project-content/infrastructure-plan-explainer/stages/03-dependencies/docs/en.md",
          "tests": "projects/infrastructure-plan-explainer/stages/03-dependencies/tests",
          "figures": [
            "pj-infrastructure-plan-explainer-3"
          ]
        },
        {
          "id": "04-brief",
          "title": "Export address-linked review explanations",
          "summary": "Publish exact resource identities beside sanitized change evidence.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "Markdown receipts",
            "stable anchors"
          ],
          "figure": "pj-infrastructure-plan-explainer-4",
          "number": 4,
          "doc": "projects/infrastructure-plan-explainer/stages/04-brief/docs/en.md",
          "contentUrl": "project-content/infrastructure-plan-explainer/stages/04-brief/docs/en.md",
          "tests": "projects/infrastructure-plan-explainer/stages/04-brief/tests",
          "figures": [
            "pj-infrastructure-plan-explainer-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/infrastructure-plan-explainer",
      "readme": "projects/infrastructure-plan-explainer/README.md",
      "contentBase": "project-content/infrastructure-plan-explainer",
      "manifestHash": "2448e9e15eb48ffe84f8fa46f54e95532c3a8b74625c114c631f41026c6bfb6f",
      "figureScripts": [
        "figures/projects/infrastructure-plan-explainer.js"
      ]
    },
    {
      "id": "local-model-eval-harness",
      "title": "Local Model Evaluation Harness",
      "level": 2,
      "levelName": "Builder",
      "tagline": "A reproducible local-model recording and comparison artifact with visible coverage and confidence error.",
      "summary": "A reproducible local-model recording and comparison artifact with visible coverage and confidence error. record.py writes the same {manifest,source,labels,records} contract consumed by cli.py. --baseline compares only identical label fingerprints; --min-accuracy supplies a local CI gate.",
      "youWillBuild": "A reproducible local-model recording and comparison artifact with visible coverage and confidence error.",
      "usefulFor": [
        "record.py writes the same {manifest,source,labels,records} contract consumed by cli.py. --baseline compares only identical label fingerprints; --min-accuracy supplies a local CI gate."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "The standard library makes parsing, scoring, and failure handling visible without hiding the mechanism behind a framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate prediction records",
        "Measure normalized exact-answer accuracy",
        "Measure confidence calibration",
        "Publish accuracy and latency together"
      ],
      "prerequisites": [
        "Python 3.10+",
        "JSON, ratios, sorting, percentiles and basic HTTP. A live recorder additionally needs an already-running loopback OpenAI-compatible model server."
      ],
      "figures": true,
      "overviewFigure": "pj-local-model-eval-harness-1",
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "scorecard.json",
          "--html",
          "reliability.html"
        ]
      },
      "stages": [
        {
          "id": "01-validate-predictions",
          "title": "Validate prediction records",
          "summary": "Validate unique ids, string answers, confidence in [0,1], and nonnegative latency_ms..",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "recorded predictions",
            "finite values"
          ],
          "figure": "pj-local-model-eval-harness-1",
          "number": 1,
          "doc": "projects/local-model-eval-harness/stages/01-validate-predictions/docs/en.md",
          "contentUrl": "project-content/local-model-eval-harness/stages/01-validate-predictions/docs/en.md",
          "tests": "projects/local-model-eval-harness/stages/01-validate-predictions/tests",
          "figures": [
            "pj-local-model-eval-harness-1"
          ]
        },
        {
          "id": "02-measure-accuracy",
          "title": "Measure normalized exact-answer accuracy",
          "summary": "Return correct, total, accuracy, and coverage against a complete label mapping..",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "accuracy",
            "coverage",
            "missing data"
          ],
          "figure": "pj-local-model-eval-harness-2",
          "number": 2,
          "doc": "projects/local-model-eval-harness/stages/02-measure-accuracy/docs/en.md",
          "contentUrl": "project-content/local-model-eval-harness/stages/02-measure-accuracy/docs/en.md",
          "tests": "projects/local-model-eval-harness/stages/02-measure-accuracy/tests",
          "figures": [
            "pj-local-model-eval-harness-2"
          ]
        },
        {
          "id": "03-measure-calibration",
          "title": "Measure confidence calibration",
          "summary": "Compute fixed-width bin ECE weighted by bin count, retaining per-bin evidence..",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "calibration",
            "ECE",
            "confidence"
          ],
          "figure": "pj-local-model-eval-harness-3",
          "number": 3,
          "doc": "projects/local-model-eval-harness/stages/03-measure-calibration/docs/en.md",
          "contentUrl": "project-content/local-model-eval-harness/stages/03-measure-calibration/docs/en.md",
          "tests": "projects/local-model-eval-harness/stages/03-measure-calibration/tests",
          "figures": [
            "pj-local-model-eval-harness-3"
          ]
        },
        {
          "id": "04-publish-scorecard",
          "title": "Publish accuracy and latency together",
          "summary": "Combine metrics with nearest-rank latency percentiles and a measurement-source label..",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "percentiles",
            "measurement provenance"
          ],
          "figure": "pj-local-model-eval-harness-4",
          "number": 4,
          "doc": "projects/local-model-eval-harness/stages/04-publish-scorecard/docs/en.md",
          "contentUrl": "project-content/local-model-eval-harness/stages/04-publish-scorecard/docs/en.md",
          "tests": "projects/local-model-eval-harness/stages/04-publish-scorecard/tests",
          "figures": [
            "pj-local-model-eval-harness-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/local-model-eval-harness",
      "readme": "projects/local-model-eval-harness/README.md",
      "contentBase": "project-content/local-model-eval-harness",
      "manifestHash": "9171bc15f59483bcbb21769b806e6c6f77b8bf4d216672891879df28514ee652",
      "figureScripts": [
        "figures/projects/local-model-eval-harness.js"
      ]
    },
    {
      "id": "log-volume-reduction-lab",
      "title": "Log Volume Reduction Lab",
      "tagline": "Shrink a noisy log stream while keeping evidence of rare failures.",
      "summary": "Help an engineer build compact log context for an assistant. Learn bounded template grouping, counts and representative examples, then compare uniform and rarity-aware sampling on authored failure fixtures. Export compressed JSONL and a coverage report showing which important events were lost.",
      "level": 2,
      "source": "core",
      "status": "ready",
      "hours": 8,
      "languages": [
        "Rust",
        "Python"
      ],
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "Compact log context JSONL and rare-event coverage comparison",
      "prerequisiteProjects": [
        "token-counter-and-cost-meter"
      ],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-parse-bounded-logs",
          "title": "Parse and bound log records",
          "summary": "Turn each line into a validated, located record.",
          "hours": 2,
          "language": "rust",
          "difficulty": "starter",
          "concepts": [
            "UTF-8",
            "bounds",
            "locators"
          ],
          "timeout": 120,
          "figure": "pj-log-volume-reduction-lab-1",
          "number": 1,
          "doc": "projects/log-volume-reduction-lab/stages/01-parse-bounded-logs/docs/en.md",
          "contentUrl": "project-content/log-volume-reduction-lab/stages/01-parse-bounded-logs/docs/en.md",
          "tests": "projects/log-volume-reduction-lab/stages/01-parse-bounded-logs/tests",
          "figures": [
            "pj-log-volume-reduction-lab-1"
          ]
        },
        {
          "id": "02-group-templates",
          "title": "Group repeated templates with source locators",
          "summary": "Count repetition without discarding its source range.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "BTreeMap",
            "representatives",
            "group identity"
          ],
          "timeout": 120,
          "figure": "pj-log-volume-reduction-lab-2",
          "number": 2,
          "doc": "projects/log-volume-reduction-lab/stages/02-group-templates/docs/en.md",
          "contentUrl": "project-content/log-volume-reduction-lab/stages/02-group-templates/docs/en.md",
          "tests": "projects/log-volume-reduction-lab/stages/02-group-templates/tests",
          "figures": [
            "pj-log-volume-reduction-lab-2"
          ]
        },
        {
          "id": "03-compare-samplers",
          "title": "Compare sampling policies on rare events",
          "summary": "Spend a fixed record budget on common or rare templates.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "sampling",
            "rarity",
            "determinism"
          ],
          "timeout": 120,
          "figure": "pj-log-volume-reduction-lab-3",
          "number": 3,
          "doc": "projects/log-volume-reduction-lab/stages/03-compare-samplers/docs/en.md",
          "contentUrl": "project-content/log-volume-reduction-lab/stages/03-compare-samplers/docs/en.md",
          "tests": "projects/log-volume-reduction-lab/stages/03-compare-samplers/tests",
          "figures": [
            "pj-log-volume-reduction-lab-3"
          ]
        },
        {
          "id": "04-export-coverage",
          "title": "Export compact context and coverage",
          "summary": "Measure which diagnostic templates survive compression.",
          "hours": 2,
          "language": "rust+python",
          "difficulty": "core",
          "concepts": [
            "JSONL",
            "cross-language contract",
            "coverage"
          ],
          "timeout": 120,
          "figure": "pj-log-volume-reduction-lab-4",
          "runners": [
            {
              "language": "rust"
            },
            {
              "language": "python"
            }
          ],
          "number": 4,
          "doc": "projects/log-volume-reduction-lab/stages/04-export-coverage/docs/en.md",
          "contentUrl": "project-content/log-volume-reduction-lab/stages/04-export-coverage/docs/en.md",
          "tests": "projects/log-volume-reduction-lab/stages/04-export-coverage/tests",
          "figures": [
            "pj-log-volume-reduction-lab-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded local command output. See the README for input and scope."
        }
      ],
      "path": "projects/log-volume-reduction-lab",
      "readme": "projects/log-volume-reduction-lab/README.md",
      "contentBase": "project-content/log-volume-reduction-lab",
      "manifestHash": "676e705ea6321a9948d12309380710dd6e325599d393cfc8d045d6af872c4f98",
      "figureScripts": [
        "figures/projects/log-volume-reduction-lab.js"
      ]
    },
    {
      "id": "meeting-notes-to-actions",
      "title": "Meeting Notes to Actions",
      "level": 2,
      "levelName": "Builder",
      "tagline": "A source-linked commitment inbox whose export requires an explicit review decision.",
      "summary": "A source-linked commitment inbox whose export requires an explicit review decision. Use the schema_version1 actions.json receipt with stable action ids and original source lines. CSV columns are id, owner, due and task, and contain approved actions only.",
      "youWillBuild": "A source-linked commitment inbox whose export requires an explicit review decision.",
      "usefulFor": [
        "Use the schema_version1 actions.json receipt with stable action ids and original source lines. CSV columns are id, owner, due and task, and contain approved actions only."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "The standard library makes parsing, scoring, and failure handling visible without hiding the mechanism behind a framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Parse explicit action records with line provenance",
        "Validate owners and calendar dates",
        "Deduplicate exact commitments without losing citations",
        "Publish an escaped HTML checklist and summary"
      ],
      "prerequisites": [
        "Python 3.10+",
        "line-oriented parsing, dictionaries, ISO dates, escaping and JSON files."
      ],
      "figures": true,
      "overviewFigure": "pj-meeting-notes-to-actions-1",
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/notes.txt",
          "--today",
          "2026-09-29",
          "--output",
          "actions.json",
          "--html",
          "actions.html",
          "--csv",
          "approved.csv"
        ]
      },
      "stages": [
        {
          "id": "01-parse-lines",
          "title": "Parse explicit action records with line provenance",
          "summary": "Parse ACTION lines, keep source line numbers, and reject malformed marked lines..",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "conservative extraction",
            "provenance"
          ],
          "figure": "pj-meeting-notes-to-actions-1",
          "number": 1,
          "doc": "projects/meeting-notes-to-actions/stages/01-parse-lines/docs/en.md",
          "contentUrl": "project-content/meeting-notes-to-actions/stages/01-parse-lines/docs/en.md",
          "tests": "projects/meeting-notes-to-actions/stages/01-parse-lines/tests",
          "figures": [
            "pj-meeting-notes-to-actions-1"
          ]
        },
        {
          "id": "02-validate-commitments",
          "title": "Validate owners and calendar dates",
          "summary": "Validate owner, task, and ISO date.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "date validation",
            "uncertainty"
          ],
          "figure": "pj-meeting-notes-to-actions-2",
          "number": 2,
          "doc": "projects/meeting-notes-to-actions/stages/02-validate-commitments/docs/en.md",
          "contentUrl": "project-content/meeting-notes-to-actions/stages/02-validate-commitments/docs/en.md",
          "tests": "projects/meeting-notes-to-actions/stages/02-validate-commitments/tests",
          "figures": [
            "pj-meeting-notes-to-actions-2"
          ]
        },
        {
          "id": "03-deduplicate-actions",
          "title": "Deduplicate exact commitments without losing citations",
          "summary": "Merge exact normalized duplicates and sort provenance line numbers.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "deduplication",
            "stable identity"
          ],
          "figure": "pj-meeting-notes-to-actions-3",
          "number": 3,
          "doc": "projects/meeting-notes-to-actions/stages/03-deduplicate-actions/docs/en.md",
          "contentUrl": "project-content/meeting-notes-to-actions/stages/03-deduplicate-actions/docs/en.md",
          "tests": "projects/meeting-notes-to-actions/stages/03-deduplicate-actions/tests",
          "figures": [
            "pj-meeting-notes-to-actions-3"
          ]
        },
        {
          "id": "04-publish-checklist",
          "title": "Publish an escaped HTML checklist and summary",
          "summary": "Return HTML and counts for ready, review, and overdue actions.",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "HTML escaping",
            "review queues",
            "artifact publishing"
          ],
          "figure": "pj-meeting-notes-to-actions-4",
          "number": 4,
          "doc": "projects/meeting-notes-to-actions/stages/04-publish-checklist/docs/en.md",
          "contentUrl": "project-content/meeting-notes-to-actions/stages/04-publish-checklist/docs/en.md",
          "tests": "projects/meeting-notes-to-actions/stages/04-publish-checklist/tests",
          "figures": [
            "pj-meeting-notes-to-actions-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/meeting-notes-to-actions",
      "readme": "projects/meeting-notes-to-actions/README.md",
      "contentBase": "project-content/meeting-notes-to-actions",
      "manifestHash": "833b43d9944487c373e786ef4a0a90c0f128f193d7c5b88cc34ade5b4b52a4a4",
      "figureScripts": [
        "figures/projects/meeting-notes-to-actions.js"
      ]
    },
    {
      "id": "plain-language-rewrite-desk",
      "title": "Plain Language Rewrite Desk",
      "tagline": "Make an explanation easier to read while checking what changed.",
      "summary": "Help a technical author revise dense prose using visible sentence and vocabulary measures, protected terms and an optional real rewriting provider. Compare original and proposed paragraphs, surface changed numbers and missing definitions, and export only the author's accepted revisions with a Markdown change record.",
      "level": 2,
      "languages": [
        "TypeScript"
      ],
      "source": "core",
      "prerequisiteProjects": [
        "glossary-hovercard-publisher"
      ],
      "status": "ready",
      "hours": 8,
      "youWillBuild": "Accepted Markdown, a paragraph-level HTML comparison and revision-decisions.json",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "languageWhy": {
        "TypeScript": "Typed local transformations and portable browser interfaces run with Node standard libraries."
      },
      "figures": true,
      "overviewFigure": "pj-plain-language-rewrite-desk-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-record-facts",
          "title": "Segment prose and record protected terms and facts",
          "summary": "segmentProse(text:string,protectedTerms?:string[]):Paragraph[]",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-plain-language-rewrite-desk-1",
          "concepts": [
            "Segment prose and record protected terms and facts"
          ],
          "number": 1,
          "doc": "projects/plain-language-rewrite-desk/stages/01-record-facts/docs/en.md",
          "contentUrl": "project-content/plain-language-rewrite-desk/stages/01-record-facts/docs/en.md",
          "tests": "projects/plain-language-rewrite-desk/stages/01-record-facts/tests",
          "figures": [
            "pj-plain-language-rewrite-desk-1"
          ]
        },
        {
          "id": "02-propose-rewrites",
          "title": "Produce simpler candidate paragraphs",
          "summary": "proposeParagraphs(paragraphs:Paragraph[],recorded?:Record<string,string>):{id,candidate,method}[]",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-plain-language-rewrite-desk-2",
          "concepts": [
            "Produce simpler candidate paragraphs"
          ],
          "number": 2,
          "doc": "projects/plain-language-rewrite-desk/stages/02-propose-rewrites/docs/en.md",
          "contentUrl": "project-content/plain-language-rewrite-desk/stages/02-propose-rewrites/docs/en.md",
          "tests": "projects/plain-language-rewrite-desk/stages/02-propose-rewrites/tests",
          "figures": [
            "pj-plain-language-rewrite-desk-2"
          ]
        },
        {
          "id": "03-compare-facts",
          "title": "Compare omissions, numbers and readability measures",
          "summary": "measures(text:string):{words,sentences,averageWords,longWords}; compareParagraphs(paragraphs,proposals,definitions?):Comparison[]",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-plain-language-rewrite-desk-3",
          "concepts": [
            "Compare omissions, numbers and readability measures"
          ],
          "number": 3,
          "doc": "projects/plain-language-rewrite-desk/stages/03-compare-facts/docs/en.md",
          "contentUrl": "project-content/plain-language-rewrite-desk/stages/03-compare-facts/docs/en.md",
          "tests": "projects/plain-language-rewrite-desk/stages/03-compare-facts/tests",
          "figures": [
            "pj-plain-language-rewrite-desk-3"
          ]
        },
        {
          "id": "04-accepted-export",
          "title": "Export accepted revisions and a change record",
          "summary": "exportRevisions(comparisons,value?):{markdown,changeRecord,decisions,unresolved}; renderDesk(comparisons,state):string",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-plain-language-rewrite-desk-4",
          "concepts": [
            "Export accepted revisions and a change record"
          ],
          "number": 4,
          "doc": "projects/plain-language-rewrite-desk/stages/04-accepted-export/docs/en.md",
          "contentUrl": "project-content/plain-language-rewrite-desk/stages/04-accepted-export/docs/en.md",
          "tests": "projects/plain-language-rewrite-desk/stages/04-accepted-export/tests",
          "figures": [
            "pj-plain-language-rewrite-desk-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/plain-language-rewrite-desk",
      "readme": "projects/plain-language-rewrite-desk/README.md",
      "contentBase": "project-content/plain-language-rewrite-desk",
      "manifestHash": "856a59ed155979ea4dfa694e96c1664bd52671197676a5af0dc259b92c7ad421",
      "figureScripts": [
        "figures/projects/plain-language-rewrite-desk.js"
      ]
    },
    {
      "id": "pr-review-reporter",
      "title": "PR Review Reporter",
      "level": 2,
      "levelName": "Builder",
      "tagline": "A local patch-review artifact that preserves Git line evidence and can enter CI as SARIF.",
      "summary": "A local patch-review artifact that preserves Git line evidence and can enter CI as SARIF. Use --diff - for stdin, --repo /path --base REF --head REF for a read-only Git diff, or --candidates recorded-findings.json to validate another reviewer's findings against the supplied patch.",
      "hours": 8,
      "languages": [
        "Python",
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Recover new-file line numbers",
        "Generate narrow review candidates",
        "Verify and merge findings",
        "Publish a local escaped report"
      ],
      "prerequisites": [
        "Node 22.18+, Python 3 and Git only for --repo mode",
        "unified diff counters, JSON, exact source quotes and HTML escaping."
      ],
      "youWillBuild": "A local patch-review artifact that preserves Git line evidence and can enter CI as SARIF.",
      "usefulFor": [
        "Use --diff - for stdin, --repo /path --base REF --head REF for a read-only Git diff, or --candidates recorded-findings.json to validate another reviewer's findings against the supplied patch."
      ],
      "demo": {
        "cwd": "solution",
        "command": [
          "node",
          "cli.ts",
          "--diff",
          "samples/change.diff",
          "--output",
          "review.json",
          "--html",
          "review.html",
          "--sarif",
          "review.sarif"
        ]
      },
      "stages": [
        {
          "id": "01-diff-lines",
          "title": "Recover new-file line numbers",
          "summary": "Parse hunk headers into old and new counters. Context consumes both counters, deletions consume only the old counter, and additions consume the new counter while producing a reviewable location. Reject truncated hunks and parent-traversing paths. The parser is deliberately for text unified diffs; binary patches and combined merge diffs are outside the contract. Wire Python into TypeScript using execFileSync and stdin, never an interpolated shell command.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Python handles a streaming text grammar while TypeScript consumes a typed JSON boundary.",
          "concepts": [
            "parseDiff"
          ],
          "difficulty": "starter",
          "requires": [
            "node",
            "python3"
          ],
          "timeout": 90,
          "figure": "pj-pr-review-reporter-1",
          "number": 1,
          "doc": "projects/pr-review-reporter/stages/01-diff-lines/docs/en.md",
          "contentUrl": "project-content/pr-review-reporter/stages/01-diff-lines/docs/en.md",
          "tests": "projects/pr-review-reporter/stages/01-diff-lines/tests",
          "figures": [
            "pj-pr-review-reporter-1"
          ]
        },
        {
          "id": "02-inspect",
          "title": "Generate narrow review candidates",
          "summary": "Build explicit static detectors for dynamic eval, shell exec, disabled TLS validation and empty catch handlers. Inspect only added lines. These patterns produce review candidates rather than proof of exploitable behavior. Keeping rule ids stable makes deduplication possible when a later model reviewer reports the same concern.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Typed findings require a source quote, location and rule id before entering the report pipeline.",
          "concepts": [
            "inspect"
          ],
          "difficulty": "core",
          "requires": [
            "node",
            "python3"
          ],
          "timeout": 90,
          "figure": "pj-pr-review-reporter-2",
          "number": 2,
          "doc": "projects/pr-review-reporter/stages/02-inspect/docs/en.md",
          "contentUrl": "project-content/pr-review-reporter/stages/02-inspect/docs/en.md",
          "tests": "projects/pr-review-reporter/stages/02-inspect/tests",
          "figures": [
            "pj-pr-review-reporter-2"
          ]
        },
        {
          "id": "03-anchors",
          "title": "Verify and merge findings",
          "summary": "Require an existing added-line location and a nonempty exact source substring for every candidate. Reject fabricated files, deleted-line locations, empty quotes and invalid severity values. Merge findings by file, line and rule; keep the stronger severity when reviewers disagree. The quote gate establishes location support, not the truth of a security claim, which still needs review.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "A typed verification result keeps rejected model suggestions out of the renderer.",
          "concepts": [
            "verify",
            "merge"
          ],
          "difficulty": "core",
          "requires": [
            "node",
            "python3"
          ],
          "timeout": 90,
          "figure": "pj-pr-review-reporter-3",
          "number": 3,
          "doc": "projects/pr-review-reporter/stages/03-anchors/docs/en.md",
          "contentUrl": "project-content/pr-review-reporter/stages/03-anchors/docs/en.md",
          "tests": "projects/pr-review-reporter/stages/03-anchors/tests",
          "figures": [
            "pj-pr-review-reporter-3"
          ]
        },
        {
          "id": "04-report",
          "title": "Publish a local escaped report",
          "summary": "Render a self-contained report with source locations, quoted evidence, severity and message. Escape source text as carefully as prose: a diff can contain executable HTML. Keep external publication outside the tool. The CLI writes review.html locally and prints a machine-readable summary for automation.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "TypeScript joins verified data to HTML while escaping every untrusted string.",
          "concepts": [
            "escapeHTML",
            "render"
          ],
          "difficulty": "core",
          "requires": [
            "node",
            "python3"
          ],
          "timeout": 90,
          "figure": "pj-pr-review-reporter-4",
          "number": 4,
          "doc": "projects/pr-review-reporter/stages/04-report/docs/en.md",
          "contentUrl": "project-content/pr-review-reporter/stages/04-report/docs/en.md",
          "tests": "projects/pr-review-reporter/stages/04-report/tests",
          "figures": [
            "pj-pr-review-reporter-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/pr-review-reporter",
      "readme": "projects/pr-review-reporter/README.md",
      "contentBase": "project-content/pr-review-reporter",
      "manifestHash": "8cc97b681fec66c0c23ca4ad69c6a9a9b4138c2efbb39cfa26c151318835d8a9",
      "figureScripts": [
        "figures/projects/pr-review-reporter.js"
      ]
    },
    {
      "id": "research-report-agent",
      "title": "Research Report Agent",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Turn a question and a pile of documents into a report where every sentence can be checked.",
      "summary": "Build the pipeline behind deep research tools: search a corpus, pull exact snippets, plan the research, write only from evidence, verify every claim, publish an HTML report with footnotes and a trace, then score it on checked-in public evaluation fixtures.",
      "usefulFor": [
        "Prepare a technical decision memo whose claims link to the supporting source passages.",
        "Compare reports after source documents change and inspect which claims need revision."
      ],
      "youWillBuild": "An evidence ledger for technical decisions showing how source updates change published claims.",
      "hours": 20,
      "languages": [
        "Rust",
        "Python",
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "BM25 retrieval",
        "snippet extraction with offsets",
        "research planning",
        "record and replay model calls",
        "citation grounding",
        "claim verification",
        "run budgets and terminal states",
        "tracing",
        "public fixture evaluation"
      ],
      "prerequisites": [
        {
          "title": "Retrieval augmented generation",
          "path": "phases/11-llm-engineering/06-rag"
        },
        {
          "title": "Structured outputs",
          "path": "phases/11-llm-engineering/03-structured-outputs"
        },
        {
          "title": "The agent loop",
          "path": "phases/14-agent-engineering/01-the-agent-loop"
        },
        {
          "title": "Verification gates",
          "path": "phases/14-agent-engineering/38-verification-gates"
        }
      ],
      "stages": [
        {
          "id": "01-search-the-corpus",
          "title": "Search the corpus",
          "summary": "Load markdown documents with headers and rank them with BM25.",
          "hours": 5,
          "concepts": [
            "document parsing",
            "tokenization",
            "BM25",
            "IDF"
          ],
          "difficulty": "core",
          "language": "rust+python",
          "languageWhy": "Rust owns ranking and JSON parsing; Python exposes a small process adapter to later stages.",
          "figure": "pj-rra-bm25",
          "runners": [
            {
              "language": "rust"
            },
            {
              "language": "python"
            }
          ],
          "number": 1,
          "doc": "projects/research-report-agent/stages/01-search-the-corpus/docs/en.md",
          "contentUrl": "project-content/research-report-agent/stages/01-search-the-corpus/docs/en.md",
          "tests": "projects/research-report-agent/stages/01-search-the-corpus/tests",
          "figures": [
            "pj-rra-bm25"
          ]
        },
        {
          "id": "02-extract-snippets",
          "title": "Extract snippets you can cite",
          "summary": "Split documents into sentences and keep exact character offsets for every snippet.",
          "hours": 2,
          "concepts": [
            "sentence spans",
            "offsets",
            "snippet scoring",
            "context-free sentences"
          ],
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Python string slices preserve the exact evidence spans used by the verifier.",
          "figure": "pj-rra-snippet-offsets",
          "runners": [
            {
              "language": "python"
            }
          ],
          "number": 2,
          "doc": "projects/research-report-agent/stages/02-extract-snippets/docs/en.md",
          "contentUrl": "project-content/research-report-agent/stages/02-extract-snippets/docs/en.md",
          "tests": "projects/research-report-agent/stages/02-extract-snippets/tests",
          "figures": [
            "pj-rra-snippet-offsets"
          ]
        },
        {
          "id": "03-plan-the-research",
          "title": "Plan the research",
          "summary": "Split the question into facets with a rule planner, then swap in a recorded model safely.",
          "hours": 2,
          "concepts": [
            "query decomposition",
            "Model protocol",
            "record and replay",
            "fallbacks"
          ],
          "difficulty": "core",
          "language": "python",
          "languageWhy": "A Python protocol isolates planning from live model transport and recorded replies.",
          "figure": "pj-rra-plan-facets",
          "runners": [
            {
              "language": "python"
            }
          ],
          "number": 3,
          "doc": "projects/research-report-agent/stages/03-plan-the-research/docs/en.md",
          "contentUrl": "project-content/research-report-agent/stages/03-plan-the-research/docs/en.md",
          "tests": "projects/research-report-agent/stages/03-plan-the-research/tests",
          "figures": [
            "pj-rra-plan-facets"
          ]
        },
        {
          "id": "04-write-with-citations",
          "title": "Write only from evidence",
          "summary": "Compose sections from snippets and reject any sentence without a valid citation.",
          "hours": 2,
          "concepts": [
            "extractive writing",
            "citation format",
            "validators"
          ],
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Python dataclasses keep snippets, sections and citation references explicit.",
          "figure": "pj-rra-cited-writer",
          "runners": [
            {
              "language": "python"
            }
          ],
          "number": 4,
          "doc": "projects/research-report-agent/stages/04-write-with-citations/docs/en.md",
          "contentUrl": "project-content/research-report-agent/stages/04-write-with-citations/docs/en.md",
          "tests": "projects/research-report-agent/stages/04-write-with-citations/tests",
          "figures": [
            "pj-rra-cited-writer"
          ]
        },
        {
          "id": "05-verify-every-claim",
          "title": "Verify every claim",
          "summary": "Catch swapped names, flipped negations and changed numbers, under a run budget.",
          "hours": 2,
          "concepts": [
            "claim support",
            "poisoned drafts",
            "budgets",
            "terminal states"
          ],
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Python sets and counters make support rules and budgets inspectable.",
          "figure": "pj-rra-critic",
          "runners": [
            {
              "language": "python"
            }
          ],
          "number": 5,
          "doc": "projects/research-report-agent/stages/05-verify-every-claim/docs/en.md",
          "contentUrl": "project-content/research-report-agent/stages/05-verify-every-claim/docs/en.md",
          "tests": "projects/research-report-agent/stages/05-verify-every-claim/tests",
          "figures": [
            "pj-rra-critic"
          ]
        },
        {
          "id": "06-publish-the-report",
          "title": "Publish the report",
          "summary": "Render HTML with numbered footnotes and write a trace of the whole run.",
          "hours": 2,
          "concepts": [
            "HTML rendering",
            "footnotes",
            "tracing",
            "pipelines"
          ],
          "difficulty": "core",
          "language": "python+typescript",
          "languageWhy": "Python serializes evidence; TypeScript validates it and renders accessible HTML.",
          "figure": "pj-rra-publish",
          "runners": [
            {
              "language": "python"
            },
            {
              "language": "typescript"
            }
          ],
          "number": 6,
          "doc": "projects/research-report-agent/stages/06-publish-the-report/docs/en.md",
          "contentUrl": "project-content/research-report-agent/stages/06-publish-the-report/docs/en.md",
          "tests": "projects/research-report-agent/stages/06-publish-the-report/tests",
          "figures": [
            "pj-rra-publish"
          ]
        },
        {
          "id": "07-score-the-report",
          "title": "Score the public fixtures",
          "summary": "Measure citation precision, source recall and fact coverage on checked-in public evaluation fixtures.",
          "hours": 2,
          "concepts": [
            "public fixture evaluation",
            "citation precision",
            "recall",
            "scorecards"
          ],
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Python computes per-question metrics and a reproducible aggregate score.",
          "figure": "pj-rra-scorecard",
          "runners": [
            {
              "language": "python"
            }
          ],
          "number": 7,
          "doc": "projects/research-report-agent/stages/07-score-the-report/docs/en.md",
          "contentUrl": "project-content/research-report-agent/stages/07-score-the-report/docs/en.md",
          "tests": "projects/research-report-agent/stages/07-score-the-report/tests",
          "figures": [
            "pj-rra-scorecard"
          ]
        }
      ],
      "figures": true,
      "overviewFigure": "pj-rra-pipeline",
      "languageReasons": [
        {
          "language": "Rust",
          "why": "Build the BM25 index and parse JSON requests using only the standard library."
        },
        {
          "language": "Python",
          "why": "Compose evidence extraction, recorded model calls, verification and evaluation."
        },
        {
          "language": "TypeScript",
          "why": "Validate the evidence contract and render an interactive, portable HTML report."
        }
      ],
      "demo": {
        "command": [
          "python3",
          "run_report.py",
          "How does a secrets proxy protect API keys from prompt injection?",
          "--out",
          "out"
        ],
        "cwd": "solution"
      },
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Real browser recording of the generated HTML report, source hover evidence, and expanded run trace."
        }
      ],
      "path": "projects/research-report-agent",
      "readme": "projects/research-report-agent/README.md",
      "contentBase": "project-content/research-report-agent",
      "manifestHash": "d0a37413a84fc771b0cc568fe5d3bf422433ff4fa64b72ceba4dddbc95b3eada",
      "figureScripts": [
        "figures/projects/research-report-agent.js"
      ]
    },
    {
      "id": "retrieval-evaluation-lab",
      "title": "Retrieval Evaluation Lab",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Measure ranking quality with precision, recall, reciprocal rank, and discounted gain while exposing duplicates and missing judgments.",
      "summary": "Measure ranking quality with precision, recall, reciprocal rank, and discounted gain while exposing duplicates and missing judgments.",
      "youWillBuild": "A retrieval regression detective revealing which evidence moved and why the aggregate changed.",
      "usefulFor": [
        "A retrieval regression detective revealing which evidence moved and why the aggregate changed.",
        "Metrics apply to supplied labels."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "The standard library makes parsing, scoring, and failure handling visible without hiding the mechanism behind a framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate rankings and graded judgments",
        "Compute precision and recall at k",
        "Reward useful evidence near the top",
        "Compare systems query by query"
      ],
      "prerequisites": [
        {
          "title": "Retrieval augmented generation",
          "path": "phases/11-llm-engineering/06-rag"
        },
        {
          "title": "Model evaluation",
          "path": "phases/02-ml-fundamentals/09-model-evaluation"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-retrieval-evaluation-lab-1",
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-validate-rankings",
          "title": "Validate rankings and graded judgments",
          "summary": "Reject duplicate ranking ids, nonpositive cutoffs, and invalid relevance grades.",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "evaluation contracts",
            "graded relevance"
          ],
          "figure": "pj-retrieval-evaluation-lab-1",
          "number": 1,
          "doc": "projects/retrieval-evaluation-lab/stages/01-validate-rankings/docs/en.md",
          "contentUrl": "project-content/retrieval-evaluation-lab/stages/01-validate-rankings/docs/en.md",
          "tests": "projects/retrieval-evaluation-lab/stages/01-validate-rankings/tests",
          "figures": [
            "pj-retrieval-evaluation-lab-1"
          ]
        },
        {
          "id": "02-precision-and-recall",
          "title": "Compute precision and recall at k",
          "summary": "Compute binary precision and recall for positive-grade judgments at cutoff k.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "precision",
            "recall",
            "cutoff"
          ],
          "figure": "pj-retrieval-evaluation-lab-2",
          "number": 2,
          "doc": "projects/retrieval-evaluation-lab/stages/02-precision-and-recall/docs/en.md",
          "contentUrl": "project-content/retrieval-evaluation-lab/stages/02-precision-and-recall/docs/en.md",
          "tests": "projects/retrieval-evaluation-lab/stages/02-precision-and-recall/tests",
          "figures": [
            "pj-retrieval-evaluation-lab-2"
          ]
        },
        {
          "id": "03-rank-sensitive-metrics",
          "title": "Reward useful evidence near the top",
          "summary": "Return reciprocal rank and NDCG at k.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "MRR",
            "NDCG",
            "discounted gain"
          ],
          "figure": "pj-retrieval-evaluation-lab-3",
          "number": 3,
          "doc": "projects/retrieval-evaluation-lab/stages/03-rank-sensitive-metrics/docs/en.md",
          "contentUrl": "project-content/retrieval-evaluation-lab/stages/03-rank-sensitive-metrics/docs/en.md",
          "tests": "projects/retrieval-evaluation-lab/stages/03-rank-sensitive-metrics/tests",
          "figures": [
            "pj-retrieval-evaluation-lab-3"
          ]
        },
        {
          "id": "04-compare-systems",
          "title": "Compare systems query by query",
          "summary": "Produce per-query metrics and macro means for each named system, with unjudged result counts.",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "macro averaging",
            "paired systems"
          ],
          "figure": "pj-retrieval-evaluation-lab-4",
          "number": 4,
          "doc": "projects/retrieval-evaluation-lab/stages/04-compare-systems/docs/en.md",
          "contentUrl": "project-content/retrieval-evaluation-lab/stages/04-compare-systems/docs/en.md",
          "tests": "projects/retrieval-evaluation-lab/stages/04-compare-systems/tests",
          "figures": [
            "pj-retrieval-evaluation-lab-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/retrieval-evaluation-lab",
      "readme": "projects/retrieval-evaluation-lab/README.md",
      "contentBase": "project-content/retrieval-evaluation-lab",
      "manifestHash": "1006d130442cb9a6b2ce2a16ac8407c223f4dd793831bdffe2dfbce5675b9dfe",
      "figureScripts": [
        "figures/projects/retrieval-evaluation-lab.js"
      ]
    },
    {
      "title": "Sensitive Text Redaction Gate",
      "tagline": "Remove bounded sensitive-text patterns before records enter a model pipeline.",
      "level": 2,
      "summary": "Detect ASCII email patterns, valid IPv4 addresses and explicit literal identifiers. Merge overlapping spans, replace their union without exposing original values in receipts, and export redacted JSONL plus an inspectable HTML ledger.",
      "languageWhy": {
        "Python": "Regular expressions, Unicode string offsets, IP address parsing and JSONL processing remain visible with standard-library code."
      },
      "prerequisiteProjects": [
        "dataset-split-auditor"
      ],
      "id": "sensitive-text-redaction-gate",
      "languages": [
        "Python"
      ],
      "source": "core",
      "status": "ready",
      "hours": 8,
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "prerequisites": [
        "Python 3.12+; dictionaries, lists and command-line IO"
      ],
      "youWillBuild": "redacted.jsonl, receipt.json and review.html",
      "skills": [
        "Detect bounded sensitive spans",
        "Merge complete overlap unions",
        "Replace spans without leaking source values",
        "Export redacted records and bounded evidence"
      ],
      "figures": true,
      "overviewFigure": "pj-sensitive-text-redaction-gate-1",
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.jsonl",
          "--literals",
          "samples/literals.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-detect-spans",
          "title": "Detect bounded sensitive spans",
          "summary": "Return start/end Python character offsets and kind EMAIL, IPV4 or LITERAL.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "detect bounded sensitive spans"
          ],
          "figure": "pj-sensitive-text-redaction-gate-1",
          "number": 1,
          "doc": "projects/sensitive-text-redaction-gate/stages/01-detect-spans/docs/en.md",
          "contentUrl": "project-content/sensitive-text-redaction-gate/stages/01-detect-spans/docs/en.md",
          "tests": "projects/sensitive-text-redaction-gate/stages/01-detect-spans/tests",
          "figures": [
            "pj-sensitive-text-redaction-gate-1"
          ]
        },
        {
          "id": "02-merge-overlaps",
          "title": "Merge complete overlap unions",
          "summary": "Validate each span and sort a copy.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "merge complete overlap unions"
          ],
          "figure": "pj-sensitive-text-redaction-gate-2",
          "number": 2,
          "doc": "projects/sensitive-text-redaction-gate/stages/02-merge-overlaps/docs/en.md",
          "contentUrl": "project-content/sensitive-text-redaction-gate/stages/02-merge-overlaps/docs/en.md",
          "tests": "projects/sensitive-text-redaction-gate/stages/02-merge-overlaps/tests",
          "figures": [
            "pj-sensitive-text-redaction-gate-2"
          ]
        },
        {
          "id": "03-redact-text",
          "title": "Replace spans without leaking source values",
          "summary": "Compose detect and merge_spans.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "replace spans without leaking source values"
          ],
          "figure": "pj-sensitive-text-redaction-gate-3",
          "number": 3,
          "doc": "projects/sensitive-text-redaction-gate/stages/03-redact-text/docs/en.md",
          "contentUrl": "project-content/sensitive-text-redaction-gate/stages/03-redact-text/docs/en.md",
          "tests": "projects/sensitive-text-redaction-gate/stages/03-redact-text/tests",
          "figures": [
            "pj-sensitive-text-redaction-gate-3"
          ]
        },
        {
          "id": "04-export-safe-records",
          "title": "Export redacted records and bounded evidence",
          "summary": "Accept up to ten thousand records with exactly id and text.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "export redacted records and bounded evidence"
          ],
          "figure": "pj-sensitive-text-redaction-gate-4",
          "number": 4,
          "doc": "projects/sensitive-text-redaction-gate/stages/04-export-safe-records/docs/en.md",
          "contentUrl": "project-content/sensitive-text-redaction-gate/stages/04-export-safe-records/docs/en.md",
          "tests": "projects/sensitive-text-redaction-gate/stages/04-export-safe-records/tests",
          "figures": [
            "pj-sensitive-text-redaction-gate-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/sensitive-text-redaction-gate",
      "readme": "projects/sensitive-text-redaction-gate/README.md",
      "contentBase": "project-content/sensitive-text-redaction-gate",
      "manifestHash": "9e4d11fdc25fde910980dc44172353e3b516241b082014f180dc95198f9af094",
      "figureScripts": [
        "figures/projects/sensitive-text-redaction-gate.js"
      ]
    },
    {
      "id": "service-ownership-navigator",
      "title": "Service Ownership Navigator",
      "tagline": "Find a service's owner and runbook with evidence for every answer.",
      "summary": "Combine an authored service catalog, repository ownership rules and runbook links into a local directory. Resolve ownership at the requested path, surface conflicts and missing runbooks, and answer handoff questions with file-level evidence. Export a static site and JSON lookup interface without sending notifications.",
      "level": 2,
      "languages": [
        "TypeScript"
      ],
      "source": "core",
      "prerequisiteProjects": [
        "semantic-notes-search",
        "doc-qa-with-citations"
      ],
      "status": "ready",
      "hours": 8,
      "youWillBuild": "Static service directory and source-backed ownership lookup JSON",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "languageWhy": {
        "TypeScript": "Typed local transformations and portable browser interfaces run with Node standard libraries."
      },
      "figures": true,
      "overviewFigure": "pj-service-ownership-navigator-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-load-evidence",
          "title": "Load service metadata and ownership rules",
          "summary": "parseOwnershipRules(text:string,source?:string):Rule[]; loadCatalog(value:unknown):Catalog",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-service-ownership-navigator-1",
          "concepts": [
            "Load service metadata and ownership rules"
          ],
          "number": 1,
          "doc": "projects/service-ownership-navigator/stages/01-load-evidence/docs/en.md",
          "contentUrl": "project-content/service-ownership-navigator/stages/01-load-evidence/docs/en.md",
          "tests": "projects/service-ownership-navigator/stages/01-load-evidence/tests",
          "figures": [
            "pj-service-ownership-navigator-1"
          ]
        },
        {
          "id": "02-resolve-paths",
          "title": "Resolve paths and conflicting ownership evidence",
          "summary": "matchesRule(pattern:string,path:string):boolean; resolveOwnership(catalog:Catalog,path:string):Ownership",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-service-ownership-navigator-2",
          "concepts": [
            "Resolve paths and conflicting ownership evidence"
          ],
          "number": 2,
          "doc": "projects/service-ownership-navigator/stages/02-resolve-paths/docs/en.md",
          "contentUrl": "project-content/service-ownership-navigator/stages/02-resolve-paths/docs/en.md",
          "tests": "projects/service-ownership-navigator/stages/02-resolve-paths/tests",
          "figures": [
            "pj-service-ownership-navigator-2"
          ]
        },
        {
          "id": "03-check-runbooks",
          "title": "Check local runbook references",
          "summary": "checkRunbook(catalog:Catalog,service:Service):{path,exists,headings,links,issues}",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-service-ownership-navigator-3",
          "concepts": [
            "Check local runbook references"
          ],
          "number": 3,
          "doc": "projects/service-ownership-navigator/stages/03-check-runbooks/docs/en.md",
          "contentUrl": "project-content/service-ownership-navigator/stages/03-check-runbooks/docs/en.md",
          "tests": "projects/service-ownership-navigator/stages/03-check-runbooks/tests",
          "figures": [
            "pj-service-ownership-navigator-3"
          ]
        },
        {
          "id": "04-export-handoff",
          "title": "Export a searchable directory and cited handoff packet",
          "summary": "handoffPacket(catalog:Catalog,path:string):{schemaVersion:1,ownership,runbook,dependencies}; renderDirectory(catalog,packet):string",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-service-ownership-navigator-4",
          "concepts": [
            "Export a searchable directory and cited handoff packet"
          ],
          "number": 4,
          "doc": "projects/service-ownership-navigator/stages/04-export-handoff/docs/en.md",
          "contentUrl": "project-content/service-ownership-navigator/stages/04-export-handoff/docs/en.md",
          "tests": "projects/service-ownership-navigator/stages/04-export-handoff/tests",
          "figures": [
            "pj-service-ownership-navigator-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/service-ownership-navigator",
      "readme": "projects/service-ownership-navigator/README.md",
      "contentBase": "project-content/service-ownership-navigator",
      "manifestHash": "9f8eefa6e4b2d32ca59dae8007e85e58f57c7a2a680964c6f42686e793219f82",
      "figureScripts": [
        "figures/projects/service-ownership-navigator.js"
      ]
    },
    {
      "id": "skill-router",
      "title": "Skill Router",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Route a request to a skill using explainable keyword scores, path rules, permission gates, and dependency ordering.",
      "summary": "Route a request to a skill using explainable keyword scores, path rules, permission gates, and dependency ordering.",
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Parse a typed skill catalog",
        "Score words and repository paths",
        "Resolve dependencies before execution",
        "Abstain on ambiguous or blocked requests"
      ],
      "prerequisites": [
        {
          "title": "Tool schema design",
          "path": "phases/13-tools-and-protocols/05-tool-schema-design"
        },
        {
          "title": "Verification gates",
          "path": "phases/14-agent-engineering/38-verification-gates"
        }
      ],
      "youWillBuild": "A routing debugger showing why the wrong skill activated and how to fix a rule.",
      "usefulFor": [
        "A routing debugger showing why the wrong skill activated and how to fix a rule.",
        "SKILL.md provides standard name and description; routing.json is this project's documented local extension."
      ],
      "demo": {
        "command": [
          "node",
          "demo.ts"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-catalog",
          "title": "Parse a typed skill catalog",
          "summary": "A skill manifest declares an id, description, keywords, path patterns, priority, dependencies and permissions. Validate arrays and numbers at runtime rather than trusting a JSON cast. Tokenization normalizes punctuation and case and removes repeated words, so repeating a prompt cannot inflate its score.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "TypeScript makes permission and dependency declarations visible before routing.",
          "concepts": [
            "parseSkill",
            "tokens"
          ],
          "difficulty": "starter",
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-skill-router-1",
          "number": 1,
          "doc": "projects/skill-router/stages/01-catalog/docs/en.md",
          "contentUrl": "project-content/skill-router/stages/01-catalog/docs/en.md",
          "tests": "projects/skill-router/stages/01-catalog/tests",
          "figures": [
            "pj-skill-router-1"
          ]
        },
        {
          "id": "02-score",
          "title": "Score words and repository paths",
          "summary": "Award two points for each matched keyword and three for each matched file path. Return score reasons alongside the score. Support star within one path segment and double-star across segments, escape regular expression punctuation, and reject absolute or parent-traversing file paths. Resolve tied scores by priority and then id so ranking is reproducible.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Small pure scoring functions are easy to inspect in a terminal and reuse in a web UI.",
          "concepts": [
            "matchPath",
            "rank"
          ],
          "difficulty": "core",
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-skill-router-2",
          "number": 2,
          "doc": "projects/skill-router/stages/02-score/docs/en.md",
          "contentUrl": "project-content/skill-router/stages/02-score/docs/en.md",
          "tests": "projects/skill-router/stages/02-score/tests",
          "figures": [
            "pj-skill-router-2"
          ]
        },
        {
          "id": "03-dependencies",
          "title": "Resolve dependencies before execution",
          "summary": "Use depth-first traversal with separate active and visited sets. Active membership catches a cycle; visited membership avoids duplicate execution through a diamond. Validate permission requirements on dependencies as well as the selected skill. Emit dependencies before their consumers and reject unknown dependency ids instead of silently skipping work.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "A directed graph maps naturally onto typed arrays and sets.",
          "concepts": [
            "plan"
          ],
          "difficulty": "core",
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-skill-router-3",
          "number": 3,
          "doc": "projects/skill-router/stages/03-dependencies/docs/en.md",
          "contentUrl": "project-content/skill-router/stages/03-dependencies/docs/en.md",
          "tests": "projects/skill-router/stages/03-dependencies/tests",
          "figures": [
            "pj-skill-router-3"
          ]
        },
        {
          "id": "04-route",
          "title": "Abstain on ambiguous or blocked requests",
          "summary": "Join ranking and dependency planning while preserving four distinct outcomes: ready, no-match, ambiguous and blocked. A score gap below the margin is ambiguous even if the tie-breaker produces a first result. A ranked winner can still be blocked by permissions. Return the ranked explanations in every outcome so a caller can display the decision.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Discriminated status values prevent an uncertain route from becoming an execution request.",
          "concepts": [
            "route"
          ],
          "difficulty": "core",
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-skill-router-4",
          "number": 4,
          "doc": "projects/skill-router/stages/04-route/docs/en.md",
          "contentUrl": "project-content/skill-router/stages/04-route/docs/en.md",
          "tests": "projects/skill-router/stages/04-route/tests",
          "figures": [
            "pj-skill-router-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/skill-router",
      "readme": "projects/skill-router/README.md",
      "contentBase": "project-content/skill-router",
      "manifestHash": "ccfbe4891fbecd82387f60e60b7bfa8d4bbe501042ae2f01f77c88a3625aa48e",
      "figureScripts": [
        "figures/projects/skill-router.js"
      ]
    },
    {
      "id": "source-grounded-study-coach",
      "title": "Source-Grounded Study Coach",
      "level": 2,
      "levelName": "Builder",
      "tagline": "Build practice questions with source evidence and a visible review schedule.",
      "summary": "Build practice questions with source evidence and a visible review schedule.",
      "youWillBuild": "A standalone answer-reveal practice page and progress.json with due cards and reproducible schedule state.",
      "usefulFor": [
        "A JSON deck with source passages, authored questions, accepted answers and evidence offsets, plus dated attempt events."
      ],
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "languageWhy": {
        "TypeScript": "TypeScript uses one set of explicit data types for deck validation, event processing and a portable HTML practice view."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Give every answer a source location",
        "Return feedback that shows its source",
        "Replay attempts into a visible schedule",
        "Make the reading useful as a practice page"
      ],
      "prerequisites": [
        "Write TypeScript functions, arrays and object types.",
        "Read JSON from local files and handle thrown errors.",
        "Understand that matching an answer string does not establish semantic understanding."
      ],
      "figures": true,
      "overviewFigure": "pj-source-grounded-study-coach-1",
      "demo": {
        "command": [
          "node",
          "--experimental-strip-types",
          "demo.ts"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-ground-the-deck",
          "title": "Give every answer a source location",
          "summary": "Validate authored cards against immutable source passages.",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "languageWhy": "TypeScript uses one set of explicit data types for deck validation, event processing and a portable HTML practice view.",
          "concepts": [
            "evidence offsets",
            "unique IDs",
            "input validation"
          ],
          "figure": "pj-source-grounded-study-coach-1",
          "number": 1,
          "doc": "projects/source-grounded-study-coach/stages/01-ground-the-deck/docs/en.md",
          "contentUrl": "project-content/source-grounded-study-coach/stages/01-ground-the-deck/docs/en.md",
          "tests": "projects/source-grounded-study-coach/stages/01-ground-the-deck/tests",
          "figures": [
            "pj-source-grounded-study-coach-1"
          ]
        },
        {
          "id": "02-grade-with-evidence",
          "title": "Return feedback that shows its source",
          "summary": "Grade constrained short answers and reveal the supporting passage.",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "languageWhy": "TypeScript uses one set of explicit data types for deck validation, event processing and a portable HTML practice view.",
          "concepts": [
            "normalization",
            "accepted variants",
            "grounded feedback"
          ],
          "figure": "pj-source-grounded-study-coach-2",
          "number": 2,
          "doc": "projects/source-grounded-study-coach/stages/02-grade-with-evidence/docs/en.md",
          "contentUrl": "project-content/source-grounded-study-coach/stages/02-grade-with-evidence/docs/en.md",
          "tests": "projects/source-grounded-study-coach/stages/02-grade-with-evidence/tests",
          "figures": [
            "pj-source-grounded-study-coach-2"
          ]
        },
        {
          "id": "03-schedule-review",
          "title": "Replay attempts into a visible schedule",
          "summary": "Derive due dates from stable, dated attempt events.",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "languageWhy": "TypeScript uses one set of explicit data types for deck validation, event processing and a portable HTML practice view.",
          "concepts": [
            "event replay",
            "idempotency",
            "calendar arithmetic"
          ],
          "figure": "pj-source-grounded-study-coach-3",
          "number": 3,
          "doc": "projects/source-grounded-study-coach/stages/03-schedule-review/docs/en.md",
          "contentUrl": "project-content/source-grounded-study-coach/stages/03-schedule-review/docs/en.md",
          "tests": "projects/source-grounded-study-coach/stages/03-schedule-review/tests",
          "figures": [
            "pj-source-grounded-study-coach-3"
          ]
        },
        {
          "id": "04-export-practice",
          "title": "Make the reading useful as a practice page",
          "summary": "Export a portable reveal-and-review view with reproducible progress.",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "languageWhy": "TypeScript uses one set of explicit data types for deck validation, event processing and a portable HTML practice view.",
          "concepts": [
            "HTML rendering",
            "progress export",
            "provider boundaries"
          ],
          "figure": "pj-source-grounded-study-coach-4",
          "number": 4,
          "doc": "projects/source-grounded-study-coach/stages/04-export-practice/docs/en.md",
          "contentUrl": "project-content/source-grounded-study-coach/stages/04-export-practice/docs/en.md",
          "tests": "projects/source-grounded-study-coach/stages/04-export-practice/tests",
          "figures": [
            "pj-source-grounded-study-coach-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Build and grade",
          "caption": "A fresh starter fails; the complete original solution passes all four stages."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the application output",
          "caption": "Actual output from authored offline fixtures. See the README for provider and evidence boundaries."
        }
      ],
      "path": "projects/source-grounded-study-coach",
      "readme": "projects/source-grounded-study-coach/README.md",
      "contentBase": "project-content/source-grounded-study-coach",
      "manifestHash": "1c3c2835629ed14d0fb944b9a038ddf6cb98c1e814b8e1dcf6ef566c28f03039",
      "figureScripts": [
        "figures/projects/source-grounded-study-coach.js"
      ]
    },
    {
      "id": "subtitle-localization-desk",
      "title": "Subtitle Localization Desk",
      "level": 2,
      "languages": [
        "Python"
      ],
      "source": "core",
      "tagline": "Translate captions while keeping the timing and terminology visible.",
      "summary": "Help a course creator localize supplied WebVTT captions through a glossary, an optional real translation provider and an explicit review step. Preserve cue identities and timestamps, flag text that exceeds the chosen reading budget, and export reviewed captions with a side-by-side HTML desk.",
      "prerequisiteProjects": [],
      "status": "ready",
      "hours": 8,
      "prerequisites": [
        "Python 3.10+; lists, dictionaries and functions"
      ],
      "skills": [
        "Parse subtitle cues and preserve their timing",
        "Apply a glossary to translation proposals",
        "Review cue length, terminology and meaning",
        "Export localized captions and their review decisions"
      ],
      "youWillBuild": "Reviewed WebVTT files, translation-decisions.json and a bilingual HTML review page",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "overviewFigure": "pj-subtitle-localization-desk-1",
      "figures": true,
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-cues",
          "title": "Parse subtitle cues and preserve their timing",
          "summary": "Parse cue identities and preserve exact timing strings.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "WebVTT",
            "timed text"
          ],
          "figure": "pj-subtitle-localization-desk-1",
          "number": 1,
          "doc": "projects/subtitle-localization-desk/stages/01-cues/docs/en.md",
          "contentUrl": "project-content/subtitle-localization-desk/stages/01-cues/docs/en.md",
          "tests": "projects/subtitle-localization-desk/stages/01-cues/tests",
          "figures": [
            "pj-subtitle-localization-desk-1"
          ]
        },
        {
          "id": "02-glossary",
          "title": "Apply a glossary to translation proposals",
          "summary": "Apply a reviewed glossary to supplied translation proposals.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "terminology",
            "human translation"
          ],
          "figure": "pj-subtitle-localization-desk-2",
          "number": 2,
          "doc": "projects/subtitle-localization-desk/stages/02-glossary/docs/en.md",
          "contentUrl": "project-content/subtitle-localization-desk/stages/02-glossary/docs/en.md",
          "tests": "projects/subtitle-localization-desk/stages/02-glossary/tests",
          "figures": [
            "pj-subtitle-localization-desk-2"
          ]
        },
        {
          "id": "03-reading-budget",
          "title": "Review cue length, terminology and meaning",
          "summary": "Calculate reading pressure without shifting timestamps.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "characters per second",
            "quality flags"
          ],
          "figure": "pj-subtitle-localization-desk-3",
          "number": 3,
          "doc": "projects/subtitle-localization-desk/stages/03-reading-budget/docs/en.md",
          "contentUrl": "project-content/subtitle-localization-desk/stages/03-reading-budget/docs/en.md",
          "tests": "projects/subtitle-localization-desk/stages/03-reading-budget/tests",
          "figures": [
            "pj-subtitle-localization-desk-3"
          ]
        },
        {
          "id": "04-review-export",
          "title": "Export localized captions and their review decisions",
          "summary": "Require explicit review before emitting localized WebVTT.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "review decisions",
            "roundtrip parsing"
          ],
          "figure": "pj-subtitle-localization-desk-4",
          "number": 4,
          "doc": "projects/subtitle-localization-desk/stages/04-review-export/docs/en.md",
          "contentUrl": "project-content/subtitle-localization-desk/stages/04-review-export/docs/en.md",
          "tests": "projects/subtitle-localization-desk/stages/04-review-export/tests",
          "figures": [
            "pj-subtitle-localization-desk-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/subtitle-localization-desk",
      "readme": "projects/subtitle-localization-desk/README.md",
      "contentBase": "project-content/subtitle-localization-desk",
      "manifestHash": "a6b307f7c14b0b4a5420957e97c6150e38c91f87cbde6463ce287fed6d204455",
      "figureScripts": [
        "figures/projects/subtitle-localization-desk.js"
      ]
    },
    {
      "id": "ui-string-localization-workbench",
      "title": "UI String Localization Workbench",
      "tagline": "Review translated interface text without breaking its placeholders.",
      "summary": "Help a small product team localize JSON message catalogs while retaining stable keys, variable placeholders and contextual notes. Compare recorded or real provider proposals in a UI preview, require review of ambiguous strings, and export an approved locale catalog and unresolved-string queue.",
      "level": 2,
      "languages": [
        "TypeScript"
      ],
      "source": "core",
      "prerequisiteProjects": [
        "glossary-hovercard-publisher"
      ],
      "status": "ready",
      "hours": 8,
      "youWillBuild": "Reviewed locale JSON, an interactive message preview and unresolved-strings.json",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "languageWhy": {
        "TypeScript": "Typed local transformations and portable browser interfaces run with Node standard libraries."
      },
      "figures": true,
      "overviewFigure": "pj-ui-string-localization-workbench-1",
      "demo": {
        "command": [
          "node",
          "cli.ts",
          "sample.json",
          "output"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-catalog-contract",
          "title": "Read message keys, placeholders and context",
          "summary": "placeholders(text:string):string[]; readCatalog(value:unknown):Message[]",
          "hours": 2,
          "difficulty": "starter",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-ui-string-localization-workbench-1",
          "concepts": [
            "Read message keys, placeholders and context"
          ],
          "number": 1,
          "doc": "projects/ui-string-localization-workbench/stages/01-catalog-contract/docs/en.md",
          "contentUrl": "project-content/ui-string-localization-workbench/stages/01-catalog-contract/docs/en.md",
          "tests": "projects/ui-string-localization-workbench/stages/01-catalog-contract/tests",
          "figures": [
            "pj-ui-string-localization-workbench-1"
          ]
        },
        {
          "id": "02-recorded-proposals",
          "title": "Generate bounded translation proposals",
          "summary": "proposeTranslations(messages:Message[],recorded:unknown,locale:string):Proposal[]",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-ui-string-localization-workbench-2",
          "concepts": [
            "Generate bounded translation proposals"
          ],
          "number": 2,
          "doc": "projects/ui-string-localization-workbench/stages/02-recorded-proposals/docs/en.md",
          "contentUrl": "project-content/ui-string-localization-workbench/stages/02-recorded-proposals/docs/en.md",
          "tests": "projects/ui-string-localization-workbench/stages/02-recorded-proposals/tests",
          "figures": [
            "pj-ui-string-localization-workbench-2"
          ]
        },
        {
          "id": "03-message-preview",
          "title": "Preview strings with supplied interpolation values",
          "summary": "previewMessage(template:string,values:Record<string,string|number>):string",
          "hours": 2,
          "difficulty": "core",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-ui-string-localization-workbench-3",
          "concepts": [
            "Preview strings with supplied interpolation values"
          ],
          "number": 3,
          "doc": "projects/ui-string-localization-workbench/stages/03-message-preview/docs/en.md",
          "contentUrl": "project-content/ui-string-localization-workbench/stages/03-message-preview/docs/en.md",
          "tests": "projects/ui-string-localization-workbench/stages/03-message-preview/tests",
          "figures": [
            "pj-ui-string-localization-workbench-3"
          ]
        },
        {
          "id": "04-approved-catalog",
          "title": "Export approved locale and unresolved questions",
          "summary": "reviewTranslations(messages,proposals,value?):{catalog,unresolved,review}; renderWorkbench(messages,proposals,state,locale,values?):string",
          "hours": 2,
          "difficulty": "stretch",
          "language": "typescript",
          "timeout": 60,
          "figure": "pj-ui-string-localization-workbench-4",
          "concepts": [
            "Export approved locale and unresolved questions"
          ],
          "number": 4,
          "doc": "projects/ui-string-localization-workbench/stages/04-approved-catalog/docs/en.md",
          "contentUrl": "project-content/ui-string-localization-workbench/stages/04-approved-catalog/docs/en.md",
          "tests": "projects/ui-string-localization-workbench/stages/04-approved-catalog/tests",
          "figures": [
            "pj-ui-string-localization-workbench-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/ui-string-localization-workbench",
      "readme": "projects/ui-string-localization-workbench/README.md",
      "contentBase": "project-content/ui-string-localization-workbench",
      "manifestHash": "05d83e31cfb030b799a913da7a1baf9c233c88bfaed0afff29894ab89c61af6d",
      "figureScripts": [
        "figures/projects/ui-string-localization-workbench.js"
      ]
    },
    {
      "id": "workshop-materials-planner",
      "title": "Workshop Materials Planner",
      "level": 2,
      "languages": [
        "Python"
      ],
      "source": "core",
      "tagline": "Scale a workshop plan and show exactly which supplies are missing.",
      "summary": "Help a workshop host reconcile per-participant materials, reusable equipment and an inventory snapshot. Use explicit unit conversions and declared sharing rules to compute shortages, keep unconvertible quantities visible, and export a packing list with a participant-count comparison.",
      "prerequisiteProjects": [
        "csv-repair-workbench"
      ],
      "status": "ready",
      "hours": 8,
      "prerequisites": [
        "Python 3.10+; lists, dictionaries and functions"
      ],
      "skills": [
        "Model participants, materials and inventory units",
        "Scale consumables and shared equipment separately",
        "Compute shortages and review uncertain conversions",
        "Export packing lists and participant-count scenarios"
      ],
      "youWillBuild": "packing-list.csv, shortages.json and an HTML what-if planner",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "overviewFigure": "pj-workshop-materials-planner-1",
      "figures": true,
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-model",
          "title": "Model participants, materials and inventory units",
          "summary": "Validate quantities, units and explicit sharing rules.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "decimal arithmetic",
            "unit conversion"
          ],
          "figure": "pj-workshop-materials-planner-1",
          "number": 1,
          "doc": "projects/workshop-materials-planner/stages/01-model/docs/en.md",
          "contentUrl": "project-content/workshop-materials-planner/stages/01-model/docs/en.md",
          "tests": "projects/workshop-materials-planner/stages/01-model/tests",
          "figures": [
            "pj-workshop-materials-planner-1"
          ]
        },
        {
          "id": "02-scale",
          "title": "Scale consumables and shared equipment separately",
          "summary": "Scale consumables and reusable tools with different equations.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "ceiling division",
            "resource reuse"
          ],
          "figure": "pj-workshop-materials-planner-2",
          "number": 2,
          "doc": "projects/workshop-materials-planner/stages/02-scale/docs/en.md",
          "contentUrl": "project-content/workshop-materials-planner/stages/02-scale/docs/en.md",
          "tests": "projects/workshop-materials-planner/stages/02-scale/tests",
          "figures": [
            "pj-workshop-materials-planner-2"
          ]
        },
        {
          "id": "03-shortages",
          "title": "Compute shortages and review uncertain conversions",
          "summary": "Reconcile inventory without guessing unknown conversions.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "inventory accounting",
            "uncertainty"
          ],
          "figure": "pj-workshop-materials-planner-3",
          "number": 3,
          "doc": "projects/workshop-materials-planner/stages/03-shortages/docs/en.md",
          "contentUrl": "project-content/workshop-materials-planner/stages/03-shortages/docs/en.md",
          "tests": "projects/workshop-materials-planner/stages/03-shortages/tests",
          "figures": [
            "pj-workshop-materials-planner-3"
          ]
        },
        {
          "id": "04-scenarios",
          "title": "Export packing lists and participant-count scenarios",
          "summary": "Compare participant counts and export a packing receipt.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "what-if planning",
            "CSV integration"
          ],
          "figure": "pj-workshop-materials-planner-4",
          "number": 4,
          "doc": "projects/workshop-materials-planner/stages/04-scenarios/docs/en.md",
          "contentUrl": "project-content/workshop-materials-planner/stages/04-scenarios/docs/en.md",
          "tests": "projects/workshop-materials-planner/stages/04-scenarios/tests",
          "figures": [
            "pj-workshop-materials-planner-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/workshop-materials-planner",
      "readme": "projects/workshop-materials-planner/README.md",
      "contentBase": "project-content/workshop-materials-planner",
      "manifestHash": "3fe0d8b29e513c065dff9f7bb199ec98a850c618ce8beb1f89a97c3975f2fc22",
      "figureScripts": [
        "figures/projects/workshop-materials-planner.js"
      ]
    },
    {
      "id": "agent-budget-planner",
      "title": "Agent Budget Planner",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "A receipt-aware budget controller that keeps uncertain spending visible.",
      "summary": "A receipt-aware budget controller that keeps uncertain spending visible. Import execute_jobs and provide invoke(job) -> (value, actual_cost). Use unit=nano_dollars only when rates and receipts have actually been converted to that unit.",
      "youWillBuild": "A receipt-aware budget controller that keeps uncertain spending visible.",
      "usefulFor": [
        "Import execute_jobs and provide invoke(job) -> (value, actual_cost). Use unit=nano_dollars only when rates and receipts have actually been converted to that unit."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "The standard library makes parsing, scoring, and failure handling visible without hiding the mechanism behind a framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Estimate requests in integer microcredits",
        "Reserve capacity before dispatch",
        "Settle actual usage and release unused budget",
        "Schedule within cost and time limits"
      ],
      "prerequisites": [
        "Python 3.10+",
        "functions, dictionaries, exceptions, integer arithmetic and callback functions."
      ],
      "figures": true,
      "overviewFigure": "pj-agent-budget-planner-1",
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--mode",
          "execute",
          "--output",
          "budget.json"
        ]
      },
      "stages": [
        {
          "id": "01-estimate-cost",
          "title": "Estimate requests in integer microcredits",
          "summary": "Validate nonnegative integer token counts and rates, then compute the worst-case cost.",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "integer accounting",
            "cost estimates"
          ],
          "figure": "pj-agent-budget-planner-1",
          "number": 1,
          "doc": "projects/agent-budget-planner/stages/01-estimate-cost/docs/en.md",
          "contentUrl": "project-content/agent-budget-planner/stages/01-estimate-cost/docs/en.md",
          "tests": "projects/agent-budget-planner/stages/01-estimate-cost/tests",
          "figures": [
            "pj-agent-budget-planner-1"
          ]
        },
        {
          "id": "02-reserve-capacity",
          "title": "Reserve capacity before dispatch",
          "summary": "Return a new ledger with a unique request reservation.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "reservations",
            "admission control"
          ],
          "figure": "pj-agent-budget-planner-2",
          "number": 2,
          "doc": "projects/agent-budget-planner/stages/02-reserve-capacity/docs/en.md",
          "contentUrl": "project-content/agent-budget-planner/stages/02-reserve-capacity/docs/en.md",
          "tests": "projects/agent-budget-planner/stages/02-reserve-capacity/tests",
          "figures": [
            "pj-agent-budget-planner-2"
          ]
        },
        {
          "id": "03-settle-and-release",
          "title": "Settle actual usage and release unused budget",
          "summary": "Settle each request exactly once with actual cost no greater than its reservation.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "settlement",
            "idempotency",
            "immutability"
          ],
          "figure": "pj-agent-budget-planner-3",
          "number": 3,
          "doc": "projects/agent-budget-planner/stages/03-settle-and-release/docs/en.md",
          "contentUrl": "project-content/agent-budget-planner/stages/03-settle-and-release/docs/en.md",
          "tests": "projects/agent-budget-planner/stages/03-settle-and-release/tests",
          "figures": [
            "pj-agent-budget-planner-3"
          ]
        },
        {
          "id": "04-schedule-under-deadlines",
          "title": "Schedule within cost and time limits",
          "summary": "Schedule known job estimates under integer cost and millisecond limits.",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Use explicit data structures and deterministic standard-library operations.",
          "concepts": [
            "deadlines",
            "trace events",
            "bounded execution"
          ],
          "figure": "pj-agent-budget-planner-4",
          "number": 4,
          "doc": "projects/agent-budget-planner/stages/04-schedule-under-deadlines/docs/en.md",
          "contentUrl": "project-content/agent-budget-planner/stages/04-schedule-under-deadlines/docs/en.md",
          "tests": "projects/agent-budget-planner/stages/04-schedule-under-deadlines/tests",
          "figures": [
            "pj-agent-budget-planner-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/agent-budget-planner",
      "readme": "projects/agent-budget-planner/README.md",
      "contentBase": "project-content/agent-budget-planner",
      "manifestHash": "8fdbbff104d1b4721477b342852a8a98a6cc2f0f95eaf3c0e1ce818597ed200b",
      "figureScripts": [
        "figures/projects/agent-budget-planner.js"
      ]
    },
    {
      "id": "agent-trace-debugger",
      "title": "Agent Trace Debugger",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "A before-and-after regression report that explains overlap, own time and failed-token spending.",
      "summary": "A before-and-after regression report that explains overlap, own time and failed-token spending. Export one Span JSON object per line from your instrumentation and retain trace.json beside trace.html in CI.",
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Read a JSONL trace",
        "Validate parent relationships",
        "Separate work time from waiting time",
        "Render an inspectable timeline"
      ],
      "prerequisites": [
        "Node 22.18+ and Python 3 for the grader",
        "TypeScript objects, arrays, Map, sorting and interval arithmetic."
      ],
      "youWillBuild": "A before-and-after regression report that explains overlap, own time and failed-token spending.",
      "usefulFor": [
        "Export one Span JSON object per line from your instrumentation and retain trace.json beside trace.html in CI."
      ],
      "demo": {
        "cwd": "solution",
        "command": [
          "node",
          "cli.ts",
          "--input",
          "samples/trace.jsonl",
          "--baseline",
          "samples/before.jsonl",
          "--output",
          "trace.html",
          "--json",
          "trace.json"
        ]
      },
      "stages": [
        {
          "id": "01-parse",
          "title": "Read a JSONL trace",
          "summary": "Parse one JSON object per nonempty line. Require stable ids, names, finite start and end times, nonnegative token counts and an explicit ok or error state. A malformed line stops processing with its line number. Silently dropping bad spans would distort timing and cost conclusions. Times are relative milliseconds, not wall-clock timestamps.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "TypeScript models spans while preserving runtime checks at the log boundary.",
          "concepts": [
            "parseTrace"
          ],
          "difficulty": "starter",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-agent-trace-debugger-1",
          "number": 1,
          "doc": "projects/agent-trace-debugger/stages/01-parse/docs/en.md",
          "contentUrl": "project-content/agent-trace-debugger/stages/01-parse/docs/en.md",
          "tests": "projects/agent-trace-debugger/stages/01-parse/tests",
          "figures": [
            "pj-agent-trace-debugger-1"
          ]
        },
        {
          "id": "02-tree",
          "title": "Validate parent relationships",
          "summary": "A child span must reference an existing parent and fit inside the parent interval. Check every ancestor chain for cycles and reject duplicate ids. Multiple roots are allowed because a trace can contain overlapping independent runs. Validation happens before aggregation so corrupted graphs cannot produce convincing charts.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Maps provide stable identity lookup and sets expose cycles.",
          "concepts": [
            "validateTree"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-agent-trace-debugger-2",
          "number": 2,
          "doc": "projects/agent-trace-debugger/stages/02-tree/docs/en.md",
          "contentUrl": "project-content/agent-trace-debugger/stages/02-tree/docs/en.md",
          "tests": "projects/agent-trace-debugger/stages/02-tree/tests",
          "figures": [
            "pj-agent-trace-debugger-2"
          ]
        },
        {
          "id": "03-timing",
          "title": "Separate work time from waiting time",
          "summary": "Inclusive duration is end minus start. Exclusive duration subtracts the union of immediate child intervals, not their sum, because parallel children overlap. Root interval union provides wall time across runs. Tokens are local per span and summed once. The slowest result names the span with greatest exclusive duration, avoiding a root that is mostly waiting on children.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Interval arithmetic exposes concurrency without relying on a tracing library.",
          "concepts": [
            "unionDuration",
            "analyze"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-agent-trace-debugger-3",
          "number": 3,
          "doc": "projects/agent-trace-debugger/stages/03-timing/docs/en.md",
          "contentUrl": "project-content/agent-trace-debugger/stages/03-timing/docs/en.md",
          "tests": "projects/agent-trace-debugger/stages/03-timing/tests",
          "figures": [
            "pj-agent-trace-debugger-3"
          ]
        },
        {
          "id": "04-timeline",
          "title": "Render an inspectable timeline",
          "summary": "Generate a standalone HTML timeline with one row per span, scaled bars and error coloring. Escape span names before inserting them into markup. Include own time, total time, wall time, tokens and error count. Empty traces still produce a readable artifact. The output is a local static report and does not load third-party scripts.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "HTML can present the same typed analysis without a build pipeline or chart dependency.",
          "concepts": [
            "render"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts",
            "{tests}/integration.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-agent-trace-debugger-4",
          "number": 4,
          "doc": "projects/agent-trace-debugger/stages/04-timeline/docs/en.md",
          "contentUrl": "project-content/agent-trace-debugger/stages/04-timeline/docs/en.md",
          "tests": "projects/agent-trace-debugger/stages/04-timeline/tests",
          "figures": [
            "pj-agent-trace-debugger-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/agent-trace-debugger",
      "readme": "projects/agent-trace-debugger/README.md",
      "contentBase": "project-content/agent-trace-debugger",
      "manifestHash": "688bf5d99b9837985e08a2126b80e24ce25d9c136ac7a41f639547192b84c3c8",
      "figureScripts": [
        "figures/projects/agent-trace-debugger.js"
      ]
    },
    {
      "id": "binary-inspector",
      "title": "Binary Inspector",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "A static inspector that reads ELF, PE/COFF, and Mach-O files you compiled and reports their layout, names, links, and function starts.",
      "summary": "A static inspector for programs you compiled. Give it an ELF64 object, a COFF object, a PE32+ image, or a Mach-O 64 file. It reports the format, the architecture, and the sections and segments with permissions and entropy. It reports symbols with a small Itanium demangler, imports, exports, relocations, chained fixups, and strings with their section. It scores function starts against the unstripped build. It writes a JSON report, an HTML report with a byte map, and a diff between two builds.",
      "hours": 10,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "The struct module reads fixed-layout records directly, so every field the inspector reports comes from an offset you can check by hand."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Detect a binary format and parse its header",
        "Map sections and segments with permissions and entropy",
        "Read symbol tables and demangle C++ names",
        "Follow imports, exports, relocations, and chained fixups",
        "Recover function starts and score them against ground truth",
        "Publish a JSON report, an HTML byte map, and a build diff"
      ],
      "prerequisites": [
        "Python 3.10+ for the inspector and the grader",
        "Phase 13 lessons 32, 40, and 41: ELF tables, linking and loading, and C++ names",
        "Hexadecimal arithmetic, little-endian byte order, and the struct module"
      ],
      "youWillBuild": "A static inspector that reads ELF, PE/COFF, and Mach-O files you compiled and reports their layout, names, links, and function starts.",
      "usefulFor": [
        "Check the contents of a build before a release: which sections are writable and executable, which libraries it imports, and which names strip removed.",
        "Compare two builds of your own program and see which sections grew, which symbols moved, and which strings changed."
      ],
      "figures": true,
      "overviewFigure": "pj-binary-inspector-1",
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "inspect",
          "fixtures/tally-arm64-O2.stripped",
          "--truth",
          "fixtures/tally-arm64-O2",
          "--json",
          "report.json",
          "--html",
          "report.html"
        ]
      },
      "stages": [
        {
          "id": "01-headers",
          "title": "Detect the format and parse the header",
          "summary": "Read the magic bytes and identify ELF64, a COFF object, a PE32+ image, or Mach-O 64. Parse the file header of each into one shape: format, architecture, kind, entry point, and the raw fields. Read the Mach-O load commands in sequence. Refuse 32-bit, big-endian, universal, and truncated files with a FormatError that names the reason.",
          "hours": 1.5,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "struct.unpack_from with an explicit bounds check turns every header field into one checked read.",
          "concepts": [
            "magic numbers",
            "ELF header",
            "COFF file header",
            "PE optional header",
            "Mach-O load commands"
          ],
          "timeout": 90,
          "figure": "pj-binary-inspector-1",
          "number": 1,
          "doc": "projects/binary-inspector/stages/01-headers/docs/en.md",
          "contentUrl": "project-content/binary-inspector/stages/01-headers/docs/en.md",
          "tests": "projects/binary-inspector/stages/01-headers/tests",
          "figures": [
            "pj-binary-inspector-1"
          ]
        },
        {
          "id": "02-layout",
          "title": "Sections, segments, permissions, and entropy",
          "summary": "List the sections of each format with name, address, file offset, size, and bytes in the file. Add an r/w/x permission string from the flags of the format. List ELF program headers and Mach-O segments. Compute Shannon entropy in bits per byte over the bytes each region holds in the file, so zero-fill regions report 0.",
          "hours": 1.5,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "collections.Counter and math.log2 give the entropy formula in three lines that you can check against a hand count.",
          "concepts": [
            "section headers",
            "program headers",
            "permission flags",
            "Shannon entropy"
          ],
          "timeout": 90,
          "figure": "pj-binary-inspector-2",
          "number": 2,
          "doc": "projects/binary-inspector/stages/02-layout/docs/en.md",
          "contentUrl": "project-content/binary-inspector/stages/02-layout/docs/en.md",
          "tests": "projects/binary-inspector/stages/02-layout/tests",
          "figures": [
            "pj-binary-inspector-2"
          ]
        },
        {
          "id": "03-symbols",
          "title": "Symbols, string tables, and demangled names",
          "summary": "Read ELF .symtab and .dynsym, COFF symbol records with their auxiliary entries, and Mach-O nlist_64 entries. Resolve each name through its string table with a bounds-checked C string read. Report value, size, kind, binding, and section. Demangle a documented subset of Itanium C++ names and return None for anything outside it.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "A small recursive-descent parser over a string shows the Itanium grammar and its substitution table without a library.",
          "concepts": [
            "symbol tables",
            "string tables",
            "COFF auxiliary records",
            "nlist",
            "Itanium mangling"
          ],
          "timeout": 90,
          "figure": "pj-binary-inspector-3",
          "number": 3,
          "doc": "projects/binary-inspector/stages/03-symbols/docs/en.md",
          "contentUrl": "project-content/binary-inspector/stages/03-symbols/docs/en.md",
          "tests": "projects/binary-inspector/stages/03-symbols/tests",
          "figures": [
            "pj-binary-inspector-3"
          ]
        },
        {
          "id": "04-linkage",
          "title": "Imports, exports, relocations, and chained fixups",
          "summary": "Read ELF RELA records, COFF relocation records, Mach-O relocation_info, and PE base relocations. Read the PE import and export directories. Decode Mach-O chained fixups word by word into binds and rebases, and read the exports trie with ULEB128 values. Every pointer is checked before it is followed, and a chain or trie that loops or leaves its page fails.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Integer shifts and masks decode packed 64-bit fixup words exactly as the loader does.",
          "concepts": [
            "relocations",
            "import address table",
            "export directory",
            "chained fixups",
            "exports trie",
            "ULEB128"
          ],
          "timeout": 90,
          "figure": "pj-binary-inspector-4",
          "number": 4,
          "doc": "projects/binary-inspector/stages/04-linkage/docs/en.md",
          "contentUrl": "project-content/binary-inspector/stages/04-linkage/docs/en.md",
          "tests": "projects/binary-inspector/stages/04-linkage/tests",
          "figures": [
            "pj-binary-inspector-4"
          ]
        },
        {
          "id": "05-discovery",
          "title": "Strings with sections and recovered function starts",
          "summary": "Extract ASCII and UTF-16LE strings and name the section and segment that hold each one. Find function starts with five methods: symbols, LC_FUNCTION_STARTS, a prologue scan, direct call targets, and the entry point. Score each method against the symbol table of the unstripped build with precision and recall.",
          "hours": 1.5,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Sets make true positives, false positives, and misses one operation each.",
          "concepts": [
            "string extraction",
            "function starts",
            "prologue patterns",
            "call targets",
            "precision and recall"
          ],
          "timeout": 120,
          "figure": "pj-binary-inspector-5",
          "number": 5,
          "doc": "projects/binary-inspector/stages/05-discovery/docs/en.md",
          "contentUrl": "project-content/binary-inspector/stages/05-discovery/docs/en.md",
          "tests": "projects/binary-inspector/stages/05-discovery/tests",
          "figures": [
            "pj-binary-inspector-5"
          ]
        },
        {
          "id": "06-report",
          "title": "JSON report, HTML byte map, and build diff",
          "summary": "Compose every stage into one versioned JSON report and validate it. Render a standalone HTML report with a byte map. Each file slice takes its color from its region and its brightness from its entropy. Every string from the binary is escaped. Diff two reports to show section growth, moved and removed symbols, and changed imports, exports, and strings.",
          "hours": 1.5,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "json and html from the standard library produce a report that a script and a reviewer can both read.",
          "concepts": [
            "report schema",
            "byte map",
            "HTML escaping",
            "build diff"
          ],
          "timeout": 180,
          "figure": "pj-binary-inspector-6",
          "number": 6,
          "doc": "projects/binary-inspector/stages/06-report/docs/en.md",
          "contentUrl": "project-content/binary-inspector/stages/06-report/docs/en.md",
          "tests": "projects/binary-inspector/stages/06-report/tests",
          "figures": [
            "pj-binary-inspector-6"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the demo command on the stripped arm64 build, scored against its unstripped twin, then a diff between the -O0 and -O2 builds."
        }
      ],
      "path": "projects/binary-inspector",
      "readme": "projects/binary-inspector/README.md",
      "contentBase": "project-content/binary-inspector",
      "manifestHash": "9afeeb27014adbfcb0595108321e64e9648a0b0dfbc42243631868499b01c5f1",
      "figureScripts": [
        "figures/projects/binary-inspector.js"
      ]
    },
    {
      "id": "community-learning-path-finder",
      "title": "Community Learning Path Finder",
      "level": 3,
      "languages": [
        "Python"
      ],
      "source": "core",
      "tagline": "Build a learning path that explains its prerequisites and tradeoffs.",
      "summary": "Help a learner choose a feasible sequence from an explicit catalog of workshops and resources. Combine prerequisite graphs, stated goals and a time budget, explain why each resource was selected, and export an editable HTML learning map with a machine-readable path for another course platform.",
      "prerequisiteProjects": [
        "bookmark-path-organizer",
        "semantic-notes-search"
      ],
      "status": "ready",
      "hours": 8,
      "prerequisites": [
        "Python 3.10+; lists, dictionaries and functions"
      ],
      "skills": [
        "Model resources, goals and prerequisite relationships",
        "Find feasible paths and expose missing prerequisites",
        "Rank alternatives under an explicit time budget",
        "Export an editable learning map and integration contract"
      ],
      "youWillBuild": "An HTML learning map, path.json and unmet-prerequisites.json",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "overviewFigure": "pj-community-learning-path-finder-1",
      "figures": true,
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-catalog",
          "title": "Model resources, goals and prerequisite relationships",
          "summary": "Model resource time, goals and prerequisite edges.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "directed graphs",
            "cycle detection"
          ],
          "figure": "pj-community-learning-path-finder-1",
          "number": 1,
          "doc": "projects/community-learning-path-finder/stages/01-catalog/docs/en.md",
          "contentUrl": "project-content/community-learning-path-finder/stages/01-catalog/docs/en.md",
          "tests": "projects/community-learning-path-finder/stages/01-catalog/tests",
          "figures": [
            "pj-community-learning-path-finder-1"
          ]
        },
        {
          "id": "02-closure",
          "title": "Find feasible paths and expose missing prerequisites",
          "summary": "Expand a target into its prerequisite-first sequence.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "dependency closure",
            "topological ordering"
          ],
          "figure": "pj-community-learning-path-finder-2",
          "number": 2,
          "doc": "projects/community-learning-path-finder/stages/02-closure/docs/en.md",
          "contentUrl": "project-content/community-learning-path-finder/stages/02-closure/docs/en.md",
          "tests": "projects/community-learning-path-finder/stages/02-closure/tests",
          "figures": [
            "pj-community-learning-path-finder-2"
          ]
        },
        {
          "id": "03-rank",
          "title": "Rank alternatives under an explicit time budget",
          "summary": "Maximize goal coverage inside a stated time budget.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "exact search",
            "tradeoffs"
          ],
          "figure": "pj-community-learning-path-finder-3",
          "number": 3,
          "doc": "projects/community-learning-path-finder/stages/03-rank/docs/en.md",
          "contentUrl": "project-content/community-learning-path-finder/stages/03-rank/docs/en.md",
          "tests": "projects/community-learning-path-finder/stages/03-rank/tests",
          "figures": [
            "pj-community-learning-path-finder-3"
          ]
        },
        {
          "id": "04-progress",
          "title": "Export an editable learning map and integration contract",
          "summary": "Export the learning map and validate completion receipts.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "course integration",
            "progress validation"
          ],
          "figure": "pj-community-learning-path-finder-4",
          "number": 4,
          "doc": "projects/community-learning-path-finder/stages/04-progress/docs/en.md",
          "contentUrl": "project-content/community-learning-path-finder/stages/04-progress/docs/en.md",
          "tests": "projects/community-learning-path-finder/stages/04-progress/tests",
          "figures": [
            "pj-community-learning-path-finder-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/community-learning-path-finder",
      "readme": "projects/community-learning-path-finder/README.md",
      "contentBase": "project-content/community-learning-path-finder",
      "manifestHash": "0d53801d3f1162ab9c7981b7ee23ffb4c7b420d00e6958407b9a531ed4037166",
      "figureScripts": [
        "figures/projects/community-learning-path-finder.js"
      ]
    },
    {
      "id": "skill-installer",
      "title": "Cross-Agent Skill Installer",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Validate local skill bundles, translate agent metadata, verify content digests, and atomically install without overwriting learner edits.",
      "summary": "Validate local skill bundles, translate agent metadata, verify content digests, and atomically install without overwriting learner edits.",
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate a portable bundle",
        "Translate metadata and hash content",
        "Install atomically within a root",
        "Protect edits during upgrades"
      ],
      "prerequisites": [
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        },
        {
          "title": "Security and secrets audit",
          "path": "phases/17-infrastructure-and-production/25-security-secrets-audit"
        }
      ],
      "youWillBuild": "A cross-agent upgrade tool promising a reviewable diff and no lost local edits.",
      "usefulFor": [
        "A cross-agent upgrade tool promising a reviewable diff and no lost local edits.",
        "inspect is a dry run."
      ],
      "demo": {
        "command": [
          "node",
          "demo.ts"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-bundle",
          "title": "Validate a portable bundle",
          "summary": "Accept a named bundle with a SKILL.md and optional reference files. Validate every relative path before touching disk. Reject dot segments, absolute paths, drive prefixes, backslashes and reserved installation metadata. Limit each text file to 100 KB. The installer reads an in-memory bundle, leaving network fetching and signature trust as separate responsibilities.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "TypeScript gives the bundle and agent destinations explicit contracts.",
          "concepts": [
            "safePath",
            "validate"
          ],
          "difficulty": "starter",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-skill-installer-1",
          "number": 1,
          "doc": "projects/skill-installer/stages/01-bundle/docs/en.md",
          "contentUrl": "project-content/skill-installer/stages/01-bundle/docs/en.md",
          "tests": "projects/skill-installer/stages/01-bundle/tests",
          "figures": [
            "pj-skill-installer-1"
          ]
        },
        {
          "id": "02-translate",
          "title": "Translate metadata and hash content",
          "summary": "Keep one body of instructions while regenerating a small quoted metadata header. Preserve references byte-for-byte. Compute a SHA-256 digest over sorted path/content pairs, so file insertion order cannot change integrity. The digest detects changed content but does not establish publisher identity; obtaining a trusted expected digest is the caller's responsibility.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Typed destination names constrain supported adapters to three known agents.",
          "concepts": [
            "digest",
            "translate"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-skill-installer-2",
          "number": 2,
          "doc": "projects/skill-installer/stages/02-translate/docs/en.md",
          "contentUrl": "project-content/skill-installer/stages/02-translate/docs/en.md",
          "tests": "projects/skill-installer/stages/02-translate/tests",
          "figures": [
            "pj-skill-installer-2"
          ]
        },
        {
          "id": "03-install",
          "title": "Install atomically within a root",
          "summary": "Check the expected digest before creating directories. Inspect each agent directory with lstat and reject symlinks. Stage the complete translated bundle beside the destination, then rename it. An existing managed installation moves to a temporary backup so a failed final rename can restore it. This educational transaction assumes a single trusted local writer; hostile concurrent filesystem replacement requires OS-level isolation.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Node provides lstat, exclusive writes and directory rename for a bounded local transaction.",
          "concepts": [
            "install"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-skill-installer-3",
          "number": 3,
          "doc": "projects/skill-installer/stages/03-install/docs/en.md",
          "contentUrl": "project-content/skill-installer/stages/03-install/docs/en.md",
          "tests": "projects/skill-installer/stages/03-install/tests",
          "figures": [
            "pj-skill-installer-3"
          ]
        },
        {
          "id": "04-upgrades",
          "title": "Protect edits during upgrades",
          "summary": "Before replacing an installation, verify that every tracked file still matches the prior digest and no unmanaged files have appeared. Refuse upgrades when users edited a tracked file or added their own file. The user can move those changes into the source bundle deliberately. Successful repeated installs leave no staging or backup directories behind.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Digest comparison makes update behavior explicit instead of relying on timestamps.",
          "concepts": [
            "install"
          ],
          "difficulty": "core",
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-skill-installer-4",
          "number": 4,
          "doc": "projects/skill-installer/stages/04-upgrades/docs/en.md",
          "contentUrl": "project-content/skill-installer/stages/04-upgrades/docs/en.md",
          "tests": "projects/skill-installer/stages/04-upgrades/tests",
          "figures": [
            "pj-skill-installer-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/skill-installer",
      "readme": "projects/skill-installer/README.md",
      "contentBase": "project-content/skill-installer",
      "manifestHash": "51d138c5fb64db6056bbffc7166bfb522dc1e3eee8681918198954d1987b0560",
      "figureScripts": [
        "figures/projects/skill-installer.js"
      ]
    },
    {
      "id": "database-migration-rehearsal",
      "title": "Database Migration Rehearsal",
      "level": 3,
      "languages": [
        "Python"
      ],
      "source": "core",
      "tagline": "Rehearse a proposed migration on a copy and show exactly what changes.",
      "summary": "Let a developer or coding agent propose SQLite migrations against a disposable database copy. Record schema and row-count invariants before and after, test declared rollback steps, and expose irreversible changes. Export a machine-readable rehearsal receipt and review page without touching the source database.",
      "prerequisiteProjects": [
        "csv-sql-question-workbench",
        "json-schema-output-guard"
      ],
      "status": "ready",
      "hours": 8,
      "prerequisites": [
        "Python 3.10+; lists, dictionaries and functions"
      ],
      "skills": [
        "Snapshot a local database and define invariants",
        "Apply migrations only to the disposable copy",
        "Exercise rollback and detect data loss",
        "Export evidence for an explicit release decision"
      ],
      "youWillBuild": "Schema diff, invariant results and reversible-migration receipt",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "overviewFigure": "pj-database-migration-rehearsal-1",
      "figures": true,
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "demo-output"
        ]
      },
      "stages": [
        {
          "id": "01-snapshot",
          "title": "Snapshot a local database and define invariants",
          "summary": "Capture schema, row counts and content identities from a read-only source.",
          "hours": 2,
          "language": "python",
          "difficulty": "starter",
          "concepts": [
            "SQLite backup",
            "row fingerprints"
          ],
          "figure": "pj-database-migration-rehearsal-1",
          "number": 1,
          "doc": "projects/database-migration-rehearsal/stages/01-snapshot/docs/en.md",
          "contentUrl": "project-content/database-migration-rehearsal/stages/01-snapshot/docs/en.md",
          "tests": "projects/database-migration-rehearsal/stages/01-snapshot/tests",
          "figures": [
            "pj-database-migration-rehearsal-1"
          ]
        },
        {
          "id": "02-migration",
          "title": "Apply migrations only to the disposable copy",
          "summary": "Run the supplied SQL on a disposable in-memory copy.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "SQLite authorizer",
            "migration evidence"
          ],
          "figure": "pj-database-migration-rehearsal-2",
          "number": 2,
          "doc": "projects/database-migration-rehearsal/stages/02-migration/docs/en.md",
          "contentUrl": "project-content/database-migration-rehearsal/stages/02-migration/docs/en.md",
          "tests": "projects/database-migration-rehearsal/stages/02-migration/tests",
          "figures": [
            "pj-database-migration-rehearsal-2"
          ]
        },
        {
          "id": "03-rollback",
          "title": "Exercise rollback and detect data loss",
          "summary": "Exercise the declared reverse operation and compare all captured state.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "rollback verification",
            "data loss"
          ],
          "figure": "pj-database-migration-rehearsal-3",
          "number": 3,
          "doc": "projects/database-migration-rehearsal/stages/03-rollback/docs/en.md",
          "contentUrl": "project-content/database-migration-rehearsal/stages/03-rollback/docs/en.md",
          "tests": "projects/database-migration-rehearsal/stages/03-rollback/tests",
          "figures": [
            "pj-database-migration-rehearsal-3"
          ]
        },
        {
          "id": "04-receipt",
          "title": "Export evidence for an explicit release decision",
          "summary": "Combine schema diffs, invariants and rollback into release evidence.",
          "hours": 2,
          "language": "python",
          "difficulty": "core",
          "concepts": [
            "invariants",
            "release review"
          ],
          "figure": "pj-database-migration-rehearsal-4",
          "number": 4,
          "doc": "projects/database-migration-rehearsal/stages/04-receipt/docs/en.md",
          "contentUrl": "project-content/database-migration-rehearsal/stages/04-receipt/docs/en.md",
          "tests": "projects/database-migration-rehearsal/stages/04-receipt/tests",
          "figures": [
            "pj-database-migration-rehearsal-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/database-migration-rehearsal",
      "readme": "projects/database-migration-rehearsal/README.md",
      "contentBase": "project-content/database-migration-rehearsal",
      "manifestHash": "2c073e52280e594837fff4bff4419d335faaf174c4ac8943c654e5fdbf79538b",
      "figureScripts": [
        "figures/projects/database-migration-rehearsal.js"
      ]
    },
    {
      "id": "decision-tradeoff-explorer",
      "title": "Decision Tradeoff Explorer",
      "tagline": "Show when a different priority changes the preferred option.",
      "summary": "Help a community team compare practical project options using a user-supplied criteria table and supporting notes. Apply explicit constraints, weighted scores and sensitivity analysis, keep missing values visible, and export an interactive HTML decision board and a reusable decision record.",
      "level": 3,
      "source": "core",
      "status": "ready",
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "An interactive tradeoff board, criteria.csv and decision-record.json",
      "prerequisiteProjects": [
        "csv-sql-question-workbench",
        "chart-storyboard-builder"
      ],
      "demo": {
        "command": [
          "node",
          "--experimental-strip-types",
          "cli.ts"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-declare-evidence",
          "title": "Declare options and evidence",
          "summary": "Make ranges, constraints and uncertainty explicit.",
          "hours": 2,
          "language": "typescript",
          "difficulty": "starter",
          "concepts": [
            "typed JSON",
            "source notes",
            "unknowns"
          ],
          "timeout": 120,
          "figure": "pj-decision-tradeoff-explorer-1",
          "number": 1,
          "doc": "projects/decision-tradeoff-explorer/stages/01-declare-evidence/docs/en.md",
          "contentUrl": "project-content/decision-tradeoff-explorer/stages/01-declare-evidence/docs/en.md",
          "tests": "projects/decision-tradeoff-explorer/stages/01-declare-evidence/tests",
          "figures": [
            "pj-decision-tradeoff-explorer-1"
          ]
        },
        {
          "id": "02-normalize-and-score",
          "title": "Compute comparable scores",
          "summary": "Normalize units without hiding missing values or hard constraints.",
          "hours": 2,
          "language": "typescript",
          "difficulty": "core",
          "concepts": [
            "fixed ranges",
            "weighted sum",
            "constraints"
          ],
          "timeout": 120,
          "figure": "pj-decision-tradeoff-explorer-2",
          "number": 2,
          "doc": "projects/decision-tradeoff-explorer/stages/02-normalize-and-score/docs/en.md",
          "contentUrl": "project-content/decision-tradeoff-explorer/stages/02-normalize-and-score/docs/en.md",
          "tests": "projects/decision-tradeoff-explorer/stages/02-normalize-and-score/tests",
          "figures": [
            "pj-decision-tradeoff-explorer-2"
          ]
        },
        {
          "id": "03-sweep-preferences",
          "title": "Explore sensitivity and dominance",
          "summary": "Find when a preference change reverses the ranking.",
          "hours": 2,
          "language": "typescript",
          "difficulty": "core",
          "concepts": [
            "Pareto dominance",
            "sensitivity",
            "tie order"
          ],
          "timeout": 120,
          "figure": "pj-decision-tradeoff-explorer-3",
          "number": 3,
          "doc": "projects/decision-tradeoff-explorer/stages/03-sweep-preferences/docs/en.md",
          "contentUrl": "project-content/decision-tradeoff-explorer/stages/03-sweep-preferences/docs/en.md",
          "tests": "projects/decision-tradeoff-explorer/stages/03-sweep-preferences/tests",
          "figures": [
            "pj-decision-tradeoff-explorer-3"
          ]
        },
        {
          "id": "04-export-board",
          "title": "Export the chosen scenario",
          "summary": "Make the board produce a reusable decision record.",
          "hours": 2,
          "language": "typescript",
          "difficulty": "core",
          "concepts": [
            "HTML output",
            "CSV",
            "downloaded evidence"
          ],
          "timeout": 120,
          "figure": "pj-decision-tradeoff-explorer-4",
          "number": 4,
          "doc": "projects/decision-tradeoff-explorer/stages/04-export-board/docs/en.md",
          "contentUrl": "project-content/decision-tradeoff-explorer/stages/04-export-board/docs/en.md",
          "tests": "projects/decision-tradeoff-explorer/stages/04-export-board/tests",
          "figures": [
            "pj-decision-tradeoff-explorer-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/decision-tradeoff-explorer",
      "readme": "projects/decision-tradeoff-explorer/README.md",
      "contentBase": "project-content/decision-tradeoff-explorer",
      "manifestHash": "b39ba52cb5b082b7534c5814e5461f45ad5f602d328b466a84e04074ba7323c1",
      "figureScripts": [
        "figures/projects/decision-tradeoff-explorer.js"
      ]
    },
    {
      "id": "harness-bench",
      "title": "Harness Bench",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Compare harness behavior under the same tasks and call budget.",
      "summary": "Compare baseline, error-retry and evidence policies against the same ordered cases and model configuration. Count actual calls, reject incomparable receipts, replay finite recordings or call a configured HTTP model.",
      "usefulFor": [
        "Decide whether retries or supplied evidence improve your assistant under a fixed call budget",
        "Export reviewable per-call traces with dataset and model receipts"
      ],
      "youWillBuild": "Compare baseline, error-retry and evidence policies against the same ordered cases and model configuration. Count actual calls, reject incomparable receipts, replay finite recordings or call a configured HTTP model.",
      "hours": 8,
      "languages": [
        "Go"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Load unseen benchmark cases",
        "Define exactly what a correct answer means",
        "Run a harness under a call budget",
        "Compare runs on equal denominators"
      ],
      "prerequisites": [
        {
          "title": "Model evaluation",
          "path": "phases/02-ml-fundamentals/09-model-evaluation"
        },
        {
          "title": "Structured outputs",
          "path": "phases/11-llm-engineering/03-structured-outputs"
        }
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "go",
          "run",
          "."
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-load-unseen-benchmark-cases",
          "title": "Load unseen benchmark cases",
          "summary": "Freeze the cases before comparing policies.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "JSON fields",
            "Case budget",
            "Unique IDs",
            "Held-out records"
          ],
          "number": 1,
          "doc": "projects/harness-bench/stages/01-load-unseen-benchmark-cases/docs/en.md",
          "contentUrl": "project-content/harness-bench/stages/01-load-unseen-benchmark-cases/docs/en.md",
          "tests": "projects/harness-bench/stages/01-load-unseen-benchmark-cases/tests",
          "figures": [
            "pj-harness-bench-1"
          ]
        },
        {
          "id": "02-define-exactly-what-a-correct-answer-means",
          "title": "Define exactly what a correct answer means",
          "summary": "Define the answer contract before seeing the scores.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Normalize whitespace",
            "Lowercase",
            "Preserve content",
            "Exact equality"
          ],
          "number": 2,
          "doc": "projects/harness-bench/stages/02-define-exactly-what-a-correct-answer-means/docs/en.md",
          "contentUrl": "project-content/harness-bench/stages/02-define-exactly-what-a-correct-answer-means/docs/en.md",
          "tests": "projects/harness-bench/stages/02-define-exactly-what-a-correct-answer-means/tests",
          "figures": [
            "pj-harness-bench-2"
          ]
        },
        {
          "id": "03-run-a-harness-under-a-call-budget",
          "title": "Run a harness under a call budget",
          "summary": "Spend calls on a policy, not on answer leakage.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Prompt-only input",
            "Charge attempt",
            "Evaluate answer",
            "Named terminal state"
          ],
          "number": 3,
          "doc": "projects/harness-bench/stages/03-run-a-harness-under-a-call-budget/docs/en.md",
          "contentUrl": "project-content/harness-bench/stages/03-run-a-harness-under-a-call-budget/docs/en.md",
          "tests": "projects/harness-bench/stages/03-run-a-harness-under-a-call-budget/tests",
          "figures": [
            "pj-harness-bench-3"
          ]
        },
        {
          "id": "04-compare-runs-on-equal-denominators",
          "title": "Compare runs on equal denominators",
          "summary": "Prove the runs are comparable before ranking them.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Counter invariants",
            "Same dataset size",
            "Stable ranking",
            "Scoped measurement"
          ],
          "number": 4,
          "doc": "projects/harness-bench/stages/04-compare-runs-on-equal-denominators/docs/en.md",
          "contentUrl": "project-content/harness-bench/stages/04-compare-runs-on-equal-denominators/docs/en.md",
          "tests": "projects/harness-bench/stages/04-compare-runs-on-equal-denominators/tests",
          "figures": [
            "pj-harness-bench-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/harness-bench",
      "readme": "projects/harness-bench/README.md",
      "contentBase": "project-content/harness-bench",
      "manifestHash": "f3e82fd489afb7f556b29e51cbe7037604d38e8fced2ffaf70b0c3018d9d1d7c",
      "figureScripts": [
        "figures/projects/harness-bench.js"
      ]
    },
    {
      "id": "kubernetes-event-storyboard",
      "title": "Kubernetes Event Storyboard",
      "tagline": "Turn workload events into a timeline with the exact objects behind each clue.",
      "summary": "Help an on-call engineer inspect exported Kubernetes events and workload snapshots. Group repeated events, distinguish observation time from occurrence time, and link each suggested investigation to object identity and rollout revision. Export an HTML timeline and a redacted JSON context pack for an assistant.",
      "level": 3,
      "source": "core",
      "status": "ready",
      "hours": 8,
      "languages": [
        "Go",
        "TypeScript"
      ],
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "HTML workload timeline and versioned JSON context pack",
      "prerequisiteProjects": [
        "agent-trace-debugger",
        "postmortem-writer"
      ],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-parse-snapshots",
          "title": "Parse event and workload snapshots",
          "summary": "Separate occurrence time from the time you captured the export.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "Kubernetes Event",
            "object UID",
            "timestamp validation"
          ],
          "timeout": 120,
          "figure": "pj-kubernetes-event-storyboard-1",
          "number": 1,
          "doc": "projects/kubernetes-event-storyboard/stages/01-parse-snapshots/docs/en.md",
          "contentUrl": "project-content/kubernetes-event-storyboard/stages/01-parse-snapshots/docs/en.md",
          "tests": "projects/kubernetes-event-storyboard/stages/01-parse-snapshots/tests",
          "figures": [
            "pj-kubernetes-event-storyboard-1"
          ]
        },
        {
          "id": "02-group-occurrences",
          "title": "Group repetitions without losing timestamps",
          "summary": "Deduplicate event snapshots before summing distinct series.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "series counts",
            "identity collision",
            "time ranges"
          ],
          "timeout": 120,
          "figure": "pj-kubernetes-event-storyboard-2",
          "number": 2,
          "doc": "projects/kubernetes-event-storyboard/stages/02-group-occurrences/docs/en.md",
          "contentUrl": "project-content/kubernetes-event-storyboard/stages/02-group-occurrences/docs/en.md",
          "tests": "projects/kubernetes-event-storyboard/stages/02-group-occurrences/tests",
          "figures": [
            "pj-kubernetes-event-storyboard-2"
          ]
        },
        {
          "id": "03-connect-revisions",
          "title": "Connect evidence to workload revisions",
          "summary": "Follow owner UIDs without guessing from names.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "owner graph",
            "revision",
            "ambiguous evidence"
          ],
          "timeout": 120,
          "figure": "pj-kubernetes-event-storyboard-3",
          "number": 3,
          "doc": "projects/kubernetes-event-storyboard/stages/03-connect-revisions/docs/en.md",
          "contentUrl": "project-content/kubernetes-event-storyboard/stages/03-connect-revisions/docs/en.md",
          "tests": "projects/kubernetes-event-storyboard/stages/03-connect-revisions/tests",
          "figures": [
            "pj-kubernetes-event-storyboard-3"
          ]
        },
        {
          "id": "04-export-storyboard",
          "title": "Export a redacted assistant context pack",
          "summary": "Consume the Go pack in a TypeScript timeline.",
          "hours": 2,
          "language": "go+typescript",
          "difficulty": "core",
          "concepts": [
            "cross-language JSON",
            "redaction",
            "HTML timeline"
          ],
          "timeout": 120,
          "figure": "pj-kubernetes-event-storyboard-4",
          "runners": [
            {
              "language": "go"
            },
            {
              "language": "typescript"
            }
          ],
          "number": 4,
          "doc": "projects/kubernetes-event-storyboard/stages/04-export-storyboard/docs/en.md",
          "contentUrl": "project-content/kubernetes-event-storyboard/stages/04-export-storyboard/docs/en.md",
          "tests": "projects/kubernetes-event-storyboard/stages/04-export-storyboard/tests",
          "figures": [
            "pj-kubernetes-event-storyboard-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/kubernetes-event-storyboard",
      "readme": "projects/kubernetes-event-storyboard/README.md",
      "contentBase": "project-content/kubernetes-event-storyboard",
      "manifestHash": "a21ef008908b6205e4fb773ae21d7b6c6a497aac9bf1a616c2156b59cb7be4a2",
      "figureScripts": [
        "figures/projects/kubernetes-event-storyboard.js"
      ]
    },
    {
      "id": "llm-gateway-with-fallbacks",
      "title": "LLM Gateway With Fallbacks",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Route a bounded request through providers with explicit failure semantics.",
      "summary": "Build a local non-streaming HTTP proxy with real provider fallback, per-provider environment credentials, response limits, and one overall deadline. Verify the complete wire path with loopback servers.",
      "usefulFor": [
        "Connect an existing chat-completions client to a local fallback endpoint",
        "Trace provider outages without forwarding caller credentials"
      ],
      "youWillBuild": "Build a local non-streaming HTTP proxy with real provider fallback, per-provider environment credentials, response limits, and one overall deadline. Verify the complete wire path with loopback servers.",
      "hours": 8,
      "languages": [
        "Go"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate provider endpoints",
        "Classify failures without retrying everything",
        "Send one bounded HTTP request",
        "Route with a total-attempt budget"
      ],
      "prerequisites": [
        {
          "title": "Structured outputs",
          "path": "phases/11-llm-engineering/03-structured-outputs"
        }
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "go",
          "run",
          "."
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-validate-provider-endpoints",
          "title": "Validate provider endpoints",
          "summary": "Treat the provider list as trusted configuration.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "Parse URL",
            "Transport rule",
            "No credentials",
            "Stable endpoint list"
          ],
          "number": 1,
          "doc": "projects/llm-gateway-with-fallbacks/stages/01-validate-provider-endpoints/docs/en.md",
          "contentUrl": "project-content/llm-gateway-with-fallbacks/stages/01-validate-provider-endpoints/docs/en.md",
          "tests": "projects/llm-gateway-with-fallbacks/stages/01-validate-provider-endpoints/tests",
          "figures": [
            "pj-llm-gateway-with-fallbacks-1"
          ]
        },
        {
          "id": "02-classify-failures-without-retrying-everything",
          "title": "Classify failures without retrying everything",
          "summary": "Separate a repairable outage from a broken request.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Status bounds",
            "2xx success",
            "429 and 5xx",
            "Terminal client error"
          ],
          "number": 2,
          "doc": "projects/llm-gateway-with-fallbacks/stages/02-classify-failures-without-retrying-everything/docs/en.md",
          "contentUrl": "project-content/llm-gateway-with-fallbacks/stages/02-classify-failures-without-retrying-everything/docs/en.md",
          "tests": "projects/llm-gateway-with-fallbacks/stages/02-classify-failures-without-retrying-everything/tests",
          "figures": [
            "pj-llm-gateway-with-fallbacks-2"
          ]
        },
        {
          "id": "03-send-one-bounded-http-request",
          "title": "Send one bounded HTTP request",
          "summary": "Bound one request in both bytes and time.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Context-bound POST",
            "HTTP transport",
            "Limit plus one",
            "Close response body"
          ],
          "number": 3,
          "doc": "projects/llm-gateway-with-fallbacks/stages/03-send-one-bounded-http-request/docs/en.md",
          "contentUrl": "project-content/llm-gateway-with-fallbacks/stages/03-send-one-bounded-http-request/docs/en.md",
          "tests": "projects/llm-gateway-with-fallbacks/stages/03-send-one-bounded-http-request/tests",
          "figures": [
            "pj-llm-gateway-with-fallbacks-3"
          ]
        },
        {
          "id": "04-route-with-a-total-attempt-budget",
          "title": "Route with a total-attempt budget",
          "summary": "Route the caller body while keeping credentials private.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Provider order",
            "Attempt budget",
            "Failure class",
            "Terminal outcome"
          ],
          "number": 4,
          "doc": "projects/llm-gateway-with-fallbacks/stages/04-route-with-a-total-attempt-budget/docs/en.md",
          "contentUrl": "project-content/llm-gateway-with-fallbacks/stages/04-route-with-a-total-attempt-budget/docs/en.md",
          "tests": "projects/llm-gateway-with-fallbacks/stages/04-route-with-a-total-attempt-budget/tests",
          "figures": [
            "pj-llm-gateway-with-fallbacks-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/llm-gateway-with-fallbacks",
      "readme": "projects/llm-gateway-with-fallbacks/README.md",
      "contentBase": "project-content/llm-gateway-with-fallbacks",
      "manifestHash": "50c7a888512b9f0b4aa0e1ee3f953728c51769f2c5131bcc6e8d10f41fe4c7f7",
      "figureScripts": [
        "figures/projects/llm-gateway-with-fallbacks.js"
      ]
    },
    {
      "id": "multi-agent-code-review-panel",
      "title": "Multi-Agent Code Review Panel",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "A review disagreement workbench that measures when quorum helps and when it hides findings.",
      "summary": "A review disagreement workbench that measures when quorum helps and when it hides findings. Input files maps names to text or lines. Optional reviewers contain id,cost,findings recordings. Expected labels use {file,line,rule}; the report records the source fingerprint and per-reviewer versus consensus metrics.",
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate reviewer evidence",
        "Aggregate independent support",
        "Reserve costs and enforce deadlines",
        "Measure panel precision and recall"
      ],
      "prerequisites": [
        "Node22.18+ and Python3 for the grader",
        "TypeScript objects, sets, promises, AbortSignal and precision/recall."
      ],
      "youWillBuild": "A review disagreement workbench that measures when quorum helps and when it hides findings.",
      "usefulFor": [
        "Input files maps names to text or lines. Optional reviewers contain id,cost,findings recordings. Expected labels use {file,line,rule}; the report records the source fingerprint and per-reviewer versus consensus metrics."
      ],
      "demo": {
        "cwd": "solution",
        "command": [
          "node",
          "cli.ts",
          "--input",
          "samples/review.json",
          "--output",
          "panel.json",
          "--html",
          "panel.html"
        ]
      },
      "stages": [
        {
          "id": "01-evidence",
          "title": "Validate reviewer evidence",
          "summary": "Require a file present in the supplied snapshot, a positive one-based line, an exact nonempty quote, a stable rule id and a severity from one through three. Evidence validation is shared across all reviewers. It protects the aggregation boundary against fabricated locations, but agreement and quoted text still do not prove a finding is correct.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Unknown reviewer output must become a typed finding only after runtime validation.",
          "concepts": [
            "validateFinding"
          ],
          "difficulty": "starter",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-multi-agent-code-review-panel-1",
          "number": 1,
          "doc": "projects/multi-agent-code-review-panel/stages/01-evidence/docs/en.md",
          "contentUrl": "project-content/multi-agent-code-review-panel/stages/01-evidence/docs/en.md",
          "tests": "projects/multi-agent-code-review-panel/stages/01-evidence/tests",
          "figures": [
            "pj-multi-agent-code-review-panel-1"
          ]
        },
        {
          "id": "02-agreement",
          "title": "Aggregate independent support",
          "summary": "Group valid findings by file, line and rule. Count one vote per reviewer per group, reject duplicate reviewer identities, and retain every severity vote. A quorum produces consensus; a singleton remains visible as needs-review. A disagreement flag survives consensus so the user can inspect conflicting severity judgments.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Sets make reviewer identity and per-review deduplication explicit.",
          "concepts": [
            "aggregate"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-multi-agent-code-review-panel-2",
          "number": 2,
          "doc": "projects/multi-agent-code-review-panel/stages/02-agreement/docs/en.md",
          "contentUrl": "project-content/multi-agent-code-review-panel/stages/02-agreement/docs/en.md",
          "tests": "projects/multi-agent-code-review-panel/stages/02-agreement/tests",
          "figures": [
            "pj-multi-agent-code-review-panel-2"
          ]
        },
        {
          "id": "03-budgets",
          "title": "Reserve costs and enforce deadlines",
          "summary": "Reserve each reviewer cost before launching it. Skip work that cannot fit the remaining budget and record the decision. Race each reviewer against a deadline and abort its signal when time expires. Failures remain in the trace while completed reviews can still be aggregated. Adapters must honor AbortSignal to stop external work; the runner cannot force a remote service to cancel.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Promises and AbortSignal allow parallel reviewer calls with explicit terminal states.",
          "concepts": [
            "runPanel"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-multi-agent-code-review-panel-3",
          "number": 3,
          "doc": "projects/multi-agent-code-review-panel/stages/03-budgets/docs/en.md",
          "contentUrl": "project-content/multi-agent-code-review-panel/stages/03-budgets/docs/en.md",
          "tests": "projects/multi-agent-code-review-panel/stages/03-budgets/tests",
          "figures": [
            "pj-multi-agent-code-review-panel-3"
          ]
        },
        {
          "id": "04-evaluate",
          "title": "Measure panel precision and recall",
          "summary": "Evaluate unique finding ids against an expected set. Precision measures how many predicted findings are expected; recall measures how much of the expected set was found. Deduplicate both sets so repeated reviewers cannot inflate the metric. Zero predictions produce precision zero rather than a misleading perfect score. Try held-out inputs before adjusting quorum.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Small pure metrics let deterministic fixtures establish a baseline before model integrations.",
          "concepts": [
            "evaluate"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts",
            "{tests}/integration.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-multi-agent-code-review-panel-4",
          "number": 4,
          "doc": "projects/multi-agent-code-review-panel/stages/04-evaluate/docs/en.md",
          "contentUrl": "project-content/multi-agent-code-review-panel/stages/04-evaluate/docs/en.md",
          "tests": "projects/multi-agent-code-review-panel/stages/04-evaluate/tests",
          "figures": [
            "pj-multi-agent-code-review-panel-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/multi-agent-code-review-panel",
      "readme": "projects/multi-agent-code-review-panel/README.md",
      "contentBase": "project-content/multi-agent-code-review-panel",
      "manifestHash": "b2b96d2f59faf4791c8267dd1bc477c2a1cdfd3713bfe75b1e9b69e385f39d9b",
      "figureScripts": [
        "figures/projects/multi-agent-code-review-panel.js"
      ]
    },
    {
      "id": "memory-server",
      "title": "Persistent Memory Server",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "A persistent memory workbench with revision history and one boundary for REST and MCP.",
      "summary": "A persistent memory workbench with revision history and one boundary for REST and MCP. Set MEMORY_TOKEN in the environment and run node cli.ts --data-dir memory-data --serve --port 8788. REST and MCP share the same store; no token is written into files.",
      "hours": 8,
      "languages": [
        "TypeScript",
        "Rust"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Keep text, namespace and provenance together",
        "Serialize revisioned writes",
        "Score vectors in a real Rust process",
        "Expose REST and MCP tools"
      ],
      "prerequisites": [
        "Node 22.18+, Rust 2021 and Python 3 for the grader",
        "promises, append logs, HTTP, namespaces, revisions and vector dot products."
      ],
      "youWillBuild": "A persistent memory workbench with revision history and one boundary for REST and MCP.",
      "usefulFor": [
        "Set MEMORY_TOKEN in the environment and run node cli.ts --data-dir memory-data --serve --port 8788. REST and MCP share the same store; no token is written into files."
      ],
      "demo": {
        "command": [
          "node",
          "demo-persistent.ts"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-record-contract",
          "title": "Keep text, namespace and provenance together",
          "summary": "Every memory needs a bounded id, namespace, text and source locator. Never return a detached string without its provenance. The small feature-hashing embedding maps normalized terms into a fixed vector; it is a deterministic lexical projection, not a pretrained semantic model. Hash collisions are expected and explain why lexical evidence remains part of retrieval.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "TypeScript provides typed memory records; runtime validation protects JSON inputs.",
          "concepts": [
            "validateMemory",
            "embed"
          ],
          "difficulty": "starter",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node",
            "rustc"
          ],
          "timeout": 90,
          "figure": "pj-memory-server-1",
          "number": 1,
          "doc": "projects/memory-server/stages/01-record-contract/docs/en.md",
          "contentUrl": "project-content/memory-server/stages/01-record-contract/docs/en.md",
          "tests": "projects/memory-server/stages/01-record-contract/tests",
          "figures": [
            "pj-memory-server-1"
          ]
        },
        {
          "id": "02-durable-log",
          "title": "Serialize revisioned writes",
          "summary": "Load a versioned event log and reconstruct the latest record for each namespace/id pair. An update must name its expected revision. Serialize writes so two callers racing from revision zero cannot both succeed. Append before mutating the in-memory map. This is a single-process store: append completion is not a power-loss durability guarantee, and multiple server processes require an external lock or database.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Promises serialize local writes while JSONL makes the durable history inspectable.",
          "concepts": [
            "MemoryStore.put",
            "MemoryStore.list"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node",
            "rustc"
          ],
          "timeout": 90,
          "figure": "pj-memory-server-2",
          "number": 2,
          "doc": "projects/memory-server/stages/02-durable-log/docs/en.md",
          "contentUrl": "project-content/memory-server/stages/02-durable-log/docs/en.md",
          "tests": "projects/memory-server/stages/02-durable-log/tests",
          "figures": [
            "pj-memory-server-2"
          ]
        },
        {
          "id": "03-hybrid-search",
          "title": "Score vectors in a real Rust process",
          "summary": "Compile score.rs with the standard Rust toolchain and send query and document vectors over stdin. Compute cosine similarity, returning zero for a zero-norm vector. Combine 60 percent lexical query coverage with 40 percent cosine score and use ids to break ties. Test dimensions and finite values before crossing the process boundary. The Rust binary is compiled into a private temporary directory and removed on normal process exit.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Rust handles the numerical kernel through a narrow line protocol; TypeScript owns retrieval and provenance.",
          "concepts": [
            "cosineScores",
            "MemoryStore.search"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node",
            "rustc"
          ],
          "timeout": 90,
          "figure": "pj-memory-server-3",
          "number": 3,
          "doc": "projects/memory-server/stages/03-hybrid-search/docs/en.md",
          "contentUrl": "project-content/memory-server/stages/03-hybrid-search/docs/en.md",
          "tests": "projects/memory-server/stages/03-hybrid-search/tests",
          "figures": [
            "pj-memory-server-3"
          ]
        },
        {
          "id": "04-transports",
          "title": "Expose REST and MCP tools",
          "summary": "Bind a local server, require a bearer token, bound request bodies, and implement health, REST writes/search and the MCP initialization/tools subset over JSON-RPC POST. Tool execution failures use isError inside a successful JSON-RPC response; unknown protocol methods use a JSON-RPC error. This is a teaching subset without sessions, streaming or production authentication. Test actual HTTP bytes so serialization cannot drop source or revision.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Node HTTP serves the same MemoryStore methods across two wire formats.",
          "concepts": [
            "createMemoryServer"
          ],
          "difficulty": "core",
          "requires": [
            "node",
            "rustc"
          ],
          "timeout": 90,
          "figure": "pj-memory-server-4",
          "runners": [
            {
              "language": "typescript",
              "argv": [
                "node",
                "--experimental-strip-types",
                "--test",
                "{tests}/stage.test.ts",
                "{tests}/integration.test.ts"
              ]
            },
            {
              "language": "python",
              "optional": true,
              "requires": [
                "python:mcp"
              ],
              "argv": [
                "{python}",
                "-m",
                "unittest",
                "discover",
                "-s",
                "{stage}/tests-framework",
                "-p",
                "test_standard_client.py"
              ]
            }
          ],
          "number": 4,
          "doc": "projects/memory-server/stages/04-transports/docs/en.md",
          "contentUrl": "project-content/memory-server/stages/04-transports/docs/en.md",
          "tests": "projects/memory-server/stages/04-transports/tests",
          "figures": [
            "pj-memory-server-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/memory-server",
      "readme": "projects/memory-server/README.md",
      "contentBase": "project-content/memory-server",
      "manifestHash": "98b98e9cbfb4de5f80cc2aa05850adf09600bd189bc6a8a94ea74ab728562949",
      "figureScripts": [
        "figures/projects/memory-server.js"
      ]
    },
    {
      "id": "rag-freshness-pipeline",
      "title": "RAG Freshness Pipeline",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Build a content-addressed document index with deletion tracking, version checks, and freshness-aware retrieval.",
      "summary": "Build a content-addressed document index with deletion tracking, version checks, and freshness-aware retrieval.",
      "hours": 8,
      "languages": [
        "Python"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "A stale-answer incident lab proving an edited or deleted policy can no longer be cited.",
      "usefulFor": [
        "A stale-answer incident lab proving an edited or deleted policy can no longer be cited.",
        "The importer expects the complete corpus, not a partial change feed."
      ],
      "skills": [
        "Normalize documents and fingerprint content",
        "Plan inserts updates deletions and refreshes",
        "Persist an index with atomic replacement",
        "Exclude expired evidence at query time"
      ],
      "prerequisites": [
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        },
        {
          "title": "Retrieval augmented generation",
          "path": "phases/11-llm-engineering/06-rag"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-rag-freshness-pipeline-1",
      "languageWhy": {
        "Python": "Stdlib data structures, explicit algorithms and deterministic local tests."
      },
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-fingerprint",
          "title": "Normalize documents and fingerprint content",
          "summary": "Canonically equivalent é encodings receive identical content hashes.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "starter",
          "figure": "pj-rag-freshness-pipeline-1",
          "concepts": [
            "normalize",
            "documents",
            "and",
            "fingerprint"
          ],
          "number": 1,
          "doc": "projects/rag-freshness-pipeline/stages/01-fingerprint/docs/en.md",
          "contentUrl": "project-content/rag-freshness-pipeline/stages/01-fingerprint/docs/en.md",
          "tests": "projects/rag-freshness-pipeline/stages/01-fingerprint/tests",
          "figures": [
            "pj-rag-freshness-pipeline-1"
          ]
        },
        {
          "id": "02-changes",
          "title": "Plan inserts updates deletions and refreshes",
          "summary": "A removed document appears in delete, so stale chunks cannot remain searchable.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-rag-freshness-pipeline-2",
          "concepts": [
            "plan",
            "inserts",
            "updates",
            "deletions"
          ],
          "number": 2,
          "doc": "projects/rag-freshness-pipeline/stages/02-changes/docs/en.md",
          "contentUrl": "project-content/rag-freshness-pipeline/stages/02-changes/docs/en.md",
          "tests": "projects/rag-freshness-pipeline/stages/02-changes/tests",
          "figures": [
            "pj-rag-freshness-pipeline-2"
          ]
        },
        {
          "id": "03-snapshot",
          "title": "Persist an index with atomic replacement",
          "summary": "A stale writer is rejected and the last committed snapshot stays readable.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-rag-freshness-pipeline-3",
          "concepts": [
            "persist",
            "an",
            "index",
            "with"
          ],
          "number": 3,
          "doc": "projects/rag-freshness-pipeline/stages/03-snapshot/docs/en.md",
          "contentUrl": "project-content/rag-freshness-pipeline/stages/03-snapshot/docs/en.md",
          "tests": "projects/rag-freshness-pipeline/stages/03-snapshot/tests",
          "figures": [
            "pj-rag-freshness-pipeline-3"
          ]
        },
        {
          "id": "04-retrieve",
          "title": "Exclude expired evidence at query time",
          "summary": "An expired matching note is excluded even when its keyword score is perfect.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "stretch",
          "figure": "pj-rag-freshness-pipeline-4",
          "concepts": [
            "exclude",
            "expired",
            "evidence",
            "at"
          ],
          "number": 4,
          "doc": "projects/rag-freshness-pipeline/stages/04-retrieve/docs/en.md",
          "contentUrl": "project-content/rag-freshness-pipeline/stages/04-retrieve/docs/en.md",
          "tests": "projects/rag-freshness-pipeline/stages/04-retrieve/tests",
          "figures": [
            "pj-rag-freshness-pipeline-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/rag-freshness-pipeline",
      "readme": "projects/rag-freshness-pipeline/README.md",
      "contentBase": "project-content/rag-freshness-pipeline",
      "manifestHash": "25ea78d611b1e55b12694b740bffc82be4935e2a08227b08318875326db39e86",
      "figureScripts": [
        "figures/projects/rag-freshness-pipeline.js"
      ]
    },
    {
      "id": "report-judge",
      "title": "Report Judge",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Audit sentence-level citations, test lexical support, and compare report revisions with a paired uncertainty interval.",
      "summary": "Audit sentence-level citations, test lexical support, and compare report revisions with a paired uncertainty interval.",
      "hours": 8,
      "languages": [
        "Python"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "An evidence-audit workbench showing uncertainty and claims requiring human review.",
      "usefulFor": [
        "An evidence-audit workbench showing uncertainty and claims requiring human review.",
        "The judge provides conservative lexical evidence checks."
      ],
      "skills": [
        "Parse claims and citation references",
        "Check evidence before averaging scores",
        "Report precision coverage and source recall",
        "Compare paired revisions with bootstrap intervals"
      ],
      "prerequisites": [
        {
          "title": "Retrieval augmented generation",
          "path": "phases/11-llm-engineering/06-rag"
        },
        {
          "title": "Model evaluation",
          "path": "phases/02-ml-fundamentals/09-model-evaluation"
        },
        {
          "title": "Verification gates",
          "path": "phases/14-agent-engineering/38-verification-gates"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-report-judge-1",
      "languageWhy": {
        "Python": "Stdlib data structures, explicit algorithms and deterministic local tests."
      },
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-claims",
          "title": "Parse claims and citation references",
          "summary": "One [S1]. Two [S2]. becomes two independently auditable claims.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "starter",
          "figure": "pj-report-judge-1",
          "concepts": [
            "parse",
            "claims",
            "and",
            "citation"
          ],
          "number": 1,
          "doc": "projects/report-judge/stages/01-claims/docs/en.md",
          "contentUrl": "project-content/report-judge/stages/01-claims/docs/en.md",
          "tests": "projects/report-judge/stages/01-claims/tests",
          "figures": [
            "pj-report-judge-1"
          ]
        },
        {
          "id": "02-support",
          "title": "Check evidence before averaging scores",
          "summary": "Changing a sourced limit from 10 to 5 yields reason number and support zero.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-report-judge-2",
          "concepts": [
            "check",
            "evidence",
            "before",
            "averaging"
          ],
          "number": 2,
          "doc": "projects/report-judge/stages/02-support/docs/en.md",
          "contentUrl": "project-content/report-judge/stages/02-support/docs/en.md",
          "tests": "projects/report-judge/stages/02-support/tests",
          "figures": [
            "pj-report-judge-2"
          ]
        },
        {
          "id": "03-metrics",
          "title": "Report precision coverage and source recall",
          "summary": "A report citing one of two expected sources has recall 0.5, even with perfect precision.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-report-judge-3",
          "concepts": [
            "report",
            "precision",
            "coverage",
            "and"
          ],
          "number": 3,
          "doc": "projects/report-judge/stages/03-metrics/docs/en.md",
          "contentUrl": "project-content/report-judge/stages/03-metrics/docs/en.md",
          "tests": "projects/report-judge/stages/03-metrics/tests",
          "figures": [
            "pj-report-judge-3"
          ]
        },
        {
          "id": "04-compare",
          "title": "Compare paired revisions with bootstrap intervals",
          "summary": "Uniform +1 improvements yield mean delta 1 and interval [1, 1].",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "stretch",
          "figure": "pj-report-judge-4",
          "concepts": [
            "compare",
            "paired",
            "revisions",
            "with"
          ],
          "number": 4,
          "doc": "projects/report-judge/stages/04-compare/docs/en.md",
          "contentUrl": "project-content/report-judge/stages/04-compare/docs/en.md",
          "tests": "projects/report-judge/stages/04-compare/tests",
          "figures": [
            "pj-report-judge-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/report-judge",
      "readme": "projects/report-judge/README.md",
      "contentBase": "project-content/report-judge",
      "manifestHash": "11a5e9dd10cd1199d4f0ab7e5445f2c73d0de51c9bd999c9ec939d79cab61dd3",
      "figureScripts": [
        "figures/projects/report-judge.js"
      ]
    },
    {
      "id": "retry-storm-lab",
      "title": "Retry Storm Lab",
      "tagline": "Watch many reasonable retries combine into an overloaded service.",
      "summary": "Help SDK authors choose retry behavior when many clients fail together. Replay concurrent clients against a deterministic service model, compare bounded backoff and jitter with a shared retry budget, then run the same policy against a local HTTP fixture. Export amplification and recovery timelines with a reusable client policy.",
      "level": 3,
      "source": "core",
      "status": "ready",
      "hours": 8,
      "languages": [
        "Go",
        "TypeScript"
      ],
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "Retry policy library, deterministic workload replay and amplification timeline",
      "prerequisiteProjects": [
        "llm-gateway-with-fallbacks",
        "agent-budget-planner"
      ],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-deterministic-service",
          "title": "Model concurrent failures with a deterministic clock",
          "summary": "Make aggregate retry load visible in a discrete event replay.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "discrete clock",
            "capacity",
            "amplification"
          ],
          "timeout": 120,
          "figure": "pj-retry-storm-lab-1",
          "number": 1,
          "doc": "projects/retry-storm-lab/stages/01-deterministic-service/docs/en.md",
          "contentUrl": "project-content/retry-storm-lab/stages/01-deterministic-service/docs/en.md",
          "tests": "projects/retry-storm-lab/stages/01-deterministic-service/tests",
          "figures": [
            "pj-retry-storm-lab-1"
          ]
        },
        {
          "id": "02-bounded-jitter",
          "title": "Compare bounded backoff and jitter",
          "summary": "Spread scheduled retries with a reproducible client-specific sequence.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "exponential backoff",
            "full jitter",
            "seed"
          ],
          "timeout": 120,
          "figure": "pj-retry-storm-lab-2",
          "number": 2,
          "doc": "projects/retry-storm-lab/stages/02-bounded-jitter/docs/en.md",
          "contentUrl": "project-content/retry-storm-lab/stages/02-bounded-jitter/docs/en.md",
          "tests": "projects/retry-storm-lab/stages/02-bounded-jitter/tests",
          "figures": [
            "pj-retry-storm-lab-2"
          ]
        },
        {
          "id": "03-shared-budget",
          "title": "Enforce shared retry budgets and server delays",
          "summary": "Bound aggregate attempts across clients, not just each individual request.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "shared budget",
            "Retry-After",
            "mutex"
          ],
          "timeout": 120,
          "figure": "pj-retry-storm-lab-3",
          "number": 3,
          "doc": "projects/retry-storm-lab/stages/03-shared-budget/docs/en.md",
          "contentUrl": "project-content/retry-storm-lab/stages/03-shared-budget/docs/en.md",
          "tests": "projects/retry-storm-lab/stages/03-shared-budget/tests",
          "figures": [
            "pj-retry-storm-lab-3"
          ]
        },
        {
          "id": "04-local-http-replay",
          "title": "Replay against a local HTTP service",
          "summary": "Exercise actual HTTP requests and verify the exported counters independently.",
          "hours": 2,
          "language": "go+typescript",
          "difficulty": "core",
          "concepts": [
            "context cancellation",
            "loopback fixture",
            "receipt validation"
          ],
          "timeout": 120,
          "figure": "pj-retry-storm-lab-4",
          "runners": [
            {
              "language": "go"
            },
            {
              "language": "typescript"
            }
          ],
          "number": 4,
          "doc": "projects/retry-storm-lab/stages/04-local-http-replay/docs/en.md",
          "contentUrl": "project-content/retry-storm-lab/stages/04-local-http-replay/docs/en.md",
          "tests": "projects/retry-storm-lab/stages/04-local-http-replay/tests",
          "figures": [
            "pj-retry-storm-lab-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded local command output. See the README for input and scope."
        }
      ],
      "path": "projects/retry-storm-lab",
      "readme": "projects/retry-storm-lab/README.md",
      "contentBase": "project-content/retry-storm-lab",
      "manifestHash": "6ba6ac34bfb9899e767f306b7e9c788da996ca8b52141f0a2199322656db2cb8",
      "figureScripts": [
        "figures/projects/retry-storm-lab.js"
      ]
    },
    {
      "id": "workflow-hooks",
      "title": "Self-Correcting Workflow Hooks",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Turn repeated, sourced corrections into scoped rules, persist them atomically, and enforce only explicitly approved rules.",
      "summary": "Turn repeated, sourced corrections into scoped rules, persist them atomically, and enforce only explicitly approved rules.",
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Capture corrections with provenance",
        "Count independent sessions",
        "Approve and select scoped rules",
        "Persist rules across sessions"
      ],
      "prerequisites": [
        {
          "title": "Repository memory and state",
          "path": "phases/14-agent-engineering/34-repo-memory-and-state"
        },
        {
          "title": "Verification gates",
          "path": "phases/14-agent-engineering/38-verification-gates"
        }
      ],
      "youWillBuild": "A correction ledger showing why a rule exists, what it changed and how to undo it.",
      "usefulFor": [
        "A correction ledger showing why a rule exists, what it changed and how to undo it.",
        "capture, inspect, approve, retire and emit are file-based commands."
      ],
      "demo": {
        "command": [
          "node",
          "demo.ts"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-corrections",
          "title": "Capture corrections with provenance",
          "summary": "Preserve case-sensitive rule text and source excerpts with stable locators.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "TypeScript expresses the boundary between raw hook input and a validated correction.",
          "concepts": [
            "normalize",
            "ingest"
          ],
          "difficulty": "starter",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-workflow-hooks-1",
          "number": 1,
          "doc": "projects/workflow-hooks/stages/01-corrections/docs/en.md",
          "contentUrl": "project-content/workflow-hooks/stages/01-corrections/docs/en.md",
          "tests": "projects/workflow-hooks/stages/01-corrections/tests",
          "figures": [
            "pj-workflow-hooks-1"
          ]
        },
        {
          "id": "02-consolidate",
          "title": "Count independent sessions",
          "summary": "Group by scope and rule text with whitespace collapsed and case preserved. Deduplicate event ids and reject a reused id with different content. Count unique sessions rather than event count, so repeated hook delivery cannot promote a rule. Keep every source id attached to the candidate and sort the final output for reproducible files.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Maps and sets let you separate repeated events from independent supporting evidence.",
          "concepts": [
            "consolidate"
          ],
          "difficulty": "core",
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-workflow-hooks-2",
          "number": 2,
          "doc": "projects/workflow-hooks/stages/02-consolidate/docs/en.md",
          "contentUrl": "project-content/workflow-hooks/stages/02-consolidate/docs/en.md",
          "tests": "projects/workflow-hooks/stages/02-consolidate/tests",
          "figures": [
            "pj-workflow-hooks-2"
          ]
        },
        {
          "id": "03-policy",
          "title": "Approve and select scoped rules",
          "summary": "Require independent-session support before an explicit approval transition. Retired rules cannot be silently resurrected. At hook time, include only approved rules matching the current scope or global scope. Return source ids with injected rule text so the user can trace where persistent guidance came from.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "A state union makes candidate, approved and retired behavior explicit.",
          "concepts": [
            "transition",
            "hook"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-workflow-hooks-3",
          "number": 3,
          "doc": "projects/workflow-hooks/stages/03-policy/docs/en.md",
          "contentUrl": "project-content/workflow-hooks/stages/03-policy/docs/en.md",
          "tests": "projects/workflow-hooks/stages/03-policy/tests",
          "figures": [
            "pj-workflow-hooks-3"
          ]
        },
        {
          "id": "04-durability",
          "title": "Persist rules across sessions",
          "summary": "Write a versioned JSON snapshot to a unique sibling temporary file with owner-only permissions, then rename it into place. Readers see the old or new complete file. Missing storage means an empty collection, while malformed storage is an error. This snapshot store supports one writer process; cross-process merge and locking are a separate extension.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Node filesystem APIs support atomic replacement without another dependency.",
          "concepts": [
            "save",
            "load"
          ],
          "difficulty": "core",
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-workflow-hooks-4",
          "number": 4,
          "doc": "projects/workflow-hooks/stages/04-durability/docs/en.md",
          "contentUrl": "project-content/workflow-hooks/stages/04-durability/docs/en.md",
          "tests": "projects/workflow-hooks/stages/04-durability/tests",
          "figures": [
            "pj-workflow-hooks-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/workflow-hooks",
      "readme": "projects/workflow-hooks/README.md",
      "contentBase": "project-content/workflow-hooks",
      "manifestHash": "6c5c604337ccc75f86e8ec51cc5d4b6b47a76554a18f441f89bb864bd1bcd02b",
      "figureScripts": [
        "figures/projects/workflow-hooks.js"
      ]
    },
    {
      "id": "skill-scanner",
      "title": "Skill Supply-Chain Scanner",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Find risky instruction patterns with exact source evidence.",
      "summary": "Build an offline advisory scanner that preserves UTF-8 offsets, reports explicit policy patterns, scores distinct findings and emits a review gate. It is a transparent heuristic, not a malware detector or a promise that unflagged skills are safe.",
      "usefulFor": [
        "A skill-change review assistant quoting newly introduced capabilities.",
        "The scanner emits versioned JSON with file paths, exact UTF-8 byte spans and advisory rules."
      ],
      "youWillBuild": "A skill-change review assistant quoting newly introduced capabilities.",
      "hours": 8,
      "languages": [
        "Rust"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Retain byte-accurate source spans",
        "Detect named advisory patterns",
        "Score distinct evidence without inflation",
        "Build an explicit review gate"
      ],
      "prerequisites": [
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        },
        {
          "title": "Security and secrets audit",
          "path": "phases/17-infrastructure-and-production/25-security-secrets-audit"
        }
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-retain-byte-accurate-source-spans",
          "title": "Retain byte-accurate source spans",
          "summary": "Split UTF-8 source into numbered lines and retain exclusive byte offsets into the original buffer.",
          "hours": 2,
          "language": "rust",
          "difficulty": "starter",
          "concepts": [
            "Read bytes",
            "Split terminators",
            "Track offsets",
            "Exact source slice"
          ],
          "number": 1,
          "doc": "projects/skill-scanner/stages/01-retain-byte-accurate-source-spans/docs/en.md",
          "contentUrl": "project-content/skill-scanner/stages/01-retain-byte-accurate-source-spans/docs/en.md",
          "tests": "projects/skill-scanner/stages/01-retain-byte-accurate-source-spans/tests",
          "figures": [
            "pj-skill-scanner-1"
          ]
        },
        {
          "id": "02-detect-named-advisory-patterns",
          "title": "Detect named advisory patterns",
          "summary": "Rules inspect lowercase line text but report original offsets.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Normalize view",
            "Match named rule",
            "Retain evidence",
            "Emit findings"
          ],
          "number": 2,
          "doc": "projects/skill-scanner/stages/02-detect-named-advisory-patterns/docs/en.md",
          "contentUrl": "project-content/skill-scanner/stages/02-detect-named-advisory-patterns/docs/en.md",
          "tests": "projects/skill-scanner/stages/02-detect-named-advisory-patterns/tests",
          "figures": [
            "pj-skill-scanner-2"
          ]
        },
        {
          "id": "03-score-distinct-evidence-without-inflation",
          "title": "Score distinct evidence without inflation",
          "summary": "Count each rule once per source line even if a collector repeats a finding.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Validate finding",
            "Rule-line identity",
            "Deduplicate",
            "Checked score"
          ],
          "number": 3,
          "doc": "projects/skill-scanner/stages/03-score-distinct-evidence-without-inflation/docs/en.md",
          "contentUrl": "project-content/skill-scanner/stages/03-score-distinct-evidence-without-inflation/docs/en.md",
          "tests": "projects/skill-scanner/stages/03-score-distinct-evidence-without-inflation/tests",
          "figures": [
            "pj-skill-scanner-3"
          ]
        },
        {
          "id": "04-build-an-explicit-review-gate",
          "title": "Build an explicit review gate",
          "summary": "A threshold crossing requests review; below threshold means only that these rules did not cross the configured threshold.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Check bounds",
            "Validate slices",
            "Compare threshold",
            "Human review report"
          ],
          "number": 4,
          "doc": "projects/skill-scanner/stages/04-build-an-explicit-review-gate/docs/en.md",
          "contentUrl": "project-content/skill-scanner/stages/04-build-an-explicit-review-gate/docs/en.md",
          "tests": "projects/skill-scanner/stages/04-build-an-explicit-review-gate/tests",
          "figures": [
            "pj-skill-scanner-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/skill-scanner",
      "readme": "projects/skill-scanner/README.md",
      "contentBase": "project-content/skill-scanner",
      "manifestHash": "7ce89620d5dcb4fb282026a0011da4449e9dd6964e9b47663a97da0e779b1e4e",
      "figureScripts": [
        "figures/projects/skill-scanner.js"
      ]
    },
    {
      "id": "streaming-answer-recovery",
      "title": "Streaming Answer Recovery",
      "tagline": "Reconnect a streamed answer without duplicating text or hiding an incomplete result.",
      "summary": "Build a browser answer view and local event stream for developers integrating assistant output. Handle split UTF-8 bytes, event IDs, reconnection, cancellation and partial citations. Preserve the difference between an interrupted draft and a completed answer, with a downloadable event trace to reproduce rendering failures.",
      "level": 3,
      "source": "core",
      "status": "ready",
      "hours": 8,
      "languages": [
        "TypeScript",
        "Go"
      ],
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "Reusable browser component, SSE fixture server and replayable event trace",
      "prerequisiteProjects": [
        "agent-trace-debugger",
        "json-schema-output-guard"
      ],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-decode-sse",
          "title": "Decode chunked bytes into complete events",
          "summary": "Let UTF-8 and SSE framing survive arbitrary transport boundaries.",
          "hours": 2,
          "language": "typescript",
          "difficulty": "starter",
          "concepts": [
            "TextDecoder",
            "SSE framing",
            "persistent ID"
          ],
          "timeout": 120,
          "figure": "pj-streaming-answer-recovery-1",
          "number": 1,
          "doc": "projects/streaming-answer-recovery/stages/01-decode-sse/docs/en.md",
          "contentUrl": "project-content/streaming-answer-recovery/stages/01-decode-sse/docs/en.md",
          "tests": "projects/streaming-answer-recovery/stages/01-decode-sse/tests",
          "figures": [
            "pj-streaming-answer-recovery-1"
          ]
        },
        {
          "id": "02-stable-answer-state",
          "title": "Render text and citations by stable identity",
          "summary": "Make duplicate delivery harmless while preserving incomplete state.",
          "hours": 2,
          "language": "typescript",
          "difficulty": "core",
          "concepts": [
            "event identity",
            "deduplication",
            "partial citations"
          ],
          "timeout": 120,
          "figure": "pj-streaming-answer-recovery-2",
          "number": 2,
          "doc": "projects/streaming-answer-recovery/stages/02-stable-answer-state/docs/en.md",
          "contentUrl": "project-content/streaming-answer-recovery/stages/02-stable-answer-state/docs/en.md",
          "tests": "projects/streaming-answer-recovery/stages/02-stable-answer-state/tests",
          "figures": [
            "pj-streaming-answer-recovery-2"
          ]
        },
        {
          "id": "03-reconnect-and-cancel",
          "title": "Handle reconnect and cancellation",
          "summary": "Resume after the last accepted event, not the last partial byte.",
          "hours": 2,
          "language": "typescript+go",
          "difficulty": "core",
          "concepts": [
            "Last-Event-ID",
            "HTTP fixture",
            "AbortSignal"
          ],
          "timeout": 120,
          "figure": "pj-streaming-answer-recovery-3",
          "runners": [
            {
              "language": "typescript"
            },
            {
              "language": "go"
            }
          ],
          "number": 3,
          "doc": "projects/streaming-answer-recovery/stages/03-reconnect-and-cancel/docs/en.md",
          "contentUrl": "project-content/streaming-answer-recovery/stages/03-reconnect-and-cancel/docs/en.md",
          "tests": "projects/streaming-answer-recovery/stages/03-reconnect-and-cancel/tests",
          "figures": [
            "pj-streaming-answer-recovery-3"
          ]
        },
        {
          "id": "04-trace-and-component",
          "title": "Export and replay an interrupted-answer trace",
          "summary": "Ship the browser component with a replayable accepted-event artifact.",
          "hours": 2,
          "language": "typescript",
          "difficulty": "core",
          "concepts": [
            "trace schema",
            "browser component",
            "download"
          ],
          "timeout": 120,
          "figure": "pj-streaming-answer-recovery-4",
          "number": 4,
          "doc": "projects/streaming-answer-recovery/stages/04-trace-and-component/docs/en.md",
          "contentUrl": "project-content/streaming-answer-recovery/stages/04-trace-and-component/docs/en.md",
          "tests": "projects/streaming-answer-recovery/stages/04-trace-and-component/tests",
          "figures": [
            "pj-streaming-answer-recovery-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded interaction with the generated local interface. Run the documented command to inspect your own output."
        }
      ],
      "path": "projects/streaming-answer-recovery",
      "readme": "projects/streaming-answer-recovery/README.md",
      "contentBase": "project-content/streaming-answer-recovery",
      "manifestHash": "ba6ed015f45baa602b1573dd0b1b191fe1290d3bfa5a54e4fab30e512228431d",
      "figureScripts": [
        "figures/projects/streaming-answer-recovery.js"
      ]
    },
    {
      "id": "support-agent-with-google-adk",
      "title": "Support Agent With Google ADK",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Build a redacted, authorized support review with retained replies and evidence, then run the same policy through real Google ADK agents.",
      "summary": "Build a redacted, authorized support review with retained replies and evidence, then run the same policy through real Google ADK agents.",
      "hours": 8,
      "languages": [
        "Python"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "An HTML review page and support.json with the redacted ticket, selected capability, source guidance, reply or escalation and state history.",
      "usefulFor": [
        "An HTML review page and support.json with the redacted ticket, selected capability, source guidance, reply or escalation and state history."
      ],
      "skills": [
        "Validate before starting a session",
        "Route and authorize as separate decisions",
        "Retain the actual response in the handoff",
        "Reuse the policy inside the real ADK path"
      ],
      "prerequisites": [
        "Python dictionaries, exceptions and module imports.",
        "An async function and an iterator of model events.",
        "The distinction between classifying a request and authorizing a capability."
      ],
      "figures": true,
      "overviewFigure": "pj-support-agent-with-google-adk-1",
      "languageWhy": {
        "Python": "Stdlib data structures, explicit algorithms and deterministic local tests."
      },
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-intake",
          "title": "Validate before starting a session",
          "summary": "For invoice for sam@example.invalid api_key=EXAMPLE_TOKEN, the usable ticket text becomes invoice for [email] api_key=[redacted]. An empty string fails before routing. The same cleaned text must reach both the baseline and ADK path.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "starter",
          "figure": "pj-support-agent-with-google-adk-1",
          "concepts": [
            "input validation",
            "redaction",
            "source handling"
          ],
          "number": 1,
          "doc": "projects/support-agent-with-google-adk/stages/01-intake/docs/en.md",
          "contentUrl": "project-content/support-agent-with-google-adk/stages/01-intake/docs/en.md",
          "tests": "projects/support-agent-with-google-adk/stages/01-intake/tests",
          "figures": [
            "pj-support-agent-with-google-adk-1"
          ]
        },
        {
          "id": "02-routing",
          "title": "Route and authorize as separate decisions",
          "summary": "invoice refund selects billing and can use read_invoice. invoice login ties billing and access, so it escalates. A billing route requesting read_account is rejected even though that tool is valid for another specialist.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-support-agent-with-google-adk-2",
          "concepts": [
            "routing scores",
            "ties",
            "capability allowlists"
          ],
          "number": 2,
          "doc": "projects/support-agent-with-google-adk/stages/02-routing/docs/en.md",
          "contentUrl": "project-content/support-agent-with-google-adk/stages/02-routing/docs/en.md",
          "tests": "projects/support-agent-with-google-adk/stages/02-routing/tests",
          "figures": [
            "pj-support-agent-with-google-adk-2"
          ]
        },
        {
          "id": "03-handoff",
          "title": "Retain the actual response in the handoff",
          "summary": "begin followed by classify on invoice then respond with Check the invoice reference produces answered and retains response=\"Check the invoice reference\". The history records classify and respond. Classifying invoice login followed by respond fails; escalate is the valid transition.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-support-agent-with-google-adk-3",
          "concepts": [
            "state transitions",
            "immutable history",
            "response retention"
          ],
          "number": 3,
          "doc": "projects/support-agent-with-google-adk/stages/03-handoff/docs/en.md",
          "contentUrl": "project-content/support-agent-with-google-adk/stages/03-handoff/docs/en.md",
          "tests": "projects/support-agent-with-google-adk/stages/03-handoff/tests",
          "figures": [
            "pj-support-agent-with-google-adk-3"
          ]
        },
        {
          "id": "04-adk-adapter",
          "title": "Reuse the policy inside the real ADK path",
          "summary": "A login ticket chooses read_account and access-recovery guidance. The fixture specialist replies using that guidance, and the final handoff stores the reply. A request for read_invoice under the access route raises PermissionError before a graph is run. Optional tests inspect model requests to ensure raw email and example keys did not cross the boundary.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "stretch",
          "figure": "pj-support-agent-with-google-adk-4",
          "concepts": [
            "ADK Workflow",
            "shared policy boundary",
            "provider injection"
          ],
          "runners": [
            {
              "language": "python"
            },
            {
              "language": "python",
              "optional": true,
              "requires": [
                "python:google.adk"
              ],
              "argv": [
                "{python}",
                "-m",
                "unittest",
                "discover",
                "-s",
                "{stage}/tests-framework",
                "-p",
                "test_framework.py"
              ]
            }
          ],
          "number": 4,
          "doc": "projects/support-agent-with-google-adk/stages/04-adk-adapter/docs/en.md",
          "contentUrl": "project-content/support-agent-with-google-adk/stages/04-adk-adapter/docs/en.md",
          "tests": "projects/support-agent-with-google-adk/stages/04-adk-adapter/tests",
          "figures": [
            "pj-support-agent-with-google-adk-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        },
        {
          "gif": "media/framework.gif",
          "poster": "media/framework.png",
          "title": "Verify the real SDK",
          "caption": "Actual optional SDK tests with installed dependencies and deterministic local models. No live cloud or model provider calls."
        }
      ],
      "path": "projects/support-agent-with-google-adk",
      "readme": "projects/support-agent-with-google-adk/README.md",
      "contentBase": "project-content/support-agent-with-google-adk",
      "manifestHash": "b9e43881db529e775ede9a042f871f6ce1abea9ba8b1928d22b8b9ef9abe4c94",
      "figureScripts": [
        "figures/projects/support-agent-with-google-adk.js"
      ]
    },
    {
      "id": "typed-workflow-agent-with-mastra",
      "title": "Typed Workflow Agent with Mastra",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Build a typed approval workflow, then preserve and resume real Mastra suspension through a local SQLite store.",
      "summary": "Build a typed approval workflow, then preserve and resume real Mastra suspension through a local SQLite store.",
      "hours": 8,
      "languages": [
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate typed step inputs at runtime",
        "Make the approval invariant explicit in the plan",
        "Suspend before effects and count failed attempts",
        "Persist real Mastra approval state and resume it"
      ],
      "prerequisites": [
        "TypeScript object types, unions and async functions.",
        "Runtime validation of unknown JSON input.",
        "An explicit approval decision and a local database file."
      ],
      "youWillBuild": "A scratch HTML/JSON workflow review and a real Mastra run stored in SQLite with a plan-bound approval document.",
      "usefulFor": [
        "A scratch HTML/JSON workflow review and a real Mastra run stored in SQLite with a plan-bound approval document."
      ],
      "demo": {
        "command": [
          "node",
          "--experimental-strip-types",
          "demo.ts"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-contracts",
          "title": "Validate typed step inputs at runtime",
          "summary": "Find the workshop policy produces read intent. Update the workshop label produces write intent. A blank ID fails before a tool is chosen. The word change inside unchanged does not match the mutation-verb word boundary.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "TypeScript discriminated unions make workflow states and tool names visible to the compiler.",
          "concepts": [
            "runtime contracts",
            "intent baseline",
            "typed outputs"
          ],
          "difficulty": "starter",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-typed-workflow-agent-with-mastra-1",
          "number": 1,
          "doc": "projects/typed-workflow-agent-with-mastra/stages/01-contracts/docs/en.md",
          "contentUrl": "project-content/typed-workflow-agent-with-mastra/stages/01-contracts/docs/en.md",
          "tests": "projects/typed-workflow-agent-with-mastra/stages/01-contracts/tests",
          "figures": [
            "pj-typed-workflow-agent-with-mastra-1"
          ]
        },
        {
          "id": "02-plan",
          "title": "Make the approval invariant explicit in the plan",
          "summary": "An update action with requiresApproval=false fails. A lookup-only plan with requiresApproval=true also violates the stated representation. One through ten actions are allowed, and every action has a supported tool and nonempty query.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "A typed Plan exposes both action shape and the approval bit that must match it.",
          "concepts": [
            "plan validation",
            "capability selection",
            "approval invariant"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-typed-workflow-agent-with-mastra-2",
          "number": 2,
          "doc": "projects/typed-workflow-agent-with-mastra/stages/02-plan/docs/en.md",
          "contentUrl": "project-content/typed-workflow-agent-with-mastra/stages/02-plan/docs/en.md",
          "tests": "projects/typed-workflow-agent-with-mastra/stages/02-plan/tests",
          "figures": [
            "pj-typed-workflow-agent-with-mastra-2"
          ]
        },
        {
          "id": "03-runtime",
          "title": "Suspend before effects and count failed attempts",
          "summary": "A lookup returning a result completes in one call. A tool returning empty text twice fails after two calls. A write without approval returns a checkpoint and zero calls; resuming that checkpoint with approved=true executes the original query.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Async functions keep tool adapters injectable while result unions preserve terminal states.",
          "concepts": [
            "retry limits",
            "call budgets",
            "checkpoint results"
          ],
          "difficulty": "core",
          "runner": [
            "node",
            "--experimental-strip-types",
            "--test",
            "{tests}/stage.test.ts"
          ],
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-typed-workflow-agent-with-mastra-3",
          "number": 3,
          "doc": "projects/typed-workflow-agent-with-mastra/stages/03-runtime/docs/en.md",
          "contentUrl": "project-content/typed-workflow-agent-with-mastra/stages/03-runtime/docs/en.md",
          "tests": "projects/typed-workflow-agent-with-mastra/stages/03-runtime/tests",
          "figures": [
            "pj-typed-workflow-agent-with-mastra-3"
          ]
        },
        {
          "id": "04-framework-boundary",
          "title": "Persist real Mastra approval state and resume it",
          "summary": "Start the authored workshop update and observe status=suspended with zero tool calls. Close the local LibSQL store, create a fresh workflow over the same SQLite file and resume by runId. Matching approval produces success and exactly one observed local tool call in the recovery test; a wrong hash fails with zero calls.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "The optional adapter uses real createStep and createWorkflow imports after the contracts are understood.",
          "concepts": [
            "Mastra suspension",
            "plan-bound approval",
            "SQLite recovery"
          ],
          "difficulty": "core",
          "requires": [
            "node"
          ],
          "timeout": 90,
          "figure": "pj-typed-workflow-agent-with-mastra-4",
          "runners": [
            {
              "language": "typescript",
              "argv": [
                "node",
                "--experimental-strip-types",
                "--test",
                "{tests}/stage.test.ts"
              ]
            },
            {
              "language": "typescript",
              "optional": true,
              "requires": [
                "node:@mastra/core",
                "node:zod",
                "node:@mastra/libsql"
              ],
              "argv": [
                "node",
                "--experimental-strip-types",
                "--test",
                "{stage}/tests-framework/adapter.test.ts"
              ]
            }
          ],
          "number": 4,
          "doc": "projects/typed-workflow-agent-with-mastra/stages/04-framework-boundary/docs/en.md",
          "contentUrl": "project-content/typed-workflow-agent-with-mastra/stages/04-framework-boundary/docs/en.md",
          "tests": "projects/typed-workflow-agent-with-mastra/stages/04-framework-boundary/tests",
          "figures": [
            "pj-typed-workflow-agent-with-mastra-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        },
        {
          "gif": "media/framework.gif",
          "poster": "media/framework.png",
          "title": "Verify the real SDK",
          "caption": "Actual optional SDK tests with installed dependencies and deterministic local models. No live cloud or model provider calls."
        }
      ],
      "path": "projects/typed-workflow-agent-with-mastra",
      "readme": "projects/typed-workflow-agent-with-mastra/README.md",
      "contentBase": "project-content/typed-workflow-agent-with-mastra",
      "manifestHash": "b091395207d0782b35ac567af8a305675190097500dd05088786800420a161b7",
      "figureScripts": [
        "figures/projects/typed-workflow-agent-with-mastra.js"
      ]
    },
    {
      "id": "visual-evidence-library",
      "title": "Visual Evidence Library",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Find text inside screenshots and diagrams with inspectable coordinate evidence.",
      "summary": "Find text inside screenshots and diagrams with inspectable coordinate evidence.",
      "youWillBuild": "A standalone HTML evidence gallery with highlighted rectangles and evidence.json for reuse.",
      "usefulFor": [
        "A JSON manifest naming local SVG, PNG or JPEG assets, their declared dimensions and explicitly supplied text rectangles."
      ],
      "hours": 8,
      "languages": [
        "Python"
      ],
      "languageWhy": {
        "Python": "Python makes file validation, Unicode token search, HTTP payloads and SVG parsing explicit without an OCR framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate image paths and text rectangles",
        "Rank matches and preserve the rectangle",
        "Keep extraction proposals separate from labels",
        "Export evidence you can point to"
      ],
      "prerequisites": [
        "Work with nested Python dictionaries and lists.",
        "Understand x/y coordinates and width/height in image pixels.",
        "Understand the difference between supplied labels and independently observed evidence."
      ],
      "figures": true,
      "overviewFigure": "pj-visual-evidence-library-1",
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-validate-evidence",
          "title": "Validate image paths and text rectangles",
          "summary": "Preserve where a text assertion came from before indexing it.",
          "hours": 2,
          "difficulty": "starter",
          "language": "python",
          "languageWhy": "Python makes file validation, Unicode token search, HTTP payloads and SVG parsing explicit without an OCR framework.",
          "concepts": [
            "path containment",
            "bounding boxes",
            "provenance"
          ],
          "figure": "pj-visual-evidence-library-1",
          "number": 1,
          "doc": "projects/visual-evidence-library/stages/01-validate-evidence/docs/en.md",
          "contentUrl": "project-content/visual-evidence-library/stages/01-validate-evidence/docs/en.md",
          "tests": "projects/visual-evidence-library/stages/01-validate-evidence/tests",
          "figures": [
            "pj-visual-evidence-library-1"
          ]
        },
        {
          "id": "02-search-text-regions",
          "title": "Rank matches and preserve the rectangle",
          "summary": "Search region text with transparent lexical query coverage.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Python makes file validation, Unicode token search, HTTP payloads and SVG parsing explicit without an OCR framework.",
          "concepts": [
            "Unicode tokens",
            "query coverage",
            "stable ranking"
          ],
          "figure": "pj-visual-evidence-library-2",
          "number": 2,
          "doc": "projects/visual-evidence-library/stages/02-search-text-regions/docs/en.md",
          "contentUrl": "project-content/visual-evidence-library/stages/02-search-text-regions/docs/en.md",
          "tests": "projects/visual-evidence-library/stages/02-search-text-regions/tests",
          "figures": [
            "pj-visual-evidence-library-2"
          ]
        },
        {
          "id": "03-review-vision-proposals",
          "title": "Keep extraction proposals separate from labels",
          "summary": "Call an optional vision endpoint and require review before indexing.",
          "hours": 2,
          "difficulty": "core",
          "language": "python",
          "languageWhy": "Python makes file validation, Unicode token search, HTTP payloads and SVG parsing explicit without an OCR framework.",
          "concepts": [
            "HTTP adapters",
            "structured output",
            "human review"
          ],
          "figure": "pj-visual-evidence-library-3",
          "number": 3,
          "doc": "projects/visual-evidence-library/stages/03-review-vision-proposals/docs/en.md",
          "contentUrl": "project-content/visual-evidence-library/stages/03-review-vision-proposals/docs/en.md",
          "tests": "projects/visual-evidence-library/stages/03-review-vision-proposals/tests",
          "figures": [
            "pj-visual-evidence-library-3"
          ]
        },
        {
          "id": "04-export-the-gallery",
          "title": "Export evidence you can point to",
          "summary": "Render a portable gallery with exact region overlays and JSON results.",
          "hours": 2,
          "difficulty": "stretch",
          "language": "python",
          "languageWhy": "Python makes file validation, Unicode token search, HTTP payloads and SVG parsing explicit without an OCR framework.",
          "concepts": [
            "coordinate transforms",
            "safe rendering",
            "portable reports"
          ],
          "figure": "pj-visual-evidence-library-4",
          "number": 4,
          "doc": "projects/visual-evidence-library/stages/04-export-the-gallery/docs/en.md",
          "contentUrl": "project-content/visual-evidence-library/stages/04-export-the-gallery/docs/en.md",
          "tests": "projects/visual-evidence-library/stages/04-export-the-gallery/tests",
          "figures": [
            "pj-visual-evidence-library-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Build and grade",
          "caption": "A fresh starter fails; the complete original solution passes all four stages."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the application output",
          "caption": "Actual output from authored offline fixtures. See the README for provider and evidence boundaries."
        }
      ],
      "path": "projects/visual-evidence-library",
      "readme": "projects/visual-evidence-library/README.md",
      "contentBase": "project-content/visual-evidence-library",
      "manifestHash": "eccff44001abda7fcd63d8f42ee9480bde3b3a7377f6d561cef0893d8e015f51",
      "figureScripts": [
        "figures/projects/visual-evidence-library.js"
      ]
    },
    {
      "id": "voice-note-transcriber-pipeline",
      "title": "Voice Note Transcriber Pipeline",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Turn a selected WAV into an inspectable transcript and caption review page using a real optional HTTP recognizer, with an honest offline speech fixture.",
      "summary": "Turn a selected WAV into an inspectable transcript and caption review page using a real optional HTTP recognizer, with an honest offline speech fixture.",
      "hours": 8,
      "languages": [
        "Python"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "audio.wav, captions.vtt, transcript.json and an HTML page with embedded playback and cue-seek buttons.",
      "usefulFor": [
        "audio.wav, captions.vtt, transcript.json and an HTML page with embedded playback and cue-seek buttons."
      ],
      "skills": [
        "Decode the audio clock before processing",
        "Measure activity without claiming speech detection",
        "Send real WAV bytes through a recognizer boundary",
        "Export a transcript you can hear and correct"
      ],
      "prerequisites": [
        "Python bytes, lists and context managers.",
        "Sample rate, channels and signed integer audio samples.",
        "A callable provider interface and basic HTTP request structure."
      ],
      "figures": true,
      "overviewFigure": "pj-voice-note-transcriber-pipeline-1",
      "languageWhy": {
        "Python": "Stdlib data structures, explicit algorithms and deterministic local tests."
      },
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-pcm",
          "title": "Decode the audio clock before processing",
          "summary": "The integer samples 0, 16384 and -16384 become 0, 0.5 and -0.5. A sample index of 800 at 16000 Hz means 0.05 seconds. Interpreting the same index at 8000 Hz would double the timestamp without changing a single byte.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "starter",
          "figure": "pj-voice-note-transcriber-pipeline-1",
          "concepts": [
            "PCM WAV",
            "sample normalization",
            "sample clock"
          ],
          "number": 1,
          "doc": "projects/voice-note-transcriber-pipeline/stages/01-pcm/docs/en.md",
          "contentUrl": "project-content/voice-note-transcriber-pipeline/stages/01-pcm/docs/en.md",
          "tests": "projects/voice-note-transcriber-pipeline/stages/01-pcm/tests",
          "figures": [
            "pj-voice-note-transcriber-pipeline-1"
          ]
        },
        {
          "id": "02-activity",
          "title": "Measure activity without claiming speech detection",
          "summary": "At 1000 Hz, forty samples of amplitude0.5, twenty silent samples and forty active samples merge into [0,100] when gap_ms is40. The merged span lasts100 ms. A20 ms isolated burst is discarded when min_ms is40.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-voice-note-transcriber-pipeline-2",
          "concepts": [
            "RMS energy",
            "gap merging",
            "activity limits"
          ],
          "number": 2,
          "doc": "projects/voice-note-transcriber-pipeline/stages/02-activity/docs/en.md",
          "contentUrl": "project-content/voice-note-transcriber-pipeline/stages/02-activity/docs/en.md",
          "tests": "projects/voice-note-transcriber-pipeline/stages/02-activity/tests",
          "figures": [
            "pj-voice-note-transcriber-pipeline-2"
          ]
        },
        {
          "id": "03-transcribe",
          "title": "Send real WAV bytes through a recognizer boundary",
          "summary": "A provider timeout followed by success records attempts=2. Each output row retains start, end, text and the SHA256 of the exact encoded segment. A second segment cannot overlap the previous one, and fractional sample indices are invalid.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-voice-note-transcriber-pipeline-3",
          "concepts": [
            "multipart HTTP",
            "bounded retry",
            "audio hashes"
          ],
          "number": 3,
          "doc": "projects/voice-note-transcriber-pipeline/stages/03-transcribe/docs/en.md",
          "contentUrl": "project-content/voice-note-transcriber-pipeline/stages/03-transcribe/docs/en.md",
          "tests": "projects/voice-note-transcriber-pipeline/stages/03-transcribe/tests",
          "figures": [
            "pj-voice-note-transcriber-pipeline-3"
          ]
        },
        {
          "id": "04-captions",
          "title": "Export a transcript you can hear and correct",
          "summary": "The fixture CLI pairs the original spoken clip with its supplied reference text and labels the method clearly. Real recognition instead uses --endpoint. After inspecting playback, edit the rows in transcript.json and run --review-file to rerender; the report must match the original audio hash.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "stretch",
          "figure": "pj-voice-note-transcriber-pipeline-4",
          "concepts": [
            "WebVTT",
            "audio review",
            "portable exports"
          ],
          "number": 4,
          "doc": "projects/voice-note-transcriber-pipeline/stages/04-captions/docs/en.md",
          "contentUrl": "project-content/voice-note-transcriber-pipeline/stages/04-captions/docs/en.md",
          "tests": "projects/voice-note-transcriber-pipeline/stages/04-captions/tests",
          "figures": [
            "pj-voice-note-transcriber-pipeline-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/voice-note-transcriber-pipeline",
      "readme": "projects/voice-note-transcriber-pipeline/README.md",
      "contentBase": "project-content/voice-note-transcriber-pipeline",
      "manifestHash": "132e197ce53dfe88171e4325b278ac1c7229ab581d3ac55e34098e4aff6668f5",
      "figureScripts": [
        "figures/projects/voice-note-transcriber-pipeline.js"
      ]
    },
    {
      "id": "web-change-brief",
      "title": "Web Change Brief",
      "level": 3,
      "levelName": "Engineer",
      "tagline": "Turn noisy HTML snapshots into a small report of exact readable text changes.",
      "summary": "Turn noisy HTML snapshots into a small report of exact readable text changes.",
      "youWillBuild": "A standalone change report, changes.json and a reusable baseline.json snapshot.",
      "usefulFor": [
        "Two saved HTML snapshots of the same URL, or a saved JSON baseline and one explicit live HTTP(S) URL."
      ],
      "hours": 8,
      "languages": [
        "Go"
      ],
      "languageWhy": {
        "Go": "Go's standard library exposes HTTP limits, context cancellation, atomic file replacement and safe HTML templates with no framework."
      },
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Extract text before comparing pages",
        "Compare exact text and preserve duplicates",
        "Fetch one page without losing the baseline",
        "Export a brief a person can inspect"
      ],
      "prerequisites": [
        "Write Go functions, slices, maps and error returns.",
        "Understand an HTTP response status, Content-Type and body.",
        "Understand that a text snapshot and a rendered web page expose different information."
      ],
      "figures": true,
      "overviewFigure": "pj-web-change-brief-1",
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-extract-readable-blocks",
          "title": "Extract text before comparing pages",
          "summary": "Scan HTML into normalized readable blocks and exclude known noise regions.",
          "hours": 2,
          "difficulty": "starter",
          "language": "go",
          "languageWhy": "Go's standard library exposes HTTP limits, context cancellation, atomic file replacement and safe HTML templates with no framework.",
          "concepts": [
            "scanning",
            "normalization",
            "noise filtering"
          ],
          "figure": "pj-web-change-brief-1",
          "number": 1,
          "doc": "projects/web-change-brief/stages/01-extract-readable-blocks/docs/en.md",
          "contentUrl": "project-content/web-change-brief/stages/01-extract-readable-blocks/docs/en.md",
          "tests": "projects/web-change-brief/stages/01-extract-readable-blocks/tests",
          "figures": [
            "pj-web-change-brief-1"
          ]
        },
        {
          "id": "02-compare-snapshots",
          "title": "Compare exact text and preserve duplicates",
          "summary": "Build stable snapshots and count added and removed text occurrences.",
          "hours": 2,
          "difficulty": "core",
          "language": "go",
          "languageWhy": "Go's standard library exposes HTTP limits, context cancellation, atomic file replacement and safe HTML templates with no framework.",
          "concepts": [
            "canonical URLs",
            "content hashes",
            "multiset diffs"
          ],
          "figure": "pj-web-change-brief-2",
          "number": 2,
          "doc": "projects/web-change-brief/stages/02-compare-snapshots/docs/en.md",
          "contentUrl": "project-content/web-change-brief/stages/02-compare-snapshots/docs/en.md",
          "tests": "projects/web-change-brief/stages/02-compare-snapshots/tests",
          "figures": [
            "pj-web-change-brief-2"
          ]
        },
        {
          "id": "03-fetch-and-save",
          "title": "Fetch one page without losing the baseline",
          "summary": "Bound live HTTP work and verify saved snapshot integrity.",
          "hours": 2,
          "difficulty": "core",
          "language": "go",
          "languageWhy": "Go's standard library exposes HTTP limits, context cancellation, atomic file replacement and safe HTML templates with no framework.",
          "concepts": [
            "HTTP bounds",
            "context cancellation",
            "atomic writes"
          ],
          "figure": "pj-web-change-brief-3",
          "number": 3,
          "doc": "projects/web-change-brief/stages/03-fetch-and-save/docs/en.md",
          "contentUrl": "project-content/web-change-brief/stages/03-fetch-and-save/docs/en.md",
          "tests": "projects/web-change-brief/stages/03-fetch-and-save/tests",
          "figures": [
            "pj-web-change-brief-3"
          ]
        },
        {
          "id": "04-export-change-evidence",
          "title": "Export a brief a person can inspect",
          "summary": "Show exact added and removed statements beside the source and hashes.",
          "hours": 2,
          "difficulty": "stretch",
          "language": "go",
          "languageWhy": "Go's standard library exposes HTTP limits, context cancellation, atomic file replacement and safe HTML templates with no framework.",
          "concepts": [
            "safe templates",
            "portable reports",
            "explicit acceptance"
          ],
          "figure": "pj-web-change-brief-4",
          "number": 4,
          "doc": "projects/web-change-brief/stages/04-export-change-evidence/docs/en.md",
          "contentUrl": "project-content/web-change-brief/stages/04-export-change-evidence/docs/en.md",
          "tests": "projects/web-change-brief/stages/04-export-change-evidence/tests",
          "figures": [
            "pj-web-change-brief-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Build and grade",
          "caption": "A fresh starter fails; the complete original solution passes all four stages."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the application output",
          "caption": "Actual output from authored offline fixtures. See the README for provider and evidence boundaries."
        }
      ],
      "path": "projects/web-change-brief",
      "readme": "projects/web-change-brief/README.md",
      "contentBase": "project-content/web-change-brief",
      "manifestHash": "c1e6577ee09c60a8786f8472afd178494d196db80c490396590777487354ef97",
      "figureScripts": [
        "figures/projects/web-change-brief.js"
      ]
    },
    {
      "id": "cloud-agent-with-aws-strands",
      "title": "Cloud Agent With AWS Strands",
      "level": 4,
      "levelName": "Systems",
      "tagline": "A scoped cloud incident reader with an execution receipt for every cache hit and retry.",
      "summary": "A scoped cloud incident reader with an execution receipt for every cache hit and retry. Import run(payload, provider). The provider receives only a validated operation and scoped resource. The optional Strands model proposes a plan; it never bypasses the deterministic validator.",
      "hours": 8,
      "languages": [
        "Python"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "A scoped cloud incident reader with an execution receipt for every cache hit and retry.",
      "usefulFor": [
        "Import run(payload, provider). The provider receives only a validated operation and scoped resource. The optional Strands model proposes a plan; it never bypasses the deterministic validator."
      ],
      "skills": [
        "Validate a scoped cloud inspection plan",
        "Execute reads within step and response budgets",
        "Retry transient reads and reuse completed requests",
        "Drive the actual Strands loop with a local model"
      ],
      "prerequisites": [
        "Python 3.10+",
        "JSON, sets, exceptions, callbacks and environment configuration. Optional SDK comparisons use requirements-framework.txt."
      ],
      "figures": true,
      "overviewFigure": "pj-cloud-agent-with-aws-strands-1",
      "languageWhy": {
        "Python": "Stdlib data structures, explicit algorithms and deterministic local tests."
      },
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/input.json",
          "--output",
          "incident.json"
        ]
      },
      "stages": [
        {
          "id": "01-plan",
          "title": "Validate a scoped cloud inspection plan",
          "summary": "A delete operation or an out-of-scope resource fails before any provider call.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "starter",
          "figure": "pj-cloud-agent-with-aws-strands-1",
          "concepts": [
            "validate",
            "a",
            "scoped",
            "cloud"
          ],
          "number": 1,
          "doc": "projects/cloud-agent-with-aws-strands/stages/01-plan/docs/en.md",
          "contentUrl": "project-content/cloud-agent-with-aws-strands/stages/01-plan/docs/en.md",
          "tests": "projects/cloud-agent-with-aws-strands/stages/01-plan/tests",
          "figures": [
            "pj-cloud-agent-with-aws-strands-1"
          ]
        },
        {
          "id": "02-executor",
          "title": "Execute reads within step and response budgets",
          "summary": "A zero-step budget performs no provider calls and returns budget_exhausted.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-cloud-agent-with-aws-strands-2",
          "concepts": [
            "execute",
            "reads",
            "within",
            "step"
          ],
          "number": 2,
          "doc": "projects/cloud-agent-with-aws-strands/stages/02-executor/docs/en.md",
          "contentUrl": "project-content/cloud-agent-with-aws-strands/stages/02-executor/docs/en.md",
          "tests": "projects/cloud-agent-with-aws-strands/stages/02-executor/tests",
          "figures": [
            "pj-cloud-agent-with-aws-strands-2"
          ]
        },
        {
          "id": "03-retry",
          "title": "Retry transient reads and reuse completed requests",
          "summary": "A transient timeout retries, while a permission failure is propagated after one call.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-cloud-agent-with-aws-strands-3",
          "concepts": [
            "retry",
            "transient",
            "reads",
            "and"
          ],
          "number": 3,
          "doc": "projects/cloud-agent-with-aws-strands/stages/03-retry/docs/en.md",
          "contentUrl": "project-content/cloud-agent-with-aws-strands/stages/03-retry/docs/en.md",
          "tests": "projects/cloud-agent-with-aws-strands/stages/03-retry/tests",
          "figures": [
            "pj-cloud-agent-with-aws-strands-3"
          ]
        },
        {
          "id": "04-strands-adapter",
          "title": "Drive the actual Strands loop with a local model",
          "summary": "The framework produces one recorded JSON plan in one model call, then the independent validator checks it.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "stretch",
          "figure": "pj-cloud-agent-with-aws-strands-4",
          "concepts": [
            "drive",
            "the",
            "actual",
            "strands"
          ],
          "runners": [
            {
              "language": "python"
            },
            {
              "language": "python",
              "optional": true,
              "requires": [
                "python:strands"
              ],
              "argv": [
                "{python}",
                "-m",
                "unittest",
                "discover",
                "-s",
                "{stage}/tests-framework",
                "-p",
                "test_framework.py"
              ]
            }
          ],
          "number": 4,
          "doc": "projects/cloud-agent-with-aws-strands/stages/04-strands-adapter/docs/en.md",
          "contentUrl": "project-content/cloud-agent-with-aws-strands/stages/04-strands-adapter/docs/en.md",
          "tests": "projects/cloud-agent-with-aws-strands/stages/04-strands-adapter/tests",
          "figures": [
            "pj-cloud-agent-with-aws-strands-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        },
        {
          "gif": "media/framework.gif",
          "poster": "media/framework.png",
          "title": "Verify the real SDK",
          "caption": "Actual optional SDK tests with installed dependencies and deterministic local models. No live cloud or model provider calls."
        }
      ],
      "path": "projects/cloud-agent-with-aws-strands",
      "readme": "projects/cloud-agent-with-aws-strands/README.md",
      "contentBase": "project-content/cloud-agent-with-aws-strands",
      "manifestHash": "14a57ca887fcdeab52113477d42947b84d0ea4e0734352e8d728bd8d8cb3aab8",
      "figureScripts": [
        "figures/projects/cloud-agent-with-aws-strands.js"
      ]
    },
    {
      "id": "desktop-control",
      "title": "Desktop Control Backend",
      "level": 4,
      "levelName": "Systems",
      "tagline": "An auditable coordinate-and-frame action runner with reproducible before/after pixel artifacts.",
      "summary": "An auditable coordinate-and-frame action runner with reproducible before/after pixel artifacts. The Backend trait is the reusable boundary. TSV uses capture, click<TAB>x<TAB>y<TAB>generation and type<TAB>text; the runner refuses unknown actions and caps32 calls.",
      "hours": 8,
      "languages": [
        "Rust"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate frames and coordinate spaces",
        "Render and manipulate a fixture scene",
        "Reject stale observations and exhausted budgets",
        "Build an opt-in native boundary"
      ],
      "prerequisites": [
        "Rust 2021 toolchain",
        "structs, traits, generics, Result, mutable borrowing and byte vectors. Python 3 runs the grader and demo wrapper."
      ],
      "youWillBuild": "An auditable coordinate-and-frame action runner with reproducible before/after pixel artifacts.",
      "usefulFor": [
        "The Backend trait is the reusable boundary. TSV uses capture, click<TAB>x<TAB>y<TAB>generation and type<TAB>text; the runner refuses unknown actions and caps32 calls."
      ],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-frame-contract",
          "title": "Validate frames and coordinate spaces",
          "summary": "A screenshot has physical pixel dimensions while native desktop clicks may use logical coordinates.",
          "hours": 2,
          "language": "rust",
          "languageWhy": "Rust makes state ownership and fallible system calls explicit while keeping the implementation in the standard library.",
          "requires": [
            "rustc"
          ],
          "difficulty": "starter",
          "concepts": [
            "Frame.validate",
            "Frame.logical_point"
          ],
          "figure": "pj-desktop-control-1",
          "timeout": 90,
          "number": 1,
          "doc": "projects/desktop-control/stages/01-frame-contract/docs/en.md",
          "contentUrl": "project-content/desktop-control/stages/01-frame-contract/docs/en.md",
          "tests": "projects/desktop-control/stages/01-frame-contract/tests",
          "figures": [
            "pj-desktop-control-1"
          ]
        },
        {
          "id": "02-backend-trait",
          "title": "Render and manipulate a fixture scene",
          "summary": "Define capture, click and type_text behind one Backend trait.",
          "hours": 2,
          "language": "rust",
          "languageWhy": "Rust makes state ownership and fallible system calls explicit while keeping the implementation in the standard library.",
          "requires": [
            "rustc"
          ],
          "difficulty": "core",
          "concepts": [
            "Backend",
            "FixtureBackend"
          ],
          "figure": "pj-desktop-control-2",
          "timeout": 90,
          "number": 2,
          "doc": "projects/desktop-control/stages/02-backend-trait/docs/en.md",
          "contentUrl": "project-content/desktop-control/stages/02-backend-trait/docs/en.md",
          "tests": "projects/desktop-control/stages/02-backend-trait/tests",
          "figures": [
            "pj-desktop-control-2"
          ]
        },
        {
          "id": "03-controller",
          "title": "Reject stale observations and exhausted budgets",
          "summary": "Place a Controller around the backend.",
          "hours": 2,
          "language": "rust",
          "languageWhy": "Rust makes state ownership and fallible system calls explicit while keeping the implementation in the standard library.",
          "requires": [
            "rustc"
          ],
          "difficulty": "core",
          "concepts": [
            "Controller.capture",
            "Controller.click",
            "Controller.type_text"
          ],
          "figure": "pj-desktop-control-3",
          "timeout": 90,
          "number": 3,
          "doc": "projects/desktop-control/stages/03-controller/docs/en.md",
          "contentUrl": "project-content/desktop-control/stages/03-controller/docs/en.md",
          "tests": "projects/desktop-control/stages/03-controller/tests",
          "figures": [
            "pj-desktop-control-3"
          ]
        },
        {
          "id": "04-native-adapter",
          "title": "Build an opt-in native boundary",
          "summary": "Construct macOS screencapture and AppleScript argument arrays without a shell.",
          "hours": 2,
          "language": "rust",
          "languageWhy": "Rust makes state ownership and fallible system calls explicit while keeping the implementation in the standard library.",
          "requires": [
            "rustc"
          ],
          "difficulty": "core",
          "concepts": [
            "click_argv",
            "text_argv",
            "png_dimensions",
            "MacBackend"
          ],
          "figure": "pj-desktop-control-4",
          "timeout": 90,
          "number": 4,
          "doc": "projects/desktop-control/stages/04-native-adapter/docs/en.md",
          "contentUrl": "project-content/desktop-control/stages/04-native-adapter/docs/en.md",
          "tests": "projects/desktop-control/stages/04-native-adapter/tests",
          "figures": [
            "pj-desktop-control-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/desktop-control",
      "readme": "projects/desktop-control/README.md",
      "contentBase": "project-content/desktop-control",
      "manifestHash": "22bf689bfc24851461fd8a787b01b1d0b58abef7edfa10454e847b7b17072a18",
      "figureScripts": [
        "figures/projects/desktop-control.js"
      ]
    },
    {
      "id": "durable-agent-jobs",
      "title": "Durable Agent Jobs",
      "level": 4,
      "levelName": "Systems",
      "tagline": "Persist job states and reject stale worker completions.",
      "summary": "Build a persistent local report queue with versioned leases, immutable input, idempotent output receipts and reproducible worker-process crash recovery.",
      "usefulFor": [
        "Resume local report jobs after a worker crash",
        "Observe and test the gap between an output effect and durable completion"
      ],
      "youWillBuild": "Build a persistent local report queue with versioned leases, immutable input, idempotent output receipts and reproducible worker-process crash recovery.",
      "hours": 8,
      "languages": [
        "Go"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Create jobs with stable identity",
        "Claim with a lease and version",
        "Finish or reclaim expired work",
        "Write and recover atomic snapshots"
      ],
      "prerequisites": [
        "Go 1.22 or later on Linux or macOS",
        "Python 3.10 or later for the grader",
        "Go structs, pointers, errors and JSON files",
        "Basic process lifecycle and filesystem operations"
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "go",
          "run",
          ".",
          "demo"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-create-jobs-with-stable-identity",
          "title": "Create jobs with stable identity",
          "summary": "Accept a bounded identifier and start every job in queued state with version zero.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "Validate ID",
            "Initial state",
            "Zero version",
            "No side effect"
          ],
          "number": 1,
          "doc": "projects/durable-agent-jobs/stages/01-create-jobs-with-stable-identity/docs/en.md",
          "contentUrl": "project-content/durable-agent-jobs/stages/01-create-jobs-with-stable-identity/docs/en.md",
          "tests": "projects/durable-agent-jobs/stages/01-create-jobs-with-stable-identity/tests",
          "figures": [
            "pj-durable-agent-jobs-1"
          ]
        },
        {
          "id": "02-claim-with-a-lease-and-version",
          "title": "Claim with a lease and version",
          "summary": "Only queued work can be claimed.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Expected version",
            "Attempt cap",
            "Lease arithmetic",
            "Atomic state mutation"
          ],
          "number": 2,
          "doc": "projects/durable-agent-jobs/stages/02-claim-with-a-lease-and-version/docs/en.md",
          "contentUrl": "project-content/durable-agent-jobs/stages/02-claim-with-a-lease-and-version/docs/en.md",
          "tests": "projects/durable-agent-jobs/stages/02-claim-with-a-lease-and-version/tests",
          "figures": [
            "pj-durable-agent-jobs-2"
          ]
        },
        {
          "id": "03-finish-or-reclaim-expired-work",
          "title": "Finish or reclaim expired work",
          "summary": "Finish succeeds only for the current running version before its lease expires.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Lease boundary",
            "Requeue expired",
            "Increment version",
            "Fence stale worker"
          ],
          "number": 3,
          "doc": "projects/durable-agent-jobs/stages/03-finish-or-reclaim-expired-work/docs/en.md",
          "contentUrl": "project-content/durable-agent-jobs/stages/03-finish-or-reclaim-expired-work/docs/en.md",
          "tests": "projects/durable-agent-jobs/stages/03-finish-or-reclaim-expired-work/tests",
          "figures": [
            "pj-durable-agent-jobs-3"
          ]
        },
        {
          "id": "04-write-and-recover-atomic-snapshots",
          "title": "Write and recover atomic snapshots",
          "summary": "Compose validated snapshots with locked enqueue, durable claims and crash-safe local receipt reuse.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Validate snapshot",
            "Write temp",
            "Flush and rename",
            "Recover records"
          ],
          "timeout": 120,
          "number": 4,
          "doc": "projects/durable-agent-jobs/stages/04-write-and-recover-atomic-snapshots/docs/en.md",
          "contentUrl": "project-content/durable-agent-jobs/stages/04-write-and-recover-atomic-snapshots/docs/en.md",
          "tests": "projects/durable-agent-jobs/stages/04-write-and-recover-atomic-snapshots/tests",
          "figures": [
            "pj-durable-agent-jobs-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/durable-agent-jobs",
      "readme": "projects/durable-agent-jobs/README.md",
      "contentBase": "project-content/durable-agent-jobs",
      "manifestHash": "60194e992b75c00235df98f6e4804fbc3a9612c685a9b0fc0b2b74683283d3de",
      "figureScripts": [
        "figures/projects/durable-agent-jobs.js"
      ]
    },
    {
      "id": "hedged-request-lab",
      "title": "Hedged Request Lab",
      "tagline": "Measure the extra work required to escape a slow read request.",
      "summary": "Help client developers evaluate delayed duplicate requests for safe reads. Send a second attempt only after a configurable delay, accept the first valid response, and record cancellation, late completion and duplicate service work separately. Export a bounded HTTP client and a latency-versus-work report from controlled local endpoints.",
      "level": 4,
      "source": "core",
      "status": "ready",
      "hours": 8,
      "languages": [
        "Go"
      ],
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "Hedged-read client, controllable endpoint fixtures and latency/work comparison receipt",
      "prerequisiteProjects": [
        "llm-gateway-with-fallbacks",
        "agent-trace-debugger"
      ],
      "demo": {
        "command": [
          "go",
          "run",
          "."
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-measure-safe-reads",
          "title": "Measure safe-read latency",
          "summary": "Summarize observed samples without inventing a performance guarantee.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "percentiles",
            "safe reads",
            "measurement"
          ],
          "timeout": 120,
          "figure": "pj-hedged-request-lab-1",
          "number": 1,
          "doc": "projects/hedged-request-lab/stages/01-measure-safe-reads/docs/en.md",
          "contentUrl": "project-content/hedged-request-lab/stages/01-measure-safe-reads/docs/en.md",
          "tests": "projects/hedged-request-lab/stages/01-measure-safe-reads/tests",
          "figures": [
            "pj-hedged-request-lab-1"
          ]
        },
        {
          "id": "02-schedule-duplicate",
          "title": "Schedule delayed duplicate attempts",
          "summary": "Launch a second safe read only when the delay expires before a winner.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "timers",
            "overlap",
            "deadline"
          ],
          "timeout": 120,
          "figure": "pj-hedged-request-lab-2",
          "number": 2,
          "doc": "projects/hedged-request-lab/stages/02-schedule-duplicate/docs/en.md",
          "contentUrl": "project-content/hedged-request-lab/stages/02-schedule-duplicate/docs/en.md",
          "tests": "projects/hedged-request-lab/stages/02-schedule-duplicate/tests",
          "figures": [
            "pj-hedged-request-lab-2"
          ]
        },
        {
          "id": "03-validate-and-account",
          "title": "Validate winners and account for late work",
          "summary": "A fast error cannot win, and cancellation is an observation rather than a billing guarantee.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "valid winner",
            "late results",
            "cancellation"
          ],
          "timeout": 120,
          "figure": "pj-hedged-request-lab-3",
          "number": 3,
          "doc": "projects/hedged-request-lab/stages/03-validate-and-account/docs/en.md",
          "contentUrl": "project-content/hedged-request-lab/stages/03-validate-and-account/docs/en.md",
          "tests": "projects/hedged-request-lab/stages/03-validate-and-account/tests",
          "figures": [
            "pj-hedged-request-lab-3"
          ]
        },
        {
          "id": "04-export-tradeoffs",
          "title": "Export latency and duplicate-work tradeoffs",
          "summary": "Report both faster responses and the extra requests that produced them.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "comparison receipt",
            "service work",
            "consumer"
          ],
          "timeout": 120,
          "figure": "pj-hedged-request-lab-4",
          "number": 4,
          "doc": "projects/hedged-request-lab/stages/04-export-tradeoffs/docs/en.md",
          "contentUrl": "project-content/hedged-request-lab/stages/04-export-tradeoffs/docs/en.md",
          "tests": "projects/hedged-request-lab/stages/04-export-tradeoffs/tests",
          "figures": [
            "pj-hedged-request-lab-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded local command output. See the README for input and scope."
        }
      ],
      "path": "projects/hedged-request-lab",
      "readme": "projects/hedged-request-lab/README.md",
      "contentBase": "project-content/hedged-request-lab",
      "manifestHash": "30753c48c376d4d3a6c3ee359d65a199cb67c01c3561b36851564cdb6737f71d",
      "figureScripts": [
        "figures/projects/hedged-request-lab.js"
      ]
    },
    {
      "id": "mcp-at-scale",
      "title": "MCP Tool Discovery Workbench",
      "level": 4,
      "levelName": "Systems",
      "tagline": "A scoped MCP inventory server that discovers schemas inside a measured context budget.",
      "summary": "A scoped MCP inventory server that discovers schemas inside a measured context budget. Run python3 cli.py /absolute/inventory.json --serve as a stdio server. tools/call catalog_search takes query, max_chars and k; the response returns selected public schemas and their character count.",
      "hours": 10,
      "languages": [
        "Python",
        "TypeScript"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "A scoped MCP inventory server that discovers schemas inside a measured context budget.",
      "usefulFor": [
        "Run python3 cli.py /absolute/inventory.json --serve as a stdio server. tools/call catalog_search takes query, max_chars and k; the response returns selected public schemas and their character count."
      ],
      "skills": [
        "Build a catalog of 250 read-only tools",
        "Select tools under an explicit context budget",
        "Implement initialized JSON-RPC over stdio",
        "Audit catalog coverage through protocol pages"
      ],
      "prerequisites": [
        "Python 3.10+, Node 22.18+, dictionaries, JSON-RPC request ids, stdin/stdout and child processes."
      ],
      "figures": true,
      "overviewFigure": "pj-mcp-at-scale-1",
      "languageWhy": {
        "Python": "Stdlib data structures, explicit algorithms and deterministic local tests.",
        "TypeScript": "Typed wire messages and real subprocess integration."
      },
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "cli.py",
          "samples/inventory.json",
          "--query",
          "pods count",
          "--max-chars",
          "500"
        ]
      },
      "stages": [
        {
          "id": "01-registry",
          "title": "Build a catalog of 250 read-only tools",
          "summary": "The generated catalog contains exactly 250 unique tools.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "starter",
          "figure": "pj-mcp-at-scale-1",
          "concepts": [
            "build",
            "a",
            "catalog",
            "of"
          ],
          "number": 1,
          "doc": "projects/mcp-at-scale/stages/01-registry/docs/en.md",
          "contentUrl": "project-content/mcp-at-scale/stages/01-registry/docs/en.md",
          "tests": "projects/mcp-at-scale/stages/01-registry/tests",
          "figures": [
            "pj-mcp-at-scale-1"
          ]
        },
        {
          "id": "02-discovery",
          "title": "Select tools under an explicit context budget",
          "summary": "The query pods count selects pods_count first and never exceeds the serialized budget.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-mcp-at-scale-2",
          "concepts": [
            "select",
            "tools",
            "under",
            "an"
          ],
          "number": 2,
          "doc": "projects/mcp-at-scale/stages/02-discovery/docs/en.md",
          "contentUrl": "project-content/mcp-at-scale/stages/02-discovery/docs/en.md",
          "tests": "projects/mcp-at-scale/stages/02-discovery/tests",
          "figures": [
            "pj-mcp-at-scale-2"
          ]
        },
        {
          "id": "03-protocol",
          "title": "Implement initialized JSON-RPC over stdio",
          "summary": "A call before initialization returns -32002; an initialized tools/list returns 32 tools and a cursor.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-mcp-at-scale-3",
          "concepts": [
            "implement",
            "initialized",
            "json-rpc",
            "over"
          ],
          "number": 3,
          "doc": "projects/mcp-at-scale/stages/03-protocol/docs/en.md",
          "contentUrl": "project-content/mcp-at-scale/stages/03-protocol/docs/en.md",
          "tests": "projects/mcp-at-scale/stages/03-protocol/tests",
          "figures": [
            "pj-mcp-at-scale-3"
          ]
        },
        {
          "id": "04-audit",
          "title": "Audit catalog coverage through protocol pages",
          "summary": "An exhaustive traversal returns 250 unique names across 8 pages.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "stretch",
          "figure": "pj-mcp-at-scale-4",
          "concepts": [
            "audit",
            "catalog",
            "coverage",
            "through"
          ],
          "number": 4,
          "doc": "projects/mcp-at-scale/stages/04-audit/docs/en.md",
          "contentUrl": "project-content/mcp-at-scale/stages/04-audit/docs/en.md",
          "tests": "projects/mcp-at-scale/stages/04-audit/tests",
          "figures": [
            "pj-mcp-at-scale-4"
          ]
        },
        {
          "id": "05-typed-client",
          "title": "Exercise the real wire with a typed client",
          "summary": "Spawn the Python server and verify every serialized response from TypeScript.",
          "language": "typescript",
          "languageWhy": "Node streams and explicit TypeScript interfaces make the process boundary visible.",
          "hours": 2,
          "difficulty": "stretch",
          "figure": "pj-mcp-at-scale-5",
          "concepts": [
            "stdio",
            "correlation",
            "timeouts"
          ],
          "runners": [
            {
              "language": "typescript"
            },
            {
              "language": "python"
            },
            {
              "language": "python",
              "optional": true,
              "requires": [
                "python:mcp"
              ],
              "argv": [
                "{python}",
                "-m",
                "unittest",
                "discover",
                "-s",
                "{stage}/tests-framework",
                "-p",
                "test_standard_client.py"
              ]
            }
          ],
          "number": 5,
          "doc": "projects/mcp-at-scale/stages/05-typed-client/docs/en.md",
          "contentUrl": "project-content/mcp-at-scale/stages/05-typed-client/docs/en.md",
          "tests": "projects/mcp-at-scale/stages/05-typed-client/tests",
          "figures": [
            "pj-mcp-at-scale-5"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/mcp-at-scale",
      "readme": "projects/mcp-at-scale/README.md",
      "contentBase": "project-content/mcp-at-scale",
      "manifestHash": "927f817a9a80ba219e8030386b085fed553df4d8e85ee6825a0541c844bd5fbe",
      "figureScripts": [
        "figures/projects/mcp-at-scale.js"
      ]
    },
    {
      "id": "sandbox-ladder",
      "title": "Sandbox Policy Planner",
      "level": 4,
      "levelName": "Systems",
      "tagline": "Choose isolation controls from an explicit capability requirement.",
      "summary": "Select a modeled isolation policy, inspect an optional local Docker invocation, and compare requested controls with observed harmless probes.",
      "usefulFor": [
        "A sandbox evidence planner mapping requested capabilities to observed runtime probes.",
        "Default output is a policy simulation."
      ],
      "youWillBuild": "Select a modeled isolation policy, inspect an optional local Docker invocation, and compare requested controls with observed harmless probes.",
      "hours": 8,
      "languages": [
        "Rust"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Parse the capability request",
        "Define modeled control profiles",
        "Select the least costly sufficient profile",
        "Report residual assumptions"
      ],
      "prerequisites": [
        {
          "title": "Docker for AI",
          "path": "phases/00-setup-and-tooling/07-docker-for-ai"
        },
        {
          "title": "Security and secrets audit",
          "path": "phases/17-infrastructure-and-production/25-security-secrets-audit"
        }
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-parse-the-capability-request",
          "title": "Parse the capability request",
          "summary": "Represent the threat model as four explicit booleans: untrusted code, secret-bearing host, denied network and required kernel separation.",
          "hours": 2,
          "language": "rust",
          "difficulty": "starter",
          "concepts": [
            "Parse keys",
            "Reject duplicates",
            "Exact booleans",
            "Threat requirements"
          ],
          "number": 1,
          "doc": "projects/sandbox-ladder/stages/01-parse-the-capability-request/docs/en.md",
          "contentUrl": "project-content/sandbox-ladder/stages/01-parse-the-capability-request/docs/en.md",
          "tests": "projects/sandbox-ladder/stages/01-parse-the-capability-request/tests",
          "figures": [
            "pj-sandbox-ladder-1"
          ]
        },
        {
          "id": "02-define-modeled-control-profiles",
          "title": "Define modeled control profiles",
          "summary": "Model process, filesystem, container-network and microVM boundaries as data.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Filesystem control",
            "Network control",
            "Kernel control",
            "Requirement match"
          ],
          "number": 2,
          "doc": "projects/sandbox-ladder/stages/02-define-modeled-control-profiles/docs/en.md",
          "contentUrl": "project-content/sandbox-ladder/stages/02-define-modeled-control-profiles/docs/en.md",
          "tests": "projects/sandbox-ladder/stages/02-define-modeled-control-profiles/tests",
          "figures": [
            "pj-sandbox-ladder-2"
          ]
        },
        {
          "id": "03-select-the-least-costly-sufficient-profile",
          "title": "Select the least costly sufficient profile",
          "summary": "Filter insufficient profiles before comparing cost.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Filter controls",
            "Apply budget",
            "Stable minimum",
            "No downgrade"
          ],
          "number": 3,
          "doc": "projects/sandbox-ladder/stages/03-select-the-least-costly-sufficient-profile/docs/en.md",
          "contentUrl": "project-content/sandbox-ladder/stages/03-select-the-least-costly-sufficient-profile/docs/en.md",
          "tests": "projects/sandbox-ladder/stages/03-select-the-least-costly-sufficient-profile/tests",
          "figures": [
            "pj-sandbox-ladder-3"
          ]
        },
        {
          "id": "04-report-residual-assumptions",
          "title": "Report residual assumptions",
          "summary": "Return the selected fixture and state clearly that operating-system enforcement has not been performed.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Recheck requirements",
            "Name model",
            "List residuals",
            "Runtime verification"
          ],
          "number": 4,
          "doc": "projects/sandbox-ladder/stages/04-report-residual-assumptions/docs/en.md",
          "contentUrl": "project-content/sandbox-ladder/stages/04-report-residual-assumptions/docs/en.md",
          "tests": "projects/sandbox-ladder/stages/04-report-residual-assumptions/tests",
          "figures": [
            "pj-sandbox-ladder-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/sandbox-ladder",
      "readme": "projects/sandbox-ladder/README.md",
      "contentBase": "project-content/sandbox-ladder",
      "manifestHash": "4922c24408f4ce2ae38420548bf6381cf5042bb1df45ab1629270c36e173b30d",
      "figureScripts": [
        "figures/projects/sandbox-ladder.js"
      ]
    },
    {
      "id": "signed-webhook-inbox",
      "title": "Signed Webhook Inbox",
      "tagline": "Accept a delivery once and retain the evidence needed to replay it safely.",
      "summary": "Help developers feed external events into an agent workflow without losing retries or accepting altered payloads. Verify an authored signature scheme over the raw body, enforce timestamp bounds, and store stable delivery identities before dispatch. Export an HTTP receiver and a replay CLI that distinguishes a transport retry from a new business event.",
      "level": 4,
      "source": "core",
      "status": "ready",
      "hours": 8,
      "languages": [
        "Go"
      ],
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "Local webhook receiver, delivery ledger and explicit replay CLI",
      "prerequisiteProjects": [
        "workflow-hooks",
        "durable-agent-jobs"
      ],
      "demo": {
        "command": [
          "go",
          "run",
          "."
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-preserve-delivery",
          "title": "Preserve raw bytes and delivery identity",
          "summary": "Read the exact authenticated body before decoding business data.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "raw bytes",
            "delivery ID",
            "bounded body"
          ],
          "timeout": 120,
          "figure": "pj-signed-webhook-inbox-1",
          "number": 1,
          "doc": "projects/signed-webhook-inbox/stages/01-preserve-delivery/docs/en.md",
          "contentUrl": "project-content/signed-webhook-inbox/stages/01-preserve-delivery/docs/en.md",
          "tests": "projects/signed-webhook-inbox/stages/01-preserve-delivery/tests",
          "figures": [
            "pj-signed-webhook-inbox-1"
          ]
        },
        {
          "id": "02-verify-authenticity",
          "title": "Verify signatures and timestamp bounds",
          "summary": "Authenticate identity, timestamp and raw bytes under an explicit teaching scheme.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "HMAC",
            "timestamp window",
            "constant-time comparison"
          ],
          "timeout": 120,
          "figure": "pj-signed-webhook-inbox-2",
          "number": 2,
          "doc": "projects/signed-webhook-inbox/stages/02-verify-authenticity/docs/en.md",
          "contentUrl": "project-content/signed-webhook-inbox/stages/02-verify-authenticity/docs/en.md",
          "tests": "projects/signed-webhook-inbox/stages/02-verify-authenticity/tests",
          "figures": [
            "pj-signed-webhook-inbox-2"
          ]
        },
        {
          "id": "03-durable-deduplication",
          "title": "Deduplicate retries with a durable inbox",
          "summary": "Persist accepted identity and body before acknowledging delivery.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "fsync",
            "atomic link",
            "identity conflict"
          ],
          "timeout": 120,
          "figure": "pj-signed-webhook-inbox-3",
          "number": 3,
          "doc": "projects/signed-webhook-inbox/stages/03-durable-deduplication/docs/en.md",
          "contentUrl": "project-content/signed-webhook-inbox/stages/03-durable-deduplication/docs/en.md",
          "tests": "projects/signed-webhook-inbox/stages/03-durable-deduplication/tests",
          "figures": [
            "pj-signed-webhook-inbox-3"
          ]
        },
        {
          "id": "04-replay-receipts",
          "title": "Replay accepted deliveries with processing receipts",
          "summary": "Make a new processing run explicit while keeping transport deduplication intact.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "replay identity",
            "processing ledger",
            "local artifact"
          ],
          "timeout": 120,
          "figure": "pj-signed-webhook-inbox-4",
          "number": 4,
          "doc": "projects/signed-webhook-inbox/stages/04-replay-receipts/docs/en.md",
          "contentUrl": "project-content/signed-webhook-inbox/stages/04-replay-receipts/docs/en.md",
          "tests": "projects/signed-webhook-inbox/stages/04-replay-receipts/tests",
          "figures": [
            "pj-signed-webhook-inbox-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by every reference stage passing."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect actual output",
          "caption": "Recorded local command output. See the README for input and scope."
        }
      ],
      "path": "projects/signed-webhook-inbox",
      "readme": "projects/signed-webhook-inbox/README.md",
      "contentBase": "project-content/signed-webhook-inbox",
      "manifestHash": "2e1a542dad3e20e8eb702163b8686f4739d82dada1aec2703ec850ad122649b1",
      "figureScripts": [
        "figures/projects/signed-webhook-inbox.js"
      ]
    },
    {
      "id": "rust-agent-shell",
      "title": "Streaming Agent Shell in Rust",
      "level": 4,
      "levelName": "Systems",
      "tagline": "Build a real stdin/stdout Rust action loop with bounded reads, an explicit command grammar, path containment, and streamed JSON events.",
      "summary": "Build a real stdin/stdout Rust action loop with bounded reads, an explicit command grammar, path containment, and streamed JSON events.",
      "hours": 8,
      "languages": [
        "Rust"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Parse a deliberately small action language",
        "Confine file tools to a bounded root",
        "Track budgets and terminal state",
        "Stream bounded JSON events through real stdin"
      ],
      "prerequisites": [
        {
          "title": "Data management",
          "path": "phases/00-setup-and-tooling/09-data-management"
        },
        {
          "title": "Tool schema design",
          "path": "phases/13-tools-and-protocols/05-tool-schema-design"
        }
      ],
      "youWillBuild": "An inspectable repository-observation process usable by different coding agents.",
      "usefulFor": [
        "An inspectable repository-observation process usable by different coding agents.",
        "JSONL requests use caller ids and explicit tool argument objects."
      ],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-grammar",
          "title": "Parse a deliberately small action language",
          "summary": "Define an action enum for help, pwd, list, read, literal search and quit.",
          "hours": 2,
          "language": "rust",
          "languageWhy": "Rust makes state ownership and fallible system calls explicit while keeping the implementation in the standard library.",
          "requires": [
            "rustc"
          ],
          "difficulty": "starter",
          "concepts": [
            "Action",
            "parse_action"
          ],
          "figure": "pj-rust-agent-shell-1",
          "timeout": 90,
          "number": 1,
          "doc": "projects/rust-agent-shell/stages/01-grammar/docs/en.md",
          "contentUrl": "project-content/rust-agent-shell/stages/01-grammar/docs/en.md",
          "tests": "projects/rust-agent-shell/stages/01-grammar/tests",
          "figures": [
            "pj-rust-agent-shell-1"
          ]
        },
        {
          "id": "02-filesystem",
          "title": "Confine file tools to a bounded root",
          "summary": "Canonicalize the workspace root and requested targets, reject absolute and parent-traversing paths, and verify that symlinks remain inside the root.",
          "hours": 2,
          "language": "rust",
          "languageWhy": "Rust makes state ownership and fallible system calls explicit while keeping the implementation in the standard library.",
          "requires": [
            "rustc"
          ],
          "difficulty": "core",
          "concepts": [
            "contained",
            "read_text",
            "execute"
          ],
          "figure": "pj-rust-agent-shell-2",
          "timeout": 90,
          "number": 2,
          "doc": "projects/rust-agent-shell/stages/02-filesystem/docs/en.md",
          "contentUrl": "project-content/rust-agent-shell/stages/02-filesystem/docs/en.md",
          "tests": "projects/rust-agent-shell/stages/02-filesystem/tests",
          "figures": [
            "pj-rust-agent-shell-2"
          ]
        },
        {
          "id": "03-session",
          "title": "Track budgets and terminal state",
          "summary": "Wrap the tools in a session that owns its root, request count and closed state.",
          "hours": 2,
          "language": "rust",
          "languageWhy": "Rust makes state ownership and fallible system calls explicit while keeping the implementation in the standard library.",
          "requires": [
            "rustc"
          ],
          "difficulty": "core",
          "concepts": [
            "Session.new",
            "Session.handle"
          ],
          "figure": "pj-rust-agent-shell-3",
          "timeout": 90,
          "number": 3,
          "doc": "projects/rust-agent-shell/stages/03-session/docs/en.md",
          "contentUrl": "project-content/rust-agent-shell/stages/03-session/docs/en.md",
          "tests": "projects/rust-agent-shell/stages/03-session/tests",
          "figures": [
            "pj-rust-agent-shell-3"
          ]
        },
        {
          "id": "04-streaming",
          "title": "Stream bounded JSON events through real stdin",
          "summary": "Read input incrementally with BufRead and cap each line before allocating an unbounded string.",
          "hours": 2,
          "language": "rust+python",
          "runners": [
            {
              "language": "rust"
            },
            {
              "language": "python"
            }
          ],
          "languageWhy": "Rust makes state ownership and fallible system calls explicit while keeping the implementation in the standard library.",
          "requires": [
            "rustc"
          ],
          "difficulty": "core",
          "concepts": [
            "read_bounded",
            "json_string",
            "Event.json",
            "run_loop"
          ],
          "figure": "pj-rust-agent-shell-4",
          "timeout": 90,
          "number": 4,
          "doc": "projects/rust-agent-shell/stages/04-streaming/docs/en.md",
          "contentUrl": "project-content/rust-agent-shell/stages/04-streaming/docs/en.md",
          "tests": "projects/rust-agent-shell/stages/04-streaming/tests",
          "figures": [
            "pj-rust-agent-shell-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/rust-agent-shell",
      "readme": "projects/rust-agent-shell/README.md",
      "contentBase": "project-content/rust-agent-shell",
      "manifestHash": "2e747677e2e54dca3d3fba92c637ebca51cef8b9b552b5de0e883a16b7f71341",
      "figureScripts": [
        "figures/projects/rust-agent-shell.js"
      ]
    },
    {
      "id": "tool-call-firewall",
      "title": "Tool Call Firewall",
      "level": 4,
      "levelName": "Systems",
      "tagline": "Authorize structured tool requests before they cross a side-effect boundary.",
      "summary": "Build a deny-by-default policy evaluator with bounded arguments, role permissions, single-use approvals and a structured audit log. The artifact is a library gate; applications must place it before every real tool execution.",
      "usefulFor": [
        "An approval receipt proving exactly which operation was authorized and executed.",
        "The native CLI requires a trusted role from the invoking application."
      ],
      "youWillBuild": "An approval receipt proving exactly which operation was authorized and executed.",
      "hours": 8,
      "languages": [
        "Rust"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Validate an unambiguous call envelope",
        "Evaluate role and path policy",
        "Consume a request-bound approval once",
        "Record bounded audit evidence"
      ],
      "prerequisites": [
        {
          "title": "Tool schema design",
          "path": "phases/13-tools-and-protocols/05-tool-schema-design"
        },
        {
          "title": "Security and secrets audit",
          "path": "phases/17-infrastructure-and-production/25-security-secrets-audit"
        }
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-validate-an-unambiguous-call-envelope",
          "title": "Validate an unambiguous call envelope",
          "summary": "Parse a bounded four-field envelope using a pipe delimiter for this local exercise.",
          "hours": 2,
          "language": "rust",
          "difficulty": "starter",
          "concepts": [
            "Byte budget",
            "Envelope fields",
            "Control gate",
            "Call identity"
          ],
          "number": 1,
          "doc": "projects/tool-call-firewall/stages/01-validate-an-unambiguous-call-envelope/docs/en.md",
          "contentUrl": "project-content/tool-call-firewall/stages/01-validate-an-unambiguous-call-envelope/docs/en.md",
          "tests": "projects/tool-call-firewall/stages/01-validate-an-unambiguous-call-envelope/tests",
          "figures": [
            "pj-tool-call-firewall-1"
          ]
        },
        {
          "id": "02-evaluate-role-and-path-policy",
          "title": "Evaluate role and path policy",
          "summary": "Only reader and editor roles exist.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Known role",
            "Path components",
            "Tool permission",
            "Decision"
          ],
          "number": 2,
          "doc": "projects/tool-call-firewall/stages/02-evaluate-role-and-path-policy/docs/en.md",
          "contentUrl": "project-content/tool-call-firewall/stages/02-evaluate-role-and-path-policy/docs/en.md",
          "tests": "projects/tool-call-firewall/stages/02-evaluate-role-and-path-policy/tests",
          "figures": [
            "pj-tool-call-firewall-2"
          ]
        },
        {
          "id": "03-consume-a-request-bound-approval-once",
          "title": "Consume a request-bound approval once",
          "summary": "An approval is bound to the complete call identity supplied by a trusted application and is consumed only for an approval-required decision.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Decision gate",
            "Match identity",
            "Check unused",
            "Consume once"
          ],
          "number": 3,
          "doc": "projects/tool-call-firewall/stages/03-consume-a-request-bound-approval-once/docs/en.md",
          "contentUrl": "project-content/tool-call-firewall/stages/03-consume-a-request-bound-approval-once/docs/en.md",
          "tests": "projects/tool-call-firewall/stages/03-consume-a-request-bound-approval-once/tests",
          "figures": [
            "pj-tool-call-firewall-3"
          ]
        },
        {
          "id": "04-record-bounded-audit-evidence",
          "title": "Record bounded audit evidence",
          "summary": "Format a stable tab-separated audit row after the policy decision.",
          "hours": 2,
          "language": "rust",
          "difficulty": "core",
          "concepts": [
            "Unique call",
            "Capacity check",
            "Omit arguments",
            "Record decision"
          ],
          "number": 4,
          "doc": "projects/tool-call-firewall/stages/04-record-bounded-audit-evidence/docs/en.md",
          "contentUrl": "project-content/tool-call-firewall/stages/04-record-bounded-audit-evidence/docs/en.md",
          "tests": "projects/tool-call-firewall/stages/04-record-bounded-audit-evidence/tests",
          "figures": [
            "pj-tool-call-firewall-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/tool-call-firewall",
      "readme": "projects/tool-call-firewall/README.md",
      "contentBase": "project-content/tool-call-firewall",
      "manifestHash": "4defc1306fa19d3f294aee45cd4532358262cc5f5dbd3cde47561c6a9e76532a",
      "figureScripts": [
        "figures/projects/tool-call-firewall.js"
      ]
    },
    {
      "id": "browser-agent",
      "title": "Browser Agent",
      "level": 5,
      "levelName": "Frontier",
      "tagline": "A form-run receipt that checks the requested values before trusting the success banner.",
      "summary": "A form-run receipt that checks the requested values before trusting the success banner. Replace Driver with an adapter that implements observe, act and capture. Run cli.ts --live only after serving the authored fixture and setting BROWSE_BIN.",
      "hours": 8,
      "languages": [
        "TypeScript",
        "Python"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Turn DOM state into constrained actions",
        "Stop on completion, stalling or budget",
        "Verify screenshot pixels in Python",
        "Drive the real fixture and score the run"
      ],
      "prerequisites": [
        "Node 22.18+, Python 3, DOM labels, async functions, subprocess arguments and byte arrays. Live Chromium additionally requires an installed gstack browse executable."
      ],
      "youWillBuild": "A form-run receipt that checks the requested values before trusting the success banner.",
      "usefulFor": [
        "Replace Driver with an adapter that implements observe, act and capture. Run cli.ts --live only after serving the authored fixture and setting BROWSE_BIN."
      ],
      "demo": {
        "cwd": "solution",
        "command": [
          "node",
          "cli.ts",
          "--task",
          "samples/contact.json",
          "--output",
          "browser-run.json"
        ]
      },
      "stages": [
        {
          "id": "01-observations",
          "title": "Turn DOM state into constrained actions",
          "summary": "Read labels, values, disabled states and stable ids from a small form. Validate unique ids and field types. Choose one action at a time: fill the name, fill email, then click the uniquely identified Save request button. Page prose is never interpreted as instructions. Missing fields, ambiguous labels, dangerous buttons and unexpected origins cause an explicit blocked result.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "TypeScript expresses observations and an action union with no arbitrary-script action.",
          "concepts": [
            "parseObservation",
            "choose"
          ],
          "difficulty": "starter",
          "requires": [
            "node",
            "python3"
          ],
          "timeout": 90,
          "figure": "pj-browser-agent-1",
          "number": 1,
          "doc": "projects/browser-agent/stages/01-observations/docs/en.md",
          "contentUrl": "project-content/browser-agent/stages/01-observations/docs/en.md",
          "tests": "projects/browser-agent/stages/01-observations/tests",
          "figures": [
            "pj-browser-agent-1"
          ]
        },
        {
          "id": "02-bounded-loop",
          "title": "Stop on completion, stalling or budget",
          "summary": "Observe after every action. Stop if the state repeats, if policy blocks an action, or if the step budget is consumed. Completion requires the DOM success flag and a separate screenshot check. Trace every selected action before execution. The fixture backend is explicitly a simulator; it supplies deterministic observations to test the loop and does not claim browser coverage.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "An injected driver separates the policy from Chromium and enables deterministic failure tests.",
          "concepts": [
            "runAgent",
            "FixtureDriver"
          ],
          "difficulty": "core",
          "requires": [
            "node",
            "python3"
          ],
          "timeout": 90,
          "figure": "pj-browser-agent-2",
          "number": 2,
          "doc": "projects/browser-agent/stages/02-bounded-loop/docs/en.md",
          "contentUrl": "project-content/browser-agent/stages/02-bounded-loop/docs/en.md",
          "tests": "projects/browser-agent/stages/02-bounded-loop/tests",
          "figures": [
            "pj-browser-agent-2"
          ]
        },
        {
          "id": "03-visual-proof",
          "title": "Verify screenshot pixels in Python",
          "summary": "Read the PNG signature, chunk lengths and CRCs, then decompress a bounded image payload. Reverse PNG row filters and count green success pixels. Combine this visual signal with the DOM flag; neither alone is sufficient. This is a narrow pixel-state detector for the authored fixture, not OCR or general vision. Corrupt, oversized, interlaced and unsupported color formats fail explicitly.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Python stdlib can decode a bounded RGB/RGBA PNG without adding an imaging dependency.",
          "concepts": [
            "inspectPNG"
          ],
          "difficulty": "core",
          "requires": [
            "node",
            "python3"
          ],
          "timeout": 90,
          "figure": "pj-browser-agent-3",
          "number": 3,
          "doc": "projects/browser-agent/stages/03-visual-proof/docs/en.md",
          "contentUrl": "project-content/browser-agent/stages/03-visual-proof/docs/en.md",
          "tests": "projects/browser-agent/stages/03-visual-proof/tests",
          "figures": [
            "pj-browser-agent-3"
          ]
        },
        {
          "id": "04-real-browser",
          "title": "Drive the real fixture and score the run",
          "summary": "Serve fixture.html over loopback and navigate to it with gstack browse. GstackDriver reads DOM observations, fills labels, clicks the observed button and captures a real screenshot. Commands use argument arrays instead of a shell. Run the same bounded policy with --live and compare its trace with the fixture backend. Keep completion scores separate for simulated and real-browser runs.",
          "hours": 2,
          "language": "typescript",
          "languageWhy": "Node child-process argv calls adapt the same driver contract to the installed gstack browser.",
          "concepts": [
            "GstackDriver",
            "scoreRuns"
          ],
          "difficulty": "core",
          "requires": [
            "node",
            "python3"
          ],
          "timeout": 90,
          "figure": "pj-browser-agent-4",
          "number": 4,
          "doc": "projects/browser-agent/stages/04-real-browser/docs/en.md",
          "contentUrl": "project-content/browser-agent/stages/04-real-browser/docs/en.md",
          "tests": "projects/browser-agent/stages/04-real-browser/tests",
          "figures": [
            "pj-browser-agent-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/browser-agent",
      "readme": "projects/browser-agent/README.md",
      "contentBase": "project-content/browser-agent",
      "manifestHash": "9093139ca61677be40048994753eeec189c43ffe7622e2ef0101e8cda0b359e8",
      "figureScripts": [
        "figures/projects/browser-agent.js"
      ]
    },
    {
      "id": "distributed-eval-farm",
      "title": "Distributed Eval Farm Coordinator",
      "level": 5,
      "levelName": "Frontier",
      "tagline": "Partition cases, lease shards and aggregate bounded concurrent workers.",
      "summary": "Build a persistent same-host evaluation coordinator that partitions recorded predictions, leases shards to real worker processes, fences stale completions and retains dataset-bound receipts.",
      "usefulFor": [
        "Resume interrupted batch evaluations with exact dataset identity",
        "Inspect shard ownership, process receipts and stale-worker rejection"
      ],
      "youWillBuild": "Build a persistent same-host evaluation coordinator that partitions recorded predictions, leases shards to real worker processes, fences stale completions and retains dataset-bound receipts.",
      "hours": 8,
      "languages": [
        "Go"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Partition stable case identities",
        "Fence each shard lease",
        "Accept idempotent completion receipts",
        "Run a bounded local worker pool"
      ],
      "prerequisites": [
        "Go 1.22 or later on Linux or macOS",
        "Python 3.10 or later for the grader",
        "Go structs, pointers, errors and JSON files",
        "Goroutines, channels and context cancellation"
      ],
      "inspiredBy": [],
      "demo": {
        "command": [
          "go",
          "run",
          ".",
          "demo"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-partition-stable-case-identities",
          "title": "Partition stable case identities",
          "summary": "Assign each nonempty unique case ID to one of a positive number of shards using FNV-1a.",
          "hours": 2,
          "language": "go",
          "difficulty": "starter",
          "concepts": [
            "Stable ID",
            "Hash bytes",
            "Modulo count",
            "One partition"
          ],
          "number": 1,
          "doc": "projects/distributed-eval-farm/stages/01-partition-stable-case-identities/docs/en.md",
          "contentUrl": "project-content/distributed-eval-farm/stages/01-partition-stable-case-identities/docs/en.md",
          "tests": "projects/distributed-eval-farm/stages/01-partition-stable-case-identities/tests",
          "figures": [
            "pj-distributed-eval-farm-1"
          ]
        },
        {
          "id": "02-fence-each-shard-lease",
          "title": "Fence each shard lease",
          "summary": "A coordinator owns a lease record.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Unfinished shard",
            "Expiry check",
            "New owner",
            "Increment version"
          ],
          "number": 2,
          "doc": "projects/distributed-eval-farm/stages/02-fence-each-shard-lease/docs/en.md",
          "contentUrl": "project-content/distributed-eval-farm/stages/02-fence-each-shard-lease/docs/en.md",
          "tests": "projects/distributed-eval-farm/stages/02-fence-each-shard-lease/tests",
          "figures": [
            "pj-distributed-eval-farm-2"
          ]
        },
        {
          "id": "03-accept-idempotent-completion-receipts",
          "title": "Accept idempotent completion receipts",
          "summary": "A completion carries shard owner, lease version and a nonempty result.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Owner and version",
            "Lease boundary",
            "Result identity",
            "Idempotent receipt"
          ],
          "number": 3,
          "doc": "projects/distributed-eval-farm/stages/03-accept-idempotent-completion-receipts/docs/en.md",
          "contentUrl": "project-content/distributed-eval-farm/stages/03-accept-idempotent-completion-receipts/docs/en.md",
          "tests": "projects/distributed-eval-farm/stages/03-accept-idempotent-completion-receipts/tests",
          "figures": [
            "pj-distributed-eval-farm-3"
          ]
        },
        {
          "id": "04-run-a-bounded-local-worker-pool",
          "title": "Run a bounded local worker pool",
          "summary": "Compose the bounded pool with persistent leases and actual worker processes; retain scored case coverage and reject stale receipts.",
          "hours": 2,
          "language": "go",
          "difficulty": "core",
          "concepts": [
            "Bounded goroutines",
            "Unique dispatch",
            "Cooperative cancellation",
            "Stable results"
          ],
          "timeout": 120,
          "number": 4,
          "doc": "projects/distributed-eval-farm/stages/04-run-a-bounded-local-worker-pool/docs/en.md",
          "contentUrl": "project-content/distributed-eval-farm/stages/04-run-a-bounded-local-worker-pool/docs/en.md",
          "tests": "projects/distributed-eval-farm/stages/04-run-a-bounded-local-worker-pool/tests",
          "figures": [
            "pj-distributed-eval-farm-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/distributed-eval-farm",
      "readme": "projects/distributed-eval-farm/README.md",
      "contentBase": "project-content/distributed-eval-farm",
      "manifestHash": "8511be96a02b12a3364b84fffe134c9f33dd04b845a2c198a3df92b83d9ec5bc",
      "figureScripts": [
        "figures/projects/distributed-eval-farm.js"
      ]
    },
    {
      "id": "mini-decompiler",
      "title": "Mini Decompiler",
      "level": 5,
      "levelName": "Frontier",
      "tagline": "A decompiler for a defined x86-64 subset that turns functions in an object you compiled into structured C, then proves the output.",
      "summary": "A decompiler for a defined x86-64 subset that turns functions in an ELF relocatable object you compiled into structured C. It recompiles its own output, runs a differential test over an input grid, compares relocation-masked bytes and writes an evidence report that lists every unknown.",
      "hours": 18,
      "languages": [
        "Python"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "skills": [
        "Read ELF64 sections, symbols and RELA records",
        "Decode an x86-64 subset and check it against a disassembler listing",
        "Recover blocks, jump tables, dominators and loops",
        "Lift to an IR with explicit flags and build minimal SSA",
        "Fold copies, dead code and division by a constant",
        "Recover System V parameters, pointer and struct types and signedness",
        "Structure a graph into C without goto",
        "Prove the output with recompilation, a differential grid and masked bytes"
      ],
      "prerequisites": [
        "Python 3.10+ with the standard library only. clang is optional and enables the recompile and differential legs of stage 8.",
        "Lessons on ELF anatomy, disassembly and control flow, lifting to pseudocode, calling conventions, compiler idioms and rebuild-and-prove."
      ],
      "youWillBuild": "A decompiler that turns the functions of an x86-64 relocatable object you compiled into one C file, and an evidence report that says what was proved and what stays unknown.",
      "usefulFor": [
        "Run python3 -m minidec verify on your own object and its source. The command writes decompiled.c, recompiled.o and report.json; a CI job can fail on status fail or unknown."
      ],
      "demo": {
        "cwd": "solution",
        "command": [
          "python3",
          "-m",
          "minidec",
          "decompile",
          "../fixtures/samples-x86_64-O1.o"
        ]
      },
      "stages": [
        {
          "id": "01-elf-loader",
          "title": "Read an ELF relocatable object",
          "summary": "Validate the ELF64 header, read section headers, the symbol table and every RELA record, and cut each function out of .text with its relocations and its alignment padding. A PC-relative record points at S + A + (end of instruction - P), so a target is resolved only with the end of the instruction that holds the field.",
          "hours": 2,
          "language": "python",
          "languageWhy": "struct.unpack_from reads fixed-layout tables with explicit little-endian formats and no third-party parser.",
          "concepts": [
            "ElfObject",
            "ElfObject.function",
            "relocation_target"
          ],
          "difficulty": "starter",
          "timeout": 60,
          "figure": "pj-mini-decompiler-1",
          "number": 1,
          "doc": "projects/mini-decompiler/stages/01-elf-loader/docs/en.md",
          "contentUrl": "project-content/mini-decompiler/stages/01-elf-loader/docs/en.md",
          "tests": "projects/mini-decompiler/stages/01-elf-loader/tests",
          "figures": [
            "pj-mini-decompiler-1"
          ]
        },
        {
          "id": "02-decoder",
          "title": "Decode the x86-64 subset",
          "summary": "Decode legacy prefixes, REX, one and two byte opcodes, ModRM, SIB, displacements and immediates for the instructions the fixtures use. Record where the displacement and immediate fields sit so relocations can be matched to operands. Every instruction must agree with the captured disassembler listing by address, bytes and AT&T text.",
          "hours": 3,
          "language": "python",
          "languageWhy": "Integer bit operations and dataclasses express each encoding field directly.",
          "concepts": [
            "decode",
            "linear_sweep",
            "compare_with_objdump"
          ],
          "difficulty": "core",
          "timeout": 60,
          "figure": "pj-mini-decompiler-2",
          "number": 2,
          "doc": "projects/mini-decompiler/stages/02-decoder/docs/en.md",
          "contentUrl": "project-content/mini-decompiler/stages/02-decoder/docs/en.md",
          "tests": "projects/mini-decompiler/stages/02-decoder/tests",
          "figures": [
            "pj-mini-decompiler-2"
          ]
        },
        {
          "id": "03-control-flow",
          "title": "Recover control flow",
          "summary": "Follow control flow by recursive descent, resolve the position-independent jump table from its relocations and bounds check, split basic blocks, then compute dominators, dominance frontiers, post-dominators, back edges and natural loops. An indirect jump with no matching idiom stays unresolved and is reported.",
          "hours": 2,
          "language": "python",
          "languageWhy": "Dictionaries and sets carry the graph, and the iterative dominator algorithm needs no graph library.",
          "concepts": [
            "recursive_descent",
            "jump_table_resolver",
            "ControlFlowGraph",
            "dominance_frontiers"
          ],
          "difficulty": "core",
          "timeout": 60,
          "figure": "pj-mini-decompiler-3",
          "number": 3,
          "doc": "projects/mini-decompiler/stages/03-control-flow/docs/en.md",
          "contentUrl": "project-content/mini-decompiler/stages/03-control-flow/docs/en.md",
          "tests": "projects/mini-decompiler/stages/03-control-flow/tests",
          "figures": [
            "pj-mini-decompiler-3"
          ]
        },
        {
          "id": "04-lift-and-ssa",
          "title": "Lift to IR and build SSA",
          "summary": "Lift each instruction to a small IR in which flags are an ordinary variable, frame bookkeeping disappears and frame-pointer slots become locals. Place phi statements on iterated dominance frontiers and rename over the dominator tree so every value has one definition, with explicit casts where a narrow definition meets a wide use.",
          "hours": 3,
          "language": "python",
          "languageWhy": "Frozen dataclasses give hashable IR expressions that can be compared and rewritten.",
          "concepts": [
            "lift_instruction",
            "lift_function",
            "insert_phis",
            "rename"
          ],
          "difficulty": "core",
          "timeout": 60,
          "figure": "pj-mini-decompiler-4",
          "number": 4,
          "doc": "projects/mini-decompiler/stages/04-lift-and-ssa/docs/en.md",
          "contentUrl": "project-content/mini-decompiler/stages/04-lift-and-ssa/docs/en.md",
          "tests": "projects/mini-decompiler/stages/04-lift-and-ssa/tests",
          "figures": [
            "pj-mini-decompiler-4"
          ]
        },
        {
          "id": "05-optimize",
          "title": "Simplify and fold idioms",
          "summary": "Turn flag conditions into comparisons, propagate copies and constants, delete dead definitions, merge congruent phis and substitute single-use values without moving a load across a store. Recognize the multiply-and-shift form of signed division by a constant and fold it only when the multiplier, shift and error bound prove the divisor.",
          "hours": 2,
          "language": "python",
          "languageWhy": "Python integers have no width, so 32 and 64-bit wraparound is explicit and testable.",
          "concepts": [
            "magic_divisor",
            "optimize",
            "propagate_copies",
            "remove_dead_code"
          ],
          "difficulty": "core",
          "timeout": 60,
          "figure": "pj-mini-decompiler-5",
          "number": 5,
          "doc": "projects/mini-decompiler/stages/05-optimize/docs/en.md",
          "contentUrl": "project-content/mini-decompiler/stages/05-optimize/docs/en.md",
          "tests": "projects/mini-decompiler/stages/05-optimize/tests",
          "figures": [
            "pj-mini-decompiler-5"
          ]
        },
        {
          "id": "06-signature",
          "title": "Recover the signature and types",
          "summary": "A System V argument register read before any write is a parameter, and the highest one fixes the count. Coalesce phi webs into C variables, make a scaled element access a pointer to its element and constant offsets a struct, and choose signedness from the instructions that touch each value. Every choice carries its instruction evidence.",
          "hours": 2,
          "language": "python",
          "languageWhy": "Union-find over SSA keys and plain dictionaries keep each piece of type evidence inspectable.",
          "concepts": [
            "collect_params",
            "coalesce_webs",
            "infer_types",
            "recover_signature"
          ],
          "difficulty": "core",
          "timeout": 60,
          "figure": "pj-mini-decompiler-6",
          "number": 6,
          "doc": "projects/mini-decompiler/stages/06-signature/docs/en.md",
          "contentUrl": "project-content/mini-decompiler/stages/06-signature/docs/en.md",
          "tests": "projects/mini-decompiler/stages/06-signature/tests",
          "figures": [
            "pj-mini-decompiler-6"
          ]
        },
        {
          "id": "07-structure-and-emit",
          "title": "Structure the graph and emit C",
          "summary": "Match loops, two-way and n-way conditionals with the immediate post-dominator as the join, emit if, if-else, while, do-while and switch, and print C with recovered struct and table definitions. A region that matches no shape produces a counted goto, and every heuristic goes into the unknowns list.",
          "hours": 2,
          "language": "python",
          "languageWhy": "String assembly with an explicit precedence table keeps the emitted C readable and compilable.",
          "concepts": [
            "Structurer",
            "decompile",
            "decompile_all",
            "translation_unit"
          ],
          "difficulty": "stretch",
          "timeout": 90,
          "figure": "pj-mini-decompiler-7",
          "number": 7,
          "doc": "projects/mini-decompiler/stages/07-structure-and-emit/docs/en.md",
          "contentUrl": "project-content/mini-decompiler/stages/07-structure-and-emit/docs/en.md",
          "tests": "projects/mini-decompiler/stages/07-structure-and-emit/tests",
          "figures": [
            "pj-mini-decompiler-7"
          ]
        },
        {
          "id": "08-verify",
          "title": "Prove the output",
          "summary": "Recompile the emitted C with the fixture flags, compare each function with relocation fields masked, compare the constants each relocation points at, and run original and candidate side by side over an input grid that crosses limits, zero, negatives and compare constants. The report is fail-closed and lists every unknown. Without clang the recompile and differential legs skip and say why.",
          "hours": 2,
          "language": "python",
          "languageWhy": "subprocess drives clang and the generated C driver, and json writes the evidence report.",
          "concepts": [
            "mask_relocations",
            "compare_function_bytes",
            "input_grid",
            "verify"
          ],
          "difficulty": "stretch",
          "timeout": 180,
          "figure": "pj-mini-decompiler-8",
          "number": 8,
          "doc": "projects/mini-decompiler/stages/08-verify/docs/en.md",
          "contentUrl": "project-content/mini-decompiler/stages/08-verify/docs/en.md",
          "tests": "projects/mini-decompiler/stages/08-verify/tests",
          "figures": [
            "pj-mini-decompiler-8"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Decompile and verify",
          "caption": "Actual output of the decompile and verify commands on the committed O1 object. The verify leg needs clang on PATH."
        }
      ],
      "path": "projects/mini-decompiler",
      "readme": "projects/mini-decompiler/README.md",
      "contentBase": "project-content/mini-decompiler",
      "manifestHash": "371ace36b1106a296ba781f6b443ffd89f45047b44fcd952374c624200832d41",
      "figureScripts": [
        "figures/projects/mini-decompiler.js"
      ]
    },
    {
      "id": "self-improving-skill-loop",
      "title": "Self-Improving Skill Loop",
      "level": 5,
      "levelName": "Frontier",
      "tagline": "Improve an explicit routing skill from labeled development errors, then require a separate evaluation gate before promotion.",
      "summary": "Improve an explicit routing skill from labeled development errors, then require a separate evaluation gate before promotion.",
      "hours": 8,
      "languages": [
        "Python"
      ],
      "status": "ready",
      "source": "core",
      "author": {
        "name": "AI Engineering from Scratch",
        "github": "rohitg00"
      },
      "youWillBuild": "A correction-to-skill experiment runner preserving sources, preventing leakage and supporting rollback.",
      "usefulFor": [
        "A correction-to-skill experiment runner preserving sources, preventing leakage and supporting rollback.",
        "The experiment proposes deterministic routing rules from development data."
      ],
      "skills": [
        "Split labeled cases without identity leakage",
        "Execute and score a transparent routing skill",
        "Propose rules from development errors only",
        "Require a separate gate before promotion"
      ],
      "prerequisites": [
        {
          "title": "Model evaluation",
          "path": "phases/02-ml-fundamentals/09-model-evaluation"
        },
        {
          "title": "Repository memory and state",
          "path": "phases/14-agent-engineering/34-repo-memory-and-state"
        },
        {
          "title": "Verification gates",
          "path": "phases/14-agent-engineering/38-verification-gates"
        }
      ],
      "figures": true,
      "overviewFigure": "pj-self-improving-skill-loop-1",
      "languageWhy": {
        "Python": "Stdlib data structures, explicit algorithms and deterministic local tests."
      },
      "demo": {
        "command": [
          "python3",
          "demo.py"
        ],
        "cwd": "solution"
      },
      "stages": [
        {
          "id": "01-dataset",
          "title": "Split labeled cases without identity leakage",
          "summary": "Every case appears in exactly one partition; a repeated id stops the run.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "starter",
          "figure": "pj-self-improving-skill-loop-1",
          "concepts": [
            "split",
            "labeled",
            "cases",
            "without"
          ],
          "number": 1,
          "doc": "projects/self-improving-skill-loop/stages/01-dataset/docs/en.md",
          "contentUrl": "project-content/self-improving-skill-loop/stages/01-dataset/docs/en.md",
          "tests": "projects/self-improving-skill-loop/stages/01-dataset/tests",
          "figures": [
            "pj-self-improving-skill-loop-1"
          ]
        },
        {
          "id": "02-skill",
          "title": "Execute and score a transparent routing skill",
          "summary": "The rule [reset, password] matches reset password but does not match reset only.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-self-improving-skill-loop-2",
          "concepts": [
            "execute",
            "and",
            "score",
            "a"
          ],
          "number": 2,
          "doc": "projects/self-improving-skill-loop/stages/02-skill/docs/en.md",
          "contentUrl": "project-content/self-improving-skill-loop/stages/02-skill/docs/en.md",
          "tests": "projects/self-improving-skill-loop/stages/02-skill/tests",
          "figures": [
            "pj-self-improving-skill-loop-2"
          ]
        },
        {
          "id": "03-propose",
          "title": "Propose rules from development errors only",
          "summary": "A repeated refund token proposes billing; a token shared by two labels is rejected.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "core",
          "figure": "pj-self-improving-skill-loop-3",
          "concepts": [
            "propose",
            "rules",
            "from",
            "development"
          ],
          "number": 3,
          "doc": "projects/self-improving-skill-loop/stages/03-propose/docs/en.md",
          "contentUrl": "project-content/self-improving-skill-loop/stages/03-propose/docs/en.md",
          "tests": "projects/self-improving-skill-loop/stages/03-propose/tests",
          "figures": [
            "pj-self-improving-skill-loop-3"
          ]
        },
        {
          "id": "04-promotion",
          "title": "Require a separate gate before promotion",
          "summary": "A candidate that fixes one case but breaks a previously correct case cannot be promoted.",
          "language": "python",
          "languageWhy": "Python standard-library collections, bytes and file operations expose this stage directly.",
          "hours": 2,
          "difficulty": "stretch",
          "figure": "pj-self-improving-skill-loop-4",
          "concepts": [
            "require",
            "a",
            "separate",
            "gate"
          ],
          "number": 4,
          "doc": "projects/self-improving-skill-loop/stages/04-promotion/docs/en.md",
          "contentUrl": "project-content/self-improving-skill-loop/stages/04-promotion/docs/en.md",
          "tests": "projects/self-improving-skill-loop/stages/04-promotion/tests",
          "figures": [
            "pj-self-improving-skill-loop-4"
          ]
        }
      ],
      "demos": [
        {
          "gif": "media/run.gif",
          "poster": "media/run.png",
          "title": "Initialize and grade",
          "caption": "Recorded starter failure followed by all reference-solution stages passing. Reference passes do not earn learner certificates."
        },
        {
          "gif": "media/output.gif",
          "poster": "media/output.png",
          "title": "Inspect the output",
          "caption": "Actual output from the local deterministic demo command. See the README for fixture and live-adapter limits."
        }
      ],
      "path": "projects/self-improving-skill-loop",
      "readme": "projects/self-improving-skill-loop/README.md",
      "contentBase": "project-content/self-improving-skill-loop",
      "manifestHash": "a302835e3d3bc65aa4d94bb23300d675f99b8db00814701331f0e37f80aaa46f",
      "figureScripts": [
        "figures/projects/self-improving-skill-loop.js"
      ]
    }
  ],
  "planned": [
    {
      "id": "photo-burst-contact-sheet",
      "title": "Photo Burst Contact Sheet",
      "level": 1,
      "source": "core",
      "status": "planned",
      "track": "applications",
      "languages": [
        "Python"
      ],
      "tagline": "Compare similar photos before choosing what to keep.",
      "summary": "Help a creator review repeated shots by computing simple pixel fingerprints and an inspectable sharpness measure. Group candidate duplicates, preserve the photographer's final choice, and export a contact sheet plus a selection manifest for an editor.",
      "output": "HTML and PNG contact sheets, similarity explanations and selections.json",
      "prerequisiteProjects": [],
      "milestones": [
        "Decode images and preserve source dimensions",
        "Compute pixel fingerprints and sharpness measures",
        "Group similar shots for manual selection",
        "Export a contact sheet and editor selection manifest"
      ],
      "references": [],
      "distinctFrom": "Visual Evidence Library searches supplied text regions; this compares actual image pixels for photo selection.",
      "firstDemo": "Group original geometric scene images with blur, crop and exposure variations while leaving a different scene separate.",
      "originalFixture": "Original generated geometric scene images with explicitly authored transformations"
    },
    {
      "id": "dependency-upgrade-impact-map",
      "title": "Dependency Upgrade Impact Map",
      "level": 2,
      "source": "core",
      "status": "planned",
      "track": "platform",
      "languages": [
        "Python",
        "TypeScript"
      ],
      "tagline": "Show which call sites need attention when a dependency contract changes.",
      "summary": "Help a maintainer review an upgrade using supplied before/after API signatures and a bounded source parser. Map changed symbols to actual call sites, distinguish confirmed incompatibilities from unresolved uses, and emit a targeted test checklist. An optional model can explain evidence but cannot invent removed APIs.",
      "output": "Call-site impact graph, SARIF findings and targeted test checklist",
      "prerequisiteProjects": [
        "pr-review-reporter"
      ],
      "milestones": [
        "Read supplied old and new API contracts",
        "Index supported import and call-site forms",
        "Link changed signatures to affected code",
        "Export findings with unresolved cases visible"
      ],
      "references": [],
      "distinctFrom": "PR Review Reporter checks changed lines; this connects old and new dependency contracts to call sites throughout a repository.",
      "firstDemo": "Change an authored library signature and identify two affected callers plus one unresolved dynamic call."
    },
    {
      "id": "gesture-shortcut-pad",
      "title": "Gesture Shortcut Pad",
      "level": 2,
      "source": "core",
      "status": "planned",
      "track": "applications",
      "languages": [
        "TypeScript"
      ],
      "tagline": "Teach a small app your own drawn shortcuts.",
      "summary": "Help a presenter or educator control a local practice application with a few self-recorded gestures. Normalize pointer strokes, compare them with an explicit sequence-distance algorithm, expose uncertain matches, and export a portable gesture profile plus a small browser integration demo.",
      "output": "An interactive gesture pad, gesture-profile.json and label events for another browser app",
      "prerequisiteProjects": [],
      "milestones": [
        "Capture and normalize original pointer strokes",
        "Compare strokes with an inspectable distance function",
        "Review uncertain matches and add better examples",
        "Export the gesture profile and demonstrate app integration"
      ],
      "references": [],
      "distinctFrom": "Desktop Control executes coordinate actions; this learns labels from pointer gestures and integrates them into a local application.",
      "firstDemo": "Draw three original gesture classes to navigate a fictional slide deck and inspect an ambiguous stroke.",
      "originalFixture": "New recorded pointer strokes and a tiny authored browser slideshow"
    },
    {
      "id": "ci-failure-reproducer",
      "title": "CI Failure Reproducer",
      "level": 3,
      "source": "core",
      "status": "planned",
      "track": "platform",
      "languages": [
        "Python",
        "TypeScript"
      ],
      "tagline": "Turn a failed build log into a small, reviewable reproduction recipe.",
      "summary": "Help a contributor reproduce a failed job from an exported workflow log, commit identity and declared environment. Identify the first failing command, distinguish infrastructure failures from test failures, and produce an allowlisted local replay recipe. Retain the original log lines beside every generated instruction.",
      "output": "Reproduction manifest, shell-free replay CLI and HTML failure brief",
      "prerequisiteProjects": [
        "tiny-coding-agent",
        "pr-review-reporter"
      ],
      "milestones": [
        "Normalize job steps and source line ranges",
        "Separate the initiating failure from downstream noise",
        "Build an explicit replay recipe",
        "Run an approved local command and compare evidence"
      ],
      "references": [
        "https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs"
      ],
      "distinctFrom": "Tiny Coding Agent patches a local workspace; this recovers the environment and minimal replay steps from a failed CI job.",
      "firstDemo": "Reduce an authored failed job to a three-step local reproduction while retaining the original failure lines."
    },
    {
      "id": "label-adjudication-desk",
      "title": "Label Adjudication Desk",
      "level": 3,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Python",
        "TypeScript"
      ],
      "tagline": "Turn annotator disagreements into a traceable evaluation dataset.",
      "summary": "Help a small team create useful evaluation labels without silently replacing disagreement with majority vote. Import independently labeled records, blind annotator identities during review, group disagreements and capture an explicit final decision with its evidence. Export a local review page and versioned JSONL that preserves both original labels and adjudication history.",
      "output": "Local adjudication UI, agreement report and provenance-preserving labeled JSONL",
      "prerequisiteProjects": [
        "dataset-split-auditor",
        "feedback-theme-board"
      ],
      "milestones": [
        "Import independent labels and preserve record provenance",
        "Measure agreement and build a blinded review queue",
        "Capture evidence-backed adjudication decisions",
        "Export versioned labels with unresolved cases visible"
      ],
      "references": [],
      "distinctFrom": "Dataset Split Auditor checks dataset separation and Feedback Theme Board groups comments; this project produces accountable human reference labels for evaluations.",
      "firstDemo": "Review three disagreements in an authored annotation set and export both accepted decisions and one unresolved case.",
      "implementationBoundary": "Retain unresolved judgments and raw agreement counts. Inter-annotator agreement measures consistency, not the objective truth of a label."
    },
    {
      "id": "lost-item-match-desk",
      "title": "Lost Item Match Desk",
      "level": 3,
      "source": "core",
      "status": "planned",
      "track": "applications",
      "languages": [
        "Python"
      ],
      "tagline": "Compare likely item matches without pretending a score proves ownership.",
      "summary": "Help a community venue match lost-item descriptions with photographed found objects. Combine explicit text features, simple image-color descriptors and optional reviewed vision proposals, then export an HTML candidate-pair desk and a decision file for the venue's existing records.",
      "output": "An HTML object-pair review desk, feature explanations and match-decisions.json",
      "prerequisiteProjects": [
        "catalog-record-linker",
        "photo-burst-contact-sheet"
      ],
      "milestones": [
        "Import object descriptions, photos and intake identifiers",
        "Compute text and image features independently",
        "Rank candidate pairs and review conflicting evidence",
        "Export match decisions with their source records"
      ],
      "references": [],
      "distinctFrom": "Catalog Record Linker reconciles structured records; this teaches multimodal candidate matching with separate text and image evidence.",
      "firstDemo": "Compare original photos of two similar bottles and one umbrella against authored descriptions and leave an ambiguous bottle unresolved.",
      "originalFixture": "Original object-only photographs and fictional lost/found intake records"
    },
    {
      "id": "presentation-rehearsal-coach",
      "title": "Presentation Rehearsal Coach",
      "level": 3,
      "source": "core",
      "status": "planned",
      "track": "applications",
      "languages": [
        "Python"
      ],
      "tagline": "See which slide ideas your rehearsal actually covered.",
      "summary": "Help a speaker improve a rehearsal by aligning supplied slide text and timed transcript segments. Compute explicit pacing and topic-coverage signals, show the source phrases behind suggested practice targets, and export a slide-by-slide HTML report with a reusable rehearsal comparison file.",
      "output": "A slide-linked HTML rehearsal report, coverage.json and a comparison between two rehearsals",
      "prerequisiteProjects": [
        "voice-note-transcriber-pipeline",
        "semantic-notes-search"
      ],
      "milestones": [
        "Import slide text and timed rehearsal segments",
        "Align spoken segments to candidate slides",
        "Measure pacing and review apparent coverage gaps",
        "Export a rehearsal report and compare a second attempt"
      ],
      "references": [],
      "distinctFrom": "Meeting Notes to Actions extracts commitments; this aligns a speaker's delivery to planned visual material and supports deliberate rehearsal.",
      "firstDemo": "Compare two original three-slide rehearsals and identify a skipped definition with its supporting transcript ranges.",
      "originalFixture": "An original three-slide talk with two independently authored timed rehearsal transcripts"
    },
    {
      "id": "semantic-cache-correctness-lab",
      "title": "Semantic Cache Correctness Lab",
      "level": 3,
      "source": "core",
      "status": "planned",
      "track": "platform",
      "languages": [
        "Go",
        "Python"
      ],
      "tagline": "Measure when a similar question can reuse an answer and when it must miss.",
      "summary": "Build an opt-in answer cache that binds entries to tenant, model, source revision and expiry. Compare exact and semantic candidate matching using authored near-miss questions, including changed numbers and negation. Export a local HTTP adapter and a false-hit report; similarity alone must not authorize cross-user reuse.",
      "output": "Local cache adapter and false-hit, latency and invalidation report",
      "prerequisiteProjects": [
        "semantic-notes-search",
        "rag-freshness-pipeline"
      ],
      "milestones": [
        "Define identity, freshness and privacy boundaries",
        "Implement exact-match lookup and invalidation",
        "Evaluate semantic candidates against adversarial pairs",
        "Export a bounded HTTP adapter and reuse evidence"
      ],
      "references": [
        "https://www.rfc-editor.org/rfc/rfc9111.html"
      ],
      "distinctFrom": "RAG Freshness Pipeline versions source content; this decides whether a prior answer can be reused for a new query under identity and freshness constraints.",
      "firstDemo": "Show a cache hit for a paraphrase and a miss when the question changes a critical number or tenant."
    },
    {
      "id": "tool-contract-migration-checker",
      "title": "Tool Contract Migration Checker",
      "level": 3,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "TypeScript",
        "Python"
      ],
      "tagline": "Find the saved tool calls that a proposed schema change would break.",
      "summary": "Help tool authors evolve a callable interface while existing agents still hold old argument shapes. Compare a documented subset of before-and-after schemas, generate counterexamples for required fields and narrowed values, and replay saved calls through both validators. Export a compatibility report and reviewable migration fixtures for CI.",
      "output": "Schema compatibility CLI, breaking-call fixtures and CI report",
      "prerequisiteProjects": [
        "json-schema-output-guard"
      ],
      "milestones": [
        "Load versioned tool contracts and saved calls",
        "Classify supported schema changes",
        "Generate and replay breaking-call counterexamples",
        "Export migration fixtures and a compatibility gate"
      ],
      "references": [],
      "distinctFrom": "JSON Schema Output Guard validates one payload; this project reasons about compatibility between two tool contracts and supplies concrete calls that change validity. It does not map package upgrades to source call sites.",
      "firstDemo": "Add a required argument to a fictional catalog tool and generate a saved call that passes the old contract but fails the new one.",
      "implementationBoundary": "Publish the supported schema subset and mark unhandled keywords unresolved instead of declaring full JSON Schema compatibility."
    },
    {
      "id": "video-highlight-storyboard",
      "title": "Video Highlight Storyboard",
      "level": 3,
      "source": "core",
      "status": "planned",
      "track": "applications",
      "languages": [
        "Python"
      ],
      "tagline": "Review a clip sequence before spending time editing video.",
      "summary": "Help a tutorial creator assemble short excerpts from a supplied video, frame samples and timed transcript. Combine visible shot changes with transcript topic scores, preserve exact source time ranges, and export a playable storyboard and edit-decision JSON for a video editor.",
      "output": "A timestamped HTML storyboard, selected thumbnails and edit-decisions.json",
      "prerequisiteProjects": [
        "voice-note-transcriber-pipeline",
        "photo-burst-contact-sheet"
      ],
      "milestones": [
        "Align video metadata, frame samples and transcript time",
        "Generate shot and topic boundary candidates",
        "Review clip selections under a duration budget",
        "Export the storyboard and editor-facing time ranges"
      ],
      "references": [],
      "distinctFrom": "Voice Note Transcriber Pipeline creates captions; this combines visual and transcript timing to select an editable video sequence.",
      "firstDemo": "Select a concise introduction and demonstration from an original paper-folding tutorial without cutting a sentence midway.",
      "originalFixture": "An original short recorded craft tutorial, its authored transcript and explicit frame timestamps"
    },
    {
      "id": "a2a-task-handoff-workbench",
      "title": "A2A Task Handoff Workbench",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Python",
        "TypeScript"
      ],
      "tagline": "Trace a task as two independently running agents exchange work and artifacts.",
      "summary": "Help teams connect agents that expose different capabilities and task lifecycles. Read Agent Cards, choose a mutually supported binding, and run a handoff that includes a request for more input, cancellation and a final artifact. Export a local client-server pair and a replayable receipt showing every state transition and artifact owner.",
      "output": "Two local agent endpoints, handoff client and task/artifact replay bundle",
      "prerequisiteProjects": [
        "typed-workflow-agent-with-mastra",
        "agent-trace-debugger"
      ],
      "milestones": [
        "Read Agent Cards and select supported interfaces",
        "Create a task and preserve message identity",
        "Handle input requests and cancellation",
        "Exchange artifacts and replay the complete handoff"
      ],
      "references": [
        "https://a2a-protocol.org/latest/specification/"
      ],
      "distinctFrom": "Multi-Agent Code Review Panel coordinates local reviewers for one purpose; this project tests task exchange between independent protocol participants.",
      "firstDemo": "Have two local agents assemble an authored workshop brief, pause for one missing input and exchange the final artifact.",
      "implementationBoundary": "Select and pin the A2A protocol revision, binding and SDK versions at implementation time. Verify their wire compatibility and capability declarations with real local endpoints before claiming support; optional extensions remain explicit."
    },
    {
      "id": "abstention-calibration-workbench",
      "title": "Abstention Calibration Workbench",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Python"
      ],
      "tagline": "Choose when an assistant should defer using a measured error-versus-coverage tradeoff.",
      "summary": "Help teams set a defensible accept-or-defer rule for a bounded task. Tune a score threshold on labeled development records under explicit error costs, freeze that policy, and evaluate held-out risk and coverage across slices. Export a decision-policy file and audit that shows how many requests need human review.",
      "output": "Frozen accept/defer policy JSON, risk-coverage curves and held-out slice audit",
      "prerequisiteProjects": [
        "dataset-split-auditor",
        "local-model-eval-harness"
      ],
      "milestones": [
        "Validate separated development and holdout records",
        "Tune thresholds under declared error costs",
        "Freeze and evaluate the policy on holdout slices",
        "Export a decision adapter and review-volume estimate"
      ],
      "references": [],
      "distinctFrom": "Local Model Evaluation Harness reports model performance and calibration; this project turns scores into an operational defer policy with a separate threshold-selection phase.",
      "firstDemo": "Tune a defer threshold on an authored development split, freeze it and reveal its different coverage on the held-out split.",
      "implementationBoundary": "Input scores are not automatically probabilities. Report empirical results and uncertainty without promising a deployment-wide error bound from a small dataset."
    },
    {
      "id": "artifact-provenance-gate",
      "title": "Artifact Provenance Gate",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Go",
        "Python"
      ],
      "tagline": "Explain whether an artifact matches its signed build record and your trust policy.",
      "summary": "Help a maintainer inspect a downloaded agent plugin or release artifact before integrating it. Verify the subject digest and attestation signature, evaluate declared builder and source identities against an explicit policy, and preserve the reason for every rejection. Export a CI gate with authored signed fixtures and a separately verified external-verifier adapter.",
      "output": "Artifact verification CLI, trust-policy file and provenance decision JSON",
      "prerequisiteProjects": [
        "skill-installer",
        "skill-validator"
      ],
      "milestones": [
        "Bind artifact bytes to the attestation subject",
        "Verify signatures against an explicit trust root",
        "Evaluate builder and source-material policies",
        "Export a CI gate with reproducible rejection fixtures"
      ],
      "references": [
        "https://slsa.dev/spec/v1.2/provenance"
      ],
      "distinctFrom": "Cross-Agent Skill Installer writes a local skill package; this project checks artifact origin and build evidence before accepting a package or binary from an external build process.",
      "firstDemo": "Verify an authored signed artifact, then change one byte and separately reject a signature from an untrusted builder.",
      "implementationBoundary": "Pin the supported attestation formats and verifier versions. Provenance verification establishes particular origin claims, not content safety or automatic SLSA certification."
    },
    {
      "id": "context-compaction-verifier",
      "title": "Context Compaction Verifier",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Python",
        "Rust"
      ],
      "tagline": "Check which task constraints survive when an agent compresses its working context.",
      "summary": "Help agent developers avoid losing a user constraint during a long session. Track explicit facts and constraints with source locators, create an extractive compressed context, and test candidate summaries against a declared retention contract. Export compaction middleware that keeps the prior snapshot when required evidence disappears.",
      "output": "Compaction middleware, constraint-retention receipt and restorable context snapshots",
      "prerequisiteProjects": [
        "memory-server",
        "token-counter-and-cost-meter"
      ],
      "milestones": [
        "Build a source-linked fact and constraint ledger",
        "Create a bounded extractive context snapshot",
        "Check retention and authored contradiction cases",
        "Commit or restore context with an audit receipt"
      ],
      "references": [],
      "distinctFrom": "Persistent Memory Server stores persistent records; this project validates one active-session compression step against explicit constraints before replacing working context.",
      "firstDemo": "Compress an authored session whose required output format is easy to omit and restore the previous snapshot when that constraint disappears.",
      "implementationBoundary": "The baseline verifies explicit structured constraints and authored lexical relations. Optional model summaries require separate evaluation and do not turn these checks into general semantic-equivalence proof."
    },
    {
      "id": "local-inference-capacity-planner",
      "title": "Local Inference Capacity Planner",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "platform",
      "languages": [
        "Python",
        "Go"
      ],
      "tagline": "Measure how concurrency changes queueing, latency and successful local requests.",
      "summary": "Help a team choose a concurrency limit for its own model endpoint. Replay an authored arrival schedule, record queue wait separately from service time, and compare observed percentiles and timeouts across bounded runs. Export a capacity curve and editable operating limit based on measured requests, not model-name lookup tables.",
      "output": "Load-replay manifest, capacity curve and measured operating-limit receipt",
      "prerequisiteProjects": [
        "local-model-eval-harness",
        "agent-budget-planner"
      ],
      "milestones": [
        "Define an arrival schedule and resource limits",
        "Measure queue and service time independently",
        "Compare concurrency settings on the same workload",
        "Export a reproducible capacity decision"
      ],
      "references": [],
      "distinctFrom": "Local Model Evaluation Harness scores outputs; this measures queue behavior under controlled arrival schedules and concurrency.",
      "firstDemo": "Replay the same authored arrivals at three concurrency limits and compare queue wait with service latency."
    },
    {
      "id": "mcp-protocol-compatibility-doctor",
      "title": "MCP Compatibility Doctor",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "TypeScript",
        "Python"
      ],
      "tagline": "Find the first protocol disagreement between an MCP client and server.",
      "summary": "Help an integration author diagnose a client that connects but cannot use a server correctly. Run authored negotiation, request-correlation and capability probes through a bounded transport adapter. Export a compatibility matrix and the smallest wire transcript that explains a failure, with credentials removed.",
      "output": "Protocol probe CLI, compatibility JSON and redacted reproduction transcript",
      "prerequisiteProjects": [
        "mcp-at-scale",
        "agent-trace-debugger"
      ],
      "milestones": [
        "Record initialization and negotiated capabilities",
        "Probe supported operations and request correlation",
        "Reduce a failing exchange to its required messages",
        "Export a client-server compatibility receipt"
      ],
      "references": [
        "https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle"
      ],
      "distinctFrom": "MCP Tool Discovery Workbench teaches serving and discovering a tool inventory; this project diagnoses disagreements between independently implemented clients and servers.",
      "firstDemo": "Connect two authored local participants whose declared capabilities disagree and export the first failing exchange.",
      "implementationBoundary": "Pin the selected MCP specification revision and transport during implementation; validate probes against that revision and report unsupported capabilities explicitly. Planned probes are not a universal conformance certification."
    },
    {
      "id": "metamorphic-evaluation-workbench",
      "title": "Metamorphic Evaluation Workbench",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Python",
        "TypeScript"
      ],
      "tagline": "Test relationships between answers when a single golden answer is not enough.",
      "summary": "Help evaluators catch inconsistent behavior across related inputs. Author transformations such as unit conversion, record reordering and equivalent formatting, define the output relationship each should preserve, and shrink violating examples. Export a property-based evaluation runner and small failure bundles that can be consumed by CI.",
      "output": "Transformation/property runner, minimized counterexample JSON and CI results",
      "prerequisiteProjects": [
        "prompt-regression-tester",
        "json-schema-output-guard"
      ],
      "milestones": [
        "Define input transformations and expected relations",
        "Run paired cases with recorded response provenance",
        "Check relations and shrink violations",
        "Export reproducible property failures for CI"
      ],
      "references": [],
      "distinctFrom": "Prompt Regression Tester compares known cases across prompt revisions; this project generates related inputs and checks domain invariants between their outputs.",
      "firstDemo": "Reorder an authored table, change equivalent unit notation and isolate the transformation that violates the answer contract.",
      "implementationBoundary": "Relations are authored assumptions about a particular task. Passing them does not establish general model quality, and stochastic adapters must retain repeated-run evidence."
    },
    {
      "id": "oauth-resource-boundary-lab",
      "title": "OAuth Resource Boundary Lab",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Go",
        "TypeScript"
      ],
      "tagline": "Show why a valid token can still be wrong for the requested resource.",
      "summary": "Help developers integrate delegated authorization without accepting a token intended for another service. Build local authorization and resource fixtures, follow metadata discovery, bind authorization to the requested resource, and check audience and scope at the server. Export reusable validation middleware and a redacted explanation of rejected requests.",
      "output": "Local authorization fixture, resource-server middleware and authorization decision transcript",
      "prerequisiteProjects": [
        "mcp-at-scale",
        "tool-call-firewall"
      ],
      "milestones": [
        "Model the client, issuer and resource identities",
        "Discover metadata and bind a proof-key authorization flow",
        "Reject wrong audiences and insufficient scopes",
        "Integrate middleware and export redacted decisions"
      ],
      "references": [
        "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization",
        "https://www.rfc-editor.org/info/rfc8707/"
      ],
      "distinctFrom": "Tool Call Firewall checks a proposed tool action; this project establishes which resource and permissions a delegated credential actually authorizes.",
      "firstDemo": "Use a locally issued token against two fictional resources and explain why the second resource rejects it.",
      "implementationBoundary": "Pin the MCP authorization revision and underlying OAuth requirements before coding. Use a local issuer by default and verify any external identity-provider adapter separately; do not describe OAuth 2.1 draft material as a finalized RFC."
    },
    {
      "id": "outbound-request-policy-proxy",
      "title": "Outbound Request Policy Proxy",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Go"
      ],
      "tagline": "Explain every destination decision before an agent's HTTP request leaves the process.",
      "summary": "Help developers constrain a fetch tool that follows URLs supplied by untrusted documents. Evaluate the scheme, host, resolved address and each redirect, then connect using the validated destination under explicit size and time limits. Export a local egress adapter and loopback cases that reveal redirect and address-policy mistakes.",
      "output": "Policy-aware HTTP adapter, destination decision receipts and adversarial local fixtures",
      "prerequisiteProjects": [
        "llm-gateway-with-fallbacks",
        "tool-call-firewall"
      ],
      "milestones": [
        "Parse destinations and define address policies",
        "Bind resolution decisions to actual connections",
        "Revalidate redirects and bound responses",
        "Export an adapter and replay denied requests"
      ],
      "references": [],
      "distinctFrom": "LLM Gateway With Fallbacks selects configured providers; this project constrains network destinations for arbitrary URL-fetch operations, including redirect transitions.",
      "firstDemo": "Follow an authored local redirect chain whose final destination violates the declared address policy and inspect the blocked hop.",
      "implementationBoundary": "Document the supported DNS, proxy and network assumptions. A process-level adapter is not an operating-system sandbox or a guarantee about traffic that bypasses it."
    },
    {
      "id": "release-canary-decision-lab",
      "title": "Release Canary Decision Lab",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Python",
        "Go"
      ],
      "tagline": "Make a candidate release earn more traffic through visible evidence and stopping rules.",
      "summary": "Help a team decide whether an agent behavior change is ready for wider exposure. Assign stable request cohorts, compare candidate and baseline error and latency windows, and distinguish insufficient evidence from a failed gate. Export replayable decision receipts and a local shadow adapter that exercises the policy without deploying anything.",
      "output": "Canary policy runner, local shadow adapter and stop/continue/insufficient-evidence receipts",
      "prerequisiteProjects": [
        "harness-bench",
        "agent-trace-debugger"
      ],
      "milestones": [
        "Assign stable cohorts and define release signals",
        "Accumulate comparable baseline and candidate windows",
        "Apply minimum-sample and stopping rules",
        "Replay decisions through a local shadow adapter"
      ],
      "references": [],
      "distinctFrom": "Harness Bench compares policies on a fixed dataset; this project studies sequential release decisions, cohort assignment and evidence accumulated over time.",
      "firstDemo": "Replay authored baseline and candidate requests through windows that first lack evidence and then trigger an explicit stop decision.",
      "implementationBoundary": "Export recommendations only. State the chosen statistical assumptions and do not interpret a small passing window as universal release safety."
    },
    {
      "id": "secret-injection-sidecar",
      "title": "Secret Injection Sidecar",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Rust",
        "Python"
      ],
      "tagline": "Let an agent request an authenticated operation using an opaque credential handle.",
      "summary": "Help developers keep service credentials out of model-visible tool arguments and routine traces. Build a local broker that resolves opaque handles, binds each handle to a destination and operation, and inserts environment-supplied credentials at the network boundary. Test echoed credential markers and export decision receipts with bounded response filtering.",
      "output": "Local credential broker, handle-based client adapter and redacted request receipts",
      "prerequisiteProjects": [
        "tool-call-firewall",
        "rust-agent-shell"
      ],
      "milestones": [
        "Define opaque handles and destination-bound grants",
        "Inject credentials inside the broker boundary",
        "Exercise response and trace redaction fixtures",
        "Integrate a client using handles alone"
      ],
      "references": [],
      "distinctFrom": "Tool Call Firewall authorizes actions, while this project removes raw credentials from the agent-facing interface and tests the broker's observable boundaries.",
      "firstDemo": "Call a local fixture using an opaque handle and demonstrate that its exact echoed credential marker is absent from the returned trace.",
      "implementationBoundary": "Use environment secrets and loopback test services. Exact-marker filtering demonstrates a bounded property and cannot guarantee that an arbitrary upstream service never leaks a transformed secret."
    },
    {
      "id": "tenant-fairness-scheduler",
      "title": "Tenant Fairness Scheduler",
      "level": 4,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Rust",
        "Python"
      ],
      "tagline": "Keep one busy tenant from consuming the entire agent execution queue.",
      "summary": "Help platform developers share a finite worker pool across tenants with different job sizes. Implement weighted deficit scheduling, bounded admission and aging, then compare per-tenant wait distributions under authored bursts. Export a queue adapter and workload receipts that make starvation and unused capacity visible.",
      "output": "Fair queue adapter, workload replay CLI and per-tenant wait/throughput report",
      "prerequisiteProjects": [
        "durable-agent-jobs",
        "agent-budget-planner"
      ],
      "milestones": [
        "Represent tenant queues and declared job costs",
        "Implement weighted deficit scheduling",
        "Bound admission and detect starvation",
        "Compare fairness on replayed burst workloads"
      ],
      "references": [],
      "distinctFrom": "Agent Budget Planner accounts for caller-supplied usage and deadlines; this project decides which tenant receives the next shared execution slot and measures fairness.",
      "firstDemo": "Replay a burst from one fictional tenant while a second submits small jobs, then compare their waits under two queue policies.",
      "implementationBoundary": "Define fairness against declared or measured service units and expose errors in cost estimates. The local adapter does not claim distributed consensus."
    },
    {
      "id": "agent-resource-deadlock-lab",
      "title": "Agent Resource Deadlock Lab",
      "level": 5,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Rust",
        "TypeScript"
      ],
      "tagline": "Replay the exact resource-acquisition order that leaves cooperating agents stuck.",
      "summary": "Help developers coordinate agents that need several exclusive resources, such as a browser session and a workspace. Build wait-for graphs, explore bounded schedules, and compare ordered acquisition with timeout-and-release policies. Export deadlock traces and a resource-coordinator adapter with explicit acquisition receipts.",
      "output": "Bounded schedule explorer, deadlock replay traces and resource-coordinator adapter",
      "prerequisiteProjects": [
        "durable-agent-jobs",
        "multi-agent-code-review-panel"
      ],
      "milestones": [
        "Model resource ownership and wait-for edges",
        "Explore bounded interleavings and detect cycles",
        "Compare ordering and timeout-release policies",
        "Export a coordinator and replayable deadlock evidence"
      ],
      "references": [],
      "distinctFrom": "Durable Agent Jobs coordinates queue leases; this project studies circular wait when tasks hold multiple scarce resources while requesting others.",
      "firstDemo": "Replay two local agents acquiring a browser and workspace in opposite order, then demonstrate a schedule that completes.",
      "implementationBoundary": "A bounded explorer proves only the schedules it actually examines. Define resource semantics explicitly and distinguish deadlock from slow work, starvation and crashed ownership."
    },
    {
      "id": "judge-bias-calibration-lab",
      "title": "Judge Bias Calibration Lab",
      "level": 5,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Python",
        "TypeScript"
      ],
      "tagline": "Find when a judge prefers answer position or length over the evidence in its rubric.",
      "summary": "Help evaluators decide whether an automated pairwise judge is useful for their task. Blind candidate identities, swap answer positions, run authored length counterfactuals and compare decisions with held-out human anchors. Export disagreement and bias breakdowns plus a versioned rubric and judge configuration receipt.",
      "output": "Pairwise judging runner, bias scorecard and versioned rubric/configuration bundle",
      "prerequisiteProjects": [
        "report-judge",
        "dataset-split-auditor",
        "local-model-eval-harness"
      ],
      "milestones": [
        "Create blinded pairs and separated human anchors",
        "Run position swaps and length counterfactuals",
        "Measure disagreement and slice-specific bias",
        "Export a rubric with held-out validation evidence"
      ],
      "references": [],
      "distinctFrom": "Report Judge checks report evidence and citation support; this project evaluates the reliability and biases of the evaluator itself.",
      "firstDemo": "Swap the positions of two authored answers and expose a recorded judge that changes preference without new evidence.",
      "implementationBoundary": "Recorded judge responses form the offline baseline. Any live model judge must retain its model/configuration receipt, and calibration findings apply only to the tested task distribution."
    },
    {
      "id": "trajectory-counterexample-minimizer",
      "title": "Trajectory Counterexample Minimizer",
      "level": 5,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Rust",
        "Python"
      ],
      "tagline": "Reduce a long agent run to the smallest event sequence that still breaks a rule.",
      "summary": "Help agent developers diagnose failures that depend on action order. Express bounded temporal rules such as approval preceding an effect, check event traces, and remove irrelevant events while preserving declared causal dependencies. Export a minimal replay bundle with the violated rule and exact event identities.",
      "output": "Temporal trace checker, dependency-preserving reducer and minimal replay bundle",
      "prerequisiteProjects": [
        "agent-trace-debugger",
        "tool-call-firewall"
      ],
      "milestones": [
        "Normalize events and declared causal dependencies",
        "Check bounded temporal rules",
        "Minimize failures without breaking prerequisites",
        "Export the smallest reproducible violation"
      ],
      "references": [],
      "distinctFrom": "Agent Trace Debugger explains execution timing; this project checks event-order properties and automatically reduces a failing trajectory.",
      "firstDemo": "Reduce a twenty-event authored run to the approval and effect events that reproduce a stale-approval violation.",
      "implementationBoundary": "Causal preservation depends on recorded dependencies and the supported rule language. A minimal trace is relative to the chosen reducer and replay oracle, not a proof of global minimality."
    },
    {
      "id": "transactional-workspace-patch-broker",
      "title": "Transactional Workspace Patch Broker",
      "level": 5,
      "source": "core",
      "status": "planned",
      "track": "systems",
      "languages": [
        "Rust",
        "TypeScript"
      ],
      "tagline": "Publish a coordinated set of agent edits only when its input revision still matches.",
      "summary": "Help concurrent coding agents avoid overwriting each other's files halfway through a multi-file change. Bind a patch bundle to content hashes, apply it to a private versioned workspace, run declared checks, and publish by switching one workspace pointer. Export a transaction API with conflict evidence and an explicit rollback journal.",
      "output": "Workspace transaction API, reviewable patch bundle and conflict/rollback journal",
      "prerequisiteProjects": [
        "tiny-coding-agent",
        "sandbox-ladder"
      ],
      "milestones": [
        "Bind a multi-file patch to its input revision",
        "Stage edits in a private versioned workspace",
        "Reject conflicts and run declared validation",
        "Publish a workspace pointer and record rollback"
      ],
      "references": [],
      "distinctFrom": "Tiny Coding Agent teaches a coding loop; this project makes publication and conflicts explicit when several agents produce overlapping multi-file changes.",
      "firstDemo": "Let two local workers propose overlapping edits and show one complete publication alongside the other worker's revision conflict.",
      "implementationBoundary": "Atomicity applies to the versioned workspace pointer and readers that honor it. Do not claim arbitrary multi-file writes into an existing checkout are atomic."
    }
  ],
  "roles": [
    {
      "id": "agentic-ai-engineer",
      "title": "Agent Systems Engineering",
      "projects": [
        "tiny-coding-agent",
        "skill-router",
        "agent-trace-debugger",
        "memory-server",
        "tool-call-firewall",
        "durable-agent-jobs",
        "browser-agent"
      ]
    },
    {
      "id": "ai-data-engineer",
      "title": "AI Data Systems",
      "projects": [
        "csv-repair-workbench",
        "dataset-split-auditor",
        "dataset-contract-gate",
        "document-extraction-desk",
        "sensitive-text-redaction-gate",
        "rag-freshness-pipeline"
      ]
    },
    {
      "id": "ai-developer-relations-engineer",
      "title": "Developer Experience and Education",
      "projects": [
        "glossary-hovercard-publisher",
        "api-tutorial-runner",
        "changelog-writer-from-git",
        "plain-language-rewrite-desk",
        "diagram-reading-companion",
        "community-learning-path-finder"
      ]
    },
    {
      "id": "ai-evaluation-reliability-engineer",
      "title": "AI Evaluation and Reliability",
      "projects": [
        "prompt-regression-tester",
        "json-schema-output-guard",
        "retrieval-evaluation-lab",
        "local-model-eval-harness",
        "report-judge",
        "retry-storm-lab",
        "distributed-eval-farm"
      ]
    },
    {
      "id": "applied-ai-engineer",
      "title": "LLM Product Engineering",
      "projects": [
        "token-counter-and-cost-meter",
        "json-schema-output-guard",
        "doc-qa-with-citations",
        "research-report-agent",
        "llm-gateway-with-fallbacks",
        "streaming-answer-recovery"
      ]
    },
    {
      "id": "forward-deployed-ai-engineer",
      "title": "Customer AI Deployment",
      "projects": [
        "csv-repair-workbench",
        "inbox-triage-desk",
        "meeting-notes-to-actions",
        "document-extraction-desk",
        "support-agent-with-google-adk",
        "signed-webhook-inbox"
      ]
    }
  ]
};
