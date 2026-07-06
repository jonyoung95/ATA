# F006 - Translation Optimization

Version: 0.1

Status: Complete

Priority: High

Owner: ATA Project

---

# 1. Overview

Translation Optimization improves translation quality automatically based on the selected Mode.

It refines AI recommendations to better match the intended purpose without requiring additional prompts from the user.

Translation Optimization is not an independent feature.

It operates as part of the translation workflow.

---

# 2. Goal

Translation Optimization should:

- Improve readability
- Increase terminology consistency
- Match the selected Mode
- Reduce manual editing
- Produce natural translations

---

# 3. Scope (V0.1)

Included

- Automatic optimization
- Mode-based optimization
- Translation refinement
- Terminology consistency

Not Included

- Manual optimization settings
- User-defined optimization rules
- AI explanation
- Quality score

---

# 4. Optimization Policy

Translation Optimization is enabled by default.

Optimization is automatically applied after recommendation generation.

Optimization behavior depends on the selected Mode.

Users do not manually trigger optimization.

---

# 5. Mode Dependency

App Mode

- UI terminology consistency
- Short sentence optimization

---

Email Mode

- Professional tone
- Natural business writing
- Reverse Translation support

---

Manual Mode

- Technical terminology
- Long paragraph readability
- Formatting preservation

---

# 6. User Experience

Optimization should feel invisible.

Users should receive an improved recommendation without performing additional actions.

Translation should remain editable after optimization.

---

# 7. Design Principles

Optimization supports the user's work.

It never replaces the user's final decision.

AI recommends.

Users decide.

---

# 8. Related Features

F001 Translation Workspace

F003 ATA Assets

F005 Mode System

F007 OCR

F011 Workspace Flow

---

# 9. Future (V2)

Not included in V0.1

- Optimization strength
- Custom optimization profile
- AI explanation
- Multiple optimization styles
- Company-specific optimization rules

---

End of Specification