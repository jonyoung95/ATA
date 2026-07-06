# F001 - Translation Workspace

Version: 0.1

Status: Complete

Priority: Highest

Owner: ATA Project

---

# 1. Overview

Translation Workspace is the core feature of ATA.

ATA is not an AI Translator.

ATA is a Knowledge-driven Translation Workspace where users receive AI recommendations, review translation knowledge, and make the final decision.

The Translation Workspace is the starting point of every translation workflow.

---

# 2. Goal

The workspace should allow users to:

- Input original text
- Paste screenshots or images
- Receive translation recommendations automatically
- Edit recommendations before copying
- Reuse translation knowledge
- Complete translation without unnecessary steps

---

# 3. Scope (V0.1)

Included

- Text input
- Image paste
- OCR extraction
- Automatic recommendation generation
- Translation result panel
- Copy UX
- Sentence Card generation
- Mode selection

Not Included

- Knowledge management page
- Review page
- Approval workflow
- Team collaboration
- User permission management

---

# 4. Workspace Layout

Top

- Mode Selection
- Workspace Header

Center

Left Panel

- Source Input

Right Panel

- AI Recommendation

Bottom (Conditional)

- Sentence Cards
- Assets Recommendation
- History Recommendation

---

# 5. Translation Flow

Mode Selection

↓

Input Source

↓

OCR (if image)

↓

Automatic Recommendation

↓

User Review

↓

Copy

No manual AI request button should exist.

Recommendation generation is automatic.

---

# 6. Input

Supported

- Keyboard typing
- Copy & Paste
- Image Paste

Image paste should automatically start OCR.

---

# 7. Output

Recommendation should appear automatically.

User may freely edit the recommendation.

Edited content becomes the copy target.

---

# 8. Copy Policy

Copied text must preserve:

- Line breaks
- Numbering
- Quotes
- Special characters
- Formatting required for localization

No additional quotation marks should be added.

Example

Correct

Open

Copied

Open

Incorrect

"Open"

---

# 9. Image Translation

When OCR is completed,

ATA should

1. Display recognized text

2. Allow user correction

3. Generate recommendation

OCR confidence should be visually indicated.

Users should be encouraged to verify OCR before translation.

---

# 10. Sentence Cards

When multiple sentences exist,

Recommendation should be separated into individual cards.

Each card should support:

- Individual Copy
- Individual Edit

Email Mode may disable card separation.

---

# 11. Mode Dependency

Workspace behavior depends on selected Mode.

Example

App Mode

- Sentence Cards enabled
- Individual Copy enabled

Email Mode

- Full translation
- Full copy

Manual Mode

- Larger paragraph handling

---

# 12. Design Principles

Workspace should remain simple.

Do not expose unnecessary buttons.

AI Recommendation is generated automatically.

Save to Knowledge is not displayed as a standalone button.

Review is part of Workspace Flow.

Workspace is workflow-oriented, not button-oriented.

---

# 13. Related Features

F002 User Profile

F003 ATA Assets

F004 Workspace History

F005 Mode System

F006 Translation Optimization

F007 OCR

F009 Review Workflow

F011 Workspace Flow

---

# 14. Future (V2)

Not included in V0.1

- Mail Reverse Translation
- AI Recommendation Reason (Expandable)
- Confidence Visualization
- Advanced OCR Review
- Workspace Personalization

---

End of Specification