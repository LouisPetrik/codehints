import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a3f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '232'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/c',
        component: ComponentCreator('/category/c', '764'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/c',
        component: ComponentCreator('/category/c', 'd50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/go',
        component: ComponentCreator('/category/go', '28c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/go',
        component: ComponentCreator('/category/go', '381'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/haskell',
        component: ComponentCreator('/category/haskell', '236'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/haskell',
        component: ComponentCreator('/category/haskell', '614'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/purescript',
        component: ComponentCreator('/category/purescript', 'ffc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/purescript',
        component: ComponentCreator('/category/purescript', '383'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/webassembly',
        component: ComponentCreator('/category/webassembly', 'bc1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cpp/arrays',
        component: ComponentCreator('/cpp/arrays', '431'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cpp/classes',
        component: ComponentCreator('/cpp/classes', 'e94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cpp/functions',
        component: ComponentCreator('/cpp/functions', '87a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cpp/heap-stack-memory',
        component: ComponentCreator('/cpp/heap-stack-memory', '683'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cpp/pointers',
        component: ComponentCreator('/cpp/pointers', 'b2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cpp/references',
        component: ComponentCreator('/cpp/references', 'f92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cpp/structures',
        component: ComponentCreator('/cpp/structures', 'a11'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cpp/variables-data-types',
        component: ComponentCreator('/cpp/variables-data-types', '604'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/cpp/vectors',
        component: ComponentCreator('/cpp/vectors', '8b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/go/arrays-slices',
        component: ComponentCreator('/go/arrays-slices', '7f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/go/concurrency',
        component: ComponentCreator('/go/concurrency', 'aa6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/go/conditionals',
        component: ComponentCreator('/go/conditionals', '9d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/go/custom-types',
        component: ComponentCreator('/go/custom-types', '304'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/go/functions',
        component: ComponentCreator('/go/functions', '6ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/go/getting-started',
        component: ComponentCreator('/go/getting-started', 'b8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/go/io',
        component: ComponentCreator('/go/io', 'def'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/go/loops',
        component: ComponentCreator('/go/loops', 'e24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/go/variables',
        component: ComponentCreator('/go/variables', '40e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/haskell/bindings',
        component: ComponentCreator('/haskell/bindings', '37b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/haskell/data-types',
        component: ComponentCreator('/haskell/data-types', '9a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/haskell/functions',
        component: ComponentCreator('/haskell/functions', 'd00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/haskell/ghci',
        component: ComponentCreator('/haskell/ghci', 'ba9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/haskell/greeting',
        component: ComponentCreator('/haskell/greeting', 'fce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/haskell/IO',
        component: ComponentCreator('/haskell/IO', '604'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/haskell/lists',
        component: ComponentCreator('/haskell/lists', 'c1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/haskell/typeclasses',
        component: ComponentCreator('/haskell/typeclasses', '5d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/arrays',
        component: ComponentCreator('/purescript/arrays', '3b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/bindings',
        component: ComponentCreator('/purescript/bindings', '7ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/conditionals',
        component: ComponentCreator('/purescript/conditionals', '7df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/custom-types',
        component: ComponentCreator('/purescript/custom-types', '3ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/folds',
        component: ComponentCreator('/purescript/folds', '615'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/functions',
        component: ComponentCreator('/purescript/functions', '9b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/getting-started',
        component: ComponentCreator('/purescript/getting-started', '91d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/IO',
        component: ComponentCreator('/purescript/IO', '692'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/js-interaction',
        component: ComponentCreator('/purescript/js-interaction', '64f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/lists',
        component: ComponentCreator('/purescript/lists', '099'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/map-reduce-filter',
        component: ComponentCreator('/purescript/map-reduce-filter', 'a90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/modules',
        component: ComponentCreator('/purescript/modules', '9c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/patttern-matching',
        component: ComponentCreator('/purescript/patttern-matching', '1d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/records',
        component: ComponentCreator('/purescript/records', '880'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/standard-lib',
        component: ComponentCreator('/purescript/standard-lib', '9fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/typeclasses',
        component: ComponentCreator('/purescript/typeclasses', '99a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/purescript/types',
        component: ComponentCreator('/purescript/types', 'e4d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/webassembly/wat',
        component: ComponentCreator('/webassembly/wat', '9b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
