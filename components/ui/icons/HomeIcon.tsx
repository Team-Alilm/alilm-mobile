import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
const SvgHomeIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#home_icon_svg__a)">
      <Path
         fill={props.fill || "currentColor"}
        d="M10.636 4.273a2 2 0 0 1 2.728 0l6 5.598c.406.378.636.908.636 1.462V18a2 2 0 0 1-2 2h-3.5v-4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v4H6a2 2 0 0 1-2-2v-6.667c0-.554.23-1.084.636-1.463z"
      />
    </G>
    <Defs>
      <ClipPath id="home_icon_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgHomeIcon;
