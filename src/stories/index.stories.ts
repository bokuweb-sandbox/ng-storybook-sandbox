import { storiesOf } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome, Button } from "@storybook/angular/demo";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Storybook Knobs", module);

// TODO:not work
// stories.addDecorator(withKnobs);

stories.add("with text", () => ({
  component: Button,
  props: {
    text: "Hello Button"
  }
}));

stories.add(
  "with some emoji",
  withNotes({ text: "My notes on a button with emojis" })(() => ({
    component: Button,
    props: {
      text: text("text", "😀 😎 👍 💯"),
      onClick: action("This was clicked OMG")
    }
  }))
);
