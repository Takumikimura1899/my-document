import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import mermaid from 'astro-mermaid'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        {
          label: '必読ガイド',
          items: [
            { label: '概要', slug: 'essentials' },
            { label: '開発環境セットアップ', slug: 'essentials/environment' },
            { label: 'コーディング標準', slug: 'essentials/coding-standards' },
            { label: 'SOLID 原則', slug: 'essentials/solid' },
            { label: 'リリースチェックリスト', slug: 'essentials/release-checklist' }
          ]
        },
        {
          label: 'はじめに',
          items: [
            { label: '概要', slug: 'intro' },
            { label: '価値観', slug: 'intro/values' },
            { label: '開発プロセス', slug: 'intro/workflow' },
            { label: 'コミュニケーション', slug: 'intro/communication' }
          ]
        },
        {
          label: 'Frontend',
          items: [
            { label: '概要', slug: 'frontend' },
            {
              label: 'React ガイド',
              items: [
                { label: '概要', slug: 'frontend/react' },
                { label: 'Hooks', slug: 'frontend/react/hooks' }
              ]
            },
            { label: 'UI コンポーネント', slug: 'frontend/components' },
            { label: 'スタイリング', slug: 'frontend/styling' }
          ]
        },
        {
          label: 'Backend',
          items: [
            { label: '概要', slug: 'backend' },
            { label: 'アーキテクチャ', slug: 'backend/architecture' },
            { label: 'API ガイドライン', slug: 'backend/api-guidelines' },
            { label: 'デプロイ戦略', slug: 'backend/deployment' },
            {
              label: '技術選定基準',
              items: [
                { label: '概要', slug: 'backend/technology-selection' },
                {
                  label: 'TypeScript フレームワーク',
                  slug: 'backend/technology-selection/typescript-frameworks'
                },
                { label: 'Go フレームワーク', slug: 'backend/technology-selection/go-frameworks' }
              ]
            }
          ]
        },
        {
          label: 'Test',
          items: [
            { label: '概要', slug: 'test' },
            { label: 'ユニットテスト', slug: 'test/unit-testing' },
            { label: 'E2E テスト', slug: 'test/e2e-testing' }
          ]
        },
        {
          label: 'Other',
          items: [
            { label: '概要', slug: 'other' },
            { label: 'セキュリティ', slug: 'other/security' },
            { label: 'アクセシビリティ', slug: 'other/accessibility' },
            { label: '運用・サポート', slug: 'other/operations' }
          ]
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' }
        }
      ]
    }),
    mermaid({
      theme: 'forest',
      autoTheme: true
    })
  ],

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: 'cloudflare'
  })
})
