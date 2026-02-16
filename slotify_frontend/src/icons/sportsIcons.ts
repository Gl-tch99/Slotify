import {
  SportsSoccerOutlined,
  SportsBasketballOutlined,
  SportsTennisOutlined,
  SportsBaseballOutlined,
  SportsVolleyballOutlined,
} from '@mui/icons-material';

export const SPORTS_ICONS = {
  football: SportsSoccerOutlined,
  basketball: SportsBasketballOutlined,
  tennis: SportsTennisOutlined,
  baseball: SportsBaseballOutlined,
  volleyball: SportsVolleyballOutlined,
} as const;

// Utility function to get sport icon
export const getSportIcon = (sportName: string) => {
  const sportKey = sportName.toLowerCase() as keyof typeof SPORTS_ICONS;
  return SPORTS_ICONS[sportKey as keyof typeof SPORTS_ICONS] || SportsBasketballOutlined;
};
