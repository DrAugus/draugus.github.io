import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as l,c,a as n,d as e,b as s,e as t}from"./app.d1ff24bc.js";const i={},u={id:"create-pull-request",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#create-pull-request","aria-hidden":"true"},"#",-1),d=s(),k={href:"https://github.com/marketplace/actions/create-pull-request",target:"_blank",rel:"noopener noreferrer"},v=s("Create Pull Request"),m=n("blockquote",null,[n("p",null,"GitHub Action")],-1),b=s("try it by "),h={href:"https://github.com/peter-evans/create-pull-request/blob/main/docs/examples.md#keep-a-branch-up-to-date-with-another",target:"_blank",rel:"noopener noreferrer"},_=s("documents"),y=t(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Create production promotion pull request
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">productionPromotion</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ref</span><span class="token punctuation">:</span> production
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Reset promotion branch
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          git fetch origin main:main
          git reset --hard main</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create Pull Request
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peter<span class="token punctuation">-</span>evans/create<span class="token punctuation">-</span>pull<span class="token punctuation">-</span>request@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> production<span class="token punctuation">-</span>promotion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5E76\u6CA1\u6709\u751F\u6548\uFF0C\u5C31\u66F4\u6362\u4E86\u5176\u4ED6\u7684 ci\u3002</p>`,2),g={id:"github-pull-request-action",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#github-pull-request-action","aria-hidden":"true"},"#",-1),q=s(),x={href:"https://github.com/marketplace/actions/github-pull-request-action",target:"_blank",rel:"noopener noreferrer"},w=s("GitHub Pull Request Action"),P={href:"https://fluxcd.io/docs/use-cases/gh-actions-auto-pr/",target:"_blank",rel:"noopener noreferrer"},R=s("docs"),A=t(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># ./.github/workflows/staging-auto-pr.yaml</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Staging Auto<span class="token punctuation">-</span>PR
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;staging&quot;</span><span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">pull-request</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Open PR to main
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">name</span><span class="token punctuation">:</span> checkout

      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> repo<span class="token punctuation">-</span>sync/pull<span class="token punctuation">-</span>request@v2
        <span class="token key atrule">name</span><span class="token punctuation">:</span> pull<span class="token punctuation">-</span>request
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">destination_branch</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span>
          <span class="token key atrule">pr_title</span><span class="token punctuation">:</span> <span class="token string">&quot;Pulling \${{ github.ref }} into main&quot;</span>
          <span class="token key atrule">pr_body</span><span class="token punctuation">:</span> <span class="token string">&quot;\u{1F451} *An automated PR*&quot;</span>
          <span class="token key atrule">pr_reviewer</span><span class="token punctuation">:</span> <span class="token string">&quot;kingdonb&quot;</span>
          <span class="token key atrule">pr_draft</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),N=s("\u4E5F\u5373\u672C\u7F51\u7AD9\u7684"),B={href:"https://github.com/DrAugus/draugus.github.io/blob/master/.github/workflows/autopr.yml",target:"_blank",rel:"noopener noreferrer"},C=s("\u6700\u7EC8\u65B9\u6848");function E(V,G){const a=p("ExternalLinkIcon");return l(),c("div",null,[n("h2",u,[r,d,n("a",k,[v,e(a)])]),m,n("p",null,[b,n("a",h,[_,e(a)])]),y,n("h2",g,[f,q,n("a",x,[w,e(a)])]),n("p",null,[n("a",P,[R,e(a)])]),A,n("p",null,[N,n("a",B,[C,e(a)])])])}var T=o(i,[["render",E],["__file","ci.html.vue"]]);export{T as default};
