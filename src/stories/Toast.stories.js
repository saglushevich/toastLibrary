import ToastsBoard from "components/ToastsBoard";
import { POSITIONS, TYPES } from "constants";

export default {
  title: "Board",
  component: ToastsBoard,
  argTypes: {
    animation: {
      options: ["slide", "fade"],
      control: { type: "radio" },
    },
    position: {
      options: [...POSITIONS],
      control: { type: "radio" },
    },
    type: {
      options: [...TYPES],
      control: { type: "radio" },
    },
    color: {
      control: { type: "color" },
    },
    bgcolor: {
      control: { type: "color" },
    },
  },
};

function Template(args) {
  return <ToastsBoard {...args} />;
}
export const Board = Template.bind({});

Board.args = {
  id: 0,
  title: "title",
  position: "top-left",
  animation: "slide",
  type: "info",
  color: "#FFF",
  bgcolor: "#000",
  delay: 0,
  padding: 35,
};
