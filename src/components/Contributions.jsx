import { GitHubCalendar } from "react-github-calendar";

// empty cell -> classic link blue
const ramp = ["#ececec", "#c4c4f4", "#8a8aee", "#4545e8", "#0000ee"];

export default function Contributions() {
  return (
    <div className="calendar">
      <GitHubCalendar
        username="rashcasm"
        blockSize={11}
        blockMargin={2}
        blockRadius={0}
        fontSize={12}
        colorScheme="light"
        theme={{ light: ramp, dark: ramp }}
        showColorLegend={false}
      />
    </div>
  );
}
