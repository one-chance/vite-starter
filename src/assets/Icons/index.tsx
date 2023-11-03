import { Svg } from '@components/shared';

export const search = (color: string) => (
  <Svg>
    <path
      clipRule="evenodd"
      d="M10.8838 15.2676C13.8572 15.2676 16.2676 12.8572 16.2676 9.88379C16.2676 6.91041 13.8572 4.5 10.8838 4.5C7.91041 4.5 5.5 6.91041 5.5 9.88379C5.5 12.8572 7.91041 15.2676 10.8838 15.2676ZM10.8838 16.7676C14.6856 16.7676 17.7676 13.6856 17.7676 9.88379C17.7676 6.08198 14.6856 3 10.8838 3C7.08198 3 4 6.08198 4 9.88379C4 13.6856 7.08198 16.7676 10.8838 16.7676Z"
      fill={color}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M14.5913 14.7835C14.8841 14.4906 15.359 14.4906 15.6519 14.7835L20.7775 19.9091C21.0704 20.202 21.0704 20.6769 20.7775 20.9698C20.4846 21.2626 20.0097 21.2626 19.7168 20.9698L14.5913 15.8442C14.2984 15.5513 14.2984 15.0764 14.5913 14.7835Z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
