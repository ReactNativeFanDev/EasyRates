import Svg, {G, Path} from 'react-native-svg';

export default function OpenSvg({size, color}: {size: number; color: string}) {
  return (
    <Svg
      style={{transform: [{rotate: '90deg'}]}}
      width={size}
      height={size}
      viewBox="0 -0.5 28 28">
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <G fill={color} transform="translate(-156.000000, -623.000000)">
          <Path d="M183,647.998 L157,647.998 C156.448,647.998 156,648.446 156,648.999 C156,649.552 156.448,650 157,650 L183,650 C183.552,650 184,649.552 184,648.999 C184,648.446 183.552,647.998 183,647.998 L183,647.998 Z M158.014,645.995 L182.018,645.995 C184.375,645.995 184.296,644.608 183.628,643.574 L171.44,624.555 C170.882,623.771 169.22,623.703 168.56,624.555 L156.372,643.574 C155.768,644.703 155.687,645.995 158.014,645.995 L158.014,645.995 Z" />
        </G>
      </G>
    </Svg>
  );
}
