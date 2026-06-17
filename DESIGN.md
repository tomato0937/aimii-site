# Home Redesign Visual Spec

## 1. Visual Theme & Atmosphere
首頁下半段採用「柔光教育陪伴系統」：大面積白底、薄邊框、照片留白、低飽和青綠與珊瑚紅點綴。頁面要像高級教育顧問簡報，而不是補習班廣告；資訊一眼可讀，照片與系統示意共同說明服務如何運作。

## 2. Color Palette & Roles
```css
:root {
  --home-ink: #202a36;
  --home-muted: #64717d;
  --home-line: #dfecef;
  --home-teal: #36b9b0;
  --home-teal-rgb: 54 185 176;
  --home-coral: #f57783;
  --home-coral-rgb: 245 119 131;
  --home-sky: #5eb4df;
  --home-sky-rgb: 94 180 223;
  --home-sand: #d9aa68;
  --home-sand-rgb: 217 170 104;
}
```
青綠負責系統、安心、進度；珊瑚負責鼓勵、行動、重點；天空藍負責數據與回饋；沙金只用於方案與成果，不做主色。

## 3. Typography Rules
標題使用既有中文字體堆疊，關鍵大標可使用宋體感 serif，營造參考稿的大氣感；卡片內維持無襯線，字重 750-900。卡片文字控制在 1-3 行，避免說明過滿。

## 4. Component Stylings
卡片預設：白色或柔和 tint、1px 半透明邊框、柔陰影、圖片帶 16-24px 圓角。Hover：向上 3px、邊框色提高、陰影加深。Focus：沿用全站連結/按鈕焦點，不額外移除 outline。Disabled：不在本次首頁段落使用。

## 5. Layout Principles
桌機使用 12 欄感的最大寬度 1280px；「三步導覽」為 1+3 格；系統段落為照片與 dashboard 並列；痛點用 4 個橢圓照片；優勢用 4 欄照片卡；方案用雙卡；數據用一列緊湊膠囊。平板改成 2 欄，手機全改 1 欄。

## 6. Depth & Elevation
主區塊陰影控制在 rgba(49, 79, 90, 0.08-0.14)，不可使用厚重黑影。系統 mock 可有較強投影，但必須保持白淨與透明感。

## 7. Animation & Interaction
互動檔位 L2：沿用現有 section reveal，卡片 hover 產生微位移與局部 spotlight。禁止 scroll-jacking 與重型動畫；圖片僅做靜態裁切與 hover scale。

## 8. Do's and Don'ts
Do: 使用 `/assets/photos1` 的圖片分散到每個敘事段落。Do: 讓每個段落可獨立看懂。Do: 桌機要有參考稿的橫向呼吸感。Do: 手機優先保留人物臉與系統資訊。Don't: 不做純文字卡片堆疊。Don't: 不使用現成外部照片。Don't: 不讓大段文字壓過照片。Don't: 不做深色或濃烈漸層。Don't: 不讓卡片高度因文字換行劇烈跳動。

## 9. Responsive Behavior
1180px 以下降低欄數並縮小 mock；900px 以下系統段落改單欄；680px 以下所有大卡變單欄，圖片固定 aspect-ratio，CTA 與數據膠囊可橫向分行但不可造成 viewport overflow。

# About Interaction Redesign Visual Spec

## 1. Visual Theme & Atmosphere
about 頁新增「家長看得懂的陪伴流程」：以白淨柔光、薄邊框、系統示意圖與微互動為主，讓 AI、教練、數據三件事不是抽象口號，而像一套正在運作的學習系統。

## 2. Color Palette & Roles
沿用全站 `--teal` 作為診斷與安心主色，`--coral` 作為陪伴與鼓勵，`--sky` 作為數據與週報，`--sand` 作為計畫與節奏。每個互動 tab 只用一個主色高亮，其餘保留白底與低飽和邊框。

## 3. Typography Rules
標題維持高字重、短句、清楚層級；互動按鈕文字控制在「一句主標 + 一句狀態」。示意系統內的數字可放大，但輔助文字不得超過兩行。

## 4. Component Stylings
新增三類元件：流程切換卡、循環角色 tab、週報週期 tab。元件預設白底、1px 淡色邊框、柔陰影；active 狀態提高邊框色與陰影；focus-visible 保留清楚外框。

## 5. Layout Principles
桌機先呈現「左流程、右系統示意」；方法論用上方三角色 tab + 下方循環圖與說明；數據區用上方文案與週期 tab，下方 dashboard + 家長手機視角。1120px 以下改單欄，580px 以下所有控制項維持 42px 以上可點高度。

## 6. Depth & Elevation
主要面板使用中層陰影，內部 mock 與 active 卡片稍微提高 elevation；避免厚重黑影，保持教育顧問品牌的乾淨可信感。

## 7. Animation & Interaction
互動檔位 L2：click / keyboard 切換、hover 微位移、pointer spotlight、循環線低速旋轉。禁止捲動劫持與重型動畫；reduced-motion 下沿用全站停用動畫規則。

## 8. Do's and Don'ts
Do: 每個區塊都要能單獨說清楚「這是在做什麼」。Do: 系統示意圖以真實操作邏輯呈現。Do: active 狀態必須同步切換內容。Don't: 不新增外部照片。Don't: 不讓文字密度回到舊式卡片堆疊。Don't: 不在手機產生水平 overflow。

## 9. Responsive Behavior
桌機採 2 欄與 3 tab 佈局；1120px 以下互動區、循環區、數據區全部改單欄；820px 以下循環 tab 改直向；580px 以下縮小 orbit 節點、dashboard 改緊湊單欄，保留觸控可讀性。

# Parent Page 2026 Compact Interaction Spec

## 1. Visual Theme & Atmosphere
parent 頁 hero 以下採用「緊湊家長安心中控台」：降低展示型大區塊比例，把照片、系統面板、tab、指標放進更密集的資訊儀表板。整體仍維持白淨柔光與低飽和品牌色，但畫面要更像可操作的產品系統，而不是大型簡報卡片。

## 2. Color Palette & Roles
沿用全站青綠、珊瑚、天空藍、沙金四色，並新增 parent 專用中性色：`--parent-ink #24313f`、`--parent-muted #647382`、`--parent-line rgba(216,231,235,.92)`。青綠代表透明同步，珊瑚代表情緒與回覆，天空藍代表數據，沙金代表週節奏。色彩只作為狀態辨識，不做大面積濃烈漸層。

## 3. Typography Rules
標題使用短句與高字重，但尺寸比上一版收斂；卡片文字控制在 1-2 行為主。每個互動 tab 使用「情境標題 + 家長真實問題 + 一個結果指標」，系統示意使用大數字、短狀態、清楚下一步，不塞滿報表細節。

## 4. Component Stylings
新版元件：安心雷達 tab、照片舞台、家長安心中控台、雙引擎 command center、可切換信任 bento、回饋案例切換、每週同步中心。所有可點擊元件必須有 hover、active、focus-visible、pointerdown 壓感；照片底部使用小型玻璃資訊條；系統示意用薄邊框、白底、細網格、柔陰影。

## 5. Layout Principles
桌機節奏：安心雷達採左互動舞台、右擔心清單，但高度壓到一屏內可掃讀；雙引擎採上方 4 tab、下方 command center；信任理由採 12 欄 bento 並可切換細節；回饋採主心得、照片、案例清單三欄；每週同步採左流程、右 2x2 dashboard（摘要、目前節點、訊息流、手機行動），避免大面積空白。所有區塊用緊湊 padding 與較小 min-height。

## 6. Depth & Elevation
主 shell 使用中層柔陰影與內高光，照片與系統裝置稍高，內部資料卡片低陰影。禁止厚重黑影；所有陰影保持 rgba(49,79,90,0.05-0.13) 區間，維持可信、乾淨、安定的教育品牌質感。

## 7. Animation & Interaction
互動檔位 L2+：click / keyboard 切換、hover 預覽、active 狀態同步內容、pointer spotlight、切換時 panel 微入場、指標數字 pop、active 底線回饋。圖片只做靜態裁切與輕微放大，不使用捲動綁定或重型動畫；互動要提升理解，不做裝飾性干擾。

## 8. Do's and Don'ts
Do: 每段都要回答「家長現在能看懂什麼」。Do: 提高資訊密度，但保留掃讀層級。Do: 照片必須服務內容，不做單純裝飾。Do: 系統示意要呈現真實操作邏輯。Don't: 不使用外部照片。Don't: 不讓 AI/數據變成抽象口號。Don't: 不在手機產生水平 overflow。Don't: 不回到巨大留白與單純展示卡。

## 9. Responsive Behavior
1180px 以下互動大區改單欄，tab 可雙欄；820px 以下所有主要 panel、dashboard、週報中心改單欄；560px 以下卡片、指標與流程全部直排。手機端照片最小高度約 300px，桌機端避免超過必要高度；所有觸控按鈕維持可讀與可點，不產生水平 overflow。

# Image To Code Parent Landing Spec

## 1. Visual Theme & Atmosphere
新增獨立頁 `image-to-code-parent.html` 還原參考圖的「白淨家庭學習中控台」：大面積柔光、真實照片、漂浮系統卡、緊湊導覽卡與底部 CTA，讓使用者一眼理解「診斷、節奏、陪伴、回饋」是一套完整服務。

## 2. Color Palette & Roles
沿用青綠作為系統與安心，珊瑚作為陪伴與重點字，天空藍作為回饋與社群接住，沙金作為成果與方案。背景只用低飽和柔光，不使用厚重漸層或深色底。

## 3. Typography Rules
主標採高字重大尺寸，關鍵詞用珊瑚強調；段落維持 1-2 行掃讀；卡片標題 900 字重，卡片文字控制在短句，避免資訊過滿。

## 4. Component Stylings
核心元件包含 hero 浮動進度卡、三步導覽卡、系統報告玻璃卡、四大優勢照片卡、家長擔心清單、雙方案卡、數據膠囊與 CTA 條。所有卡片採 1px 淡色邊框、20-30px 圓角、低透明白底與柔陰影。

## 5. Layout Principles
桌機最大寬度 1440px；hero 左文右圖；三步區為 1+3；系統區左文案右照片報告；優勢區 4 欄；家長理由 2 欄；方案雙卡；數據一列；手機全改單欄並固定圖片高度，保持可讀。

## 6. Depth & Elevation
照片卡與主區塊使用中層柔陰影，漂浮系統卡略高。陰影透明度控制在 rgba(44,74,84,0.07-0.16)，避免廉價厚重感。

## 7. Animation & Interaction
互動檔位 L1.5：卡片 hover 微位移、圖片微放大、active-like 色彩分區；不做複雜 scroll 動畫，確保 image-to-code 頁面穩定與快速。

## 8. Do's and Don'ts
Do: 使用 `/assets/photos1` 圖片分配到每個敘事段落。Do: UI 示意以 HTML/CSS 重畫，不直接把整張設計圖貼成背景。Don't: 不引入外部照片。Don't: 不產生手機水平 overflow。Don't: 不讓 CTA 或方案卡在小尺寸時文字擠壓。

## 9. Responsive Behavior
1180px 以下 hero、系統、家長理由改單欄；760px 以下全部主 grid 單欄、浮動卡改自然流、報告卡壓在照片下方。所有按鈕與卡片保留可點高度，圖片框使用固定最小高度避免版面跳動。

# Three System Image To Code Variants Spec

## 1. Visual Theme & Atmosphere
新增 `image-to-code-system-01.html`、`image-to-code-system-02.html`、`image-to-code-system-03.html` 三個獨立頁，還原三張 system 風格設計稿。共同語氣是白淨、柔光、家庭學習科技感；01 偏完整長頁與功能全貌，02 偏產品簡報與裝置展示，03 偏 bento 系統中控台。

## 2. Color Palette & Roles
沿用青綠作為 AI/任務/安心主色，珊瑚作為教練提醒與節奏管理，天空藍作為報告與可視化，沙金僅用於成果與補充狀態。背景使用低飽和 radial glow 與白底，不使用深色或高飽和漸層。

## 3. Typography Rules
標題採高字重、短句、明確換行；三版都以 `clamp()` 控制桌機與手機字級，中文長標題加入 `overflow-wrap:anywhere`，避免小尺寸溢出。

## 4. Component Stylings
共用 `image-to-code-system.css`：含 panel、card、kicker、num badge、pill、timeline node、dashboard、metric、CTA、CSS robot、CSS charts。所有元件使用 1px 淡邊框、24-30px 圓角、半透明白底與柔陰影。

## 5. Layout Principles
01：overview 1+3、hero 三欄、家長理解列、journey、兩欄功能、雙引擎、數據 CTA。02：上方寬版 overview、hero 圖文與右 rail、手機 journey、筆電 row、雙引擎四欄、進度三欄。03：bento hero、核心功能 bento、journey、analytics、bottom data strip。

## 6. Depth & Elevation
主 panel 使用低陰影，裝置與浮動卡使用中層陰影，hover 增加輕微浮起。陰影控制在 rgba(46,74,84,0.075-0.1) 為主，保持乾淨可信。

## 7. Animation & Interaction
互動檔位 L1.5：卡片 hover 微位移、邊框色加強、陰影提高；不加入重型 scroll 動畫。圖表與流程為靜態高質感示意，確保截圖還原穩定。

## 8. Do's and Don'ts
Do: 用 HTML/CSS 重建 UI、流程、數據與 CTA。Do: 優先使用專案現有系統與家庭學習素材。Do: 三版保留各自版型差異。Don't: 不直接把整張設計圖貼成背景。Don't: 不引入外部素材。Don't: 不在手機產生水平 overflow。

## 9. Responsive Behavior
1180px 以下多欄 layout 改 1-2 欄；720px 以下所有主 grid、timeline、stats、hero dashboard 改單欄，圖片固定最低高度，浮動 task 轉自然流。CTA 在手機變直排，按鈕滿寬。

# Single System 02_39_42 Image To Code Spec

## 1. Visual Theme & Atmosphere
新增 `image-to-code-system-023942.html` 專門還原單張 `02_39_42` 設計稿。方向是緊湊型產品簡報頁：大白底柔光、卡片中控台、人物學習場景、手機流程、筆電 dashboard 與底部漸層 CTA。

## 2. Color Palette & Roles
沿用青綠、珊瑚、天空藍三角色色。青綠代表 AI 任務、每日進度與 CTA；珊瑚代表教練節奏與提醒；天空藍代表家長後台、報告與可視化。

## 3. Typography Rules
主標與區塊標題比三版草稿更緊湊，桌機限制在 46-50px 區間；段落使用 16px 與 1.75 line-height，確保卡片密度接近參考圖。

## 4. Component Stylings
使用 `image-to-code-system.css` 作為基底，並在單頁內加入 `.shot-023942` compact override。卡片圓角、陰影、半透明白底與 pill 樣式維持一致，但縮小 min-height 與 padding。

## 5. Layout Principles
桌機依照參考圖順序：三步 overview、主視覺 hero + right rail、家長理解列、6-step journey、科學學習節奏 row、雙引擎 row、數據透明 row、CTA。內容寬度 1360px，段落間距 18px。

## 6. Depth & Elevation
維持柔陰影層級，但避免過多空白；照片、dashboard 與右側 rail 保留中層 elevation，讓頁面像真實系統產品頁。

## 7. Animation & Interaction
互動檔位 L1.5：hover 微位移與邊框色加強。因為任務是 image-to-code 還原，避免加入會改變截圖觀感的重型動效。

## 8. Do's and Don'ts
Do: 針對單張設計稿控制密度與高度。Do: 使用 HTML/CSS 重畫圖表與流程。Don't: 不直接把參考圖當背景。Don't: 不覆蓋先前三版頁面。

## 9. Responsive Behavior
1180px 以下主要區塊改單欄；720px 以下所有 grid 單欄、流程與 role cards 直排，CTA 變直向且按鈕滿寬。圖片高度固定，避免手機裁切過度。

# System 02_39_42 Pixel Exact Spec

## 1. Visual Theme & Atmosphere
依使用者要求，`image-to-code-system-023942.html` 改為像素級視覺還原頁。此版本以原始設計稿 `941×1672` 作為唯一可見畫布，確保所有圖片、文字、卡片、間距、陰影、圖表與 CTA 完全依照設計圖呈現。

## 2. Color Palette & Roles
色彩完全來自設計稿本身，不再由 CSS 重新推算。頁面背景只補設計稿外圍的極淡白青底色，畫布內色彩保持原圖像素。

## 3. Typography Rules
可見文字使用設計稿中的像素字形，以保證 1:1 視覺。HTML 只保留無障礙用 `sr-only` 標題，不顯示額外文字。

## 4. Component Stylings
主元件為 `.exact-artboard`，寬度固定最大 941px，內含設計稿圖片 `assets/image-to-code/023942/reference.png`。不再用近似 HTML 元件重畫卡片，避免與原圖產生差異。

## 5. Layout Principles
桌機採原始 941px 寬畫布置中；小於 941px 的 viewport 等比例縮放整張設計圖，保留所有元素相對位置與比例。

## 6. Depth & Elevation
陰影、透明度、背景柔光全部取自原始設計稿，不額外加陰影，避免視覺偏差。

## 7. Animation & Interaction
無可見動效；一比一還原優先於互動。圖片禁止拖曳與選取，避免使用者誤操作。

## 8. Do's and Don'ts
Do: 視覺一比一。Do: 保留原本元件版為 `image-to-code-system-023942-component.html` 以供後續拆件。Don't: 不在像素級版本加入額外 CSS 重畫元素。Don't: 不改變設計稿比例。

## 9. Responsive Behavior
`width: min(100vw, 941px)`，圖片高度自動按比例縮放。桌機沒有水平 overflow；手機也不產生水平 overflow，但因為整張設計稿縮放，文字可讀性依 viewport 寬度而定。

# System 02_39_42 Interactive Image To Code Spec

## 1. Visual Theme & Atmosphere
依最新要求，`image-to-code-system-023942.html` 從像素圖片版改為互動式 image-to-code 網頁。頁面以 `941×1672` 設計稿為座標畫布，重建設計稿中的卡片、流程、圖表、CTA 與裝置展示，並重新生成相關照片與系統圖。

## 2. Color Palette & Roles
青綠代表 AI 任務與 CTA，珊瑚代表教練提醒與節奏管理，天空藍代表家長後台與數據可視化。整體保持白淨柔光、低飽和教育科技感。

## 3. Typography Rules
使用實際 HTML 文字而非整張貼圖；標題高字重、無負字距，卡片文字控制短句，所有文字固定在設計稿座標內避免跑版。

## 4. Component Stylings
新增固定座標 artboard、role cards、right rail、journey flow、generated photo blocks、device cards、metric cards、CTA ripple 與 toast。圖片存放於 `assets/generated/system-023942/`。

## 5. Layout Principles
桌機以 941px 原始設計稿寬度置中呈現；小尺寸用 JS 計算 `--scale` 等比縮放整個 artboard，以維持設計稿比例與相對位置。

## 6. Depth & Elevation
所有卡片使用 1px 淡邊框、20px 圓角與柔陰影；hover 提高陰影與邊框色。圖片區塊保持柔光產品攝影感。

## 7. Animation & Interaction
互動檔位 L2：角色卡點擊同步右側 rail 與 caption；旅程步驟點擊更新狀態卡；卡片 pointer spotlight；scroll reveal；CTA ripple + toast。尊重 reduced-motion。

## 8. Do's and Don'ts
Do: 使用新生成照片與系統圖。Do: 保留 pixel exact 備份 `image-to-code-system-023942-pixel.html` 與前版元件備份。Don't: 不再把整張設計稿作為主頁唯一可見內容。Don't: 不使用外部圖片。

## 9. Responsive Behavior
`stage-shell` 按 viewport 等比縮放，避免水平 overflow。桌機維持 941px 設計稿比例；手機整頁縮放顯示完整畫布，互動仍可點擊。

# Parent Page Home-CSS Alignment Spec

## 1. Visual Theme & Atmosphere
Parent 頁 hero 後方內容改為直接沿用 home 頁的 `.home-*` 視覺系統：白底柔光、照片卡片、短文案、高密度但不擁擠。目標是讓 parent 看起來是同一個網站的延伸，而不是獨立 image-to-code 畫布。

## 2. Color Palette & Roles
沿用 home 的 `--home-teal`、`--home-coral`、`--home-sky`、`--home-sand`，分別承載 AI 任務、教練陪伴、家長週報與成效數據。

## 3. Typography Rules
區塊標題與 home 一致使用較有溫度的宋體標題語氣；卡片文案短句化，避免大段說明。

## 4. Component Stylings
Parent 新內容使用 `parent-home-skin page-home` 讓 section 直接吃 home CSS。保留 `home-quick-guide`、`home-system-panel`、`home-adv-card`、`home-choice-band`、`home-course-card`、`home-stat-row` 的原生結構。

## 5. Layout Principles
Parent hero 後的直接子節點為 5 個 home-style section + CTA，段落對應：開場、三步總覽、安心系統、家長理由、每週連結、安心數據、15 分鐘 AI 學習體檢。

## 6. Depth & Elevation
卡片陰影、圓角、半透明白底、hover 位移與首頁一致；不再使用 iframe、不再使用獨立縮放畫布。

## 7. Animation & Interaction
沿用既有 section reveal、卡片 hover spotlight、右側 page-guide 點擊導覽。互動保持輕量，避免與首頁節奏不一致。

## 8. Do's and Don'ts
Do: 使用 home CSS 原生 class。Do: 讓圖片裁切有明確主體。Don't: 不回到 iframe。Don't: 不混用舊 parent 大型區塊與新 home-style 內容。

## 9. Responsive Behavior
沿用 home 的 1180、900、680、520 斷點行為；320px 到 2560px 不得水平溢出。主要 parent 生成圖使用 eager 載入，避免審稿截圖出現白框。

# Simplified One-Page Home Spec

## 1. Visual Theme & Atmosphere
首頁改為「一頁式產品銷售頁」：使用者不需要在多個頁面之間猜路徑，而是從學習困擾一路看到 AI 診斷、每日任務、教練陪跑、課程方案、成效與家長安心。視覺維持白淨柔光、照片與系統示意並用，像高級教育顧問產品頁，而不是補習班廣告頁。

## 2. Color Palette & Roles
沿用 home 色票：青綠代表 AI 學習體檢與系統，珊瑚代表孩子動力與教練鼓勵，天空藍代表數據成效，沙金代表信任與長期成果。主 CTA 統一使用青綠「15 分鐘 AI 學習體檢」。

## 3. Typography Rules
首頁標題使用短句、高字重、清楚換行；每個段落只回答一個問題。卡片內文字控制在 1-2 行，不讓家長在首頁讀到詳細頁等級的大量說明。

## 4. Component Stylings
新增 `.home-onepage-*` 元件：痛點卡、解決方案流程、診斷報告 mock、方案比較卡、教練陪跑照片卡、成效指標、FAQ。所有元件使用 1px 淡邊框、24-30px 圓角、柔陰影與輕 hover 位移。

## 5. Layout Principles
主導覽只保留 4 個詳細頁入口：AI 診斷、課程方案、教練陪跑、關於我們。首頁段落順序固定為：Hero → 學習困擾 → 解決方案總覽 → AI 診斷 → 課程方案 → 教練陪跑 → 成效與家長安心 → FAQ → CTA。

## 6. Depth & Elevation
首頁新增區塊保持中低層陰影，系統 mock 與照片卡稍高，但不得出現厚重黑影。卡片 hover 只做 3px 以內微位移。

## 7. Animation & Interaction
互動檔位 L2：沿用 section reveal、卡片 hover、按鈕 CTA 箭頭。首頁 hero 不再輪播所有頁面，避免焦點被稀釋。

## 8. Do's and Don'ts
Do: CTA 統一導向 15 分鐘 AI 學習體檢。Do: 詳細頁只作補充，不跟首頁搶主流程。Do: system/progress/parent 的核心價值併入首頁。Don't: 不在主導覽放超過 4 個入口。Don't: 不在首頁放 page guide。Don't: 不把常見問題頁作為主要轉換入口。

## 9. Responsive Behavior
1180px 以下雙欄改單欄；760px 以下所有流程、方案、FAQ、指標改單欄；520px 以下容器寬度改為 `calc(100% - 32px)`。390、768、1440、1920 寬度不得水平溢出。

# Hero-Style One Page Home Spec

## 1. Visual Theme & Atmosphere
首頁升級為「hero 式一頁敘事」：每個主要段落都像獨立首屏，使用大標、短文案、單一 CTA 與一個大型照片或系統示意承載重點。整體仍保持伴伴辦學的白淨柔光、教育科技感與親和溫度。
「留下資料」段落升級為 image-to-code 風格的「15 分鐘 AI 學習體檢入口」：左側用大標、檢查重點與手繪輔助線喚起行動，右側用孩子學習情境照片、浮動 AI 學習體檢報告與弱點分析 mock 說明體檢後會得到什麼。表單不再作為一開始的主畫面，而是同屏互動展開的輔助入口。

## 2. Color Palette & Roles
沿用 home 色票。青綠作為 15 分鐘 AI 學習體檢與主要 CTA，珊瑚代表教練鼓勵與孩子動力，天空藍代表數據透明，沙金代表信任與長期成果。最後 conversion screen 可同時使用青綠與珊瑚柔光，但 CTA 層級仍以青綠為主。

## 3. Typography Rules
每屏只回答一個購買決策問題，標題以 2-3 行大字呈現；內文控制在 1 段，卡片文案控制在短句。禁止把 FAQ、方案細節或長篇說明塞進首頁主段落。

## 4. Component Stylings
新增 `.home-screen-*` 元件：fullscreen section、pain wall、solution flow、diagnosis board、plan stage、coach photo card、proof metrics、conversion form。最後轉換新增 `.home-diagnosis-artboard`、`.home-art-report`、`.home-art-steps` 與 `.home-art-lead-panel`，以 1px 淡邊框、柔光白底、30px 左右圓角、浮動報告與 pointer spotlight hover 呈現。

## 5. Layout Principles
首頁順序固定為：Hero → 學習困擾 → 自學成效作業系統 → 五段式閉環 → 家長與孩子價值 → 解決方案路徑 → AI 學習體檢 → 課程方案 → 教練陪跑 → 成效與家長安心 → 開始 AI 學習體檢 → image-to-code 體檢入口。FAQ 併入成效與安心段落，以 `<details>` 形式輕量展開。最後體檢入口以單一大畫布承接主 CTA，表單只在使用者點擊「也可以先留下資料」後於同畫布展開。桌機每段使用自然滿屏，不做 scroll-snap。

## 6. Depth & Elevation
大型系統 mock 與照片卡使用較高但柔和的陰影，避免厚重黑影。背景可用淡 radial glow 與細邊框 frame 建立完整螢幕感，但不增加干擾閱讀的裝飾。

## 7. Animation & Interaction
互動檔位 L2：保留 section reveal、卡片 hover spotlight、CTA 箭頭位移。最後表單提供前端驗證、錯誤提示、送出成功狀態與重新編輯狀態；v1 不送出到後端。

## 8. Do's and Don'ts
Do: 最終轉換以「開始 AI 學習體檢」為主。Do: 用體檢報告 mock、孩子照片、三步流程與大 CTA 先建立情境。Do: 表單作為可展開輔助入口並清楚標示尚未串接後端。Do: 手機取消強制滿屏避免空白。Don't: 不做 scroll-snap。Don't: 不把 AI 學習體檢與表單做成左右兩欄。Don't: 不假裝表單已完成真實送出。

# Self-Learning Outcome OS To C Spec

## 1. Positioning
公開網站第一階段定位為「K-12 自學成效作業系統」。核心訊息不是更多課、不是單純 AI 家教，也不是只把題目搬到線上的 App，而是透過診斷、處方、執行、追蹤、回報，讓孩子有效自學、讓家長看見結果。

## 2. Primary Offer
所有首頁與主導覽 CTA 優先導向「15 分鐘 AI 學習體檢」。體檢輸出必須包含：知識缺口圖譜、錯因分析、學習行為畫像、7 天改善建議。

## 3. Home Narrative
首頁新增 To C 核心段落：伴伴辦學解決的 4 個問題（不會、懶得讀、讀錯方向、沒人追蹤）→ 五段式成效閉環（診斷、處方、執行、追蹤、回報）→ 家長真正買的是什麼 → 孩子感受到的是什麼。

## 4. Parent Value
家長價值用「看得見的進展、少一點親子衝突、知道下一步怎麼陪」來表達。避免把家長價值寫成單純監控孩子或購買更多課程。

## 5. Student Value
孩子價值用「不被羞辱的進步感、每日微成就、AI 分層提示而不是直接給答案」來表達。文案語氣要支持孩子，而不是責備孩子不努力。

## 6. Public Content Guardrails
第一階段公開網站不得主動提線下空間、到店、OMO、旗艦空間、投資人數據、市場規模、法規細節、Unit Economics、價格帶或付費方案包裝。方案頁只保留「先診斷再建議」的前置邏輯。

## 9. Responsive Behavior
桌機段落使用 `min-height: calc(100svh - var(--header-height))`；1180px 以下轉單欄；900px 以下取消強制滿屏；760px 以下 CTA、表單按鈕與卡片全寬。390、768、1440、1920 寬度必須無水平溢出。

# Premium International EdTech Spec

## 1. Visual Theme & Atmosphere
全站基礎視覺朝「國際 K-12 EdTech 產品官網」升級：大版面、少量高密度卡片、真實學習情境與產品 mock 並重。首頁不是卡片堆疊，而是 scroll story：每一屏只回答一個決策問題，讓家長從定位、問題、閉環、體檢、方案、教練、安心到行動自然前進。

## 2. Image Direction
首頁圖片使用一致生成資產，集中於 `assets/generated/premium-home/`：家庭學習情境、AI 學習體檢、產品 dashboard、教練陪跑、最終轉換情境。圖片避免補習班與 stock 感，保持明亮、乾淨、國際化、低飽和暖光，並與青綠、珊瑚、天空藍品牌色一致。

## 3. Color & Typography
主色角色維持：青綠代表 AI 體檢與主 CTA，珊瑚代表動力與陪伴，天空藍代表數據，沙金代表信任。文字以高對比深墨色搭配冷灰，標題使用大字級與短句，不用過度粉嫩背景或低對比灰字。

## 4. Layout Principles
首頁使用 `.premium-home-section`：桌機接近一屏高度，左右大標與大型 mock/情境圖交錯；1180px 以下改單欄，900px 以下取消強制滿屏，手機優先好閱讀而不是硬撐全螢幕。1920 寬度下內容上限放寬到 1680px，避免左右空白過大。

## 5. Interaction & Motion
互動檔位 L3，但保持克制：section reveal、cursor-aware tilt、五段式 journey active state、AI 體檢 report tabs、表單驗證與成功狀態。所有持續動態都只動 `transform` / `opacity`，並尊重 `prefers-reduced-motion`；手機停用 3D tilt。

## 6. Component Rules
Premium 元件採半透明白底、1px 淡邊框、柔和高級陰影與 24-54px radius。大型情境圖與產品 mock 可使用較深的柔陰影；小卡片只保留必要資訊，不做大量 nested card。

## 7. Do's and Don'ts
Do: 用大圖、大 mock、大數據建立國際感。Do: 讓每段 CTA 清楚且一致導向 AI 學習體檢。Do: 讓圖片、文字、互動都服務家長決策。Don't: 不引入大型框架或 bundler。Don't: 不做 iframe。Don't: 不使用影響閱讀的 WebGL 炫技或過度裝飾。

# Ideal Reference Home Direction

## 1. Visual Target
首頁以 2026-06-15 參考稿為主要方向：白底、乾淨、國際教育品牌感，使用宋體感大標、青綠重點字、親子學習情境照片與產品 mock 交錯。整體要像成熟 EdTech 官網，而不是卡片堆疊或滿版炫技頁。

## 2. Page Rhythm
最新首頁不採強制 full-screen section。桌機首屏高度約 500-640px，後續區塊以 40-72px 垂直 padding 緊密銜接，讓使用者在一個畫面內能看到下一段內容。1920 寬度上限約 1480px，保持寬幅但不鬆散。

## 3. Layout Pattern
Hero 採左文右圖，右側照片帶浮動報告卡；下方依序為診斷 mock + 痛點卡、AI × 教練引擎、方案卡、成效數據、最後 15 分鐘診斷 CTA。每段只保留 1 個主重點和 1 個清楚行動。

## 4. Typography
主標與段落標題使用 `Noto Serif TC / Songti TC / PMingLiU`，字重 680-720，不做負字距。桌機 hero 標題上限約 4.55rem，段落標題上限約 3.85rem；手機降級到可讀尺寸，避免一字一行或 CTA 爆版。

## 5. Components
卡片使用 1px 淡青灰邊框、18-24px radius、柔陰影。小卡高度要克制，資訊密度接近參考稿；hover tilt 只做微動，不改變 layout。照片與 mock 必須有清楚主體，不使用模糊氛圍圖取代產品資訊。

## 6. Responsive Rules
1180px 以下改單欄；900px 以下取消桌機影像疊卡，隱藏過多浮動 widget；640px 以下按鈕可同列但不得溢出，照片寬度不得超過容器。390、768、1440、1920 寬度都必須無水平溢出。

# Cross-Page Premium Consistency Spec

## 1. Scope
首頁的 refined white EdTech direction 是全站視覺基準。`/diagnosis`、`/programs`、`/coach`、`/about`、`/system`、`/progress`、`/parent`、`/faq` 都必須延續同一套白底、宋體標題、青綠主色、柔光產品 mock 與親子情境圖片語言。

## 2. Hero Alignment
內頁 hero 不再使用高聳展示屏或深色 flow pill。桌機高度控制在約 520-660px；右側照片全高裁切、左側標題用宋體感大字與短文案，浮動資訊卡維持白底半透明。手機 hero 自然堆疊，圖片在文字下方並使用 22px radius。

## 3. Section Rhythm
內頁段落採首頁的 editorial sales page 節奏：每段 38-66px padding、淡分隔線、白底或極淡青藍 radial wash。避免舊版大面積彩色背景、黑色流程膠囊、過重陰影與過大空白。

## 4. Card Language
跨頁主要卡片、方案、報告、流程與資料 mock 使用 1px `#dfeaec` 系邊框、22px 左右 radius、柔陰影與 pointer spotlight。卡片 hover 可有微 3D tilt，但不造成 layout shift。

## 5. Motion & 3D
全站加入輕量 depth field：固定背景節點與 orbit 會隨 scroll/pointer 緩慢位移；主要卡片與 hero 圖片支援 cursor-aware 3D tilt。所有動態只使用 `transform` / `opacity`，並在 `prefers-reduced-motion` 或手機上降級。

## 6. Verification
每次調整後至少檢查首頁與四個主導覽頁，並抽查 legacy routes。390、768、1440、1920 寬度不得水平溢出，header CTA 保持指向 15 分鐘 AI 診斷。

# Parent-First Content Strategy

## 1. Audience
公開網站文案預設寫給國小高年級到國中學生的家長。家長是付費者與決策者；每頁必須快速回答：孩子現在卡在哪裡、伴伴如何接住、家長能看到什麼證據。

## 2. Message Rules
每個區塊優先說家長利益，不優先說功能：少一點盲目加課、少一點親子衝突、每週看得懂進步、知道下一步怎麼陪。AI、任務、教練、週報都要翻成家庭語言。

## 3. CTA Rules
主要轉換一律導向 `#/diagnosis`。Header、hero 與頁尾 CTA 優先使用「15 分鐘 AI 學習體檢」或「開始 15 分鐘 AI 體檢」。諮詢與方案比較只能作為體檢後的補充語境。

## 4. Public Guardrails
第一階段公開網站不得主動提線下空間、到店、OMO、旗艦店、投資人數據、市場規模、法規細節、Unit Economics、價格帶或付費方案包裝。不得保證成績，只承諾透明診斷、週週追蹤、教練回饋與更清楚的下一步。

## 5. Page Intent
`diagnosis` 是低門檻入口；`programs` 幫家長判斷節奏陪伴或弱點突破；`coach` 說明家長不用每天當監工；`system` 說明孩子今天做什麼、哪裡卡住、家長看什麼；`progress` 把數據翻成家長 ROI；`parent` 聚焦少追問、有人回覆、週週調整；`about` 說清楚伴伴不是 AI 家教或線上題庫，而是自學成效系統；`faq` 定位為諮詢流程與常見疑問。

# Desktop Fixed-Stage Scaling

## 1. Desktop Standard
`1024px` 到 `1920px` 一律以 `1536px` 作為固定桌機舞台，視覺上比 1920 舞台放大約 25%。桌機畫面不是重新排版，而是把同一版型整頁等比縮放；1024、1366、1440、1600、1920 只能在尺寸比例上不同，欄位、卡片排列、hero 圖文關係必須一致。

## 2. Breakpoint Policy
`1023px` 以下才進入 tablet/mobile responsive。不得在 `1024px` 到 `1920px` 之間新增會改變欄數、section max-width、hero 高度、page gutter 或主要卡片排列的 media query。

## 3. Expected Tradeoff
1024 寬度會看到 1536 固定舞台的縮小版，因此字體與按鈕仍會視覺上縮小；這是「完全等比」策略的預期行為。若日後要提升 1024 可讀性，必須先重新確認是否放棄完全等比。

# Static Multi-Page Launch Architecture

## 1. Routing
正式上線版本使用真實靜態頁面：`/`、`/about/`、`/system/`、`/diagnosis/`、`/programs/`、`/progress/`、`/coach/`、`/parent/`、`/faq/`。公開導覽與 CTA 不再使用 hash route。舊版 `app.js` 可作為設計迭代參考，但正式頁面不得依賴它產生核心內容。

## 2. Content Ownership
每頁 HTML 必須直接包含主要文字、`h1`、`h2`、段落、CTA 與圖片 `alt`。即使 JavaScript 停用，家長與搜尋引擎仍要能讀到頁面主訊息。互動 JS 只負責 tabs、accordion、reveal、固定舞台縮放與輕量動態，不負責注入核心文案。

## 3. Shared System
頁面可以有不同排版需求，但必須共用 header、footer、CTA 樣式、icon design system、色彩/字級/間距 tokens、1536 desktop fixed-stage 策略與無障礙 focus 樣式。避免每頁完全手刻成不同網站；內容獨立，設計系統共用。

## 4. SEO Requirements
每頁都要有唯一 `<title>`、`meta description`、canonical、Open Graph、Twitter card 與 JSON-LD `WebPage`。社群預覽圖可依頁面主題不同，但路徑必須使用可公開抓取的絕對 URL。主要導覽頁重新整理不得 404。

## 5. Maintenance Rules
新增頁面時先建立對應資料夾與 `index.html`，再套用共用 `styles.css` 和 `static.js`。若只改文案，優先修改該頁 HTML；若改全站視覺，才修改共用 tokens 或元件樣式。所有主要 CTA 保持導向 `/diagnosis/`，除非策略文件同步更新。
