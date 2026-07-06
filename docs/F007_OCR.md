# F007 - OCR

Version: 0.1

Status: Complete

Priority: High

Owner: ATA Project

---

# 1. Overview

OCR extracts text from images pasted into the Translation Workspace.

Unlike traditional OCR workflows, ATA allows users to review and correct recognized text before translation begins.

OCR serves as the first step of the translation workflow, not the final result.

---

# 2. Goal

OCR should:

- Extract text from images
- Allow users to verify recognition results
- Reduce recognition errors
- Improve translation quality
- Support image-based localization workflows

---

# 3. Scope (V0.1)

Included

- Image Paste
- OCR
- OCR Result Preview
- OCR Text Editing
- Confidence Indicator
- Sentence Card Generation

Not Included

- PDF OCR
- Multi-language OCR Selection
- Handwriting Recognition
- OCR History

---

# 4. OCR Workflow

Image Paste

↓

OCR Processing

↓

Display Recognized Text

↓

User Review

↓

User Correction (Optional)

↓

Translation Recommendation

Translation never starts before OCR review is completed.

---

# 5. OCR Result

ATA should display:

- Recognized text
- Confidence indicator
- Editable text
- Recognition status

Users should always be able to modify OCR results before translation.

Before generating translation recommendations,

ATA displays the recognized text for user confirmation.

Users may freely edit the recognized text before continuing.

---

# 6. Confidence Indicator

OCR confidence should be visually displayed.

Examples

- High
- Medium
- Low

When confidence is low,

ATA should encourage users to verify the recognized text.

---

# 7. Sentence Cards

If multiple sentences are recognized,

ATA separates them into individual cards.

Each card supports:

- Edit
- Copy
- Independent review

---

# 8. Design Principles

OCR exists to improve translation quality.

Users always verify OCR before translation.

Recognition results are suggestions, not final content.

---

# 9. Related Features

F001 Translation Workspace

F005 Mode System

F006 Translation Optimization

F011 Workspace Flow

---

# 10. Future (V2)

Not included in V0.1

- PDF OCR
- Table Recognition
- Automatic Screenshot Detection
- OCR Language Selection
- Image Quality Enhancement
- Batch OCR

---

End of Specification