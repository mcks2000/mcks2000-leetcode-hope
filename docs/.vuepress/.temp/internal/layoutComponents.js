import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/minp/GitHub/mcks2000-leetcode-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.91/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("/Users/minp/GitHub/mcks2000-leetcode-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.91/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("/Users/minp/GitHub/mcks2000-leetcode-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.91/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("/Users/minp/GitHub/mcks2000-leetcode-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.91/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
