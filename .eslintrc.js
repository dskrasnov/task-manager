module.exports = {
  extends: 'airbnb',
  rules: {
    // Заставляет создавать ненужные статические методы или отдельные функции.
    'class-methods-use-this': 'off',

    // Часто нужно подключать, например, файлы в JSX.
    'global-require': 'off',

    // Заставляет писать логику слишком явно, что не всегда удобно и нужно.
    'no-mixed-operators': 'off',

    // Не защищает толком от возможных ошибок непреднамеренного мутирования, но при этом мешает оптимизации кода и производительности на сложных проектах (FD-1861)
    'no-param-reassign': 'off',

    // Играло бы роль, если бы мы отказались от ; в конце строк. Но пока не отказываемся.
    'no-plusplus': 'off',

    // В Airbnb включён 'always', но оно мешает, например, в таком случае: ref={r => (this.root = r)}.
    // Потому оставляем, но 'except-parens'.
    'no-return-assign': ['error', 'except-parens'],

    // Разрешаем использовать функции и классы до их определения, потому что это может быть удобно.
    // Переменные использовать до их определения запрещено по умолчанию.
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
    }],

    // Далеко не всегда нужно разделять на разные строчки, но если уж разделили, то нужно делать это красиво.
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],

    // Не всегда есть смысл в деструктуризации.
    // Например, когда нам нужно получить что-то из цепочки типа: event.target.width.
    // Потому лучше контролировать это своей головой.
    'prefer-destructuring': 'off',

    // Неудобно. Мешает делать реэкспорт элементов блоков через *.
    // Что сильно упрощает использование внешних библиотек.
    'import/named': 'off',

    // Можно подключать только дев-зависимости и основные зависимости
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
    }],

    // Обычно, если лоадеры используются так в проектах, то по назначению.
    'import/no-webpack-loader-syntax': 'off',

    // Не всегда правда. Например, у нас могут быть файлы с константами, или экшен-криэйтерами, с одной сущностью.
    'import/prefer-default-export': 'off',

    // Удобно далеко не всегда, потому не понятно, зачем это требовать.
    'react/destructuring-assignment': 'off',

    // Иногда компонент может не знать о точной структуре объекта или массива.
    // Например, когда он должен передать его дальше по цепочке. В таком случае это правило только мешает.
    'react/forbid-prop-types': 'off',

    // Не всегда удобно и нужно.
    'react/jsx-closing-tag-location': 'off',

    // Чтобы eslint корректно распознавал Fragment как глобальную переменную
    'react/jsx-no-undef': [2, { allowGlobals: true }],

    // Некорректно работает с &nbsp; и подобными конструкциями.
    'react/jsx-one-expression-per-line': 'off',

    // Мешает БЭМ-именованию.
    'react/jsx-pascal-case': 'off',

    // Отключаем пробелы даже до />, потому что так удобнее.
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'never',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],

    // Использование индекса в ключе на усмотрение разработчика
    'react/no-array-index-key': 'off',

    // Спасает от зацикливания интерфейса, но мешает менять состояние тогда, когда это нужно.
    // Не заметить ошибку, от которой он защищает, крайне сложно, а отключать его локально надоедает.
    // Подробнее в https://jira.funbox.ru/browse/FD-2353.
    'react/no-did-update-set-state': 'off',

    // Мешает при разработке.
    // Если это важно, легче использовать babel-плагин, который будет по возможности преобразовывать классы в функции.
    'react/prefer-stateless-function': 'off',

    // defaultProps используются далеко не на всех проектах. Если нужно, можно включить это в своём проекте отдельно.
    'react/require-default-props': 'off',

    // Используем тот же порядок, что и в Airbnb, но без проверок на префиксы on, get и set.
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],

    // Это правило deprecated и скорее всего в будущем перестанет работать. Отключим сразу.
    'jsx-a11y/label-has-for': 'off',

    // Правила по доступности включаем по необходимости в проектах
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-access-key': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',

    // Запрещает использовать методы объекта console.
    'no-console': 'error',

    // Запрещает использовать круглые скобки в аргументе стрелочной функции, если без них можно обойтись.
    'arrow-parens': ['error', 'as-needed'],

    // Запрещает использовать в коде более одной пустой строки подряд.
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    // Запрещает использовать устаревшие (deprecated) методы React.
    'react/no-deprecated': 'error',

    // Требует отбивку пустой строкой между определенными выражениями.
    'padding-line-between-statements': [
      'error',

      // Перед "return", "break" и "default".
      { blankLine: 'always', prev: '*', next: ['return', 'break', 'default'] },

      // Перед и после "const", "let", "var" и "if", кроме идущих подряд выражений одного типа.
      { blankLine: 'always', prev: ['const', 'let', 'var', 'if'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'if'] },
      { blankLine: 'any', prev: ['const', 'let', 'var', 'if'], next: ['const', 'let', 'var', 'if'] },

      // Перед и после многострочных "const" и "let", многострочных блокоподобных ({ }, if (a) { }, while (a) { }
      // и т.п.) и прочих многострочных выражений.
      { blankLine: 'always', prev: ['multiline-const', 'multiline-let', 'multiline-block-like', 'multiline-expression'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['multiline-const', 'multiline-let', 'multiline-block-like', 'multiline-expression'] },
    ],

    // Требует чтобы либо все свойства объектного литерала располагались на одной строке, либо каждое свойство должно
    // располагаться на новой.
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],

    // Ограничивает длину строки кода 120 символами. Игнорирует строки, шаблоны и комментарии.
    'max-len': [
      'error',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],

    // Требует сортировки пропсов в JSX-компонентах. Игнорируется регистр символов. Сокращенные пропсы должны
    // идти вначале. Колбеки должны идти в конце. Пропсы "key" и "ref" должны идти перед всеми остальными.
    'react/jsx-sort-props': [
      'error', {
        ignoreCase: true,
        shorthandFirst: true,
        callbacksLast: true,
        noSortAlphabetically: true,
        reservedFirst: ['key', 'ref'],
      }],

    // Требует сортировки элементов в propTypes React-компонентов. Игнорируется регистр символов. Колбеки должны идти в
    // конце. Обязательные пропсы должны идти вначале. Пропсы, определенные в PropTypes.shape должны сортироваться по
    // тем же правилам.
    'react/sort-prop-types': ['error', {
      ignoreCase: true,
      callbacksLast: true,
      sortShapeProp: true,
      requiredFirst: true,
      noSortAlphabetically: true,
    }],

    // Запрещает использовать обычные или стрелочные функции, или .bind() в пропсах JSX-компонентов.
    'react/jsx-no-bind': ['error', {
      ignoreDOMComponents: false,
      ignoreRefs: false,
      allowArrowFunctions: false,
      allowFunctions: false,
      allowBind: false,
    }],
  },
};
