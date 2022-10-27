<img src="https://cdn.worldvectorlogo.com/logos/mjml-by-mailjet.svg" height="64"/> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="64" height="64"/>

**MJML** is a markup language created by [Mailjet](https://www.mailjet.com/) for building responsive HTML emails based on XML.

This library enables **MJML** integration with **React** so you can build a responsive HTML email on the fly.

Note that this is a stripped down version of the original https://github.com/wix-incubator/mjml-react which this does not include `html-minifier` and `mjml2json` to make it work on both Node.js and a web browser.

## Getting started

1. Install the dependencies.
```sh
yarn add react react-dom
```

2. Install the packages by adding the below to the `dependencies` field in your _package.json_
```
"mjml": "https://github.com/taskworld/mjml.git",
"react-mjml": "https://github.com/taskworld/react-mjml.git",
```

3. Create and run the below JavaScript-React file.

```jsx
import { renderToStaticMarkup } from 'react-dom/server';
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
} from "react-mjml";
import mjml2html from 'mjml';

const mjmlString = renderToStaticMarkup(
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Last Minute Offer</MjmlTitle>
      <MjmlPreview>Last Minute Offer...</MjmlPreview>
    </MjmlHead>
    <MjmlBody width={500}>
      <MjmlSection fullWidth backgroundColor="#efefef">
        <MjmlColumn>
          <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlButton
            padding="20px"
            backgroundColor="#346DB7"
            href="https://www.wix.com/"
          >
            I like it!
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

const { html, errors } = mjml2html(mjmlString, { validationLevel: "soft" });
```

And as the result you will get a nice looking email HTML (works in mobile too!)

![preview](https://user-images.githubusercontent.com/10008149/41058394-59b8ce9e-69d2-11e8-9eb9-c294f35bae9f.png)

## Extensions

```js
import {
  MjmlHtml,
  MjmlComment,
  MjmlConditionalComment
} from 'react-mjml/extensions';

<MjmlComment>Built with ... at ...</MjmlComment>
// <!--Built with ... at ...-->

<MjmlConditionalComment>MSO conditionals</MjmlConditionalComment>
// <!--[if gte mso 9]>MSO conditionals<![endif]-->

<MjmlConditionalComment condition="if IE">MSO conditionals</MjmlConditionalComment>
// <!--[if IE]>MSO conditionals<![endif]-->

<MjmlHtml tag="div" html="<span>Hello World!</span>" />
// <div><span>Hello World!</span></div>
```

## Utils

We do have also some utils for post processing the output HTML.
Because not all mail clients do support named HTML entities, like `&apos;`.
So we need to replace them to hex.

```js
import { namedEntityToHexCode, fixConditionalComment } from "mjml-react/utils";

const html = "<div>&apos;</div>";
namedEntityToHexCode(html);
// <div>&#39;</div>

fixConditionalComment(
  "<!--[if mso]><div>Hello World</div><![endif]-->",
  "Hello",
  "if IE"
);
// <!--[if IE]><div>Hello World</div><![endif]-->
```
