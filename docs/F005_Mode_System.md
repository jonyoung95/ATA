# F005 - Mode System

Version: 0.1

Status: Complete

Priority: Highest

Owner: ATA Project

---

# 1. Overview

Mode System defines how ATA behaves depending on the user's translation purpose.

Different translation tasks require different workflows.

Instead of changing prompts manually, users select a translation mode before starting.

The selected Mode changes recommendation logic, workspace behavior, and output format automatically.

---

# 2. Goal

Mode System should:

- Simplify user workflow
- Optimize AI recommendations
- Adjust translation style automatically
- Reduce repetitive prompt writing
- Provide consistent output

---

# 3. Scope (V0.1)

Included

- App Mode
- Email Mode
- Manual Mode

Not Included

- Custom Mode
- User-defined Mode
- Company Templates
- AI Auto Mode Selection

---

# 4. Available Modes

App Mode

Designed for:

- UI
- Mobile App
- Smart Home
- Device Settings

Characteristics

- Short sentences
- Individual sentence cards
- Fast copy
- Terminology consistency

---

Email Mode

Designed for:

- Customer support
- Internal communication
- Business email

Characteristics

- Full document translation
- Formal tone
- Reverse Translation support
- Conversation continuity

---

Manual Mode

Designed for:

- Product manuals
- FAQ
- User Guide

Characteristics

- Long paragraphs
- Technical terminology
- Formatting preservation

Manual and FAQ belong to the same mode.

---

# 5. Workspace Dependency

Selected Mode affects:

- Recommendation style
- Translation format
- Sentence Cards
- Assets recommendation
- History recommendation
- Copy behavior

Workspace updates automatically after Mode selection.

---

# 6. Mode Selection

Mode selection is mandatory.

Recommendation generation is blocked until a Mode is selected.

Users explicitly choose the appropriate mode.

ATA does not automatically guess the translation purpose.

---

# 7. Design Principles

Users make the decision.

AI follows the selected workflow.

ATA should never automatically change the selected Mode.

---

# 8. Related Features

F001 Translation Workspace

F003 ATA Assets

F004 Workspace History

F006 Translation Optimization

F011 Workspace Flow

---

# 9. Future (V2)

Not included in V0.1

- Custom Mode
- Company Mode Templates
- Recently Used Mode
- AI Mode Recommendation

---

End of Specification