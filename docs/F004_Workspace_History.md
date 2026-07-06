# F004 - Workspace History

Version: 0.1

Status: Complete

Priority: High

Owner: ATA Project

---

# 1. Overview

Workspace History stores the user's previous translation work.

Unlike ATA Assets, Workspace History is personal and is designed to help users continue previous work and quickly find past translations.

Workspace History is never shared automatically with other users.

---

# 2. Goal

Workspace History should allow users to:

- Search previous work
- Resume unfinished work
- Review previous translations
- Restore previous workspace status
- Improve work continuity

---

# 3. Scope (V0.1)

Included

- Personal history
- Search
- Resume
- Workspace restoration
- Translation records

Not Included

- Team history
- Shared history
- History comparison
- Automatic archive management

---

# 4. Stored Information

Each history record stores:

- Mode
- Source text
- Translation result
- Created date
- Last modified date
- Resume information

History belongs only to the current user.

---

# 5. Search

Users should be able to search history by:

- Keyword
- Source text
- Translation
- Product name
- Mode

Search should return matching history records immediately.

---

# 6. Resume

Users can resume previous work.

Resume restores:

- Mode
- Source text
- Translation
- Current editing state

Resume should reopen the workspace exactly as the user left it.

---

# 7. History Policy

Workspace History is personal.

History should never automatically become ATA Assets.

Saving knowledge requires the dedicated save or review workflow.

---

# 8. Design Principles

History exists to improve productivity.

Users should quickly find previous work without interrupting the current workflow.

Resume should reduce repetitive work.

---

# 9. Related Features

F001 Translation Workspace

F002 User Profile

F003 ATA Assets

F005 Mode System

F011 Workspace Flow

---

# 10. Future (V2)

Not included in V0.1

- Automatic archive
- Archive management
- Date filtering
- Favorite history
- Pin important history
- Workspace snapshots

---

End of Specification