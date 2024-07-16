import Svg, { Path, type SvgProps } from 'react-native-svg';

/**
 * Icons made by Carbon Design
 * https://www.iconfinder.com/carbon-design
 */
export default function ScooterSVG(props: SvgProps) {
  return (
    <Svg id="icon" width={32} height={32} viewBox="0 0 32 32" {...props}>
      <Path
        fill="currentColor"
        d="M26 28a4 4 0 114-4 4.005 4.005 0 01-4 4zm0-6a2 2 0 102 2 2.002 2.002 0 00-2-2zM24 8h-6v2h6a1 1 0 010 2h-3a1 1 0 00-.98 1.196l.924 4.621L18.434 22h-2.69l-2.572-8.575A1.988 1.988 0 0011.256 12H6v2h5.256l.6 2H7a5.006 5.006 0 00-5 5v2a1 1 0 001 1h1a4 4 0 008 0h7a1 1 0 00.857-.485l3-5a1 1 0 00.123-.711L22.22 14H24a3 3 0 000-6zM8 26a2.002 2.002 0 01-2-2h4a2.002 2.002 0 01-2 2zm-4-4v-1a3.003 3.003 0 013-3h5.456l1.2 4z"
      />
    </Svg>
  );
}
