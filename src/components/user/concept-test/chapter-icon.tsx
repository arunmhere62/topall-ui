import React from 'react';

interface ChapterIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ChapterIcon: React.FC<ChapterIconProps> = ({
  width = 24,
  height = 24,
  color = "#000080",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6601 10.4405L20.6801 14.6205C19.8401 18.2305 18.1801 19.6905 15.0601 19.3905C14.5601 19.3505 14.0201 19.2605 13.4401 19.1205L11.7601 18.7205C7.59006 17.7305 6.30006 15.6705 7.28006 11.4905L8.26006 7.3005C8.46006 6.4505 8.70006 5.7105 9.00006 5.1005C10.1701 2.6805 12.1601 2.0305 15.5001 2.8205L17.1701 3.2105C21.3601 4.1905 22.6401 6.2605 21.6601 10.4405Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.06 19.3896C14.44 19.8096 13.66 20.1596 12.71 20.4696L11.13 20.9896C7.15998 22.2696 5.06997 21.1996 3.77997 17.2296L2.49997 13.2796C1.21997 9.30961 2.27997 7.20961 6.24997 5.92961L7.82997 5.40961C8.23997 5.27961 8.62997 5.16961 8.99997 5.09961C8.69997 5.70961 8.45997 6.44961 8.25997 7.29961L7.27997 11.4896C6.29997 15.6696 7.58998 17.7296 11.76 18.7196L13.44 19.1196C14.02 19.2596 14.56 19.3496 15.06 19.3896Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.64 8.5293L17.49 9.7593"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.66 12.4004L14.56 13.1404"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChapterIcon;
