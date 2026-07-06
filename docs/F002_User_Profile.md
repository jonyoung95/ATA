# F002 - User Profile

Version: 0.1

Status: Complete

Priority: High

Owner: ATA Project

---

# 1. Overview

User Profile manages personal workspace preferences and user-specific translation information.

The purpose of User Profile is to personalize the Translation Workspace without affecting shared translation knowledge.

---

# 2. Goal

The profile should allow users to:

- Maintain personal preferences
- Resume previous work
- Store user-specific history
- Keep personal settings separated from shared project knowledge

---

# 3. Scope (V0.1)

Included

- User login
- Personal workspace
- Personal History
- Resume support
- Personal preferences

Not Included

- Team management
- Organization management
- Permission management
- Role administration

---

# 4. User Workspace

Each user owns an independent workspace.

Workspace includes:

- Current draft
- Resume information
- Workspace History
- Personal settings

Shared knowledge is not stored inside the personal workspace.

---

# 5. Personal History

History belongs to each individual user.

Examples

- Previous translations
- Previous emails
- Previous manuals
- Recent work

History should not be shared automatically with other users.

---

# 6. Resume

Users should be able to continue unfinished work.

Resume should restore:

- Selected Mode
- Source Text
- Translation Draft
- Workspace State

Resume only restores the user's own workspace.

---

# 7. Shared Knowledge

Translation Assets are shared.

Workspace History is personal.

User Profile separates these two concepts.

Shared

- Assets
- Approved Translation Knowledge

Personal

- Workspace History
- Resume
- Draft

---

# 8. Design Principles

Personal information should never overwrite shared knowledge.

Workspace personalization should improve productivity without changing project-wide translation standards.

---

# 9. Related Features

F001 Translation Workspace

F003 ATA Assets

F004 Workspace History

F008 Settings

F011 Workspace Flow

---

# 10. Future (V2)

Not included in V0.1

- Multiple organizations
- Team switching
- Profile image
- User statistics
- Workspace synchronization across devices

---

End of Specification