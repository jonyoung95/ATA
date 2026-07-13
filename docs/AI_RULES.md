# AI_RULES.md

# ATA Project - AI Rules

Version: 1.0

---

# 1. Project Identity

ATA (AI Translation Assistant) is NOT an AI Translator.

ATA is a knowledge-driven Translation Workspace that helps users review translation knowledge, compare AI suggestions, and make informed translation decisions.

The user is always the final decision maker.

---

# 2. Project Goal

The goal of ATA is to improve translation quality and productivity.

ATA should:

- Organize translation knowledge.
- Help users compare translation options.
- Support review and proofreading.
- Preserve translation history.
- Reduce repetitive translation work.

ATA should never replace the translator.

---

# 3. Technology Stack

Frontend

- React
- Vite
- TypeScript

Language

- Markdown
- JSON

Version Control

- Git
- GitHub

---

# 4. Coding Rules

Always:

- Keep components small and reusable.
- Prefer composition over duplication.
- Use clear and meaningful names.
- Use TypeScript types whenever possible.
- Separate UI from business logic.
- Keep folder structures organized.
- Write maintainable code.

Never:

- Create unnecessary components.
- Over-engineer simple features.
- Modify project architecture without discussion.
- Break existing functionality without approval.

---

# 5. UI Principles

The UI should always be:

- Clean
- Simple
- Modern
- Productivity-focused
- Consistent

Maintain consistent:

- Layout
- Spacing
- Typography
- Colors
- Component styles

Do not introduce different design patterns without a clear reason.

---

# 6. Development Workflow

Implement one feature at a time.

Each feature should follow this workflow:

1. Design
2. Implementation
3. Testing
4. Review
5. Commit

Avoid implementing multiple major features simultaneously unless explicitly requested.

---

# 7. Documentation Rules

Every major feature should include:

- Functional Specification
- UI Description
- Future Improvement Notes

After completing significant work, update:

- PROJECT_STATUS.md
- NEXT_TASK.md (if necessary)
- DECISIONS.md (when a new decision is made)

---

# 8. Git Rules

Commit frequently.

Each commit should represent one logical feature or improvement.

Commit messages should be:

- Short
- Clear
- Descriptive

---

# 9. Communication Rules

When proposing solutions:

- Explain the reason.
- Explain the expected impact.
- Keep explanations concise.

When multiple approaches exist:

- Recommend the best option.
- Briefly explain trade-offs.

---

# 10. Future Compatibility

The architecture should remain extensible.

Future modules should integrate naturally without major refactoring.

Examples include:

- OCR
- AI Prompt Management
- Translation Memory
- Review Workflow
- Plugin System

---

# 11. Decision Rules

Before changing any existing design, architecture, or workflow:

- Review previous project decisions.
- Respect established design principles.
- Do not overwrite previous decisions without approval.

Consistency is preferred over unnecessary redesign.

---

# 12. Existing Code First

Before writing new code:

- Understand the current implementation.
- Reuse existing components whenever possible.
- Extend existing functionality before creating new structures.

Avoid rewriting working code without a clear benefit.

---

# 13. Consistency First

Maintain consistency across the entire project.

Always keep consistent:

- UI Design
- Component Structure
- Folder Structure
- File Naming
- Variable Naming
- Documentation Style
- Git Commit Style

Consistency is more important than introducing new coding patterns.

---

End of AI Rules