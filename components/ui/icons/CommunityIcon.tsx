import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg";
const SvgCommunityIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#community_icon_svg__a)">
      <Path
         fill={props.fill || "currentColor"}
        d="M14 4c1.861 0 2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C21 8.208 21 9.14 21 11s0 2.792-.245 3.545a5 5 0 0 1-3.21 3.21C16.792 18 15.86 18 14 18h-4a.75.75 0 0 0-.522.212l-2.713 2.655A.45.45 0 0 1 6 20.545v-2.31c0-.398-.24-.75-.581-.955a5 5 0 0 1-2.174-2.735C3 13.792 3 12.86 3 11s0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C7.208 4 8.14 4 10 4z"
      />
      <Circle cx={8} cy={11} r={1} fill="#fff" />
      <Circle cx={12} cy={11} r={1} fill="#fff" />
      <Circle cx={16} cy={11} r={1} fill="#fff" />
    </G>
    <Defs>
      <ClipPath id="community_icon_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCommunityIcon;
