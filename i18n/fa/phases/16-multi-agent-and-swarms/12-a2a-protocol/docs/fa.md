# A2A  پروتکل عامل به عامل

> گوگل A2A را در آوریل 2025 اعلام کرد؛ تا آوریل 2026 مشخصات آن در https://a2a-protocol.org/latest/specification/و 150 سازمان از آن حمایت می کنند. A2A مکمل افقی MCP (درسی 13) است: جایی که MCP عمودی است (کارگری  ابزار) ، A2A همتایی است (کارگری  عامل). این کاردها را تعریف می کند کارت های عامل (دسکور) ، وظایف با آثار هنری (متن، داده های ساختار یافته، ویدیو) ، چرخه های زندگی وظایف نامشعبی و auth. سیستم های تولید به طور فزاینده ای MCP را با A2A ترکیب می کنند. گوگل کلاوود پشتیبانی از A2A را در سال 2025-2026 به Vertex AI Agent Builder معرفی کرد.

**Type:** Learn + Build
**Languages:** Python (stdlib, `http.server`, `json`)
**Prerequisites:** Phase 16 · 04 (Primitive Model)
**Time:** ~75 minutes

## مشکل

شما می توانید یک نقطه پایان HTTP را افشا کنید، یک طرح JSON سفارشی را تعریف کنید و امیدوار باشید که طرف دیگر آن را صحبت کند. هر جفت از عوامل تبدیل به یک ادغام سفارشی می شود.

A2A پروتکل تلگرام جهانی برای آن تماس است. کشف استاندارد، مدل کار استاندارد، حمل و نقل استاندارد، آثار هنری استاندارد. مانند HTTP+REST اما برای اجنتی ها به عنوان شهروندان درجه اول.

## مفهوم

### چهار عنصر

**Agent Card.**یک سند JSON در `/.well-known/agent.json`توصیف عامل: نام، مهارت ها، نقاط نهایی، روش های پشتیبانی شده، الزامات نویسنده. کشف با خواندن کارت اتفاق می افتد.

```
GET https://agent.example.com/.well-known/agent.json
→ {
    "name": "code-review-agent",
    "skills": ["review-python", "review-typescript"],
    "endpoints": {
      "tasks": "https://agent.example.com/tasks"
    },
    "auth": {"type": "bearer"},
    "modalities": ["text", "structured"]
  }
```

**Task.**واحد کار، یک شی غیرمسلح و حالت دار با چرخه زندگی:`submitted → working → completed / failed / canceled`. یک مشتری یک کار ارسال می کند، نظرسنجی می کند یا برای بروزرسانی ها اشتراک می گذارد.

**Artifact.**نوع نتیجه تولید شده توسط یک کار. متن، JSON ساختاری، تصویر، ویدیو، صوتی. آثار هنری به طوری که روش های مختلف درجه اول هستند.

**Opaque lifecycle.**A2A *چگونه* مامور راه دور کار را حل می کند را تجویز نمی کند. مشتری انتقال ها و آثار را می بیند؛ پیاده سازی آزاد است از هر چارچوبی استفاده کند.

### تقسیم MCP/A2A

- **MCP**(درس 13): ابزار عامل . عامل از طریق JSON-RPC به یک سرور ابزار می خواند / می نویسد. بدون حالت به طور پیش فرض.
- **A2A**: عامل  عامل. پروتکل همتایان؛ هر دو طرف عامل با استدلال های خود هستند.

سیستم های تولید چند عامل از هر دو استفاده می کنند. یک A2A همتایان به ابزار MCP در طرف خود می گویند. تقسیم این دو مسئله را تمیز نگه می دارد.

### جریان کشف

```
Client                     Agent server
  ├──GET /.well-known/agent.json──>
  <──Agent Card JSON─────────────
  ├──POST /tasks {skill, input}──>
  <──201 task_id, state=submitted
  ├──GET /tasks/{id}──────────────>
  <──state=working, 42% done──────
  ├──GET /tasks/{id}──────────────>
  <──state=completed, artifacts──
```

یا با پخش: اشتراک SSE برای `/tasks/{id}/events`براي بروز رساني هاي پرش

### نویسنده

A2A سه الگوی مشترک را پشتیبانی می کند:

- **Bearer token** OAuth2 یا غیر شفاف
- **mTLS** TLS متقابل؛ سازمان ها هویت خود را با یکدیگر اثبات می کنند.
- **Signed requests** HMAC بیش از بار مفید

در کارت ماموريت، تصريح شده است، و مشتریان متوجه و مطابق هستند.

### بیش از 150 سازمان تا آوریل 2026

پذیرش شرکت باعث افزایش مقیاس A2A شد. عنوان: A2A به راه سیستم های عامل شرکت تبدیل شد تا مرزهای اعتماد را عبور کنند. گوگل Cloud پشتیبانی از Vertex AI Agent Builder A2A را عرضه کرد؛ Microsoft Agent Framework آن را پشتیبانی می کند؛ اکثر چارچوب های اصلی (LangGraph، CrewAI، AutoGen) A2A را به کشتی می رساند.

### جایی که A2A برنده می شود

- **Cross-organization calls.**مامور شرکت "آ" به مامور شرکت "ب" زنگ مي زند بدون "آ" و "آ" هر جفت قرارداد سفارشي است
- **Heterogeneous frameworks.**مامور لانگ گراف به مامور کروآئي زنگ مي زند مامور پايتون سفارشي A2A به طور معمولي عمل مي کنه
- **Typed artifacts.**نتیجه ویدیویی، JSON ساختاری، صوتی همه کلاس اول
- **Long-running tasks.**چرخه حیات نامشفق + نظرسنجی باعث می شود کارهای ساعت ها آسان تر شود.

### جایی که A2A مبارزه می کند

- **Latency-sensitive micro-calls.**چرخه عمر A2A غیر هماهنگ است. فرقی از فرعی به فرعی در زیر میلی ثانیه نیست. از RPC مستقیم استفاده کنید.
- **Tight-coupled in-process agents.**اگر هر دو عامل در همان فرآیند پایتون اجرا شوند، سفر HTTP A2A به عقب بیش از حد است.
- **Small teams.**هزینه های عمومی مشخصه واقعی است؛ ممکن است عوامل داخلی فقط به رسمیت نیاز نداشته باشند.

### A2A در مقابل ACP، ANP، NLIP

چندین مشخصات مرتبط در سال های 2024-2026 ظاهر شد:

- **ACP**(IBM/Linux Foundation)  پیشگام A2A، دامنه کوچکتر.
- **ANP**(پروتوکول شبکه اجنتی)  کشف همتایان سنگین، غیرمتمرکز اول.
- **NLIP**(پروتوکول تعامل زبان طبیعی ECMA، استاندارد شده دسامبر 2025)  نوع محتوای زبان طبیعی.

A2A از آوریل 2026 به عنوان پروتکل همسال مورد استفاده قرار می گیرد. برای مقایسه، arXiv:2505.02279 (Liu و همکارانش، "یک بررسی پروتکل های تعامل با عوامل") را ببینید.

```figure
sw-agent-card-discovery
```

## آن را بسازید

`code/main.py`یک سرور و مشتری A2A حداقل را اجرا می کند که `http.server`و JSON. سرور:

- افشا می کند`/.well-known/agent.json`،
- قبول مي کنه`POST /tasks`،
- وضعیت وظیفه را مدیریت می کند،
- آثار هنری را در تاریخ بازمی گرداند`GET /tasks/{id}`. .

مشتری:

- کارت مامور رو ميگيره
- یک وظیفه را ارائه می دهد،
- انتخابات تا پایان،
- .آرتفاکت رو میخواد

راه رفتن:

```
python3 code/main.py
```

اسکریپت سرور را در یک موضوع پس زمینه شروع می کند، سپس مشتری را در مقابل آن اجرا می کند. شما جریان کامل را می بینید: کشف، ارسال، نظرسنجی، آثار.

## ازش استفاده کن

`outputs/skill-a2a-integrator.md`طراحی یک ادغام A2A: محتوای کارت عامل، طرح های کار، انتخاب نویسنده، پخش در مقابل نظرسنجی.

## -باده

فهرست چک:

- **Pin the spec version.**A2A هنوز در حال توسعه است. کارت عامل باید نسخه پروتکل را اعلام کند.
- **Idempotent task creation.**ارسال های تکراری (تجربه های شبکه) باید یک کار را ایجاد کنند.
- **Artifact schemas.**اعلام کنید که عامل چه شکل هایی را باز می گرداند؛ مصرف کنندگان باید آنها را تأیید کنند.
- **Rate limits + auth.**A2A به صورت عمومی است؛ امنیت استاندارد وب را اعمال کنید.
- **Dead-letter for failed tasks.**با گذشت زمان الگوهای شکست های مکرر را بررسی کنید.

## تمرینات

1. فرار کن`code/main.py`. تایید کن که مشتری سرور رو کشف کرده و دستاورده درست رو دریافت کرده
2. یک مهارت دوم را به سرور اضافه کنید (به عنوان مثال "جمع بندی"). کارت عامل را به روز کنید. یک مشتری را بنویسید که بر اساس نوع کار مهارت را انتخاب می کند.
3. اجرای یک نقطه آخر جریان SSE: `/tasks/{id}/events`که تغییرات حالت را منتشر می کند. مشتری باید چه کاری را متفاوت انجام دهد؟
4. مشخصات A2A را بخوانید (https://a2a-protocol.org/latest/specification/) سه چیز را مشخص کنید که این دستورات مشخصی اجرا نمی کنند.
5. مقایسه A2A (Agent Card Discovery) با MCP (مجموعه قابلیت های طرف سرور از طریق `listTools`) تفاوت بین عوامل خود توصیف و آزمون توانایی چیست؟

## اصطلاحات کلیدی

| Term | What people say | What it actually means |
|------|----------------|------------------------|
| A2A | "Agent-to-agent" | Peer protocol for agents to call other agents across systems. Google 2025. |
| Agent Card | "The agent's business card" | JSON at `/.well-known/agent.json` describing skills, endpoints, auth. |
| Task | "The unit of work" | Async stateful object with a lifecycle; artifacts produced on completion. |
| Artifact | "The result" | Typed output: text, structured JSON, image, video, audio. First-class media. |
| Opaque lifecycle | "How it's solved is the agent's business" | Client sees state transitions; server is free to choose framework/tools. |
| Discovery | "Finding the agent" | `GET /.well-known/agent.json` returns the card. |
| MCP vs A2A | "Tools vs peers" | MCP: vertical agent ↔ tool. A2A: horizontal agent ↔ agent. |
| ACP / ANP / NLIP | "Sibling protocols" | Adjacent specs; A2A is the most-adopted 2026. |

## خواندن بیشتر

- [A2A specification](https://a2a-protocol.org/latest/specification/) مشخصات کاینونیکی
- [Google Developers Blog — A2A announcement](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/) اپریل 2025
- [A2A GitHub repo](https://github.com/a2aproject/A2A) پیاده سازی های مرجع و SDK ها
- [Liu et al. — A Survey of Agent Interoperability Protocols](https://arxiv.org/html/2505.02279v1) مقایسه MCP، ACP، A2A، ANP
