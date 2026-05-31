---
name: vc-industry-research
description: "Generate professional primary market / venture capital industry research reports, including sector deep-dives, investment memos, and market analysis. Produces detailed PDF reports covering TMT, consumer, healthcare, and industrials. Triggered by requests to analyze an industry, create a market report, write a sector deep-dive, or generate any PE/VC-style research document in Chinese or English."
---

# Primary Market Industry Research Report

Generate professional industry research reports in an institutional primary-market (PE/VC) research style.

## Reference Source

- **Type**: Uploaded artifact (PDF)
- **Reference File Type**: PDF
- **Languages**: Chinese or English (auto-detect from user query; default to user's language)

## Supported Outputs

- PDF (default)
- DOCX
- PPTX (if explicitly requested)

**Default output**: PDF. If user explicitly requests DOCX or PPTX, honor that request.

## Workflow

1. **Understand the research scope** from user query: target industry, sub-topics, depth, page count
2. **Determine report style** based on user preference or task context:
   - **Style A (Deep Discussion)**: Opinion-heavy, TMT/tech focus, numbered chapters (01, 02...), no TOC
   - **Style B (Traditional Sector)**: Data-heavy, many charts and tables, TOC with multi-level numbering
3. **Plan content structure** using the appropriate structure contract (see references)
4. **Research and gather data** using web search and data source tools as needed
5. **Review investment & financing history** for the sector: search for key funding rounds, deal sizes, lead investors, IPO/exit events, and capital flow trends in the target industry. Sources include Crunchbase, PitchBook, CB Insights, IT桔子, 烯牛数据, and public deal announcements
6. **Generate the report** following the style and structure contracts precisely
7. **Review for completeness**: ensure all exhibits are numbered, sources cited, and formatting consistent

## Style Selection Guide

Choose the report style based on context:

| Indicator | Use Style A (Deep Discussion) | Use Style B (Traditional) |
|-----------|------------------------------|---------------------------|
| Sector | TMT, AI, Software, SaaS | Consumer, Healthcare, Industrials, Materials |
| Tone | Opinion-forward, thesis-driven | Data-driven, objective |
| Charts | Moderate (native charts, benchmark tables for AI research) | Dense (pie charts, bar charts, line charts) |
| TOC | No | Yes, with 3-level hierarchy + dot-leaders + page numbers |
| Chapter numbers | 01, 02, 03... in red/dark-red | 1, 1.1, 1.2, 2.1... in black |
| Page count | 15-25 pages typical | 30-60 pages typical |

For detailed style rules, see [references/style_contract.md](references/style_contract.md).

## Structure Templates

Two primary structure patterns are available. See [references/structure_contract.md](references/structure_contract.md) for full details.

### Style A Structure (Deep Discussion)

```
Cover Page:
  [White background]
  [Institution logo (top-right): icon + institution name (bilingual)]
  [Main title: bold KaiTi, left-aligned, large, dark-red accent underline]
  [Author line: "Cr.: [Author Name]"]
  [Date line: "Date: YYYY-Mon"]
  [QR code (right side)]

Executive Summary (~1 page)
  [Bordered/quoted paragraph block]

01 [Chapter Title]
  [Section Heading in red/dark-red KaiTi]
  [Subsection Heading in red/dark-red KaiTi]
```

### Style B Structure (Traditional Sector)

```
Cover Page:
  [White background, ultra-minimal]
  [Full title: centered, KaiTi, large]
  [Institution logo: centered below title]
  [Institution name: centered below logo]
  [Date: centered, bottom area (YYYY.MM format)]

Table of Contents (page 2-3)
  [Title "目录": centered, large character spacing]
  [1  [Main Chapter]..................p3]
  [  1.1 [Section]...................p3]

Content Pages:
  [Header: report title centered + horizontal rule below]
  [Footer: page number]
```

## Typography Strategy

### For Chinese-language reports
- **Headings**: KaiTi (楷体) — calligraphic, distinctive institutional feel
- **Style A body**: SimSun (宋体) — formal serif tone
- **Style B body**: STKaitiSC-Regular (华文楷体) — consistent with heading font family
- **Latin text**: Times New Roman (body + italic for sources), Arial Bold (header emphasis)
- **Chart labels**: DengXian (等线) or Calibri for English labels
- All document text paths use CJK-capable fonts consistently

### For English-language reports
- **Headings**: Georgia or Times New Roman — institutional serif feel
- **Body text**: Times New Roman or Garamond — formal, readable
- **Chart labels / tables**: Calibri or Arial
- **Header emphasis**: Arial Bold

### General
- When exact reference fonts unavailable, prefer fonts from the same visual family
- For bilingual content, ensure CJK and Latin fonts are harmonized in weight and size

## Exhibit Numbering

- **Figures**: Sequential numbering with caption below — "图 N" (Chinese) or "Figure N" (English)
- **Tables**: Sequential numbering with caption above — "表 N" (Chinese) or "Table N" (English)
- Data source note below each exhibit: "数据来源：xxx" (Chinese) or "Source: xxx" (English)
- Reset numbering for each major section in Style B; continuous in Style A

## Source Citation Rules

- Every data point, statistic, or claim must have a source
- Inline: cite source parenthetically or in footnote
- Exhibits: "数据来源：" (Chinese) or "Source:" (English) below each figure/table
- Preferred sources: government databases, industry associations, public company filings, reputable analyst reports, authoritative media

## Key Quality Checks

- [ ] Cover page matches selected style (Style A or B) precisely
- [ ] Color palette matches selected style — NO custom dark themes or modern gradients
- [ ] All chapter/section numbering is consistent and matches selected convention
- [ ] TOC has dot-leaders AND page numbers (Style B only)
- [ ] Running header with horizontal rule on all content pages (Style B)
- [ ] All figures and tables are numbered and captioned
- [ ] All data points have source attribution
- [ ] Typography applied consistently per language (CJK fonts for Chinese reports, serif fonts for English reports)
- [ ] Tables have clean borders: no vertical rules, header row has top/bottom borders, table has top/bottom thick borders (Style B)
- [ ] Institution/publisher identity present (logo area or header text)
- [ ] No placeholder text left in document
