# F010 - Trash and Restore

Version: 0.1

Status: Complete

Priority: Medium

Owner: ATA Project

---

# 1. Overview

Trash temporarily stores deleted items before permanent removal.

It provides users with a safe recovery period and helps prevent accidental data loss.

Trash is designed as a protection mechanism rather than a long-term archive.

---

# 2. Goal

Trash should:

- Prevent accidental deletion
- Allow item restoration
- Keep the workspace organized
- Protect important translation data

---

# 3. Scope (V0.1)

Included

- Trash
- Restore
- Permanent Delete

Not Included

- Automatic cleanup
- Scheduled deletion
- Trash filtering
- Restore history

---

# 4. Trash Workflow

Delete Item

↓

Move to Trash

↓

Restore

or

Permanent Delete

Deleted items are never removed immediately.

---

# 5. Restore

Users may restore deleted items at any time.

Restored items return to their original location.

All associated information should remain unchanged after restoration.

---

# 6. Permanent Delete

Users may permanently delete items from Trash.

Permanent deletion cannot be undone.

ATA should clearly warn users before permanent deletion.

---

# 7. Design Principles

Deleting should be safe.

Recovery should be simple.

Permanent deletion should require explicit user action.

---

# 8. Related Features

F003 ATA Assets

F004 Workspace History

F009 Review Workflow

F011 Workspace Flow

---

# 9. Future (V2)

Not included in V0.1

- Empty Trash
- Automatic cleanup
- Automatic deletion after a configurable period
- Deleted date
- Trash search
- Trash filtering
- Restore history


---

End of Specification