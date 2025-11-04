# EvoGit Paper Demo

A demonstration repository for EvoGit paper showcasing autonomous AI-driven code improvements using Claude Code.

## Overview

This project is a minimal web application that serves as a test bed for autonomous code improvement workflows. It demonstrates how AI agents can identify gaps, implement improvements, and create pull requests automatically.

## Features

- **Autonomous CI/CD**: Scheduled workflows run twice daily to identify and implement improvements
- **AI-Driven Development**: Uses Claude Code to analyze, improve, and document code
- **Safe Guardrails**: Follows strict rules defined in `CLAUDE.md` to prevent breaking changes

## Project Structure

```
.
├── app.js              # Main application file
├── CLAUDE.md           # AI guardrails and modification rules
├── .github/
│   └── workflows/
│       └── self-improve.yml  # Automated improvement workflow
└── README.md           # This file
```

## Usage

### Running the Application

```javascript
// Import the app
const app = require('./app.js');

// The App function returns a greeting
console.log(App());  // Output: 'Hello'
```

### CI/CD Workflow

The repository includes an automated self-improvement workflow that:
1. Runs twice daily (06:00 and 18:00 America/Chicago)
2. Analyzes the codebase for improvements
3. Implements high-impact, low-risk changes
4. Creates pull requests for review
5. Triggers Qodo review automatically

## Development

### Guardrails

All AI-driven modifications must follow the rules defined in [`CLAUDE.md`](./CLAUDE.md), which includes:

**Allowed Modifications:**
- Documentation improvements
- Bug fixes and error handling
- Code quality improvements
- Test additions
- Configuration updates

**Restricted:**
- Breaking API changes
- Removing features without justification
- Heavy dependency additions

## Contributing

This repository is primarily maintained by automated AI workflows, but human contributions are welcome! Please:

1. Review the guardrails in `CLAUDE.md`
2. Create focused, minimal PRs
3. Include tests for new functionality
4. Document your changes clearly

## License

This is a demonstration project. See repository settings for license information.

## Workflow Details

The self-improvement workflow uses Claude Code with the following strategy:

1. **Rapid Assessment**: Analyze structure, identify gaps
2. **Implement Fixes**: Make surgical, focused improvements
3. **Create PR**: Submit changes with detailed description

All changes are tracked and versioned through pull requests for full transparency.
