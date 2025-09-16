# API

> Follow along with updates across Anthropic's API and Developer Console.

#### September 10, 2025

* We've launched the web fetch tool in beta, allowing Claude to retrieve full content from specified web pages and PDF documents. Learn more in our [web fetch tool documentation](/en/docs/agents-and-tools/tool-use/web-fetch-tool).
* We've launched the [Claude Code Analytics API](/en/api/claude-code-analytics-api), enabling organizations to programmatically access daily aggregated usage metrics for Claude Code, including productivity metrics, tool usage statistics, and cost data.

#### September 8, 2025

* We launched a beta version of the [C# SDK](https://github.com/anthropics/anthropic-sdk-csharp).

#### September 5, 2025

* We've launched [rate limit charts](/en/api/rate-limits#monitoring-your-rate-limits-in-the-console) in the Console [Usage](https://console.anthropic.com/settings/usage) page, allowing you to monitor your API rate limit usage and caching rates over time.

#### September 3, 2025

* We've launched support for citable documents in client-side tool results. Learn more in our [tool use documentation](en/docs/agents-and-tools/tool-use/implement-tool-use.mdx).

#### September 2, 2025

* We've launched v2 of the [Code Execution Tool](/en/docs/agents-and-tools/tool-use/code-execution-tool) in public beta, replacing the original Python-only tool with Bash command execution and direct file manipulation capabilities, including writing code in other languages.

#### August 27, 2025

* We launched a beta version of the [PHP SDK](https://github.com/anthropics/anthropic-sdk-php).

#### August 26, 2025

* We've increased rate limits on the [1M token context window](/en/docs/build-with-claude/context-windows#1m-token-context-window) for Claude Sonnet 4 on the Anthropic API. For more information, see [Long context rate limits](/en/api/rate-limits#long-context-rate-limits).
* The 1m token context window is now available on Google Cloud's Vertex AI. For more information, see [Claude on Vertex AI](/en/api/claude-on-vertex-ai).

#### August 19, 2025

* Request IDs are now included directly in error response bodies alongside the existing `request-id` header. Learn more in our [error documentation](/en/api/errors#error-shapes).

#### August 18, 2025

* We've released the [Usage & Cost API](/en/api/usage-cost-api), allowing administrators to programmatically monitor their organization's usage and cost data.
* We've added a new endpoint to the Admin API for retrieving organization information. For details, see the [Organization Info Admin API reference](/en/api/admin-api/organization/get-me).

#### August 13, 2025

* We announced the deprecation of the Claude Sonnet 3.5 models (`claude-3-5-sonnet-20240620` and `claude-3-5-sonnet-20241022`). These models will be retired on October 22, 2025. We recommend migrating to Claude Sonnet 4 (`claude-sonnet-4-20250514`) for improved performance and capabilities. Read more in the [Model deprecations documentation](/en/docs/about-claude/model-deprecations).
* The 1-hour cache duration for prompt caching is now generally available. You can now use the extended cache TTL without a beta header. Learn more in our [prompt caching documentation](/en/docs/build-with-claude/prompt-caching#1-hour-cache-duration).

#### August 12, 2025

* We've launched beta support for a [1M token context window](/en/docs/build-with-claude/context-windows#1m-token-context-window) in Claude Sonnet 4 on the Anthropic API and Amazon Bedrock.

#### August 11, 2025

* Some customers might encounter 429 (`rate_limit_error`) [errors](/en/api/errors) following a sharp increase in API usage due to acceleration limits on the API. Previously, 529 (`overloaded_error`) errors would occur in similar scenarios.

#### August 8, 2025

* Search result content blocks are now generally available on the Anthropic API and Google Cloud's Vertex AI. This feature enables natural citations for RAG applications with proper source attribution. The beta header `search-results-2025-06-09` is no longer required. Learn more in our [search results documentation](/en/docs/build-with-claude/search-results).

#### August 5, 2025

* We've launched [Claude Opus 4.1](https://www.anthropic.com/news/claude-opus-4-1), an incremental update to Claude Opus 4 with enhanced capabilities and performance improvements.<sup>\*</sup> Learn more in our [Models & Pricing documentation](/en/docs/about-claude/models).

*<sup>\* - Opus 4.1 does not allow both `temperature` and `top_p` parameters to be specified. Please use only one. </sup>*

#### July 28, 2025

* We've released `text_editor_20250728`, an updated text editor tool that fixes some issues from the previous versions and adds an optional `max_characters` parameter that allows you to control the truncation length when viewing large files.

#### July 24, 2025

* We've increased [rate limits](/en/api/rate-limits) for Claude Opus 4 on the Anthropic API to give you more capacity to build and scale with Claude. For customers with [usage tier 1-4 rate limits](/en/api/rate-limits#rate-limits), these changes apply immediately to your account - no action needed.

#### July 21, 2025

* We've retired the Claude 2.0, Claude 2.1, and Claude Sonnet 3 models. All requests to these models will now return an error. Read more in [our documentation](/en/docs/about-claude/model-deprecations).

#### July 17, 2025

* We've increased [rate limits](/en/api/rate-limits) for Claude Sonnet 4 on the Anthropic API to give you more capacity to build and scale with Claude. For customers with [usage tier 1-4 rate limits](/en/api/rate-limits#rate-limits), these changes apply immediately to your account - no action needed.

#### July 3, 2025

* We've launched search result content blocks in beta, enabling natural citations for RAG applications. Tools can now return search results with proper source attribution, and Claude will automatically cite these sources in its responses - matching the citation quality of web search. This eliminates the need for document workarounds in custom knowledge base applications. Learn more in our [search results documentation](/en/docs/build-with-claude/search-results). To enable this feature, use the beta header `search-results-2025-06-09`.

#### June 30, 2025

* We announced the deprecation of the Claude Opus 3 model. Read more in [our documentation](/en/docs/about-claude/model-deprecations).

#### June 23, 2025

* Console users with the Developer role can now access the [Cost](https://console.anthropic.com/settings/cost) page. Previously, the Developer role allowed access to the [Usage](https://console.anthropic.com/settings/usage) page, but not the Cost page.

#### June 11, 2025

* We've launched [fine-grained tool streaming](/en/docs/agents-and-tools/tool-use/fine-grained-tool-streaming) in public beta, a feature that enables Claude to stream tool use parameters without buffering / JSON validation. To enable fine-grained tool streaming, use the [beta header](/en/api/beta-headers) `fine-grained-tool-streaming-2025-05-14`.

#### May 22, 2025

* We've launched [Claude Opus 4 and Claude Sonnet 4](http://www.anthropic.com/news/claude-4), our latest models with extended thinking capabilities. Learn more in our [Models & Pricing documentation](/en/docs/about-claude/models).
* The default behavior of [extended thinking](/en/docs/build-with-claude/extended-thinking) in Claude 4 models returns a summary of Claude's full thinking process, with the full thinking encrypted and returned in the `signature` field of `thinking` block output.
* We've launched [interleaved thinking](/en/docs/build-with-claude/extended-thinking#interleaved-thinking) in public beta, a feature that enables Claude to think in between tool calls. To enable interleaved thinking, use the [beta header](/en/api/beta-headers) `interleaved-thinking-2025-05-14`.
* We've launched the [Files API](/en/docs/build-with-claude/files) in public beta, enabling you to upload files and reference them in the Messages API and code execution tool.
* We've launched the [Code execution tool](/en/docs/agents-and-tools/tool-use/code-execution-tool) in public beta, a tool that enables Claude to execute Python code in a secure, sandboxed environment.
* We've launched the [MCP connector](/en/docs/agents-and-tools/mcp-connector) in public beta, a feature that allows you to connect to remote MCP servers directly from the Messages API.
* To increase answer quality and decrease tool errors, we've changed the default value for the `top_p` [nucleus sampling](https://en.wikipedia.org/wiki/Top-p_sampling) parameter in the Messages API from 0.999 to 0.99 for all models. To revert this change, set `top_p` to 0.999.
  Additionally, when extended thinking is enabled, you can now set `top_p` to values between 0.95 and 1.
* We've moved our [Go SDK](https://github.com/anthropics/anthropic-sdk-go) from beta to GA.
* We've included minute and hour level granularity to the [Usage](https://console.anthropic.com/settings/usage) page of Console alongside 429 error rates on the Usage page.

#### May 21, 2025

* We've moved our [Ruby SDK](https://github.com/anthropics/anthropic-sdk-ruby) from beta to GA.

#### May 7, 2025

* We've launched a web search tool in the API, allowing Claude to access up-to-date information from the web. Learn more in our [web search tool documentation](/en/docs/agents-and-tools/tool-use/web-search-tool).

#### May 1, 2025

* Cache control must now be specified directly in the parent `content` block of `tool_result` and `document.source`. For backwards compatibility, if cache control is detected on the last block in `tool_result.content` or `document.source.content`, it will be automatically applied to the parent block instead. Cache control on any other blocks within `tool_result.content` and `document.source.content` will result in a validation error.

#### April 9th, 2025

* We launched a beta version of the [Ruby SDK](https://github.com/anthropics/anthropic-sdk-ruby)

#### March 31st, 2025

* We've moved our [Java SDK](https://github.com/anthropics/anthropic-sdk-java) from beta to GA.
* We've moved our [Go SDK](https://github.com/anthropics/anthropic-sdk-go) from alpha to beta.

#### February 27th, 2025

* We've added URL source blocks for images and PDFs in the Messages API. You can now reference images and PDFs directly via URL instead of having to base64-encode them. Learn more in our [vision documentation](/en/docs/build-with-claude/vision) and [PDF support documentation](/en/docs/build-with-claude/pdf-support).
* We've added support for a `none` option to the `tool_choice` parameter in the Messages API that prevents Claude from calling any tools. Additionally, you're no longer required to provide any `tools` when including `tool_use` and `tool_result` blocks.
* We've launched an OpenAI-compatible API endpoint, allowing you to test Claude models by changing just your API key, base URL, and model name in existing OpenAI integrations. This compatibility layer supports core chat completions functionality. Learn more in our [OpenAI SDK compatibility documentation](/en/api/openai-sdk).

#### February 24th, 2025

* We've launched [Claude Sonnet 3.7](http://www.anthropic.com/news/claude-3-7-sonnet), our most intelligent model yet. Claude Sonnet 3.7 can produce near-instant responses or show its extended thinking step-by-step. One model, two ways to think. Learn more about all Claude models in our [Models & Pricing documentation](/en/docs/about-claude/models).
* We've added vision support to Claude Haiku 3.5, enabling the model to analyze and understand images.
* We've released a token-efficient tool use implementation, improving overall performance when using tools with Claude. Learn more in our [tool use documentation](/en/docs/agents-and-tools/tool-use/overview).
* We've changed the default temperature in the [Console](https://console.anthropic.com/workbench) for new prompts from 0 to 1 for consistency with the default temperature in the API. Existing saved prompts are unchanged.
* We've released updated versions of our tools that decouple the text edit and bash tools from the computer use system prompt:
  * `bash_20250124`: Same functionality as previous version but is independent from computer use. Does not require a beta header.
  * `text_editor_20250124`: Same functionality as previous version but is independent from computer use. Does not require a beta header.
  * `computer_20250124`: Updated computer use tool with new command options including "hold\_key", "left\_mouse\_down", "left\_mouse\_up", "scroll", "triple\_click", and "wait". This tool requires the "computer-use-2025-01-24" anthropic-beta header.
    Learn more in our [tool use documentation](/en/docs/agents-and-tools/tool-use/overview).

#### February 10th, 2025

* We've added the `anthropic-organization-id` response header to all API responses. This header provides the organization ID associated with the API key used in the request.

#### January 31st, 2025

* We've moved our [Java SDK](https://github.com/anthropics/anthropic-sdk-java) from alpha to beta.

#### January 23rd, 2025

* We've launched citations capability in the API, allowing Claude to provide source attribution for information. Learn more in our [citations documentation](/en/docs/build-with-claude/citations).
* We've added support for plain text documents and custom content documents in the Messages API.

#### January 21st, 2025

* We announced the deprecation of the Claude 2, Claude 2.1, and Claude Sonnet 3 models. Read more in [our documentation](/en/docs/about-claude/model-deprecations).

#### January 15th, 2025

* We've updated [prompt caching](/en/docs/build-with-claude/prompt-caching) to be easier to use. Now, when you set a cache breakpoint, we'll automatically read from your longest previously cached prefix.
* You can now put words in Claude's mouth when using tools.

#### January 10th, 2025

* We've optimized support for [prompt caching in the Message Batches API](/en/docs/build-with-claude/batch-processing#using-prompt-caching-with-message-batches) to improve cache hit rate.

#### December 19th, 2024

* We've added support for a [delete endpoint](/en/api/deleting-message-batches) in the Message Batches API

#### December 17th, 2024

The following features are now generally available in the Anthropic API:

* [Models API](/en/api/models-list): Query available models, validate model IDs, and resolve [model aliases](/en/docs/about-claude/models#model-names) to their canonical model IDs.
* [Message Batches API](/en/docs/build-with-claude/batch-processing): Process large batches of messages asynchronously at 50% of the standard API cost.
* [Token counting API](/en/docs/build-with-claude/token-counting): Calculate token counts for Messages before sending them to Claude.
* [Prompt Caching](/en/docs/build-with-claude/prompt-caching): Reduce costs by up to 90% and latency by up to 80% by caching and reusing prompt content.
* [PDF support](/en/docs/build-with-claude/pdf-support): Process PDFs to analyze both text and visual content within documents.

We also released new official SDKs:

* [Java SDK](https://github.com/anthropics/anthropic-sdk-java) (alpha)
* [Go SDK](https://github.com/anthropics/anthropic-sdk-go) (alpha)

#### December 4th, 2024

* We've added the ability to group by API key to the [Usage](https://console.anthropic.com/settings/usage) and [Cost](https://console.anthropic.com/settings/cost) pages of the [Developer Console](https://console.anthropic.com)
* We've added two new **Last used at** and **Cost** columns and the ability to sort by any column in the [API keys](https://console.anthropic.com/settings/keys) page of the [Developer Console](https://console.anthropic.com)

#### November 21st, 2024

* We've released the [Admin API](/en/api/administration-api), allowing users to programmatically manage their organization's resources.

### November 20th, 2024

* We've updated our rate limits for the Messages API. We've replaced the tokens per minute rate limit with new input and output tokens per minute rate limits. Read more in our [documentation](/en/api/rate-limits).
* We've added support for [tool use](/en/docs/agents-and-tools/tool-use/overview) in the [Workbench](https://console.anthropic.com/workbench).

### November 13th, 2024

* We've added PDF support for all Claude Sonnet 3.5 models. Read more in our [documentation](/en/docs/build-with-claude/pdf-support).

### November 6th, 2024

* We've retired the Claude 1 and Instant models. Read more in [our documentation](/en/docs/about-claude/model-deprecations).

#### November 4th, 2024

* [Claude Haiku 3.5](https://www.anthropic.com/claude/haiku) is now available on the Anthropic API as a text-only model.

#### November 1st, 2024

* We've added PDF support for use with the new Claude Sonnet 3.5. Read more in our [documentation](/en/docs/build-with-claude/pdf-support).
* We've also added token counting, which allows you to determine the total number of tokens in a Message, prior to sending it to Claude. Read more in our [documentation](/en/docs/build-with-claude/token-counting).

#### October 22nd, 2024

* We've added Anthropic-defined computer use tools to our API for use with the new Claude Sonnet 3.5. Read more in our [documentation](/en/docs/agents-and-tools/tool-use/computer-use-tool).
* Claude Sonnet 3.5, our most intelligent model yet, just got an upgrade and is now available on the Anthropic API. Read more [here](https://www.anthropic.com/claude/sonnet).

#### October 8th, 2024

* The Message Batches API is now available in beta. Process large batches of queries asynchronously in the Anthropic API for 50% less cost. Read more in our [documentation](/en/docs/build-with-claude/batch-processing).
* We've loosened restrictions on the ordering of `user`/`assistant` turns in our Messages API. Consecutive `user`/`assistant` messages will be combined into a single message instead of erroring, and we no longer require the first input message to be a `user` message.
* We've deprecated the Build and Scale plans in favor of a standard feature suite (formerly referred to as Build), along with additional features that are available through sales. Read more [here](https://www.anthropic.com/api).

#### October 3rd, 2024

* We've added the ability to disable parallel tool use in the API. Set `disable_parallel_tool_use: true` in the `tool_choice` field to ensure that Claude uses at most one tool. Read more in our [documentation](/en/docs/agents-and-tools/tool-use/implement-tool-use#parallel-tool-use).

#### September 10th, 2024

* We've added Workspaces to the [Developer Console](https://console.anthropic.com). Workspaces allow you to set custom spend or rate limits, group API keys, track usage by project, and control access with user roles. Read more in our [blog post](https://www.anthropic.com/news/workspaces).

#### September 4th, 2024

* We announced the deprecation of the Claude 1 models. Read more in [our documentation](/en/docs/about-claude/model-deprecations).

#### August 22nd, 2024

* We've added support for usage of the SDK in browsers by returning CORS headers in the API responses. Set `dangerouslyAllowBrowser: true` in the SDK instantiation to enable this feature.

#### August 19th, 2024

* We've moved 8,192 token outputs from beta to general availability for Claude Sonnet 3.5.

#### August 14th, 2024

* [Prompt caching](/en/docs/build-with-claude/prompt-caching) is now available as a beta feature in the Anthropic API. Cache and re-use prompts to reduce latency by up to 80% and costs by up to 90%.

#### July 15th, 2024

* Generate outputs up to 8,192 tokens in length from Claude Sonnet 3.5 with the new `anthropic-beta: max-tokens-3-5-sonnet-2024-07-15` header.

#### July 9th, 2024

* Automatically generate test cases for your prompts using Claude in the [Developer Console](https://console.anthropic.com).
* Compare the outputs from different prompts side by side in the new output comparison mode in the [Developer Console](https://console.anthropic.com).

#### June 27th, 2024

* View API usage and billing broken down by dollar amount, token count, and API keys in the new [Usage](https://console.anthropic.com/settings/usage) and [Cost](https://console.anthropic.com/settings/cost) tabs in the [Developer Console](https://console.anthropic.com).
* View your current API rate limits in the new [Rate Limits](https://console.anthropic.com/settings/limits) tab in the [Developer Console](https://console.anthropic.com).

#### June 20th, 2024

* [Claude Sonnet 3.5](http://anthropic.com/news/claude-3-5-sonnet), our most intelligent model yet, is now generally available across the Anthropic API, Amazon Bedrock, and Google Vertex AI.

#### May 30th, 2024

* [Tool use](/en/docs/agents-and-tools/tool-use/overview) is now generally available across the Anthropic API, Amazon Bedrock, and Google Vertex AI.

#### May 10th, 2024

* Our prompt generator tool is now available in the [Developer Console](https://console.anthropic.com). Prompt Generator makes it easy to guide Claude to generate a high-quality prompts tailored to your specific tasks. Read more in our [blog post](https://www.anthropic.com/news/prompt-generator).
