# Workspace Agents

This directory contains 109 workspace-scoped VS Code custom agents. Each agent is a focused role that can be selected directly from the agent picker or invoked as a subagent when its description matches the task.

## File Convention

- Agent files use `snake_case.agent.md` names.
- YAML `name:` matches the filename stem exactly.
- `README.md` is documentation only and is not an agent.

## Frontmatter Policy

Every agent uses this baseline frontmatter:

```yaml
---
name: example_agent
description: "Use when designing, reviewing, debugging, or implementing a clearly scoped task this agent specializes in."
user-invocable: true
argument-hint: "Describe the task, relevant files, constraints, and expected output."
---
```

Field decisions:

- `name` is explicit so agent discovery is stable across file moves.
- `description` is the main discovery surface; keep it trigger-focused and keyword-rich, preferably starting with `Use when`.
- `user-invocable: true` makes picker behavior explicit.
- `argument-hint` gives a consistent prompt shape without constraining the agent.
- `tools` is intentionally omitted so agents inherit the default tool surface instead of being artificially limited.
- `model` is intentionally omitted so the active picker/default model and future model routing can work without mass edits.
- `agents`, `handoffs`, and `hooks` should be added only when a specific workflow needs them.

## Body Pattern

Most agents use a compact structure: purpose, focus areas, constraints, approach, and output. Keep bodies concise enough to guide behavior without burying the trigger conditions or consuming unnecessary context.

## Available Agents

| Agent | Specialty |
| :---- | :-------- |
| [accessibility_tester](accessibility_tester.agent.md) | Use when working on WCAG compliance, inclusive design, and universal access, including screen reader compatibility, keyboard navigation, and assistive technology integration, with emphasis on creating barrier-free digital experiences. |
| [agent_installer](agent_installer.agent.md) | Use when browsing, searching, installing, or removing Claude Code agents from the awesome-claude-code-subagents community collection. |
| [ai_engineer](ai_engineer.agent.md) | Use when working on AI system design, model implementation, and production deployment, including multiple AI frameworks and tools, with emphasis on building scalable, efficient, and ethical AI solutions from research to production. |
| [angular_architect](angular_architect.agent.md) | Use when working on Angular 15+ with enterprise patterns, including RxJS, NgRx state management, micro-frontend architecture, and performance optimization, with emphasis on building scalable enterprise applications. |
| [api_designer](api_designer.agent.md) | Use when designing scalable, developer-friendly interfaces, creating REST and GraphQL APIs with comprehensive documentation, focusing on consistency, performance, and developer experience. |
| [api_documenter](api_documenter.agent.md) | Use when creating comprehensive, developer-friendly API documentation, including OpenAPI/Swagger specifications, interactive documentation portals, and documentation automation, with emphasis on clarity, completeness, and exceptional developer experience. |
| [architect_reviewer](architect_reviewer.agent.md) | Use when working on system design validation, architectural patterns, and technical decision assessment, including scalability analysis, technology stack evaluation, and evolutionary architecture, with emphasis on maintainability and long-term viability. |
| [auth_specialist](auth_specialist.agent.md) | Use when designing, reviewing, or debugging authentication, authorization, OAuth, OIDC, SSO, sessions, JWTs, RBAC, ABAC, or identity security flows. |
| [backend_developer](backend_developer.agent.md) | Use when working on scalable API development and microservices architecture, building robust server-side solutions, with emphasis on performance, security, and maintainability. |
| [blockchain_developer](blockchain_developer.agent.md) | Use when working on smart contract development, DApp architecture, and DeFi protocols, including Solidity, Web3 integration, and blockchain security, with emphasis on building secure, gas-efficient, and innovative decentralized applications. |
| [build_engineer](build_engineer.agent.md) | Use when working on build system optimization, compilation strategies, and developer productivity, including modern build tools, caching mechanisms, and creating fast, reliable build pipelines that scale with team growth. |
| [cli_developer](cli_developer.agent.md) | Use when working on command-line interface design, developer tools, and terminal applications, including user experience, cross-platform compatibility, and building efficient CLI tools that developers love to use. |
| [cloud_architect](cloud_architect.agent.md) | Use when working on multi-cloud strategies, scalable architectures, and cost-effective solutions, including AWS, Azure, and GCP, with emphasis on security, performance, and compliance while designing resilient cloud-native systems. |
| [code_archaeologist](code_archaeologist.agent.md) | Use when exploring unfamiliar legacy code, reconstructing intent, mapping hidden dependencies, finding ownership boundaries, or documenting risky behavior before changes. |
| [code_reviewer](code_reviewer.agent.md) | Use when working on code quality, security vulnerabilities, and best practices across multiple languages, including static analysis, design patterns, and performance optimization, with emphasis on maintainability and technical debt reduction. |
| [cpp_pro](cpp_pro.agent.md) | Use when working on modern C++20/23, systems programming, and high-performance computing, including template metaprogramming, zero-overhead abstractions, and low-level optimization with emphasis on safety and efficiency. |
| [csharp_developer](csharp_developer.agent.md) | Use when working on modern .NET development, ASP.NET Core, and cloud-native applications, including C# 12 features, Blazor, and cross-platform development with emphasis on performance and clean architecture. |
| [data_analyst](data_analyst.agent.md) | Use when working on business intelligence, data visualization, and statistical analysis, including SQL, Python, and BI tools to transform raw data into actionable insights, with emphasis on stakeholder communication and business impact. |
| [data_engineer](data_engineer.agent.md) | Use when building scalable data pipelines, ETL/ELT processes, and data infrastructure, including big data technologies and cloud platforms, with emphasis on reliable, efficient, and cost-optimized data platforms. |
| [data_researcher](data_researcher.agent.md) | Use when discovering, collecting, and analyzing diverse data sources, including data mining, statistical analysis, and pattern recognition, with emphasis on extracting meaningful insights from complex datasets to support evidence-based decisions. |
| [data_scientist](data_scientist.agent.md) | Use when working on statistical analysis, machine learning, and business insights, including exploratory data analysis, predictive modeling, and data storytelling, with emphasis on delivering actionable insights that drive business value. |
| [database_administrator](database_administrator.agent.md) | Use when working on high-availability systems, performance optimization, and disaster recovery, including PostgreSQL, MySQL, MongoDB, and Redis, with emphasis on reliability, scalability, and operational excellence. |
| [database_optimizer](database_optimizer.agent.md) | Use when working on query optimization, performance tuning, and scalability across multiple database systems, including execution plan analysis, index strategies, and system-level optimizations, with emphasis on achieving peak database performance. |
| [debugger](debugger.agent.md) | Use when working on complex issue diagnosis, root cause analysis, and systematic problem-solving, including debugging tools, techniques, and methodologies across multiple languages and environments, with emphasis on efficient issue resolution. |
| [dependency_manager](dependency_manager.agent.md) | Use when working on package management, security auditing, and version conflict resolution across multiple ecosystems, including dependency optimization, supply chain security, and automated updates, with emphasis on maintaining stable, secure, and efficient dependency trees. |
| [deployment_engineer](deployment_engineer.agent.md) | Use when working on CI/CD pipelines, release automation, and deployment strategies, including blue-green, canary, and rolling deployments, with emphasis on zero-downtime releases and rapid rollback capabilities. |
| [devops_engineer](devops_engineer.agent.md) | Use when bridging development and operations with comprehensive automation, monitoring, and infrastructure management, including CI/CD, containerization, and cloud platforms, with emphasis on culture, collaboration, and continuous improvement. |
| [devops_incident_responder](devops_incident_responder.agent.md) | Use when working on rapid detection, diagnosis, and resolution of production issues, including observability tools, root cause analysis, and automated remediation, with emphasis on minimizing downtime and preventing recurrence. |
| [django_developer](django_developer.agent.md) | Use when working on Django 4+ with modern Python practices, including scalable web applications, REST API development, async views, and enterprise patterns, with emphasis on rapid development and security best practices. |
| [documentation_engineer](documentation_engineer.agent.md) | Use when working on technical documentation systems, API documentation, and developer-friendly content, including documentation-as-code, automated generation, and creating maintainable documentation that developers actually use. |
| [dotnet_core_expert](dotnet_core_expert.agent.md) | Use when working on .NET Core, .NET 10, modern C#, minimal APIs, cross-platform services, cloud-native applications, and high-performance microservices. |
| [dotnet_framework_4_8_expert](dotnet_framework_4_8_expert.agent.md) | Use when maintaining, debugging, or modernizing .NET Framework 4.8 enterprise applications, Web Forms, WCF services, Windows services, and Windows-based legacy systems. |
| [dx_optimizer](dx_optimizer.agent.md) | Use when working on build performance, tooling efficiency, and workflow automation, including development environment optimization, with emphasis on reducing friction, accelerating feedback loops, and maximizing developer productivity and satisfaction. |
| [e2e_tester](e2e_tester.agent.md) | Use when designing, writing, reviewing, or debugging end-to-end tests with Playwright, Cypress, browser automation, user journeys, and UI regressions. |
| [elixir_expert](elixir_expert.agent.md) | Use when working on concurrent, fault-tolerant systems using OTP patterns, including Phoenix, LiveView, and BEAM VM optimization for building highly available distributed applications. |
| [embedded_systems](embedded_systems.agent.md) | Use when working on microcontroller programming, RTOS development, and hardware optimization, including low-level programming, real-time constraints, and resource-limited environments, with emphasis on reliability, efficiency, and hardware-software integration. |
| [error_detective](error_detective.agent.md) | Use when working on complex error pattern analysis, correlation, and root cause discovery, including distributed system debugging, error tracking, and anomaly detection, with emphasis on finding hidden connections and preventing error cascades. |
| [fintech_engineer](fintech_engineer.agent.md) | Use when working on financial systems, regulatory compliance, and secure transaction processing, including banking integrations, payment systems, and building scalable financial technology that meets stringent regulatory requirements. |
| [flutter_expert](flutter_expert.agent.md) | Use when working on Flutter 3+ with modern architecture patterns, including cross-platform development, custom animations, native integrations, and performance optimization, with emphasis on creating beautiful, native-performance applications. |
| [frontend_developer](frontend_developer.agent.md) | Use when crafting robust, scalable frontend solutions, building high-quality React components prioritizing maintainability, user experience, and web standards compliance. |
| [fullstack_developer](fullstack_developer.agent.md) | Use when building full-stack features and delivering complete solutions from database to UI, with emphasis on seamless integration and optimal user experience. |
| [game_developer](game_developer.agent.md) | Use when working on game engine programming, graphics optimization, and multiplayer systems, including game design patterns, performance optimization, and cross-platform development, with emphasis on creating engaging, performant gaming experiences. |
| [git_workflow_manager](git_workflow_manager.agent.md) | Use when working on branching strategies, automation, and team collaboration, including Git workflows, merge conflict resolution, and repository management, with emphasis on enabling efficient, clear, and scalable version control practices. |
| [golang_pro](golang_pro.agent.md) | Use when working on high-performance systems, concurrent programming, and cloud-native microservices, including idiomatic Go patterns with emphasis on simplicity, efficiency, and reliability. |
| [graphql_architect](graphql_architect.agent.md) | Use when designing efficient, scalable API graphs, including federation, subscriptions, and query optimization while ensuring type safety and developer experience. |
| [incident_responder](incident_responder.agent.md) | Use when working on security and operational incident management, including evidence collection, forensic analysis, and coordinated response, with emphasis on minimizing impact and preventing future incidents. |
| [iot_engineer](iot_engineer.agent.md) | Use when working on connected device architectures, edge computing, and IoT platform development, including IoT protocols, device management, and data pipelines, with emphasis on building scalable, secure, and reliable IoT solutions. |
| [it_ops_orchestrator](it_ops_orchestrator.agent.md) | Use when routing tasks across PowerShell, .NET, infrastructure, Azure, and M365 subagents. Prefers PowerShell-based automation as the default implementation language. |
| [java_architect](java_architect.agent.md) | Use when working on enterprise-grade applications, Spring ecosystem, and cloud-native development, including modern Java features, reactive programming, and microservices patterns, with emphasis on scalability and maintainability. |
| [javascript_pro](javascript_pro.agent.md) | Use when working on modern ES2023+ features, asynchronous programming, and full-stack development, including both browser APIs and Node.js ecosystem with emphasis on performance and clean code patterns. |
| [kotlin_specialist](kotlin_specialist.agent.md) | Use when working on coroutines, multiplatform development, and Android applications, including functional programming patterns, DSL design, and modern Kotlin features with emphasis on conciseness and safety. |
| [kubernetes_specialist](kubernetes_specialist.agent.md) | Use when working on container orchestration, cluster management, and cloud-native architectures, including production-grade deployments, security hardening, and performance optimization, with emphasis on scalability and reliability. |
| [laravel_specialist](laravel_specialist.agent.md) | Use when working on Laravel 10+ with modern PHP practices, including elegant syntax, Eloquent ORM, queue systems, and enterprise features, with emphasis on building scalable web applications and APIs. |
| [legacy_modernizer](legacy_modernizer.agent.md) | Use when working on incremental migration strategies and risk-free modernization, including refactoring patterns, technology updates, and business continuity, with emphasis on transforming legacy systems into modern, maintainable architectures without disrupting operations. |
| [llm_architect](llm_architect.agent.md) | Use when working on large language model architecture, deployment, and optimization, including LLM system design, fine-tuning strategies, and production serving, with emphasis on building scalable, efficient, and safe LLM applications. |
| [m365_admin](m365_admin.agent.md) | Use when working on Exchange Online, Teams, SharePoint, licensing, Graph API automation, and secure identity operations. |
| [machine_learning_engineer](machine_learning_engineer.agent.md) | Use when working on production model deployment, serving infrastructure, and scalable ML systems, including model optimization, real-time inference, and edge deployment, with emphasis on reliability and performance at scale. |
| [mcp_developer](mcp_developer.agent.md) | Use when working on Model Context Protocol server and client development, including protocol specification, SDK implementation, and building production-ready integrations between AI systems and external tools/data sources. |
| [microservices_architect](microservices_architect.agent.md) | Use when designing scalable microservice ecosystems, including service boundaries, communication patterns, and operational excellence in cloud-native environments. |
| [ml_engineer](ml_engineer.agent.md) | Use when working on machine learning model lifecycle, production deployment, and ML system optimization, including both traditional ML and deep learning, with emphasis on building scalable, reliable ML systems from training to serving. |
| [mlops_engineer](mlops_engineer.agent.md) | Use when working on ML infrastructure, platform engineering, and operational excellence for machine learning systems, including CI/CD for ML, model versioning, and scalable ML platforms, with emphasis on reliability and automation. |
| [mobile_app_developer](mobile_app_developer.agent.md) | Use when working on native and cross-platform development for iOS and Android, including performance optimization, platform guidelines, and creating exceptional mobile experiences that users love. |
| [network_engineer](network_engineer.agent.md) | Use when working on cloud and hybrid network architectures, security, and performance optimization, including network design, troubleshooting, and automation, with emphasis on reliability, scalability, and zero-trust principles. |
| [nextjs_developer](nextjs_developer.agent.md) | Use when building, reviewing, or debugging Next.js 14+ apps, App Router, server components, server actions, routing, performance, SEO, and production deployment. |
| [nlp_engineer](nlp_engineer.agent.md) | Use when working on natural language processing, understanding, and generation, including transformer models, text processing pipelines, and production NLP systems, with emphasis on multilingual support and real-time performance. |
| [node_backend_expert](node_backend_expert.agent.md) | Use when building, reviewing, or debugging Node.js backend services, Express, Fastify, NestJS, APIs, workers, queues, streams, and server runtime behavior. |
| [payment_integration](payment_integration.agent.md) | Use when working on payment gateway integration, PCI compliance, and financial transaction processing, including secure payment flows, multi-currency support, and fraud prevention, with emphasis on reliability, compliance, and seamless user experience. |
| [performance_engineer](performance_engineer.agent.md) | Use when working on system optimization, bottleneck identification, and scalability engineering, including performance testing, profiling, and tuning across applications, databases, and infrastructure, with emphasis on achieving optimal response times and resource efficiency. |
| [php_pro](php_pro.agent.md) | Use when working on modern PHP 8.3+ with strong typing, async programming, and enterprise frameworks, including Laravel, Symfony, and modern PHP patterns with emphasis on performance and clean architecture. |
| [platform_engineer](platform_engineer.agent.md) | Use when working on internal developer platforms, self-service infrastructure, and developer experience, including platform APIs, GitOps workflows, and golden path templates, with emphasis on empowering developers and accelerating delivery. |
| [postgres_pro](postgres_pro.agent.md) | Use when working on database administration, performance optimization, and high availability. Deep expertise in PostgreSQL internals, advanced features, and enterprise deployment, with emphasis on reliability and peak performance. |
| [powershell_5_1_expert](powershell_5_1_expert.agent.md) | Use when working on legacy .NET Framework, RSAT modules, and enterprise IT operations across AD, DNS, DHCP, GPO, and Windows servers. |
| [powershell_7_expert](powershell_7_expert.agent.md) | Use when working on modern .NET, cloud automation, CI/CD tooling, Azure integration, and high-performance scripting across Windows, Linux, and macOS environments. |
| [powershell_module_architect](powershell_module_architect.agent.md) | Use when working on module design, function structure, reusable libraries, profile optimization, and cross-version compatibility across PowerShell 5.1 and PowerShell 7+. |
| [powershell_ui_architect](powershell_ui_architect.agent.md) | Use when working on desktop and terminal interfaces using WinForms, WPF, TUIs, and Metro-style frameworks like MahApps.Metro and Elysium. Focuses on building maintainable, testable, and user-friendly frontends on top of PowerShell and .NET automation. |
| [project_analyst](project_analyst.agent.md) | Use when analyzing an unfamiliar project, identifying stack, architecture, entry points, build/test commands, risks, and a practical implementation path. |
| [project_manager](project_manager.agent.md) | Use when working on project planning, execution, and delivery, including resource management, risk mitigation, and stakeholder communication, with emphasis on delivering projects on time, within budget, and exceeding expectations. |
| [prompt_engineer](prompt_engineer.agent.md) | Use when designing, optimizing, and managing prompts for large language models, including prompt architecture, evaluation frameworks, and production prompt systems, with emphasis on reliability, efficiency, and measurable outcomes. |
| [python_pro](python_pro.agent.md) | Use when working on modern Python 3.11+ development with deep expertise in type safety, async programming, data science, and web frameworks, including Pythonic patterns while ensuring production-ready code quality. |
| [qa_expert](qa_expert.agent.md) | Use when working on comprehensive quality assurance, test strategy, and quality metrics, including manual and automated testing, test planning, and quality processes, with emphasis on delivering high-quality software through systematic testing. |
| [quant_analyst](quant_analyst.agent.md) | Use when working on financial modeling, algorithmic trading, and risk analytics, including statistical methods, derivatives pricing, and high-frequency trading, with emphasis on mathematical rigor, performance optimization, and profitable strategy development. |
| [rails_expert](rails_expert.agent.md) | Use when working on Rails 8.1 with modern conventions, including convention over configuration, Hotwire/Turbo, Action Cable, and rapid application development, with emphasis on building elegant, maintainable web applications. |
| [react_specialist](react_specialist.agent.md) | Use when working on React 18+ with modern patterns and ecosystem, including performance optimization, advanced hooks, server components, and production-ready architectures, with emphasis on creating scalable, maintainable applications. |
| [refactoring_specialist](refactoring_specialist.agent.md) | Use when working on safe code transformation techniques and design pattern application, including improving code structure, reducing complexity, and enhancing maintainability while preserving behavior, with emphasis on systematic, test-driven refactoring. |
| [research_analyst](research_analyst.agent.md) | Use when working on comprehensive information gathering, synthesis, and insight generation, including research methodologies, data analysis, and report creation, with emphasis on delivering actionable intelligence that drives informed decision-making. |
| [risk_manager](risk_manager.agent.md) | Use when working on comprehensive risk assessment, mitigation strategies, and compliance frameworks, including risk modeling, stress testing, and regulatory compliance, with emphasis on protecting organizations from financial, operational, and strategic risks. |
| [rust_engineer](rust_engineer.agent.md) | Use when working on systems programming, memory safety, and zero-cost abstractions, including ownership patterns, async programming, and performance optimization for mission-critical applications. |
| [sales_engineer](sales_engineer.agent.md) | Use when working on technical pre-sales, solution architecture, and proof of concepts, including technical demonstrations, competitive positioning, and translating complex technology into business value for prospects and customers. |
| [search_specialist](search_specialist.agent.md) | Use when working on advanced information retrieval, query optimization, and knowledge discovery, including finding needle-in-haystack information across diverse sources, with emphasis on precision, comprehensiveness, and efficiency. |
| [security_auditor](security_auditor.agent.md) | Use when working on comprehensive security assessments, compliance validation, and risk management, including security frameworks, audit methodologies, and compliance standards, with emphasis on identifying vulnerabilities and ensuring regulatory adherence. |
| [security_engineer](security_engineer.agent.md) | Use when working on DevSecOps, cloud security, and compliance frameworks, including security automation, vulnerability management, and zero-trust architecture with emphasis on shift-left security practices. |
| [seo_specialist](seo_specialist.agent.md) | Use when working on technical SEO, content optimization, and search engine rankings, including both on-page and off-page optimization, structured data implementation, and performance metrics to drive organic traffic and improve search visibility. |
| [slack_expert](slack_expert.agent.md) | Use when working on Slack app development, @slack/bolt implementation, Block Kit UI, event handling, OAuth flows, and Slack API integrations. Use when building Slack bots, reviewing Slack code, designing slash commands, or implementing interactive components. |
| [tailwind_css_expert](tailwind_css_expert.agent.md) | Use when implementing, reviewing, or debugging Tailwind CSS layouts, responsive utilities, design tokens, component styling, dark mode, and class organization. |
| [technical_writer](technical_writer.agent.md) | Use when working on clear, accurate documentation and content creation, including API documentation, user guides, and technical content, with emphasis on making complex information accessible and actionable for diverse audiences. |
| [terraform_engineer](terraform_engineer.agent.md) | Use when working on infrastructure as code, multi-cloud provisioning, and modular architecture, including Terraform best practices, state management, and enterprise patterns, with emphasis on reusability, security, and automation. |
| [test_architect](test_architect.agent.md) | Use when designing test strategy, coverage plans, test pyramids, fixtures, CI gates, quality metrics, or refactoring brittle test suites. |
| [test_automator](test_automator.agent.md) | Use when building robust test frameworks, CI/CD integration, and comprehensive test coverage, including multiple automation tools and frameworks, with emphasis on maintainable, scalable, and efficient automated testing solutions. |
| [tooling_engineer](tooling_engineer.agent.md) | Use when working on developer tool creation, CLI development, and productivity enhancement, including tool architecture, plugin systems, and user experience design, with emphasis on building efficient, extensible tools that significantly improve developer workflows. |
| [trend_analyst](trend_analyst.agent.md) | Use when identifying emerging patterns, forecasting future developments, and strategic foresight, including trend detection, impact analysis, and scenario planning, with emphasis on helping organizations anticipate and adapt to change. |
| [typescript_expert](typescript_expert.agent.md) | Use when designing, reviewing, or debugging TypeScript types, strictness, generics, inference, module boundaries, tsconfig, and JavaScript-to-TypeScript migrations. |
| [ui_designer](ui_designer.agent.md) | Use when creating intuitive, beautiful, and accessible user interfaces, including design systems, interaction patterns, and visual hierarchy to craft exceptional user experiences that balance aesthetics with functionality. |
| [ux_researcher](ux_researcher.agent.md) | Use when working on user insights, usability testing, and data-driven design decisions, including qualitative and quantitative research methods to uncover user needs, validate designs, and drive product improvements through actionable insights. |
| [vue_component_architect](vue_component_architect.agent.md) | Use when designing, refactoring, or debugging Vue 3 components, Composition API patterns, props/emits, slots, composables, and component architecture. |
| [vue_nuxt_expert](vue_nuxt_expert.agent.md) | Use when building, reviewing, or debugging Nuxt and Vue apps, SSR, routing, server routes, data fetching, modules, hydration, and deployment behavior. |
| [vue_state_manager](vue_state_manager.agent.md) | Use when designing, refactoring, or debugging Vue state management with Pinia, Vuex, composables, server state, forms, caching, and reactivity. |
| [websocket_engineer](websocket_engineer.agent.md) | Use when implementing scalable WebSocket architectures, including bidirectional protocols, event-driven systems, and low-latency messaging for interactive applications. |
| [wordpress_master](wordpress_master.agent.md) | Use when working on full-stack development, performance optimization, and enterprise solutions, including custom theme/plugin development, multisite management, security hardening, and scaling WordPress from small sites to enterprise platforms handling millions of visitors. |
| [workflow_orchestrator](workflow_orchestrator.agent.md) | Use when working on complex process design, state machine implementation, business process automation, error compensation, and reliable workflow coordination. |

## Maintenance Checklist

- Keep filenames, `name:`, and links in this README aligned.
- Keep descriptions trigger-focused; prefer `Use when...` over role biographies.
- Keep bodies focused and compact; avoid broad generated checklists unless they add concrete task guidance.
- Do not add `tools:` globally; use role-specific tool policy only when there is a clear reason.
- Prefer updating the `description` when an agent is not being discovered correctly.
- Add `model`, `handoffs`, `agents`, or `hooks` only for agents that genuinely need those behaviors.
- Run a frontmatter validation sweep after bulk changes.
