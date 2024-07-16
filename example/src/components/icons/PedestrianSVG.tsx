import Svg, { Path, type SvgProps } from 'react-native-svg';

/**
 * Icons made by Carbon Design
 * https://www.iconfinder.com/carbon-design
 */
export default function PedestrianSVG(props: SvgProps) {
  return (
    <Svg id="icon" width={32} height={32} viewBox="0 0 32 32" {...props}>
      <Path
        fill="currentColor"
        d="M21.677 14l-1.245-3.114A2.986 2.986 0 0017.646 9h-4.092a3.002 3.002 0 00-1.544.428L7 12.434V18h2v-4.434l3-1.8v11.931l-3.462 5.194L10.202 30 14 24.303V11h3.646a.995.995 0 01.928.629L20.323 16H26v-2z"
      />
      <Path
        fill="currentColor"
        d="M17.051 18.316L19 24.162 19 30 21 30 21 23.838 18.949 17.684 17.051 18.316z"
      />
      <Path
        fill="currentColor"
        d="M16.5 8A3.5 3.5 0 1120 4.5 3.504 3.504 0 0116.5 8zm0-5A1.5 1.5 0 1018 4.5 1.502 1.502 0 0016.5 3z"
      />
    </Svg>
  );
}
