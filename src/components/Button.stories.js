import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

export const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const methods = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

storiesOf("Button", module)
  .add("default", () => {
    return {
      components: { Button },
      template: `<button :text="teskt" />`,
      data: () => ({ text }),
      methods
    };
  })