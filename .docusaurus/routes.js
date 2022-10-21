import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '103'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'fc9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'b6e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e11'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'da4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '84a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '5c1'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a3f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f49'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
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
        component: ComponentCreator('/category/go', '381'),
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
        component: ComponentCreator('/category/purescript', '383'),
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
        path: '/golang/arrays-slices',
        component: ComponentCreator('/golang/arrays-slices', 'e6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/golang/concurrency',
        component: ComponentCreator('/golang/concurrency', '5b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/golang/conditionals',
        component: ComponentCreator('/golang/conditionals', '6ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/golang/custom-types',
        component: ComponentCreator('/golang/custom-types', '02a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/golang/getting-started',
        component: ComponentCreator('/golang/getting-started', 'b70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/golang/io',
        component: ComponentCreator('/golang/io', '3eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/golang/loops',
        component: ComponentCreator('/golang/loops', 'e5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/golang/variables',
        component: ComponentCreator('/golang/variables', '451'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/haskell/datatypes',
        component: ComponentCreator('/haskell/datatypes', 'bfa'),
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
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
