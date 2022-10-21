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
    component: ComponentCreator('/', '8cd'),
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
        path: '/purescript/functions',
        component: ComponentCreator('/purescript/functions', '9b3'),
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
