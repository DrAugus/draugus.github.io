import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as e,e as s}from"./app.d1ff24bc.js";const d={},t=s(`<p><code>RapidJSON</code>\u662F\u4E00\u4E2AC++\u7684JSON\u89E3\u6790\u5668\u53CA\u751F\u6210\u5668\u3002</p><p>\u89E3\u6790\u4E00\u4E2AJSON\u5B57\u7B26\u4E32\u81F3\u4E00\u4E2Adocument (DOM)\uFF0C\u5BF9DOM\u4F5C\u51FA\u7B80\u5355\u4FEE\u6539\uFF0C\u6700\u7EC8\u628ADOM\u8F6C\u6362\uFF08stringify\uFF09\u81F3JSON\u5B57\u7B26\u4E32\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &quot;rapidjson/document.h&quot;
#include &quot;rapidjson/writer.h&quot;
#include &quot;rapidjson/stringbuffer.h&quot;
#include &lt;iostream&gt;
using namespace rapidjson;
int main() {
    // 1. \u628AJSON\u89E3\u6790\u81F3DOM\u3002
    const char* json = &quot;{\\&quot;project\\&quot;:\\&quot;rapidjson\\&quot;,\\&quot;stars\\&quot;:10}&quot;;
    Document d;
    d.Parse(json);
    // 2. \u5229\u7528DOM\u4F5C\u51FA\u4FEE\u6539\u3002
    Value&amp; s = d[&quot;stars&quot;];
    s.SetInt(s.GetInt() + 1);
    // 3. \u628ADOM\u8F6C\u6362\uFF08stringify\uFF09\u6210JSON\u3002
    StringBuffer buffer;
    Writer&lt;StringBuffer&gt; writer(buffer);
    d.Accept(writer);
    // Output {&quot;project&quot;:&quot;rapidjson&quot;,&quot;stars&quot;:11}
    std::cout &lt;&lt; buffer.GetString() &lt;&lt; std::endl;
    return 0;
}
//\u5BF9json\u91CC\u7684\u6570\u636E\u904D\u5386\uFF1A
for (rapidjson::SizeType i = 0; i &lt; doc.Size(); ++i)
{}
const rapidjson::Value &amp;gameObject = doc[i];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[t];function l(u,a){return i(),e("div",null,r)}var v=n(d,[["render",l],["__file","2021-08-02-rapidJson.html.vue"]]);export{v as default};
