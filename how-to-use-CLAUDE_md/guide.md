Walk through the CLAUDE.md file containing AI coding rules, then implement a real feature from scratch, following a structured step-by-step process.

Be hands-on involved, push back on AI plans, stop it from going down the wrong rabbit hole, question the code, and test extensively.

AI Coding Process
My AI coding process follows the steps in my CLAUDE.md file:
1.  open Claude Code (terminal or VSCode extension)
2.  I typically start in “normal mode” (not Planning mode), then transition to “auto accept edits mode” when Claude starts coding
3.  type /clear to clear the context & start fresh
4.  type qnew to tell Claude to read my CLAUDE.md file and understand all best practices
5.  discuss my user story with Claude and make a plan, making sure to simplify it as much as possible, remove unnecessary features or optimizations, and question anything sketchy
6.  type qplan to tell Claude to analyze similar parts of the codebase and determine whether its plan:
	1.  is consistent with rest of codebase
	2.  introduces minimal changes
	3.  reuses existing code
7.  once I’m happy with the plan, I type qcode which tells Claude to:

```
Implement your plan and make sure your new tests pass.
Always run tests to make sure you didn't break anything else.
Always run `prettier` on the newly created files to ensure standard formatting.
Always run `turbo typecheck lint` to make sure type checking and linting passes.
```
8.  I use the shortcuts qcheck, qcheckf, and qcheckt pretty frequently after Claude starts writing code. They instruct Claude to review its code changes, ensuring they adhere to my best practices checklists from the CLAUDE.md file. qcheckf focuses on functions that were added or changed, while qcheckt focuses on tests. Still far from perfect, but definitely 10x better than without it!
9.  I open the working tree and view Claude’s real-time edits to files, so I can follow along with its thought process and its proposed changes. I look for things like:
	1.  spaghetti code, i.e. code blocks that aren’t easy to follow
	2.  substantial changes to API or backend functionality
	3.  unnecessary imports, functions, comments, etc.
10.  When I’m happy with the code, I type qux which tells Claude:

```
Imagine you are a human UX tester of the feature you implemented. 
Output a comprehensive list of scenarios you would test, sorted by highest priority.
```
This is super helpful because it outputs a UX testing list like this, which I test one-by-one: ![Image](https://substackcdn.com/image/fetch/$s_!o6mg!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe49c5ca4-e001-4188-bb5b-5d8198cf7cdf_580x780.png)
11.  The very last step is to commit changes and push. I type qgit and Claude Code writes a nice commit message following Conventional Commits format.
In the YouTube video, I walk through this entire process implementing a real feature in my codebase. Watch it here: [YouTube Video](https://www.youtube.com/watch?v=SDiDkK0r-9c)



All credits to [sabrina.dev](https://www.sabrina.dev/p/ultimate-ai-coding-guide-claude-code) for sharing their work.