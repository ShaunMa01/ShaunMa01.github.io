# 中文主页维护

2026-11-10 内容核对：22 篇正式论文、27 条新闻。
以 [Google Scholar](https://scholar.google.com/citations?user=9nKfGH0AAAAJ) 为入口，
交叉核对 [学校主页](https://faculty.sdu.edu.cn/maxiang1/zh_CN/index.htm)、
[DBLP Xiang Ma 0006](https://dblp.org/pid/52/7004-6.html)、出版方页面及用户简历。
ORCID 为 0000-0002-4963-8705。各论文标题链接指向出版方 DOI 或原始预印本。

- 正式论文按会议/卷期年份归档。TSCG、RTS-LLM 的新闻为原主页记录的 2025.11 接收，正式卷期为 2026。
- TFformer、确定性状态转移的投资组合论文使用 2025.02 卷期日期，明确写“刊载”，不推断接收月份。
- AnCo 的[出版方记录](https://www.sciengine.com/doi/10.1360/SSI-2025-0444)为 2026-02-27 接收、2026-08-07 在线发表，期刊是《中国科学：信息科学》。
- 图像自适应平滑论文的[SciOpen 记录](https://www.sciopen.com/article/10.26599/TST.2023.9010068)为 2024-02-09 在线发表、2024 年 8 月卷期。
- 按用户最新要求不展示独立预印本或其新闻；已正式发表论文可保留 arXiv 全文链接。
- 未获接收日期的历史合著论文使用核实的在线发表或卷期月份，并在新闻中注明日期类型。非本人一作的新闻祝贺第一作者，姓名保留文献中的英文拼写。
- 按用户要求移除独立科研资助板块，项目仅在 news 中公告。2026.08 获资助月份由用户明确提供；简历中的执行期不替代公告月份。山东省重点研发计划注明子课题负责人。
- 博士毕业、优秀毕业生时间按用户简历统一为 2024.06；不公开简历中的电话、出生日期等无关个人信息。

更新论文时同步添加新闻及 `paper-*` 锚点，保留完整作者顺序。缺失的月份、通讯作者标记、项目编号不可自行推断。

## Layout and validation

The homepage is `_pages/about.html`, published at `/` by GitHub Pages/Jekyll.
Its explicit `layout: null` is intentional: it is a complete HTML document with
its own responsive layout, not content for the legacy AcademicPages layout.
The previous `default` layout omitted the profile/sidebar and main content
wrapper, which caused the missing portrait and full-width body.

- Edit profile, news, publications and other academic information in `_pages/about.html`.
- Edit appearance in `assets/css/homepage.css` and controls in `assets/js/homepage.js`.
- Store publication figures and the portrait under `images/`.
- Keep `aria-controls` values paired with unique preview IDs when adding a paper.
- Keep the existing section IDs so links to the previous homepage continue to work.

The homepage follows the layout and visual styling of
[Percept](https://percept-team.github.io/) / AcaNova-X while retaining Xiang Ma's
own academic content. All text is present in the initial HTML. JavaScript only
enhances the mobile menu, news expansion, navigation highlighting and image previews.
Without JavaScript, navigation and all news remain visible and Image links open
their original figures. Fonts have local fallbacks; layout and icons do not
depend on a third-party CSS/JavaScript CDN.

The two AAAI-26 papers are grouped under their conference year (2026); the
original acceptance announcements remain dated November 2025. The old broken
Lexin Fang link pointing to `/xiangma.github.io/` was removed while preserving
the name and news item.

Validation: `.github/workflows/validate-homepage.yml` builds using the GitHub
Pages Jekyll action and checks the generated homepage, assets, redirect and JS.
For a complete local build in a Ruby environment, use `bundle install` followed
by `bundle exec jekyll serve`.
