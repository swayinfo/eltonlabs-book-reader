# 📖 Book Reader by Elton Labs — EPUB & PDF Reader for Obsidian

**Read EPUB and PDF books directly inside [Obsidian](https://obsidian.md)** — a beautiful, distraction-free book reader with text highlighting, notes, and reading progress that syncs into your vault. Works on both desktop and mobile (Windows, macOS, Linux, Android, iOS).

> A lightweight Obsidian reading plugin: open a book, highlight what matters, turn highlights into linked notes — without ever leaving your knowledge base.

The interface is **bilingual (English / Russian)** — choose your language in the plugin settings (Russian is the default, English is one click away).

**Keywords:** Obsidian EPUB reader · Obsidian PDF reader · read books in Obsidian · book highlighting · annotate PDFs · reading progress sync · highlights to notes.

---

## Why read your books inside Obsidian?

Most people keep their notes in Obsidian but read books somewhere else — then copy quotes back by hand. **Book Reader** closes that gap: the book, your highlights, and your notes all live in the same vault. Every quote can become a real, linked Markdown note, so your reading feeds directly into your knowledge base.

- 📚 One place for **reading and note-taking** — no more app switching.
- 🖍️ **Highlights become notes** with backlinks to the book.
- ☁️ **Reading progress and highlights are plain files** in your vault, so they sync anywhere you sync Obsidian.
- 📱 **Desktop and mobile**, with a real paged reading experience.

---

## ✨ Features

### Reading
- **Formats:** EPUB (`.epub`) and PDF (`.pdf`).
- **Paged mode** with a 1- or 2-column layout, like a real book, with smooth page turns.
- **Mobile-friendly:** fullscreen reading, swipe to turn pages, long-press to select text.
- **Themes:** dark, light, sepia. **Fonts:** Georgia, Lora, Inter. Adjustable font size, line height and column count.
- **Table of contents** — jump to any chapter in one tap.
- **Jump to a page** — tap the page counter at the bottom and type a number to go straight to that page/spread, instead of paging there.

### Reading progress
- Progress is **saved as a file in your vault** (`reading-progress.json`, next to your books), so it syncs across devices along with your vault.
- Each book **reopens exactly where you left off** (the paragraph is briefly highlighted).
- **Position history** — roll back to earlier reading spots. Manual **"Save reading position"** command.

### Highlights & notes
- Highlight text in **4 colors** (yellow, green, blue, pink); recolor or remove any highlight.
- All highlights are gathered in a side panel, tied to the book.
- **Create a note from a highlight** — a separate Markdown note with a backlink to the book.
- **Export highlights** into the book's note; the highlight color is preserved as a colored `<mark>` (toggle in settings).
- **Export a single highlight** — right-click it (or tap the **⋯** button) in the Highlights panel to send just that one quote into a new note or the book note.

### Library
- Visual **book library** with covers, progress and metadata.
- **Search by title** in the library header.
- **Cover fit** toggle (fill / contain), remembered per book. Crisp, high-resolution covers.
- Opens from the 📖 ribbon icon or a command.

### Sync across devices
- Reading progress and highlights are **small JSON files in your vault** (`reading-progress.json`, `reading-highlights.json`), so they travel with **any** vault sync — Obsidian Sync, self-hosted LiveSync, iCloud, Google Drive, Remotely Save, etc. Positions are anchored by paragraph, so phone and desktop land on the same spot at any screen size.
- **Cover thumbnails are cached locally per device** (`thumb-cache.json`) and are intentionally **not** synced — this keeps the synced data tiny and free of conflicts (covers just regenerate on each device).
- A **Sync method** setting (Auto / cloud folder / none) tells the plugin how eagerly to re-read progress when a book opens, so cloud folders that update with a delay still merge cleanly.

---

## 🎛️ Commands

Available from the command palette (`Ctrl/Cmd + P`):

| Command | Description |
|---|---|
| **Open library** | Visual grid of all your books |
| **Open PDF in Book Reader** | Open the active PDF in the reader |
| **Save reading position** | Pin the current spot |
| **Export highlights to notes** | Dump all of a book's highlights |

Also: right-click a `.pdf` file → **"📖 Open in Book Reader"**.

---

## ⚙️ Settings

- **Language** — interface language (Russian / English), default Russian.
- **Books folder** — where the plugin looks for books.
- **Reading-data folder** — where progress, highlights and rescue backups are kept (`reading-progress.json`, `reading-highlights.json`). Empty = next to your books.
- Theme, font, font size, line height, column count.
- **Notes from highlights** — note template (Templater-compatible), target folder for new notes, book-notes folder for the backlink picker, a per-book template (book → **(i)** button), and "keep highlight color on export".

> All folder/path settings are empty by default — the plugin never hardcodes paths into someone else's vault. Configure it to your setup.

---

## 📥 Install & update via BRAT

[BRAT](https://github.com/TfTHacker/obsidian42-brat) (Beta Reviewers Auto-update Tool) installs and auto-updates plugins straight from GitHub.

1. Install **BRAT** from **Community plugins** and enable it.
2. Command palette → **BRAT: Add a beta plugin**, and paste the repo:
   ```
   swayinfobrain/elton-reader-books
   ```
3. Keep **"Enable after installing the plugin"** on and click **Add Plugin**. The 📖 icon appears in the ribbon.
4. **Updates:** BRAT checks on Obsidian startup, or run **BRAT: Check for updates to all beta plugins**.

> Each GitHub release must include **`manifest.json`**, **`main.js`**, **`styles.css`** and **`pdf.worker.js`** (the last one is needed for offline PDF reading).

## 🛠️ Manual install (without BRAT)

1. Download `main.js`, `styles.css`, `manifest.json` and `pdf.worker.js` from a release.
2. Copy them into `<your-vault>/.obsidian/plugins/elton-reader-books/`.
3. Restart Obsidian → **Settings → Community plugins** → enable **Book Reader by Elton Labs**.

---

## 🛟 Tips & troubleshooting

- **Text looks misaligned / broken after opening or closing a sidebar panel or tab?** Press the **Refresh** button (🔄) in the reader's top bar to rebuild the layout. The reading area is measured when the book opens, so changing the window layout (opening/closing a side panel, another tab, resizing the window) can shift the columns — one tap on Refresh re-lays the page and keeps your current position.

---

## 💬 Contact & community

Made by **Elton Labs**. Follow along, ask questions, and suggest features:

- ▶️ **YouTube:** [@eltonlabs](https://www.youtube.com/@eltonlabs)
- ✈️ **Telegram:** [@eltonlabs](https://t.me/eltonlabs)

If this plugin is useful to you, a ⭐ on the repo helps other Obsidian users find it.

<br>

---
---

# 📖 Book Reader by Elton Labs — читалка EPUB и PDF для Obsidian (Русская версия)

Красивая читалка **EPUB** и **PDF** прямо внутри Obsidian — с выделениями, заметками и синхронизацией прогресса чтения в ваш vault.

> Работает и на компьютере, и на телефоне (Android/iOS).

Интерфейс **двуязычный (русский / английский)** — язык выбирается в настройках плагина (по умолчанию русский).

---

## ✨ Возможности

### Чтение
- **Форматы:** EPUB и PDF.
- **Постраничный режим** с вёрсткой в 1 или 2 колонки (как в настоящей книге), плавное перелистывание.
- **На телефоне** — полноэкранный режим, перелистывание свайпом, выделение текста долгим нажатием.
- **Темы оформления:** тёмная, светлая, сепия.
- **Шрифты:** Georgia, Lora, Inter.
- Настройка **размера шрифта**, **межстрочного интервала** и **числа колонок**.
- **Оглавление (TOC)** — переход к любой главе одним тапом.
- **Переход на страницу** — тап по счётчику страниц внизу, введите номер — и книга откроется сразу на нужной странице/развороте, без пролистывания.

### Прогресс чтения
- Прогресс **сохраняется в vault** (файл `reading-progress.json` рядом с книгами) — значит, синхронизируется между устройствами вместе с хранилищем.
- При повторном открытии книга **открывается на том месте, где вы остановились** (абзац коротко подсвечивается).
- История позиций — можно вернуться к предыдущим местам чтения.
- Команда **«Сохранить позицию чтения»** для ручной отметки.

### Выделения и заметки
- **Выделение текста** в 4 цвета (жёлтый, зелёный, голубой, розовый); цвет можно изменить или удалить выделение.
- Все выделения собираются в отдельной панели и привязаны к книге.
- **Создать заметку из выделения** — отдельная заметка с обратной ссылкой на книгу.
- **Экспорт выделений** в заметку книги (командой или из панели).
- **Цвет выделения сохраняется** при экспорте: цитата оборачивается в цветной `<mark>` и виден в готовой заметке (в режиме чтения и live preview, без плагинов). Отключается тумблером в настройках.
- **Экспорт одного выделения** — правый клик по нему (или кнопка **⋯**) в панели «Выделения» отправляет именно эту цитату в новую заметку или в заметку книги.

### Библиотека
- Визуальная **библиотека книг** с обложками, прогрессом и метаданными.
- **Поиск по названию** прямо в шапке библиотеки.
- **Вид обложки** — кнопка в углу обложки переключает между «заполнить» (обрезает по карточке) и «вписать» (показывает обложку целиком в пропорции на мягком размытом фоне). Настройка запоминается отдельно для каждой книги.
- Чёткие обложки в высоком разрешении.
- Открывается иконкой 📖 на боковой панели (ribbon) или командой.

### Синхронизация между устройствами
- Прогресс чтения и выделения — это **небольшие JSON-файлы в хранилище** (`reading-progress.json`, `reading-highlights.json`), поэтому они переезжают **любым** способом синхронизации хранилища — Obsidian Sync, self-hosted LiveSync, iCloud, Google Drive, Remotely Save и т.п. Привязка к месту — по номеру абзаца, так что телефон и ПК находят одну и ту же точку при любом размере экрана.
- **Обложки кэшируются локально на каждом устройстве** (`thumb-cache.json`) и намеренно **не** синхронизируются — благодаря этому синкаемые данные остаются крошечными и без конфликтов (обложки просто пересобираются на каждом устройстве).
- Настройка **«Способ синхронизации»** (Авто / облачная папка / без синхронизации) подсказывает плагину, насколько свежо перечитывать прогресс при открытии книги, чтобы облачные папки с задержкой сливались без конфликтов.

---

## 🎛️ Команды

Доступны через палитру команд (`Ctrl/Cmd + P`):

| Команда | Описание |
|---|---|
| **Открыть библиотеку** | Визуальная сетка всех книг |
| **Открыть PDF в Book Reader** | Открыть активный PDF в читалке |
| **Сохранить позицию чтения** | Зафиксировать текущее место |
| **Экспортировать выделения в заметки** | Выгрузить все выделения книги |

Также: правый клик (или меню файла) на `.pdf` → **«📖 Открыть в Book Reader»**.

---

## ⚙️ Настройки

- **Язык** — язык интерфейса (русский / английский), по умолчанию русский.
- **Папка с книгами** — где плагин ищет книги.
- **Папка данных чтения** — где хранятся прогресс чтения, выделения и резервные копии (`reading-progress.json`, `reading-highlights.json`). Пусто — рядом с книгами. Эти файлы синхронизируются вместе с хранилищем, поэтому прогресс переезжает между устройствами.
- Тема, шрифт, размер шрифта, межстрочный интервал, количество колонок.

### Заметки из выделений
- **Шаблон заметки** — путь к вашему шаблону (Templater), который применяется к каждой новой заметке из выделения. Пусто — заметка создаётся без шаблона, только с цитатой и ссылкой на книгу. Работает и без Templater (тогда переменные шаблона просто вырезаются).
- **Папка для новых заметок** — куда сохранять заметки из выделений. Пусто — корень хранилища.
- **Папка заметок-книг** — из этой папки берётся список при выборе заметки книги, куда ведёт обратная ссылка «— из [[…]]». Пусто — можно выбрать любую заметку хранилища.
- **Шаблон для отдельной книги** — откройте книгу → кнопка **(i)** вверху → поле **«Шаблон для этой книги»**. Позволяет задать свой шаблон под конкретную книгу или жанр; если пусто — используется общий шаблон из настроек.
- **Сохранять цвет выделений при экспорте** — цитата оборачивается в цветной `<mark>`, цвет виден в готовой заметке. Выключите, если нужны обычные цитаты без HTML.

> Все эти пути по умолчанию пустые — плагин ничего не привязывает к чужому хранилищу. Настройте под себя.

---

## 📥 Установка и обновление через BRAT

[BRAT](https://github.com/TfTHacker/obsidian42-brat) (Beta Reviewers Auto-update Tool) позволяет ставить и автоматически обновлять плагины напрямую из GitHub, без публикации в каталоге Obsidian.

### 1. Установите BRAT
1. Откройте **Настройки → Сторонние плагины (Community plugins) → Обзор**.
2. Найдите **BRAT** (`Obsidian42 - BRAT`), установите и включите.

### 2. Добавьте Book Reader
1. Откройте палитру команд (`Ctrl/Cmd + P`) → **BRAT: Add a beta plugin**
   (или: Настройки → BRAT → **Add Beta plugin**).
2. В поле репозитория вставьте:
   ```
   swayinfobrain/elton-reader-books
   ```
   *(или полный URL: `https://github.com/swayinfobrain/elton-reader-books`)*
3. Убедитесь, что включена опция **«Enable after installing the plugin»**, и нажмите **Add Plugin**.
4. Готово — иконка 📖 появится на боковой панели.

### 3. Обновление
- **Автоматически:** BRAT проверяет обновления при запуске Obsidian и подтягивает новые релизы.
- **Вручную:** палитра команд → **BRAT: Check for updates to all beta plugins**.

> ⚠️ Чтобы BRAT увидел версию, в каждом GitHub-релизе должны быть приложены файлы **`manifest.json`**, **`main.js`**, **`styles.css`** и **`pdf.worker.js`** (последний нужен для чтения PDF офлайн).

---

## 🛠️ Установка вручную (без BRAT)

1. Скачайте `main.js`, `styles.css`, `manifest.json` и `pdf.worker.js` из нужного релиза на GitHub.
2. Скопируйте их в папку:
   ```
   <ваш-vault>/.obsidian/plugins/elton-reader-books/
   ```
3. Перезапустите Obsidian → Настройки → Сторонние плагины → включите **Book Reader by Elton Labs**.

---

## ❓ Заметки по платформам

- **Десктоп:** книга открывается во вкладке рабочей области.
- **Мобильные:** книга открывается в полноэкранном режиме. Перелистывание — свайпом; выделение текста — долгим нажатием и протягиванием.

---

## 🛟 Советы и решение проблем

- **Текст отображается криво после открытия или закрытия боковой панели / вкладки?** Нажмите кнопку **Обновить** (🔄) на верхней панели читалки — она перестроит вид. Область чтения замеряется при открытии книги, поэтому изменение раскладки окна (открытие/закрытие боковой панели, другой вкладки, смена размера окна) может сдвинуть колонки. Один тап по «Обновить» пере-раскладывает страницу и сохраняет текущую позицию.

---

## 💬 Контакты и сообщество

Автор — **Elton Labs**. Подписывайтесь, задавайте вопросы и предлагайте идеи:

- ▶️ **YouTube:** [@eltonlabs](https://www.youtube.com/@eltonlabs)
- ✈️ **Telegram:** [@eltonlabs](https://t.me/eltonlabs)

Если плагин вам полезен — звезда ⭐ на репозитории помогает другим пользователям Obsidian его найти.
