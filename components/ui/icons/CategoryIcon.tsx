import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const SvgCategoryIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#category_icon_svg__a)">
      <Rect width={14} height={17} x={5} y={4} fill={props.fill || "currentColor"} rx={1} />
      <Path stroke="#fff" strokeLinecap="round" d="M9 9h6M9 12h4" />
    </G>
    <Defs>
      <ClipPath id="category_icon_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCategoryIcon;
