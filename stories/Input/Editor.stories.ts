import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";

import '../../src/Editor';

const meta: Meta = {
  component: 'zn-editor',
  title: 'Input/Editor',
  tags: ['input', 'editor'],
};

export default meta;
type Story = StoryObj;

const cannedResponses = [
  {
    title: 'Canned Response 1',
    content: 'This is the canned response 1',
    command: 'command1',
    labels: ['label1', 'label2'],
  }
];

export const Default: Story = {
  render: () => html`
    <form>
      <zn-editor
        attachment-url="#"
        interaction-type="chat"
        canned-responses=${cannedResponses}>
        Editor
      </zn-editor>
      <input type="text" name="attachments" id="attachments" style="display: none">
    </form>`,
  args: {},
};
