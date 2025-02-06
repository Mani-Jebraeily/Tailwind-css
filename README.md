># **Repo Introdoction**

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.

![](data:image/png;base64,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)

`CSS Framework - Ranking`
|FrameWork| Ranking|
|------   | ------|
|TailwindCss   | --1--|
|Bootstrap   | --2--|
|Bulma  | --3--|

[**Source**](https://ossinsight.io/collections/css-framework/)


># **Demo**


<!-- [**Click here to see demo**](https://mani-jebraeily.github.io/Tailwind-css/) -->


**`Desktop design`**

![demo](./src/assets/Screenshot%202025-02-05%20at%2014.16.20.png)


**`Mobile design`**

![demo](./src/assets/Screenshot%202025-02-05%20at%2014.17.31.png)