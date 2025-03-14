import Svg, {Path} from 'react-native-svg';

export default function ExchangeSvg({size, color}: {size: number; color: string}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.75738 13.4142L16.2427 4.92896H10.5858"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2426 10.5858L7.75734 19.071L13.4142 19.071"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
