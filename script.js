/* ============================================================
   МИКРО-БЗ — данные и логика

   Чтобы добавить или изменить статью:
   1. Найдите массив ARTICLES ниже
   2. Скопируйте объект статьи и измените поля
   3. Поле section должно совпадать с разделом навигации

   Поля метаданных статьи:
   - audience   — для кого материал (Клиент, Оператор L1, …)
   - type       — тип документа (Клиентская инструкция, Чек-лист, …)
   - status     — статус публикации (в демо всегда «demo»)
   - lastReviewed — дата последней проверки
   - relatedArticles — массив id связанных статей

   Чтобы добавить макрос для чата:
   1. Найдите массив MACROS
   2. Добавьте объект с полями id, title, text, tags
   ============================================================ */

/* --- Разделы сайта (для заголовков страниц) --- */
const SECTIONS = {
  home: {
    title: 'Главная',
    description: 'Быстрый доступ ко всем материалам базы знаний первой линии поддержки.'
  },
  'client-instructions': {
    title: 'Клиентские инструкции',
    description: 'Короткие пошаговые инструкции для абонентов — удобно отправлять в чате.'
  },
  checklists: {
    title: 'Внутренние чек-листы L1',
    description: 'Алгоритмы диагностики для оператора первой линии. Не для передачи клиенту.'
  },
  macros: {
    title: 'Макросы и шаблоны',
    description: 'Клиентские макросы и внутренние шаблоны для тикетов. Нажмите «Копировать», чтобы использовать текст.'
  },
  escalations: {
    title: 'Эскалации',
    description: 'Когда закрывать обращение самостоятельно, а когда передавать дальше.'
  },
  training: {
    title: 'Обучение новичка',
    description: 'Базовые термины, методология и примеры переработки материалов.'
  },
  'kb-architecture': {
    title: 'Архитектура БЗ',
    description: 'Как устроена база знаний: категории, типы статей, метаданные и жизненный цикл.'
  },
  about: {
    title: 'О проекте',
    description: 'Портфолио-проект технического писателя / специалиста по базам знаний.'
  }
};

/* --- Статьи базы знаний --- */
const ARTICLES = [
  {
    id: 'tplink-pppoe',
    section: 'client-instructions',
    title: 'Как настроить TP-Link EC220 через PPPoE',
    excerpt: 'Короткая инструкция для чата: настройка роутера по PPPoE за несколько шагов.',
    tags: ['роутер', 'PPPoE', 'клиент', 'чат'],
    author: 'Синтетический материал',
    updated: '2026-06-14',
    readTime: '3 мин',
    audience: 'Клиент',
    type: 'Клиентская инструкция',
    status: 'demo',
    lastReviewed: '2026-06-14',
    relatedArticles: ['wan-cable-check', 'wan-lan-pppoe-basics', 'before-after-rewrite'],
    /* HTML-содержимое статьи — редактируйте текст здесь */
    body: `
      <p>Текст для отправки абоненту в чате. Каждый шаг — одно короткое сообщение или один блок.</p>
      <h3>Инструкция</h3>
      <ol>
        <li>Проверьте, что WAN-кабель плотно подключён: один конец — в роутер (порт WAN / Internet), второй — в интернет-розетку, модем или кабель провайдера.</li>
        <li>Подключите роутер к розетке и подождите 1–2 минуты, пока загорятся индикаторы.</li>
        <li>Подключитесь к Wi‑Fi роутера (имя сети указано на наклейке) или кабелем к порту LAN.</li>
        <li>Откройте в браузере <code>192.168.0.1</code> или <code>tplinkwifi.net</code>.</li>
        <li>Войдите: используйте данные с наклейки на роутере или пароль администратора, если вы уже меняли его раньше.</li>
        <li>Выберите тип подключения <strong>PPPoE</strong>.</li>
        <li>Введите логин и пароль PPPoE из SMS или от службы поддержки. Проверьте, что нет лишних пробелов.</li>
        <li>Сохраните настройки и дождитесь применения (обычно 1–2 минуты).</li>
        <li>Откройте любой сайт и проверьте, работает ли интернет.</li>
      </ol>
      <div class="callout callout-warning">
        <strong>Важно:</strong> Не нажимайте кнопку Reset без крайней необходимости: полный сброс удалит все настройки Wi-Fi и подключения к интернету.
      </div>
      <h3>Если не получилось</h3>
      <ul>
        <li>Перепроверьте логин и пароль PPPoE — часто ошибка в одной букве или пробеле.</li>
        <li>Перезагрузите роутер: отключите от розетки на 30 секунд и включите снова.</li>
        <li>Убедитесь, что кабель подключён именно в WAN, а не в LAN.</li>
        <li>Если интернет по-прежнему не работает — напишите нам, мы проверим подключение и подскажем следующий шаг.</li>
      </ul>
    `
  },
  {
    id: 'internet-drops-checklist',
    section: 'checklists',
    title: 'Частые разрывы интернета: L1-чек-лист',
    excerpt: 'Пошаговый алгоритм при жалобах на периодические обрывы соединения.',
    tags: ['диагностика', 'обрывы', 'L1', 'чек-лист'],
    author: 'Синтетический материал',
    updated: '2026-06-14',
    readTime: '8 мин',
    audience: 'Оператор L1',
    type: 'Чек-лист',
    status: 'demo',
    lastReviewed: '2026-06-14',
    relatedArticles: ['wan-cable-check', 'field-tech-request', 'network-admin-escalation'],
    body: `
      <h3>Цель</h3>
      <p>Собрать факты, исключить типовые причины и принять решение: закрыть, эскалировать или оформить выезд — без лишних повторных обращений.</p>
      <div class="callout callout-info">
        <strong>Внутренний документ:</strong> Этот чек-лист не отправляется клиенту целиком. Он предназначен только для оператора первой линии для проведения последовательной диагностики.
      </div>
      <h3>Когда использовать</h3>
      <ul>
        <li>Абонент жалуется на периодические обрывы интернета</li>
        <li>Интернет «пропадает и появляется сам»</li>
        <li>После кратковременного отключения связь восстанавливается без действий абонента</li>
      </ul>
      <h3>1. Проверка договора</h3>
      <p>Уточните номер договора или адрес. Сверьте, что обращение относится к нужному подключению (в демо-системе — условная карточка абонента).</p>
      <h3>2. Проверка аварий</h3>
      <p>Посмотрите, нет ли массовой аварии или плановых работ в районе абонента. Если авария есть — сообщите статус и ориентировочные сроки (по внутренней справке, не выдумывая цифры).</p>
      <h3>3. Проверка блокировки и статуса услуги</h3>
      <ul>
        <li>Услуга активна, нет финансовой блокировки</li>
        <li>Тариф и параметры подключения соответствуют ожиданиям абонента</li>
      </ul>
      <h3>4. Проверка разрывов сессии</h3>
      <p>Посмотрите историю отключений за последние 24–72 часа (в демо — условные данные). Зафиксируйте частоту и время обрывов.</p>
      <h3>5. Проверка port-flop (мигание порта)</h3>
      <p>Если в карточке доступны события порта — проверьте, не «мигает» ли линк (частые up/down). Это может указывать на кабель или порт.</p>
      <h3>6. Проверка соседей</h3>
      <p>Уточните, жалуются ли другие абоненты в том же доме или подъезде. Массовый характер — повод для эскалации на сетевую группу.</p>
      <h3>7. Вопросы абоненту: кабель и разъёмы</h3>
      <ul>
        <li>Кабель не пережат, коннекторы защёлкнуты</li>
        <li>Недавно не переставляли роутер и не меняли проводку</li>
        <li>Нет видимых повреждений кабеля или розетки</li>
      </ul>
      <h3>8. На всех устройствах или на одном?</h3>
      <p>Спросите, пропадает интернет на телефоне, ноутбуке и ТВ одновременно или только на одном устройстве.</p>
      <h3>9. Wi‑Fi или кабель?</h3>
      <p>Уточните, как подключено устройство, на котором замечена проблема. Это определяет ветку решения ниже.</p>
      <h3>10. Ветки решения</h3>
      <ul>
        <li><strong>Только по кабелю</strong> — проверить WAN-кабель и порт; при подтверждённой неисправности линии или оборудования → заявка на техника.</li>
        <li><strong>Только по Wi‑Fi</strong> — расстояние до роутера, помехи, настройки сети; предложить перезагрузку роутера; при необходимости — сброс Wi‑Fi или смена канала (по инструкции).</li>
        <li><strong>Только одно Wi‑Fi-устройство</strong> — вероятнее проблема на стороне устройства: переподключение к сети, перезагрузка устройства.</li>
        <li><strong>У соседей тоже</strong> → эскалация администраторам активного оборудования / сетевой группе.</li>
        <li><strong>Повреждён кабель или разъём</strong> → заявка на техника.</li>
      </ul>
      <h3>11. Что зафиксировать в тикете</h3>
      <ul>
        <li>Описание симптомов и частота обрывов</li>
        <li>Результаты проверок: аварии, блокировка, port-flop, соседи</li>
        <li>Ответы абонента: все устройства / одно; Wi‑Fi / кабель; состояние кабеля</li>
        <li>Действия, которые уже выполнены с абонентом</li>
        <li>Итоговое решение: закрыто / эскалация / выезд</li>
      </ul>
    `
  },
  {
    id: 'wan-cable-check',
    section: 'checklists',
    title: 'Проверка WAN-кабеля',
    excerpt: 'Как убедиться, что кабель провайдера подключён к WAN-порту роутера правильно.',
    tags: ['WAN', 'кабель', 'диагностика', 'L1'],
    author: 'Синтетический материал',
    updated: '2026-06-14',
    readTime: '4 мин',
    audience: 'Оператор L1',
    type: 'Чек-лист',
    status: 'demo',
    lastReviewed: '2026-06-14',
    relatedArticles: ['tplink-pppoe', 'internet-drops-checklist'],
    body: `
      <p>WAN-порт роутера принимает интернет от провайдера: из интернет-розетки, модема, терминала или напрямую от кабеля провайдера.</p>
      <h3>Визуальный осмотр</h3>
      <ul>
        <li>Кабель не пережат, без заломов и повреждений</li>
        <li>Коннектор RJ-45 защёлкнут до щелчка, не болтается</li>
        <li>На WAN-порту роутера обычно горит или мигает индикатор «Internet» / «WAN»</li>
      </ul>
      <h3>Правильность подключения</h3>
      <ul>
        <li>Кабель провайдера / кабель от модема → в порт <strong>WAN</strong> роутера (не в LAN)</li>
        <li>Если абонент перепутал порты, интернет через роутер не появится</li>
      </ul>
      <h3>Быстрая проверка с абонентом</h3>
      <ol>
        <li>Попросите переподключить оба конца кабеля.</li>
        <li>По возможности замените патч-корд на заведомо исправный.</li>
        <li>Если после замены линк не поднимается — эскалация или заявка на выезд.</li>
      </ol>
    `
  },
  {
    id: 'field-tech-request',
    section: 'escalations',
    title: 'Когда оформлять заявку на техника',
    excerpt: 'Критерии для создания выездной заявки оператором первой линии.',
    tags: ['эскалация', 'выезд', 'техник', 'L1'],
    author: 'Синтетический материал',
    updated: '2026-06-14',
    readTime: '5 мин',
    audience: 'Оператор L1',
    type: 'Правило эскалации',
    status: 'demo',
    lastReviewed: '2026-06-14',
    relatedArticles: ['internet-drops-checklist', 'wan-cable-check'],
    body: `
      <p>Заявка на выезд оформляется, когда проблему нельзя решить удалённо в рамках полномочий L1.</p>
      <h3>Оформлять заявку</h3>
      <ul>
        <li>Оборудование после перезагрузки не выходит на связь, индикаторы показывают ошибку (по инструкции для модели)</li>
        <li>Физическое повреждение кабеля, розетки или оборудования</li>
        <li>Абонент не может выполнить действия удалённо (нет доступа к оборудованию, оборудование установлено недоступно)</li>
        <li>Подозрение на неисправность модема, терминала или роутера после замены кабеля</li>
        <li>Новое подключение или перенос точки доступа</li>
      </ul>
      <h3>Не оформлять заявку (сначала диагностика)</h3>
      <ul>
        <li>Неверный пароль Wi‑Fi — помочь сменить в настройках</li>
        <li>Блокировка по оплате — направить в соответствующий канал</li>
        <li>Массовая авария — сообщить статус по внутренней справке</li>
      </ul>
      <h3>Что указать в заявке</h3>
      <ul>
        <li>Адрес, контактный телефон, удобное время</li>
        <li>Краткое описание: что проверено, какие индикаторы горят</li>
        <li>Модель модема, терминала или роутера, если известна</li>
      </ul>
    `
  },
  {
    id: 'network-admin-escalation',
    section: 'escalations',
    title: 'Когда передавать обращение администраторам активного оборудования',
    excerpt: 'Случаи, когда нужна помощь команды, обслуживающей сеть и узловое оборудование.',
    tags: ['эскалация', 'сеть', 'L2', 'активное оборудование'],
    author: 'Синтетический материал',
    updated: '2026-06-14',
    readTime: '6 мин',
    audience: 'Оператор L1',
    type: 'Правило эскалации',
    status: 'demo',
    lastReviewed: '2026-06-14',
    relatedArticles: ['internet-drops-checklist', 'field-tech-request'],
    body: `
      <p>Администраторы активного оборудования работают с коммутаторами, маршрутизаторами и портами на узлах доступа. L1 передаёт обращение, когда локальная диагностика исчерпана.</p>
      <h3>Передавать на L2 / сетевую группу</h3>
      <ul>
        <li>В карточке абонента услуга активна, но порт «завис» — нужна перезагрузка порта на коммутаторе</li>
        <li>Подозрение на неправильную привязку MAC или сессии PPPoE</li>
        <li>Проблема затрагивает нескольких абонентов одного дома или подъезда</li>
        <li>После смены тарифа не применились параметры скорости</li>
        <li>Нужна проверка логов на стороне сетевого оборудования (в демо — условная формулировка)</li>
      </ul>
      <h3>Не передавать (остаться на L1)</h3>
      <ul>
        <li>Настройка Wi‑Fi у абонента</li>
        <li>Объяснение тарифа или способа оплаты</li>
        <li>Один абонент, перезагрузка роутера помогла</li>
      </ul>
      <h3>Как оформить передачу</h3>
      <p>Заполните шаблон эскалации: идентификатор абонента, время обращения, что уже сделано, ожидаемый результат. Не прикладывайте скриншоты с реальными данными — в портфолио используются только синтетические примеры.</p>
    `
  },
  {
    id: 'wan-lan-pppoe-basics',
    section: 'training',
    title: 'WAN, LAN и PPPoE простыми словами',
    excerpt: 'Краткий словарь для нового оператора L1 — объясняем абоненту без жаргона.',
    tags: ['обучение', 'термины', 'новичок', 'PPPoE'],
    author: 'Синтетический материал',
    updated: '2026-06-14',
    readTime: '4 мин',
    audience: 'Оператор L1',
    type: 'Справочник',
    status: 'demo',
    lastReviewed: '2026-06-14',
    relatedArticles: ['tplink-pppoe', 'kb-structure'],
    body: `
      <p>Эти термины звучат часто. Ниже — формулировки, понятные абоненту.</p>
      <h3>WAN</h3>
      <p>«Внешний» порт роутера. Сюда приходит интернет — кабель от интернет-розетки, модема или линии провайдера. Один кабель, один порт, обычно подписан WAN или Internet.</p>
      <h3>LAN</h3>
      <p>«Домашние» порты и Wi‑Fi. Сюда подключаются компьютеры, телевизоры, телефоны. Абонент может перепутать LAN и WAN — это частая причина «нет интернета».</p>
      <h3>PPPoE</h3>
      <p>Способ подключения по логину и паролю. Абонент получает пару login/password при подключении. Роутер вводит их автоматически. Без правильных данных интернет не заработает, даже если кабель исправен.</p>
      <h3>Интернет-розетка, модем или терминал</h3>
      <p>Точка, через которую приходит линия провайдера. Это может быть интернет-розетка, модем, терминал или кабель, который подключается в WAN-порт роутера. При нормальной работе индикаторы показывают активное подключение (смотрите инструкцию к модели).</p>
      <h3>Типовой день новичка L1</h3>
      <ol>
        <li>Принять обращение, представиться, уточнить проблему</li>
        <li>Открыть карточку абонента (в учебной системе — демо-данные)</li>
        <li>Пройти чек-лист по теме обращения</li>
        <li>Зафиксировать результат в тикете</li>
        <li>При необходимости — эскалация или заявка на выезд</li>
      </ol>
    `
  },
  {
    id: 'kb-structure',
    section: 'kb-architecture',
    title: 'Структура базы знаний первой линии',
    excerpt: 'Как организовать материалы: аудитории, категории, типы статей, метаданные и жизненный цикл.',
    tags: ['архитектура', 'метаданные', 'методология', 'L1'],
    author: 'Синтетический материал',
    updated: '2026-06-14',
    readTime: '10 мин',
    audience: 'Технический писатель / Оператор L1',
    type: 'Методология',
    status: 'demo',
    lastReviewed: '2026-06-14',
    relatedArticles: ['before-after-rewrite', 'wan-lan-pppoe-basics'],
    body: `
      <h3>Цель базы знаний</h3>
      <p>Дать оператору L1 быстрый доступ к проверенным алгоритмам и клиентским формулировкам. Снизить время ответа, унифицировать качество поддержки, упростить обучение новичков.</p>
      <h3>Аудитории</h3>
      <ul>
        <li><strong>Клиент</strong> — короткие инструкции без внутреннего жаргона</li>
        <li><strong>Оператор L1</strong> — чек-листы, эскалации, макросы</li>
        <li><strong>Технический писатель</strong> — методология, шаблоны, правила именования</li>
      </ul>
      <h3>Дерево категорий (пример)</h3>
      <ul>
        <li>Клиентские инструкции → подключение, настройка роутера, Wi‑Fi</li>
        <li>Чек-листы L1 → диагностика, кабель, обрывы</li>
        <li>Макросы → приветствие, диагностика, эскалация</li>
        <li>Эскалации → выезд, сеть, L2</li>
        <li>Обучение → термины, онбординг</li>
        <li>Архитектура БЗ → структура, метаданные, качество</li>
      </ul>
      <h3>Типы статей</h3>
      <ul>
        <li>Клиентская инструкция — пошагово, для чата</li>
        <li>Чек-лист — алгоритм с ветвлениями</li>
        <li>Правило эскалации — критерии «когда передавать»</li>
        <li>Справочник — термины и определения</li>
        <li>Методология — как писать и поддерживать материалы</li>
      </ul>
      <h3>Правила именования</h3>
      <ul>
        <li>Заголовок отражает действие или вопрос: «Как…», «Когда…», «Проверка…»</li>
        <li>Без внутренних кодов в клиентских заголовках</li>
        <li>Единый стиль: существительное или глагол в начале</li>
      </ul>
      <h3>Теги и метаданные</h3>
      <p>Каждая статья содержит: <code>audience</code>, <code>type</code>, <code>status</code>, <code>lastReviewed</code>, <code>relatedArticles</code>, теги для поиска. Это помогает фильтровать материалы и показывать связанные статьи.</p>
      <h3>Внутреннее vs клиентское</h3>
      <ul>
        <li>Клиентское — без port-flop, VLAN, внутренних систем</li>
        <li>Внутреннее — допускает термины L1, ссылки на демо-данные карточки абонента</li>
        <li>Не смешивать в одной статье: лучше две связанные ссылки</li>
      </ul>
      <h3>Жизненный цикл статьи</h3>
      <ol>
        <li>Черновик → рецензия L2/наставника</li>
        <li>Публикация → status: active (в демо: demo)</li>
        <li>Регулярный пересмотр → обновление lastReviewed</li>
        <li>Архив → устаревшие материалы с пометкой и заменой</li>
      </ol>
      <h3>Чек-лист качества</h3>
      <ul>
        <li>Аудитория указана явно</li>
        <li>Есть путь «если не получилось» (для клиентских)</li>
        <li>Нет реальных данных, SLA и названий работодателя</li>
        <li>Шаги пронумерованы, без длинных абзацев</li>
        <li>Связанные статьи указаны</li>
      </ul>
    `
  },
  {
    id: 'before-after-rewrite',
    section: 'training',
    title: 'До/после: переработка клиентской инструкции',
    excerpt: 'Примеры улучшения материалов: от «стены текста» к короткой инструкции для чата.',
    tags: ['методология', 'редактура', 'клиент', 'обучение'],
    author: 'Синтетический материал',
    updated: '2026-06-14',
    readTime: '6 мин',
    audience: 'Технический писатель',
    type: 'Методология',
    status: 'demo',
    lastReviewed: '2026-06-14',
    relatedArticles: ['tplink-pppoe', 'kb-structure'],
    body: `
      <p>Ниже — типичные проблемы клиентских инструкций и как их исправить. Все примеры синтетические.</p>
      <table class="compare-table">
        <thead>
          <tr>
            <th>Было</th>
            <th>Стало</th>
            <th>Почему лучше</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Длинный абзац на 15 строк с описанием всех портов и теории сетей</td>
            <td>Короткая инструкция из 9 нумерованных шагов для чата</td>
            <td>Абонент читает по одному шагу; меньше шансов потеряться</td>
          </tr>
          <tr>
            <td>1.1 → 1.1.1 → 1.1.2 вложенная нумерация</td>
            <td>Простые шаги 1, 2, 3…</td>
            <td>Удобно отправлять и пересказывать по телефону</td>
          </tr>
          <tr>
            <td>«Проверьте LOS/PON на ONT и port-flop в биллинге»</td>
            <td>«Проверьте, что кабель подключён в WAN, индикаторы горят»</td>
            <td>Клиент не знает внутренних терминов; инструкция выполнима</td>
          </tr>
          <tr>
            <td>Инструкция заканчивается на «сохраните настройки»</td>
            <td>Добавлен блок «Если не получилось» с 3–4 действиями</td>
            <td>Абонент знает, что делать при неудаче; меньше повторных обращений</td>
          </tr>
          <tr>
            <td>В одной статье: настройка роутера + когда эскалировать на L2</td>
            <td>Две статьи: клиентская инструкция и внутренний чек-лист со ссылками</td>
            <td>Разные аудитории — разные материалы; проще поддерживать</td>
          </tr>
          <tr>
            <td>«Войдите как admin/admin»</td>
            <td>«Используйте данные с наклейки или пароль, который вы задавали ранее»</td>
            <td>Не поощряет небезопасные дефолтные пароли; точнее для реальной ситуации</td>
          </tr>
        </tbody>
      </table>
      <h3>Как применять</h3>
      <p>При ревью материала задайте три вопроса: кто читатель? может ли он выполнить шаг? что делать, если не вышло? Сравните с таблицей выше и разделите смешанный контент.</p>
    `
  }
];

/* --- Макросы и шаблоны (раздел «Макросы и шаблоны») --- */
const MACROS = [
  {
    id: 'macro-greeting',
    title: 'Приветствие',
    tags: ['начало', 'вежливость'],
    text: 'Здравствуйте! Меня зовут [Имя], служба технической поддержки. Подскажите, пожалуйста, номер договора или адрес подключения и опишите, что именно не работает.'
  },
  {
    id: 'macro-wan-check',
    title: 'Проверка WAN-кабеля',
    tags: ['диагностика', 'кабель'],
    text: 'Давайте проверим кабель: убедитесь, что он плотно вставлен в порт WAN (Internet) на роутере, а второй конец подключён к интернет-розетке, модему или кабелю провайдера. Коннектор должен защёлкнуться. Напишите, горит ли индикатор WAN на роутере.'
  },
  {
    id: 'macro-reboot-router',
    title: 'Перезагрузка роутера',
    tags: ['диагностика', 'роутер'],
    text: 'Перезагрузим роутер: отключите его от розетки на 30 секунд, затем включите снова. Подождите 2–3 минуты, пока загорятся индикаторы, и проверьте интернет. Напишите, когда будете готовы.'
  },
  {
    id: 'macro-reset-warning',
    title: 'Предупреждение перед Reset',
    tags: ['роутер', 'осторожно'],
    text: 'Сброс кнопкой Reset удалит все настройки роутера, включая Wi‑Fi. Делайте сброс только если другие шаги не помогли и у вас есть логин/пароль PPPoE. Подтвердите, что готовы — и я подскажу порядок действий.'
  },
  {
    id: 'macro-wait',
    title: 'Ожидание на линии',
    tags: ['пауза'],
    text: 'Сейчас проверю информацию по вашему подключению. Пожалуйста, подождите 2–3 минуты.'
  },
  {
    id: 'macro-field-tech',
    title: 'Передача на техника',
    tags: ['эскалация', 'выезд'],
    text: 'Для решения проблемы нужен выезд специалиста. Я оформлю заявку: уточните, пожалуйста, удобную дату и время, а также контактный телефон. Мы свяжемся с вами для согласования визита.'
  },
  {
    id: 'macro-network-escalation',
    title: 'Передача администраторам активного оборудования',
    tags: ['эскалация', 'L2', 'внутренний'],
    text: '[Внутренняя заметка для тикета] Диагностика L1 завершена. Требуется проверка на стороне сетевого оборудования: [описать симптом, port-flop, соседи]. Карточка абонента: [ID]. Действия с клиентом: [список].'
  },
  {
    id: 'macro-photo-request',
    title: 'Запрос фото подключения',
    tags: ['диагностика', 'фото'],
    text: 'Пришлите, пожалуйста, фото задней панели роутера и места, куда приходит кабель провайдера: должны быть видны WAN, LAN и питание. Это поможет проверить правильность подключения.'
  },
  {
    id: 'macro-closing',
    title: 'Завершение обращения',
    tags: ['конец', 'вежливость'],
    text: 'Рад был помочь! Если вопрос повторится — обращайтесь снова. Хорошего дня!'
  }
];

/* --- Дисклеймер (показывается на главной) --- */
const DISCLAIMER =
  'Все материалы являются синтетическими и обезличенными. Проект не содержит клиентских данных, внутренних регламентов, логов, скриншотов рабочих систем, SLA, коммерческой информации или конфиденциальных материалов работодателя.';

/* ============================================================
   Состояние приложения
   ============================================================ */

let currentSection = 'home';
let currentArticleId = null;
let searchQuery = '';

/* ============================================================
   Вспомогательные функции
   ============================================================ */

/** Экранирование HTML для безопасного вывода */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/** Убрать HTML-теги из текста (для поиска по body) */
function stripHtml(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return (div.textContent || div.innerText || '').toLowerCase();
}

/** Фильтрация статей по поисковому запросу */
function filterArticles(articles) {
  if (!searchQuery.trim()) return articles;
  const q = searchQuery.toLowerCase();
  return articles.filter(function (article) {
    const inTitle = article.title.toLowerCase().includes(q);
    const inExcerpt = article.excerpt.toLowerCase().includes(q);
    const inTags = article.tags.some(function (tag) {
      return tag.toLowerCase().includes(q);
    });
    const inBody = stripHtml(article.body).includes(q);
    const inType = (article.type || '').toLowerCase().includes(q);
    const inAudience = (article.audience || '').toLowerCase().includes(q);
    return inTitle || inExcerpt || inTags || inBody || inType || inAudience;
  });
}

/** Получить статьи для текущего раздела */
function getArticlesForSection(section) {
  if (section === 'home') return ARTICLES;
  if (section === 'macros' || section === 'about') return [];
  return ARTICLES.filter(function (a) {
    return a.section === section;
  });
}

/* ============================================================
   Рендеринг HTML
   ============================================================ */

/** HTML тегов статьи */
function renderTags(tags) {
  return (
    '<div class="tags">' +
    tags
      .map(function (tag) {
        return '<span class="tag">' + escapeHtml(tag) + '</span>';
      })
      .join('') +
    '</div>'
  );
}

/** HTML метаданных для карточки (краткий вид) */
function renderMeta(article) {
  return (
    '<div class="meta">' +
    '<span>' +
    escapeHtml(article.type) +
    '</span>' +
    '<span>· ' +
    escapeHtml(article.audience) +
    '</span>' +
    '<span>· Обновлено: ' +
    escapeHtml(article.updated) +
    '</span>' +
    '<span>· ' +
    escapeHtml(article.readTime) +
    '</span>' +
    '</div>'
  );
}

/** Расширенные метаданные для полного вида статьи */
function renderArticleMetaFull(article) {
  let relatedHtml = '';
  if (article.relatedArticles && article.relatedArticles.length > 0) {
    const links = article.relatedArticles
      .map(function (id) {
        const rel = ARTICLES.find(function (a) {
          return a.id === id;
        });
        if (!rel) return '';
        return (
          '<a href="#" class="related-link" data-related-id="' +
          escapeHtml(id) +
          '">' +
          escapeHtml(rel.title) +
          '</a>'
        );
      })
      .filter(Boolean);

    if (links.length > 0) {
      relatedHtml =
        '<div class="meta-row meta-related">' +
        '<span class="meta-label">Связанные материалы:</span> ' +
        links.join(', ') +
        '</div>';
    }
  }

  return (
    '<div class="article-meta-full">' +
    '<div class="meta-row">' +
    '<span class="meta-label">Аудитория:</span> ' +
    escapeHtml(article.audience) +
    '</div>' +
    '<div class="meta-row">' +
    '<span class="meta-label">Тип:</span> ' +
    escapeHtml(article.type) +
    '</div>' +
    '<div class="meta-row">' +
    '<span class="meta-label">Статус:</span> ' +
    escapeHtml(article.status) +
    '</div>' +
    '<div class="meta-row">' +
    '<span class="meta-label">Обновлено:</span> ' +
    escapeHtml(article.updated) +
    ' · <span class="meta-label">Проверено:</span> ' +
    escapeHtml(article.lastReviewed) +
    '</div>' +
    '<div class="meta-row">' +
    '<span class="meta-label">Автор:</span> ' +
    escapeHtml(article.author) +
    ' · <span class="meta-label">Время чтения:</span> ' +
    escapeHtml(article.readTime) +
    '</div>' +
    relatedHtml +
    '</div>'
  );
}

/** Карточка статьи в списке */
function renderArticleCard(article) {
  return (
    '<article class="article-card" data-article-id="' +
    escapeHtml(article.id) +
    '" tabindex="0" role="button">' +
    renderTags(article.tags) +
    '<h3>' +
    escapeHtml(article.title) +
    '</h3>' +
    '<p class="card-excerpt">' +
    escapeHtml(article.excerpt) +
    '</p>' +
    renderMeta(article) +
    '</article>'
  );
}

/** Полный вид статьи */
function renderArticleView(article) {
  return (
    '<div class="article-view">' +
    '<a href="#" class="back-link" data-action="back">← Назад к списку</a>' +
    renderTags(article.tags) +
    '<h2>' +
    escapeHtml(article.title) +
    '</h2>' +
    '<div class="article-meta">' +
    renderArticleMetaFull(article) +
    '</div>' +
    '<div class="article-body">' +
    article.body +
    '</div>' +
    '</div>'
  );
}

/** Список макросов с кнопками копирования */
function renderMacroItem(macro) {
  return (
    '<div class="macro-item">' +
    renderTags(macro.tags) +
    '<h3>' +
    escapeHtml(macro.title) +
    '</h3>' +
    '<div class="macro-code-wrapper">' +
    '<pre class="macro-text" id="macro-' +
    escapeHtml(macro.id) +
    '">' +
    escapeHtml(macro.text) +
    '</pre>' +
    '<button type="button" class="copy-btn" data-macro-id="' +
    escapeHtml(macro.id) +
    '" aria-label="Копировать макрос">Копировать</button>' +
    '</div>' +
    '</div>'
  );
}

function renderMacros() {
  const filtered = searchQuery.trim()
    ? MACROS.filter(function (macro) {
        const q = searchQuery.toLowerCase();
        return (
          macro.title.toLowerCase().includes(q) ||
          macro.text.toLowerCase().includes(q) ||
          macro.tags.some(function (t) {
            return t.toLowerCase().includes(q);
          })
        );
      })
    : MACROS;

  if (filtered.length === 0) {
    return '<p class="empty-state">Макросы и шаблоны не найдены. Измените запрос поиска.</p>';
  }

  const customerMacros = filtered.filter(function (macro) {
    return !macro.tags.includes('внутренний');
  });
  const internalTemplates = filtered.filter(function (macro) {
    return macro.tags.includes('внутренний');
  });

  let html = '';

  if (customerMacros.length > 0) {
    html += '<section class="macro-group"><h3>Клиентские макросы</h3><div class="macro-list">';
    html += customerMacros.map(renderMacroItem).join('');
    html += '</div></section>';
  }

  if (internalTemplates.length > 0) {
    html += '<section class="macro-group"><h3>Внутренние шаблоны для тикета</h3><div class="macro-list">';
    html += internalTemplates.map(renderMacroItem).join('');
    html += '</div></section>';
  }

  return html;
}

/** Страница «О проекте» */
function renderAbout() {
  return (
    '<div class="article-view">' +
    '<h2>О проекте</h2>' +
    '<div class="article-body">' +
    '<p>Демо-сайт базы знаний для портфолио технического писателя / специалиста по knowledge base. Показывает умение структурировать материалы L1-поддержки: клиентские инструкции, внутренние чек-листы, макросы и правила эскалации.</p>' +
    '<h3>Что демонстрирует проект</h3>' +
    '<ul class="about-list">' +
    '<li>Разделение контента по аудиториям (клиент / оператор / автор)</li>' +
    '<li>Метаданные статей: тип, статус, дата проверки, связанные материалы</li>' +
    '<li>Короткие клиентские инструкции вместо «стены текста»</li>' +
    '<li>Чек-листы с ветвлениями решений</li>' +
    '<li>Макросы и шаблоны с копированием в один клик</li>' +
    '<li>Методологические материалы: архитектура БЗ и примеры редактуры</li>' +
    '</ul>' +
    '<h3>Как редактировать</h3>' +
    '<p>Откройте файл <code>script.js</code>. Тексты статей — массив <code>ARTICLES</code>, макросы — <code>MACROS</code>. Сохраните и обновите страницу в браузере.</p>' +
    '<h3>Технологии</h3>' +
    '<p>HTML, CSS и JavaScript. Без сборщиков и сервера. Откройте <code>index.html</code> напрямую в браузере.</p>' +
    '</div>' +
    '</div>'
  );
}

/** Главная страница с группировкой по разделам */
function renderHome(articles) {
  let html = '<div class="disclaimer">' + escapeHtml(DISCLAIMER) + '</div>';

  if (articles.length === 0) {
    html += '<p class="empty-state">Ничего не найдено. Попробуйте другой запрос.</p>';
    return html;
  }

  if (searchQuery.trim()) {
    html += '<div class="cards-grid">';
    articles.forEach(function (article) {
      html += renderArticleCard(article);
    });
    html += '</div>';
    return html;
  }

  const sectionOrder = [
    'client-instructions',
    'checklists',
    'escalations',
    'training',
    'kb-architecture'
  ];

  sectionOrder.forEach(function (sectionKey) {
    const sectionArticles = articles.filter(function (a) {
      return a.section === sectionKey;
    });
    if (sectionArticles.length === 0) return;

    const sectionInfo = SECTIONS[sectionKey];
    html += '<section class="section-block">';
    html += '<h3>' + escapeHtml(sectionInfo.title) + '</h3>';
    html += '<div class="cards-grid">';
    sectionArticles.forEach(function (article) {
      html += renderArticleCard(article);
    });
    html += '</div></section>';
  });

  return html;
}

/** Основная функция отрисовки контента */
function render() {
  const main = document.getElementById('mainContent');
  let html = '';

  /* Просмотр одной статьи */
  if (currentArticleId) {
    const article = ARTICLES.find(function (a) {
      return a.id === currentArticleId;
    });
    if (article) {
      main.innerHTML = renderArticleView(article);
      attachArticleListeners();
      return;
    }
    currentArticleId = null;
  }

  const sectionInfo = SECTIONS[currentSection] || SECTIONS.home;

  html += '<header class="page-header">';
  html += '<h2>' + escapeHtml(sectionInfo.title) + '</h2>';
  html += '<p>' + escapeHtml(sectionInfo.description) + '</p>';
  html += '</header>';

  if (currentSection === 'about') {
    html += renderAbout();
  } else if (currentSection === 'macros') {
    html += renderMacros();
  } else if (currentSection === 'home') {
    html += renderHome(filterArticles(getArticlesForSection('home')));
  } else {
    const articles = filterArticles(getArticlesForSection(currentSection));
    if (articles.length === 0) {
      html += '<p class="empty-state">Статьи не найдены. Измените запрос поиска.</p>';
    } else {
      html += '<div class="cards-grid">';
      articles.forEach(function (article) {
        html += renderArticleCard(article);
      });
      html += '</div>';
    }
  }

  main.innerHTML = html;
  attachArticleListeners();
  if (currentSection === 'macros') {
    attachMacroListeners();
  }
}

/* ============================================================
   Обработчики событий
   ============================================================ */

function attachArticleListeners() {
  document.querySelectorAll('.article-card').forEach(function (card) {
    card.addEventListener('click', function () {
      openArticle(card.getAttribute('data-article-id'));
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openArticle(card.getAttribute('data-article-id'));
      }
    });
  });

  const backLink = document.querySelector('[data-action="back"]');
  if (backLink) {
    backLink.addEventListener('click', function (e) {
      e.preventDefault();
      currentArticleId = null;
      updateHash();
      render();
    });
  }

  document.querySelectorAll('.related-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      openArticle(link.getAttribute('data-related-id'));
    });
  });
}

function attachMacroListeners() {
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const macroId = btn.getAttribute('data-macro-id');
      const macro = MACROS.find(function (m) {
        return m.id === macroId;
      });
      if (!macro) return;

      copyToClipboard(macro.text, btn);
    });
  });
}

/** Копирование текста в буфер обмена */
function copyToClipboard(text, button) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function () {
      showCopied(button);
    });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showCopied(button);
    } catch (err) {
      alert('Не удалось скопировать. Выделите текст вручную.');
    }
    document.body.removeChild(textarea);
  }
}

function showCopied(button) {
  const original = button.textContent;
  button.textContent = 'Скопировано!';
  button.classList.add('copied');
  setTimeout(function () {
    button.textContent = original;
    button.classList.remove('copied');
  }, 2000);
}

function openArticle(id) {
  const article = ARTICLES.find(function (a) {
    return a.id === id;
  });
  if (!article) return;
  currentArticleId = id;
  currentSection = article.section;
  updateNavActive();
  updateHash();
  render();
  closeMobileMenu();
}

function navigateToSection(section) {
  currentSection = section;
  currentArticleId = null;
  updateNavActive();
  updateHash();
  render();
  closeMobileMenu();
}

function updateNavActive() {
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const linkSection = link.getAttribute('data-section');
    var isActive = false;
    if (currentArticleId) {
      const article = ARTICLES.find(function (a) {
        return a.id === currentArticleId;
      });
      isActive = article && linkSection === article.section;
    } else {
      isActive = linkSection === currentSection;
    }
    link.classList.toggle('active', isActive);
  });
}

function updateHash() {
  if (currentArticleId) {
    window.location.hash = 'article-' + currentArticleId;
  } else {
    window.location.hash = currentSection;
  }
}

function parseHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  if (hash.indexOf('article-') === 0) {
    const id = hash.replace('article-', '');
    const article = ARTICLES.find(function (a) {
      return a.id === id;
    });
    if (article) {
      currentArticleId = id;
      currentSection = article.section;
      return;
    }
  }

  if (SECTIONS[hash]) {
    currentSection = hash;
    currentArticleId = null;
  }
}

function closeMobileMenu() {
  document.getElementById('sidebar').classList.remove('open');
}

/* ============================================================
   Инициализация при загрузке страницы
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  parseHash();

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      navigateToSection(link.getAttribute('data-section'));
    });
  });

  document.getElementById('searchInput').addEventListener('input', function (e) {
    searchQuery = e.target.value;
    currentArticleId = null;
    render();
  });

  document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open');
  });

  window.addEventListener('hashchange', function () {
    parseHash();
    updateNavActive();
    render();
  });

  updateNavActive();
  render();
});
