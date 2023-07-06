---
description: demo
id: demo
---

# Demo

## 绘图Mermaid

脑图

```mermaid
graph LR;
    A(["https://example.com/"])
    B(["/base-url/"])
    C(["/docs/"])
    D(["/blog/"])
    E(["/"])
    F["All docs <br/>routes"]
    G["All blog <br/>routes"]
    H["All pages <br/>routes"]
    A---B;
    B---C;
    B---D;
    B---E;
    C---F;
    D---G;
    E---H;
```

流程图

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## 提示框

:::info

The API documentation of each official plugin lists the supported attributes:

- [Docs front matter]
- [Blog front matter]
- [Pages front matter]

:::

:::note

In practice, those are not really HTML elements, but React JSX elements, which we'll cover next!

:::

:::caution

Each locale is a **distinct standalone single-page application**: it is not possible to start the Docusaurus sites in all locales at the same time.

:::

:::tip

Docusaurus provides **default translations** for generic theme labels, such as "Next" and "Previous" for the pagination.

Please help us complete those **[default translations]**.

:::

:::warning TL;DR

We recommend avoiding them.

:::
