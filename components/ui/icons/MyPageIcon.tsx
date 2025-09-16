import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
const SvgMyPageIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#myPage_icon_svg__a)">
      <Path
         fill={props.fill || "currentColor"}
        d="M12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 10.5c4.973 0 9 4.014 9 6.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1c0-2.486 4.028-6.5 9-6.5"
      />
    </G>
    <Defs>
      <ClipPath id="myPage_icon_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMyPageIcon;
