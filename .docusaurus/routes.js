import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '75d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '018'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6b9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '4d3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c2e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '194'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '01f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '28b'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dfc'),
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
        path: '/golang/basics',
        component: ComponentCreator('/golang/basics', 'd15'),
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
